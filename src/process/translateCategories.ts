import { MetaData } from '../metadata';
import { completeMessages } from '../services/openai';

export const processTranslateCategories = async (): Promise<void> => {
  const langs = MetaData.options.langs || [];

  if (langs.length === 0) {
    console.info('ℹ️ No target languages configured, skipping category translation.');
    return;
  }

  if (!MetaData.categoryTranslations) {
    MetaData.categoryTranslations = {};
  }

  const allCategories = [
    ...new Set(MetaData.files.map(f => f.category).filter(Boolean)),
  ] as string[];

  if (allCategories.length === 0) {
    console.info('ℹ️ No categories found, skipping category translation.');
    return;
  }

  const categoriesNeedingTranslation = allCategories.filter(cat => {
    const translations = MetaData.categoryTranslations![cat];
    return !translations || langs.some(lang => !translations[lang]);
  });

  if (categoriesNeedingTranslation.length === 0) {
    console.info('ℹ️ All categories already have translations, skipping.');
    return;
  }

  console.info(
    `🌐 Translating ${categoriesNeedingTranslation.length} categories to ${langs.length} languages...`
  );

  const response = await completeMessages(
    [
      {
        role: 'system',
        content: [
          '你是一个专业的翻译助手。',
          '请将给定的分类名称翻译成指定的目标语言。',
          '翻译应该自然、准确，符合目标语言的表达习惯。',
          '分类名称通常是简短的词组，翻译时保持简洁。',
          '',
          '请以 JSON 格式返回，格式如下：',
          '{',
          '  "translations": {',
          '    "CategoryKey": { "zh-Hans": "中文翻译", "en-US": "English" }',
          '  }',
          '}',
        ].join('\n'),
      },
      {
        role: 'user',
        content: [
          `需要翻译的分类: ${JSON.stringify(categoriesNeedingTranslation)}`,
          `目标语言: ${JSON.stringify(langs)}`,
        ].join('\n'),
      },
    ],
    { response_format: { type: 'json_object' }, task_id: 'translate-categories' }
  );

  const json = response.choices[0].message.content;
  const parsed: {
    translations: Record<string, Record<string, string>>;
  } = JSON.parse(json);

  if (parsed.translations) {
    for (const [category, translations] of Object.entries(parsed.translations)) {
      if (!MetaData.categoryTranslations![category]) {
        MetaData.categoryTranslations![category] = {};
      }
      for (const [lang, translation] of Object.entries(translations)) {
        MetaData.categoryTranslations![category][lang] = translation;
      }
    }
  }

  const stillMissingTranslation = allCategories.filter(cat => {
    const translations = MetaData.categoryTranslations![cat];
    return !translations || langs.some(lang => !translations[lang]);
  });

  if (stillMissingTranslation.length > 0) {
    const details = stillMissingTranslation.map(cat => {
      const missing = langs.filter(lang => !MetaData.categoryTranslations![cat]?.[lang]);
      return `  - "${cat}": 缺少 ${missing.join(', ')}`;
    });
    console.error(`❌ 以下分类缺少翻译:\n${details.join('\n')}`);
    console.error('这是一个可重试的错误，请重新运行命令。');
    process.exit(1);
  }

  console.info('✅ Category translations completed.');
};
