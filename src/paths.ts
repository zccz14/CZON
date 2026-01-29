import { homedir } from 'os';
import { join } from 'path';

export const INPUT_DIR = process.cwd();
export const CZON_DIR = join(process.cwd(), '.czon');
export const CZON_DIST_DIR = join(CZON_DIR, 'dist');
export const CZON_DIST_RAW_CONTENT_DIR = join(CZON_DIST_DIR, '__raw__');
export const CZON_SRC_DIR = join(CZON_DIR, 'src');
export const CZON_META_PATH = join(CZON_DIR, 'meta.json');
export const CZON_CUSTOM_STYLE_PATH = join(CZON_DIR, 'style.css');
export const CZON_DIST_CUSTOM_STYLE_PATH = join(CZON_DIST_DIR, 'style.css');
/**
 * ~/.config/opencode/agents/
 */
export const GLOBAL_OPENCODE_AGENT_DIR = join(homedir(), '.config', 'opencode', 'agents');

export const LOCAL_OPENCODE_AGENT_DIR = join(__dirname, '..', 'agents');
