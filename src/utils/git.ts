import { execSync } from 'child_process';

export interface GitRemote {
  name: string;
  fetchUrl: string;
  pushUrl: string;
}

/**
 * Execute a git command and return the output
 * @throws Error if the command fails
 */
function execGit(args: string[], options?: { cwd?: string }): string {
  const command = ['git', ...args].join(' ');
  try {
    return execSync(command, {
      cwd: options?.cwd ?? process.cwd(),
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
  } catch (error: unknown) {
    const err = error as { stderr?: string; message?: string };
    throw new Error(err.stderr || err.message || 'Git command failed');
  }
}

/**
 * Check if the current directory is a Git repository
 */
export function isGitRepository(): boolean {
  try {
    execGit(['rev-parse', '--is-inside-work-tree']);
    return true;
  } catch {
    return false;
  }
}

/**
 * Initialize a new Git repository
 */
export function initGitRepository(): void {
  execGit(['init']);
}

/**
 * Get all remote repositories
 */
export function getRemotes(): GitRemote[] {
  try {
    const output = execGit(['remote', '-v']);
    if (!output) return [];

    const lines = output.split('\n');
    const remoteMap = new Map<string, GitRemote>();

    for (const line of lines) {
      const match = line.match(/^(\S+)\s+(\S+)\s+\((fetch|push)\)$/);
      if (match) {
        const [, name, url, type] = match;
        if (!remoteMap.has(name)) {
          remoteMap.set(name, { name, fetchUrl: '', pushUrl: '' });
        }
        const remote = remoteMap.get(name)!;
        if (type === 'fetch') {
          remote.fetchUrl = url;
        } else {
          remote.pushUrl = url;
        }
      }
    }

    return Array.from(remoteMap.values());
  } catch {
    return [];
  }
}

/**
 * Add a remote repository
 */
export function addRemote(name: string, url: string): void {
  execGit(['remote', 'add', name, url]);
}

/**
 * Check if a remote exists
 */
export function remoteExists(name: string): boolean {
  const remotes = getRemotes();
  return remotes.some(r => r.name === name);
}

/**
 * Get the current branch name
 */
export function getCurrentBranch(): string | null {
  try {
    return execGit(['rev-parse', '--abbrev-ref', 'HEAD']);
  } catch {
    return null;
  }
}

/**
 * Get the default branch name (main or master)
 */
export function getDefaultBranch(): string {
  try {
    // Try to get the default branch from git config
    const defaultBranch = execGit(['config', '--get', 'init.defaultBranch']);
    if (defaultBranch) return defaultBranch;
  } catch {
    // Ignore error
  }

  // Check if main branch exists
  try {
    execGit(['rev-parse', '--verify', 'main']);
    return 'main';
  } catch {
    // Ignore error
  }

  // Check if master branch exists
  try {
    execGit(['rev-parse', '--verify', 'master']);
    return 'master';
  } catch {
    // Ignore error
  }

  // Default to main
  return 'main';
}

/**
 * Stage files for commit
 */
export function stageFiles(files: string[]): void {
  execGit(['add', ...files]);
}

/**
 * Commit staged changes
 */
export function commit(message: string): void {
  execGit(['commit', '-m', message]);
}

/**
 * Push to remote repository
 */
export function push(remote: string, branch: string, options?: { setUpstream?: boolean }): void {
  const args = ['push'];
  if (options?.setUpstream) {
    args.push('-u');
  }
  args.push(remote, branch);
  execGit(args);
}

/**
 * Check if a file has uncommitted changes (staged or unstaged)
 */
export function hasChanges(file: string): boolean {
  try {
    // Check for both staged and unstaged changes
    const status = execGit(['status', '--porcelain', file]);
    return status.length > 0;
  } catch {
    return false;
  }
}

/**
 * Check if a file is untracked
 */
export function isUntracked(file: string): boolean {
  try {
    const status = execGit(['status', '--porcelain', file]);
    return status.startsWith('??');
  } catch {
    return false;
  }
}
