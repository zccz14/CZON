import { access } from 'fs/promises';

/**
 * 检查路径是否存在
 * @param path 要检查的路径
 * @returns Promise<boolean> 路径是否存在
 */
export const isExists = async (path: string): Promise<boolean> => {
  return access(path).then(
    () => true,
    () => false
  );
};
