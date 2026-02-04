import { MetaDataStore } from '../../types';

export function getCategoryDisplayName(
  site: MetaDataStore,
  category: string | undefined,
  lang: string
): string {
  if (!category) return '';
  return site.categoryTranslations?.[category]?.[lang] || category;
}
