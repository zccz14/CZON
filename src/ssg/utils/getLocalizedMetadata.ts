import { AIMetadata, FileMetaData, TranslatedAIMetadata } from '../../types';

/**
 * 获取文件在指定语言下的 metadata
 * - 如果是原语言，返回 file.metadata
 * - 如果是翻译语言，返回 file.metadataTranslations[lang]
 */
export function getLocalizedMetadata(
  file: FileMetaData,
  lang: string
): AIMetadata | TranslatedAIMetadata | undefined {
  const metadata = file.metadata;
  if (!metadata) return undefined;

  // 如果是原语言，直接返回原始 metadata
  if (lang === metadata.inferred_lang) {
    return metadata;
  }

  // 否则返回翻译版本
  return file.metadataTranslations?.[lang];
}
