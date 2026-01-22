import { MetaData } from '../metadata';
import { completeMessages, OpenAIMessage } from '../services/openai';
import { AIMetadata } from '../types';

/**
 * AI Metadata 提取模块
 *
 * 优化策略说明：
 * 1. 从 MetaData 全局状态读取已有 slug，不作为参数传递
 * 2. 如果已有 slug，条件化 prompt - 完全不提及 slug 相关指令
 * 3. trade-off: 优先提升 AI 质量（减少无关任务干扰），可能降低 context 缓存命中率
 */
export async function extractMetadataFromMarkdown(
  filePath: string,
  content: string
): Promise<AIMetadata> {
  const existingSlug = MetaData.files.find(f => f.path === filePath)?.metadata?.slug;
  const hasExistingSlug = !!existingSlug;

  const fields: string[] = [
    'title: 文档的标题（简洁明了，不超过 30 个字）',
    'tags: 关键词列表（3-8 个关键词，使用中文或英文）',
    'description: 文档的简短描述，微摘要（用一句话概括本文核心价值，不超过 100 字符），用于 SEO meta description，社交卡片短描述',
    'summary: 文档中型摘要（用一段话总结文章，包含关键论点和结论，控制在 300 字以内），用于 邮件推送内容，newsletter 介绍',
    'inferred_date: 文档中隐含的创建日期（如果有的话，格式：YYYY-MM-DD，没有就留空字符串）',
    'inferred_lang: 文档使用的语言代码（例如：zh-Hans 表示简体中文，en-US 表示美式英语）',
    'key_points: 文章的关键要点列表（5-10 个要点，简洁明了）',
    'audience: 目标读者描述（简短描述，50 字以内）',
    'short_summary: 文档的超短摘要（用 2-3 句话概括文章主要内容，突出核心观点），用于文章列表页摘要，RSS feed 描述',
    ...(hasExistingSlug
      ? []
      : ['slug: URL 友好别名（使用小写字母、数字和连字符，仅包含英文和数字）']),
  ];

  const jsonFields: string[] = [
    '{',
    '  "title": "文档标题",',
    '  "description": "用一句话概括本文核心价值，不超过 100 字符",',
    '  "summary": "中型摘要，用一段话总结文章，包含关键论点和结论",',
    '  "short_summary": "超短摘要，用 2-3 句话概括文章主要内容，突出核心观点",',
    '  "tags": ["关键词1", "关键词2", "关键词3"],',
    '  "inferred_date": "2023-01-01",',
    '  "inferred_lang": "zh-Hans",',
    '  "key_points": ["要点1", "要点2", "要点3"],',
    ...(hasExistingSlug ? [] : ['  "slug": "URL 友好别名",']),
    '  "audience": "目标读者描述"',
    '}',
  ];

  const prompt = `请分析以下文档内容，提取以下信息并返回 JSON 格式：

 文档内容：
 """
 ${content}
 """

 请提取：
${fields.join('\n')}

 请严格按照以下 JSON 格式返回，不要包含任何其他文本：
${jsonFields.join('\n')}`;

  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        '你是一个专业的文档分析助手，擅长从文档中提取结构化信息。请严格按照要求的 JSON 格式返回结果。',
    },
    {
      role: 'user',
      content: prompt,
    },
  ];

  const response = await completeMessages(messages, {
    response_format: { type: 'json_object' },
    task_id: `extract-metadata:${filePath}`,
  });

  const metadata = JSON.parse(response.choices[0].message.content);

  const result: AIMetadata = {
    title: metadata.title?.trim() || '',
    description: metadata.description?.trim() || '',
    short_summary: metadata.short_summary?.trim() || '',
    audience: metadata.audience?.trim() || '',
    key_points: Array.isArray(metadata.key_points)
      ? metadata.key_points.map((point: string) => point.trim()).filter(Boolean)
      : [],
    summary: metadata.summary?.trim() || '',
    slug: metadata.slug?.trim() || existingSlug || '',
    tags: Array.isArray(metadata.tags)
      ? metadata.tags.map((tag: string) => tag.trim()).filter(Boolean)
      : [],
    inferred_date: metadata.inferred_date?.trim() || undefined,
    inferred_lang: metadata.inferred_lang?.trim() || undefined,
    tokens_used: {
      prompt: response.usage.prompt_tokens,
      completion: response.usage.completion_tokens,
      total: response.usage.total_tokens,
    },
  };

  return result;
}
