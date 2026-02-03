import { spawnSync, execSync } from 'child_process';

export interface PagesInfo {
  enabled: boolean;
  url?: string;
  buildType?: 'workflow' | 'legacy';
  cname?: string | null;
}

export interface RepoInfo {
  owner: string;
  repo: string;
  url: string;
  isPrivate: boolean;
}

/**
 * Execute a gh CLI command and return the output
 * Uses spawnSync to avoid shell parsing issues with special characters
 * @throws Error if the command fails
 */
function execGh(args: string[]): string {
  const result = spawnSync('gh', args, {
    cwd: process.cwd(),
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(result.stderr || `gh command failed with exit code ${result.status}`);
  }

  return (result.stdout || '').trim();
}

/**
 * Check if GitHub CLI (gh) is installed
 */
export function isGhInstalled(): boolean {
  try {
    execSync('gh --version', {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if GitHub CLI is authenticated
 */
export function isGhAuthenticated(): boolean {
  try {
    execGh(['auth', 'status']);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get the token scopes for the current GitHub CLI authentication
 * @returns Array of scope strings, or empty array if unable to determine
 */
export function getTokenScopes(): string[] {
  try {
    const result = spawnSync('gh', ['auth', 'status'], {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    // gh auth status outputs to stderr
    const output = result.stderr || result.stdout || '';

    // Parse token scopes from output
    // Format: "- Token scopes: 'scope1', 'scope2', 'scope3'"
    const scopesMatch = output.match(/Token scopes:\s*(.+)/);
    if (scopesMatch) {
      const scopesStr = scopesMatch[1];
      // Extract scopes from quoted strings like 'repo', 'workflow'
      const scopes = scopesStr.match(/'([^']+)'/g);
      if (scopes) {
        return scopes.map(s => s.replace(/'/g, ''));
      }
    }

    return [];
  } catch {
    return [];
  }
}

/**
 * Check if the current authentication has the required scopes
 * @param requiredScopes Array of required scope names
 * @returns Object with hasScopes boolean and missingScopes array
 */
export function checkTokenScopes(requiredScopes: string[]): {
  hasScopes: boolean;
  missingScopes: string[];
  currentScopes: string[];
} {
  const currentScopes = getTokenScopes();

  const missingScopes = requiredScopes.filter(required => !currentScopes.includes(required));

  return {
    hasScopes: missingScopes.length === 0,
    missingScopes,
    currentScopes,
  };
}

/**
 * Parse a GitHub URL and extract owner and repo
 * Supports formats:
 * - https://github.com/owner/repo.git
 * - https://github.com/owner/repo
 * - git@github.com:owner/repo.git
 * - git@github.com:owner/repo
 */
export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  // HTTPS format
  const httpsMatch = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/.]+)(?:\.git)?$/);
  if (httpsMatch) {
    return { owner: httpsMatch[1], repo: httpsMatch[2] };
  }

  // SSH format
  const sshMatch = url.match(/^git@github\.com:([^/]+)\/([^/.]+)(?:\.git)?$/);
  if (sshMatch) {
    return { owner: sshMatch[1], repo: sshMatch[2] };
  }

  return null;
}

/**
 * Check if a URL is a GitHub repository URL
 */
export function isGitHubUrl(url: string): boolean {
  return parseGitHubUrl(url) !== null;
}

/**
 * Create a new GitHub repository
 */
export function createRepository(options: {
  name: string;
  description?: string;
  private?: boolean;
}): RepoInfo {
  const args = ['repo', 'create', options.name, '--confirm'];

  if (options.private) {
    args.push('--private');
  } else {
    args.push('--public');
  }

  if (options.description) {
    args.push('--description', options.description);
  }

  const output = execGh(args);

  // Parse the output to get the repo URL
  // Output format: https://github.com/owner/repo
  const urlMatch = output.match(/https:\/\/github\.com\/([^/]+)\/([^\s]+)/);
  if (!urlMatch) {
    throw new Error('Failed to parse repository URL from gh output');
  }

  const owner = urlMatch[1];
  const repo = urlMatch[2];

  return {
    owner,
    repo,
    url: `https://github.com/${owner}/${repo}.git`,
    isPrivate: options.private ?? false,
  };
}

/**
 * Get GitHub Pages configuration for a repository
 */
export function getPagesInfo(owner: string, repo: string): PagesInfo {
  try {
    const output = execGh([
      'api',
      `repos/${owner}/${repo}/pages`,
      '--jq',
      '{ url: .html_url, build_type: .build_type, cname: .cname }',
    ]);

    const data = JSON.parse(output);
    return {
      enabled: true,
      url: data.url,
      buildType: data.build_type,
      cname: data.cname,
    };
  } catch (error: unknown) {
    const err = error as { message?: string };
    // 404 means Pages is not enabled
    if (err.message?.includes('404')) {
      return { enabled: false };
    }
    throw error;
  }
}

/**
 * Enable GitHub Pages with workflow deployment
 */
export function enablePages(owner: string, repo: string): void {
  try {
    // Try to create/enable Pages with workflow build type
    execGh(['api', `repos/${owner}/${repo}/pages`, '-X', 'POST', '-f', 'build_type=workflow']);
  } catch (error: unknown) {
    const err = error as { message?: string };
    // If Pages already exists, update it
    if (err.message?.includes('409') || err.message?.includes('already')) {
      execGh(['api', `repos/${owner}/${repo}/pages`, '-X', 'PUT', '-f', 'build_type=workflow']);
    } else {
      throw error;
    }
  }
}

/**
 * Set custom domain (CNAME) for GitHub Pages
 */
export function setPagesCname(owner: string, repo: string, cname: string | null): void {
  if (cname) {
    execGh(['api', `repos/${owner}/${repo}/pages`, '-X', 'PUT', '-f', `cname=${cname}`]);
  } else {
    // Remove CNAME by setting it to empty
    execGh(['api', `repos/${owner}/${repo}/pages`, '-X', 'PUT', '-f', 'cname=']);
  }
}

/**
 * Get the GitHub Pages URL for a repository
 */
export function getPagesUrl(owner: string, repo: string): string | null {
  try {
    const output = execGh(['api', `repos/${owner}/${repo}/pages`, '--jq', '.html_url']);
    return output || null;
  } catch {
    return null;
  }
}

/**
 * Get the authenticated user's login name
 */
export function getAuthenticatedUser(): string {
  return execGh(['api', 'user', '--jq', '.login']);
}
