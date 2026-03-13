import { stat } from 'fs/promises';

/**
 * 检查路径是否为文件
 * @param path 要检查的路径
 * @returns Promise<boolean> 路径是否是文件
 */
export const isFile = async (path: string): Promise<boolean> => {
  return stat(path)
    .then(stats => stats.isFile())
    .catch(() => false);
};
