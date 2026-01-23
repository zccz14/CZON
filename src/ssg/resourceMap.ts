import { dirname, relative } from 'path';

export const EXTERNAL_RESOURCES = [
  {
    name: 'tailwindcss.js',
    url: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
  },
];

/**
 * 获取资源的相对引用 URL
 * @param path - 当前文件路径 (e.g. `/en-US/index.html`)
 * @param name - 资源名称 (e.g. `tailwindcss.js`)
 */
export const getResourceUrlFrom = (path: string, name: string): string => {
  const resource = EXTERNAL_RESOURCES.find(r => r.name === name);
  if (!resource) throw new Error(`Resource ${name} not found`);
  return relative(dirname(path), `/assets/${resource.name}`);
};
