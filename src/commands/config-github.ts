import { Command } from 'clipanion';
import { confirm, select, input } from '@inquirer/prompts';
import * as fs from 'fs/promises';
import * as path from 'path';
import { writeFile } from '../utils/writeFile';
import * as git from '../utils/git';
import * as github from '../utils/github';

export class ConfigGithubCommand extends Command {
  static paths = [['config', 'github']];

  static usage = Command.Usage({
    description: 'Configure GitHub Pages deployment for your CZON site',
    details: `
      This command guides you through setting up GitHub Pages deployment:
      
      1. Initialize Git repository (if needed)
      2. Configure GitHub remote repository
      3. Enable GitHub Pages with workflow deployment
      4. Create/update the deployment workflow file
      5. Commit and push changes
      
      Prerequisites:
        - GitHub CLI (gh) must be installed and authenticated
        - Install: https://cli.github.com/
        - Login: gh auth login
      
      Examples:
        $ czon config github
    `,
  });

  async execute() {
    const stdout = this.context.stdout;
    const stderr = this.context.stderr;

    // ========== Step 0: Prerequisites check ==========
    stdout.write('Checking prerequisites...\n');

    // Check gh CLI installation
    if (!github.isGhInstalled()) {
      stderr.write(
        '\nGitHub CLI (gh) is not installed.\n' +
          'Please install it from: https://cli.github.com/\n'
      );
      return 1;
    }

    // Check gh authentication
    if (!github.isGhAuthenticated()) {
      stderr.write('\nGitHub CLI is not authenticated.\n' + 'Please run: gh auth login\n');
      return 1;
    }

    // Check required token scopes
    const requiredScopes = ['repo'];
    const { hasScopes, missingScopes, currentScopes } = github.checkTokenScopes(requiredScopes);

    if (!hasScopes) {
      stderr.write(
        '\nGitHub CLI token is missing required permissions.\n' +
          `  Current scopes: ${currentScopes.length > 0 ? currentScopes.join(', ') : '(none detected)'}\n` +
          `  Missing scopes: ${missingScopes.join(', ')}\n\n` +
          'Please re-authenticate with the required scopes:\n' +
          '  gh auth login --scopes repo\n\n' +
          'Or refresh your existing token:\n' +
          '  gh auth refresh --scopes repo\n'
      );
      return 1;
    }

    stdout.write('GitHub CLI detected and authenticated.\n\n');

    // ========== Step 1: Git repository check ==========
    if (!git.isGitRepository()) {
      const shouldInit = await confirm({
        message: 'Current directory is not a Git repository. Initialize one?',
        default: true,
      });

      if (!shouldInit) {
        stdout.write('Aborted.\n');
        return 0;
      }

      git.initGitRepository();
      stdout.write('Git repository initialized.\n\n');
    }

    // ========== Step 2: Remote repository configuration ==========
    const remotes = git.getRemotes();
    const githubRemotes = remotes.filter(r => github.isGitHubUrl(r.fetchUrl));

    let selectedRemote: { name: string; owner: string; repo: string };

    if (githubRemotes.length === 0) {
      // No GitHub remote found
      stdout.write('No GitHub remote repository found.\n');

      const action = await select({
        message: 'What would you like to do?',
        choices: [
          { name: 'Create a new GitHub repository', value: 'create' as const },
          {
            name: 'Add an existing GitHub repository URL',
            value: 'add' as const,
          },
        ],
      });

      if (action === 'create') {
        // Create new repository
        const repoName = await input({
          message: 'Repository name:',
          default: path.basename(process.cwd()),
        });

        const isPrivate = await confirm({
          message: 'Make repository private?',
          default: false,
        });

        stdout.write('Creating GitHub repository...\n');

        const { owner, repo, url } = github.createRepository({
          name: repoName,
          private: isPrivate,
        });

        // Determine remote name
        let remoteName = 'origin';
        if (git.remoteExists('origin')) {
          remoteName = await input({
            message: 'Remote "origin" already exists. Enter a name for the GitHub remote:',
            default: 'github',
          });
        }

        git.addRemote(remoteName, url);
        selectedRemote = { name: remoteName, owner, repo };
        stdout.write(`Repository created: https://github.com/${owner}/${repo}\n`);
        stdout.write(`Added as remote "${remoteName}".\n\n`);
      } else {
        // Add existing repository
        const repoUrl = await input({
          message: 'GitHub repository URL:',
          validate: value => {
            if (!github.isGitHubUrl(value)) {
              return 'Please enter a valid GitHub repository URL';
            }
            return true;
          },
        });

        const parsed = github.parseGitHubUrl(repoUrl)!;

        // Determine remote name
        let remoteName = 'origin';
        if (git.remoteExists('origin')) {
          remoteName = await input({
            message: 'Remote "origin" already exists. Enter a name for the GitHub remote:',
            default: 'github',
          });
        }

        git.addRemote(remoteName, repoUrl);
        selectedRemote = {
          name: remoteName,
          owner: parsed.owner,
          repo: parsed.repo,
        };
        stdout.write(`Remote "${remoteName}" added.\n\n`);
      }
    } else if (githubRemotes.length === 1) {
      // Single GitHub remote
      const remote = githubRemotes[0];
      const parsed = github.parseGitHubUrl(remote.fetchUrl)!;
      selectedRemote = {
        name: remote.name,
        owner: parsed.owner,
        repo: parsed.repo,
      };
      stdout.write(`Using GitHub remote "${remote.name}" (${parsed.owner}/${parsed.repo}).\n\n`);
    } else {
      // Multiple GitHub remotes - ask user to choose
      const choices = githubRemotes.map(r => {
        const parsed = github.parseGitHubUrl(r.fetchUrl)!;
        return {
          name: `${r.name} (${parsed.owner}/${parsed.repo})`,
          value: r.name,
        };
      });

      const selectedName = await select({
        message: 'Multiple GitHub remotes found. Which one to configure?',
        choices,
      });

      const remote = githubRemotes.find(r => r.name === selectedName)!;
      const parsed = github.parseGitHubUrl(remote.fetchUrl)!;
      selectedRemote = {
        name: remote.name,
        owner: parsed.owner,
        repo: parsed.repo,
      };
      stdout.write('\n');
    }

    stdout.write(
      `Configuring GitHub Pages for ${selectedRemote.owner}/${selectedRemote.repo}...\n`
    );

    // ========== Step 3: GitHub Pages configuration ==========
    let pagesInfo: github.PagesInfo;

    try {
      pagesInfo = github.getPagesInfo(selectedRemote.owner, selectedRemote.repo);
    } catch (error) {
      stderr.write(
        `\nFailed to get GitHub Pages info: ${error}\n` +
          'You may need to enable Pages manually in repository settings.\n'
      );
      pagesInfo = { enabled: false };
    }

    if (!pagesInfo.enabled || pagesInfo.buildType !== 'workflow') {
      stdout.write('Enabling GitHub Pages with workflow deployment...\n');
      try {
        github.enablePages(selectedRemote.owner, selectedRemote.repo);
        stdout.write('GitHub Pages enabled.\n');
      } catch (error) {
        stderr.write(
          `\nFailed to enable GitHub Pages: ${error}\n` +
            'You may need to enable Pages manually:\n' +
            `  https://github.com/${selectedRemote.owner}/${selectedRemote.repo}/settings/pages\n` +
            '  Set "Build and deployment" source to "GitHub Actions"\n\n'
        );
      }
    } else {
      stdout.write('GitHub Pages is already configured for workflow deployment.\n');
    }

    // CNAME configuration
    const configureCname = await confirm({
      message: 'Do you want to configure a custom domain (CNAME)?',
      default: false,
    });

    if (configureCname) {
      const cname = await input({
        message: 'Enter your custom domain (e.g., docs.example.com):',
        validate: value => {
          if (!value || !/^[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$/.test(value)) {
            return 'Please enter a valid domain name';
          }
          return true;
        },
      });

      try {
        github.setPagesCname(selectedRemote.owner, selectedRemote.repo, cname);
        stdout.write(`Custom domain set to: ${cname}\n`);
      } catch (error) {
        stderr.write(
          `\nFailed to set custom domain: ${error}\n` +
            'You can set it manually in repository settings.\n'
        );
      }
    }

    stdout.write('\n');

    // ========== Step 4: Workflow file management ==========
    const workflowRelativePath = '.github/workflows/pages.yml';
    const workflowPath = path.join(process.cwd(), workflowRelativePath);
    const templatePath = path.join(__dirname, '..', '..', 'templates', 'pages.yml');

    let templateContent: string;
    try {
      templateContent = await fs.readFile(templatePath, 'utf-8');
    } catch {
      stderr.write(`Template file not found: ${templatePath}\n`);
      return 1;
    }

    let workflowNeedsWrite = false;
    let workflowExists = false;

    try {
      const existingContent = await fs.readFile(workflowPath, 'utf-8');
      workflowExists = true;

      if (existingContent !== templateContent) {
        const shouldUpdate = await confirm({
          message: 'Workflow file exists but differs from template. Update it?',
          default: true,
        });

        if (shouldUpdate) {
          workflowNeedsWrite = true;
        } else {
          stdout.write('Keeping existing workflow file.\n');
        }
      } else {
        stdout.write('Workflow file is up to date.\n');
      }
    } catch {
      // File doesn't exist
      workflowNeedsWrite = true;
    }

    if (workflowNeedsWrite) {
      await writeFile(workflowPath, templateContent);
      stdout.write(workflowExists ? 'Workflow file updated.\n' : 'Workflow file created.\n');
    }

    // ========== Step 5: Commit and push ==========
    const hasWorkflowChanges =
      git.hasChanges(workflowRelativePath) || git.isUntracked(workflowRelativePath);

    if (hasWorkflowChanges) {
      const shouldCommit = await confirm({
        message: 'Commit and push the workflow file?',
        default: true,
      });

      if (shouldCommit) {
        try {
          git.stageFiles([workflowRelativePath]);
          git.commit('chore: add GitHub Pages deployment workflow');

          const branch = git.getCurrentBranch() || git.getDefaultBranch();
          stdout.write(`Pushing to ${selectedRemote.name}/${branch}...\n`);

          git.push(selectedRemote.name, branch, { setUpstream: true });
          stdout.write('Changes committed and pushed.\n');
        } catch (error) {
          stderr.write(`\nFailed to commit/push: ${error}\n`);
          stderr.write(
            'You can manually commit and push the workflow file:\n' +
              `  git add ${workflowRelativePath}\n` +
              '  git commit -m "chore: add GitHub Pages deployment workflow"\n' +
              `  git push -u ${selectedRemote.name} <branch>\n`
          );
        }
      }
    } else {
      stdout.write('No changes to commit.\n');
    }

    // ========== Step 6: Show result ==========
    let pagesUrl: string | null = null;
    try {
      pagesUrl = github.getPagesUrl(selectedRemote.owner, selectedRemote.repo);
    } catch {
      // Ignore error
    }

    stdout.write('\n');
    stdout.write('========================================\n');
    stdout.write('GitHub Pages configuration complete!\n');
    stdout.write('========================================\n');

    if (pagesUrl) {
      stdout.write(`\nYour site will be available at:\n  ${pagesUrl}\n`);
    } else {
      stdout.write(
        '\nYour site URL will be available after the first deployment.\n' +
          `Check: https://github.com/${selectedRemote.owner}/${selectedRemote.repo}/settings/pages\n`
      );
    }

    stdout.write(
      '\nThe workflow will automatically deploy on:\n' +
        '  - Push to main branch\n' +
        '  - Every hour (scheduled)\n' +
        '  - Manual trigger from Actions tab\n'
    );

    return 0;
  }
}
