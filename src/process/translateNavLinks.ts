import { MetaData } from '../metadata';
import { completeMessages } from '../services/openai';

export const processTranslateNavLinks = async (): Promise<void> => {
  const langs = MetaData.options.langs || [];
  const navLinks = MetaData.options.site?.navLinks || [];

  if (langs.length === 0 || navLinks.length === 0) {
    console.info('ℹ️ No languages or navLinks configured, skipping navLink translation.');
    return;
  }

  if (!MetaData.navLinkTranslations) {
    MetaData.navLinkTranslations = {};
  }

  const allTitles = navLinks.map(link => link.title);

  const titlesNeedingTranslation = allTitles.filter(title => {
    const translations = MetaData.navLinkTranslations![title];
    return !translations || langs.some(lang => !translations[lang]);
  });

  if (titlesNeedingTranslation.length === 0) {
    console.info('ℹ️ All navLink titles already have translations, skipping.');
    return;
  }

  console.info(`🌐 Translating ${titlesNeedingTranslation.length} navLink titles...`);

  const response = await completeMessages(
    [
      {
        role: 'system',
        content: [
          '你是一个专业的翻译助手。',
          '请将给定的导航链接标题翻译成指定的目标语言。',
          '翻译应该自然、准确，符合目标语言的表达习惯。',
          '导航链接标题通常是简短的词语，翻译时保持简洁。',
          '',
          '请以 JSON 格式返回，格式如下：',
          '{',
          '  "translations": {',
          '    "原标题": { "zh-Hans": "中文翻译", "en-US": "English" }',
          '  }',
          '}',
        ].join('\n'),
      },
      {
        role: 'user',
        content: [
          `需要翻译的导航链接标题: ${JSON.stringify(titlesNeedingTranslation)}`,
          `目标语言: ${JSON.stringify(langs)}`,
        ].join('\n'),
      },
    ],
    { response_format: { type: 'json_object' }, task_id: 'translate-nav-links' }
  );

  const json = response.choices[0].message.content;
  const parsed: {
    translations: Record<string, Record<string, string>>;
  } = JSON.parse(json);

  if (parsed.translations) {
    for (const [title, translations] of Object.entries(parsed.translations)) {
      if (!MetaData.navLinkTranslations![title]) {
        MetaData.navLinkTranslations![title] = {};
      }
      for (const [lang, translation] of Object.entries(translations)) {
        MetaData.navLinkTranslations![title][lang] = translation;
      }
    }
  }

  const stillMissingTranslation = allTitles.filter(title => {
    const translations = MetaData.navLinkTranslations![title];
    return !translations || langs.some(lang => !translations[lang]);
  });

  if (stillMissingTranslation.length > 0) {
    const details = stillMissingTranslation.map(title => {
      const missing = langs.filter(lang => !MetaData.navLinkTranslations![title]?.[lang]);
      return `  - "${title}": 缺少 ${missing.join(', ')}`;
    });
    console.error(`❌ 以下 navLink 标题缺少翻译:\n${details.join('\n')}`);
    console.error('这是一个可重试的错误，请重新运行命令。');
    process.exit(1);
  }

  console.info('✅ NavLink translations completed.');
};
