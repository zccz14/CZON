import { MetaData } from '../metadata';
import { completeMessages } from '../services/openai';
import { LANGUAGE_NAMES } from '../languages';
import { sha256 } from '../utils/sha256';
import { AIMetadata, FileMetaData, TranslatedAIMetadata } from '../types';

/**
 * 计算 metadata 中需要翻译字段的哈希值
 * 用于增量检测
 */
function computeTranslatableFieldsHash(metadata: AIMetadata): string {
  const translatableFields = {
    title: metadata.title,
    description: metadata.description,
    summary: metadata.summary,
    short_summary: metadata.short_summary,
    key_points: metadata.key_points,
    audience: metadata.audience,
    tags: metadata.tags,
  };
  return sha256(JSON.stringify(translatableFields));
}

/**
 * 检查单个文件的单个语言是否需要翻译
 */
function needsTranslationForLang(file: FileMetaData, lang: string): boolean {
  if (!file.metadata) return false;

  // 没有该语言的翻译 -> 需要翻译
  if (!file.metadataTranslations?.[lang]) return true;

  // hash 变化 -> 源 metadata 已更新，需要重新翻译
  const currentHash = computeTranslatableFieldsHash(file.metadata);
  return file.metadataTranslationHash !== currentHash;
}

/**
 * 翻译单个文件的 metadata 到单个目标语言
 */
async function translateFileMetadataToLang(file: FileMetaData, targetLang: string): Promise<void> {
  const { metadata } = file;
  if (!metadata) return;

  // 提取需要翻译的字段
  const sourceMetadata = {
    title: metadata.title,
    description: metadata.description,
    summary: metadata.summary,
    short_summary: metadata.short_summary,
    key_points: metadata.key_points,
    audience: metadata.audience,
    tags: metadata.tags,
  };

  const sourceLangName = LANGUAGE_NAMES[metadata.inferred_lang] || metadata.inferred_lang;
  const targetLangName = LANGUAGE_NAMES[targetLang] || targetLang;

  const response = await completeMessages(
    [
      {
        role: 'system',
        content: [
          '你是专业的多语言翻译助手，擅长准确翻译技术文档的元数据。',
          '',
          '任务：将给定的 metadata JSON 翻译成目标语言。',
          '',
          '要求：',
          '1. 保持 JSON 结构完全不变，只翻译文本内容',
          '2. title 翻译要简洁明了，不超过 30 个字',
          '3. description 和 summary 翻译要准确传达原意',
          '4. tags 翻译要符合目标语言的常用术语',
          '5. key_points 数组中的每个要点都需要翻译',
          '6. 技术术语保持准确，必要时可保留原文',
          '',
          '直接返回翻译后的 JSON 对象，格式如下：',
          '{',
          '  "title": "...",',
          '  "description": "...",',
          '  "summary": "...",',
          '  "short_summary": "...",',
          '  "key_points": ["...", "..."],',
          '  "audience": "...",',
          '  "tags": ["...", "..."]',
          '}',
        ].join('\n'),
      },
      {
        role: 'user',
        content: [
          `源语言: ${metadata.inferred_lang} (${sourceLangName})`,
          `目标语言: ${targetLang} (${targetLangName})`,
          '',
          '待翻译的 metadata:',
          JSON.stringify(sourceMetadata, null, 2),
        ].join('\n'),
      },
    ],
    {
      response_format: { type: 'json_object' },
      task_id: `translate-metadata:${file.path}:${targetLang}`,
    }
  );

  const translated: TranslatedAIMetadata = JSON.parse(response.choices[0].message.content);

  // 初始化存储结构
  if (!file.metadataTranslations) {
    file.metadataTranslations = {};
  }

  // 验证并存储翻译结果
  if (translated && translated.title) {
    file.metadataTranslations[targetLang] = {
      title: translated.title?.trim() || '',
      description: translated.description?.trim() || '',
      summary: translated.summary?.trim() || '',
      short_summary: translated.short_summary?.trim() || '',
      key_points: Array.isArray(translated.key_points)
        ? translated.key_points.map((p: string) => p?.trim()).filter(Boolean)
        : [],
      audience: translated.audience?.trim() || '',
      tags: Array.isArray(translated.tags)
        ? translated.tags.map((t: string) => t?.trim()).filter(Boolean)
        : [],
    };
  }
}

/**
 * 处理所有文件的 metadata 翻译
 * 采用逐文件逐语言的翻译策略，避免输出 JSON 过长被截断
 */
export async function processTranslateMetadata(): Promise<void> {
  const langs = MetaData.options.langs || [];

  if (langs.length === 0) {
    console.info('ℹ️ No target languages configured, skipping metadata translation.');
    return;
  }

  // 收集所有需要翻译的任务 (file, lang) 组合
  const tasks: Array<{ file: FileMetaData; lang: string }> = [];

  for (const file of MetaData.files) {
    if (!file.path.endsWith('.md') || !file.metadata) continue;

    for (const lang of langs) {
      if (needsTranslationForLang(file, lang)) {
        tasks.push({ file, lang });
      }
    }
  }

  if (tasks.length === 0) {
    console.info('ℹ️ All metadata already translated, skipping.');
    return;
  }

  const fileCount = new Set(tasks.map(t => t.file.path)).size;
  console.info(
    `🌐 Translating metadata: ${tasks.length} tasks (${fileCount} files × up to ${langs.length} languages)...`
  );

  // 并行执行所有翻译任务
  const results = await Promise.allSettled(
    tasks.map(async ({ file, lang }) => {
      await translateFileMetadataToLang(file, lang);
      console.info(`✅ Translated metadata: ${file.path} -> ${lang}`);
    })
  );

  // 统计结果
  const succeeded = results.filter(r => r.status === 'fulfilled').length;
  const failed = results.filter(r => r.status === 'rejected').length;

  if (failed > 0) {
    console.warn(`⚠️ ${failed} translation tasks failed:`);
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        console.error(
          `  ❌ ${tasks[i].file.path} -> ${tasks[i].lang}:`,
          r.reason?.message || r.reason
        );
      }
    });
  }

  // 更新所有成功翻译文件的 hash
  const translatedFiles = new Set(
    tasks.filter((_, i) => results[i].status === 'fulfilled').map(t => t.file)
  );
  for (const file of translatedFiles) {
    if (file.metadata) {
      file.metadataTranslationHash = computeTranslatableFieldsHash(file.metadata);
    }
  }

  console.info(`✅ Metadata translation completed: ${succeeded}/${tasks.length} succeeded`);
}
