import { MetaDataStore } from '../../types';

export function getNavLinkDisplayTitle(site: MetaDataStore, title: string, lang: string): string {
  return site.navLinkTranslations?.[title]?.[lang] || title;
}
