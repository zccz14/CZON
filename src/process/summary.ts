import { mkdir, readFile, rm, stat } from 'fs/promises';
import { join } from 'path';
import { loadMetaData, MetaData, saveMetaData } from '../metadata';
import { CZON_DIR, INPUT_DIR } from '../paths';
import { runOpenCode } from '../services/opencode';
import { AIMetadata } from '../types';

// 临时文件目录：.czon/tmp/
const TMP_DIR = join(CZON_DIR, 'tmp');

// Prompt 模板目录路径（在项目根目录的 prompts/ 文件夹中）
const PROMPTS_DIR = join(__dirname, '../../prompts');

// 输出目录：.czon/AIGC/SUMMARY/
const SUMMARY_DIR = join(CZON_DIR, 'AIGC', 'SUMMARY');

// 最大重试次数
const MAX_RETRIES = 3;

// 风格配置
const SUMMARY_STYLES = [
  {
    skill: 'summary-objective',
    name: '客观中立',
    title: 'AI 总结: 客观中立风格',
    slug: 'aigc-summary-objective',
    category: 'AI Summary',
  },
  {
    skill: 'summary-critical',
    name: '客观批判',
    title: 'AI 总结: 客观批判风格',
    slug: 'aigc-summary-critical',
    category: 'AI Summary',
  },
  {
    skill: 'summary-positive',
    name: '赞扬鼓励',
    title: 'AI 总结: 赞扬鼓励风格',
    slug: 'aigc-summary-positive',
    category: 'AI Summary',
  },
  {
    skill: 'summary-popular',
    name: '科普介绍',
    title: 'AI 总结: 科普介绍风格',
    slug: 'aigc-summary-popular',
    category: 'AI Summary',
  },
  {
    skill: 'summary-artistic',
    name: '文艺感性',
    title: 'AI 总结: 文艺感性风格',
    slug: 'aigc-summary-artistic',
    category: 'AI Summary',
  },
  {
    skill: 'summary-philosophical',
    name: '哲学思辨',
    title: 'AI 总结: 哲学思辨风格',
    slug: 'aigc-summary-philosophical',
    category: 'AI Summary',
  },
  {
    skill: 'summary-psychological',
    name: '心理分析',
    title: 'AI 总结: 心理分析风格',
    slug: 'aigc-summary-psychological',
    category: 'AI Summary',
  },
  {
    skill: 'summary-historical',
    name: '历史时间跨度',
    title: 'AI 总结: 历史时间跨度风格',
    slug: 'aigc-summary-historical',
    category: 'AI Summary',
  },
] as const;

/**
 * 读取 Prompt 模板文件内容
 */
const loadPromptTemplate = async (templateName: string): Promise<string> => {
  const templatePath = join(PROMPTS_DIR, `${templateName}.md`);
  return readFile(templatePath, 'utf-8');
};

/**
 * 获取文件的 mtime（毫秒），文件不存在则返回 null
 */
const getFileMtimeMs = async (filePath: string): Promise<number | null> => {
  try {
    const s = await stat(filePath);
    return s.mtimeMs;
  } catch {
    return null;
  }
};

/**
 * 生成单个风格的报告（带重试循环）
 */
const generateStyleReport = async (
  model: string,
  baseContent: string,
  styleConfig: (typeof SUMMARY_STYLES)[number],
  cwd: string
): Promise<{ success: boolean; error?: string }> => {
  const relativeOutput = `.czon/AIGC/SUMMARY/${styleConfig.skill}.md`;
  const outputPath = join(INPUT_DIR, relativeOutput);
  const relativeTmpDir = `.czon/tmp/summary-${styleConfig.skill}`;
  const tmpDir = join(TMP_DIR, `summary-${styleConfig.skill}`);

  // 开始前清理并创建 tmp 目录
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(tmpDir, { recursive: true });

  try {
    const styleContent = await loadPromptTemplate(styleConfig.skill);

    const prompt = `
${baseContent}

---

${styleContent}

---

# 执行任务

请严格按照上述指南，生成「${styleConfig.name}」风格的分析报告。

输出文件：${relativeOutput}
SubAgent 摘要临时目录：${relativeTmpDir}/

注意：
1. 必须生成完整的报告文件
2. 文件必须保存到 ${relativeOutput}
3. 确保所有链接使用 ../ 开头的相对路径
4. SubAgent 提取的摘要必须写入 ${relativeTmpDir}/batch-{N}.md（N 为批次编号，从 1 开始）
5. 每个 SubAgent 完成后，检查对应的临时文件是否已生成，未生成则重试该批次
`.trim();

    // 记录发送前的 mtime
    const mtimeBefore = await getFileMtimeMs(outputPath);

    // 发送初始 prompt，获取句柄
    const handle = await runOpenCode(prompt, { model, cwd });

    // 验证 + 重试循环
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const mtimeAfter = await getFileMtimeMs(outputPath);
      const fileExists = mtimeAfter !== null;
      const fileModified = mtimeBefore !== mtimeAfter;

      if (fileExists && fileModified) {
        return { success: true };
      }

      // 构造错误反馈
      let errorMsg: string;
      if (!fileExists) {
        errorMsg = `错误：文件 ${relativeOutput} 未生成。请立即创建并写入完整的报告内容到 ${relativeOutput}。先写大纲，再分批填充内容，每次写入不超过2000字。`;
      } else {
        errorMsg = `错误：文件 ${relativeOutput} 未被修改。请重新生成完整内容并覆盖写入 ${relativeOutput}。先写大纲，再分批填充内容，每次写入不超过2000字。`;
      }

      console.warn(`  ⚠️ 重试 ${attempt}/${MAX_RETRIES}: ${errorMsg}`);
      await handle.prompt(errorMsg);
    }

    // 最终检查
    const mtimeFinal = await getFileMtimeMs(outputPath);
    if (mtimeFinal !== null && mtimeBefore !== mtimeFinal) {
      return { success: true };
    }

    return {
      success: false,
      error: `${MAX_RETRIES} 次重试后仍未成功生成文件: ${relativeOutput}`,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    // 无论成功失败，清理 tmp 目录
    await rm(tmpDir, { recursive: true, force: true });
  }
};

/**
 * 主函数：生成所有风格的摘要报告
 */
export const processSummary = async (model: string): Promise<void> => {
  const cwd = process.cwd();

  // 加载 MetaData 以便写入预设的 title/slug
  await loadMetaData();

  // 加载基础规则
  console.info('📖 加载基础规则...');
  const baseContent = await loadPromptTemplate('summary-base');

  // Phase 1: 串行生成 8 种风格报告
  console.info(`\n📊 开始生成 ${SUMMARY_STYLES.length} 种风格的分析报告...\n`);

  const results: Array<{
    name: string;
    success: boolean;
    error?: string;
  }> = [];

  for (let i = 0; i < SUMMARY_STYLES.length; i++) {
    const style = SUMMARY_STYLES[i];
    console.info(`[${i + 1}/${SUMMARY_STYLES.length}] 正在生成「${style.name}」风格报告...`);

    const result = await generateStyleReport(model, baseContent, style, cwd);
    results.push({
      name: style.name,
      ...result,
    });

    if (result.success) {
      // 预设 title 和 slug 到 MetaData（不设 hash，确保后续 AI 提取不跳过）
      const relativePath = `.czon/AIGC/SUMMARY/${style.skill}.md`;
      let fileMeta = MetaData.files.find(f => f.path === relativePath);
      if (!fileMeta) {
        fileMeta = { path: relativePath, links: [] };
        MetaData.files.push(fileMeta);
      }
      fileMeta.metadata = {
        ...fileMeta.metadata,
        title: style.title,
        slug: style.slug,
      } as AIMetadata;
      fileMeta.category = style.category;
      console.info(`✅ 「${style.name}」风格报告生成成功\n`);
    } else {
      console.error(`❌ 「${style.name}」风格报告生成失败: ${result.error}\n`);
    }
  }

  // Phase 2: 硬性验证
  console.info('\n🔍 验证生成结果...\n');

  const successCount = results.filter(r => r.success).length;
  const failedResults = results.filter(r => !r.success);

  console.info(`📈 生成统计: ${successCount}/${SUMMARY_STYLES.length} 成功\n`);

  if (failedResults.length > 0) {
    console.info('❌ 失败的报告:');
    for (const failed of failedResults) {
      console.info(`   - ${failed.name}: ${failed.error}`);
    }
    console.info('');
  }

  // 验证所有必需文件
  console.info('📁 验证文件存在性:');
  let allFilesExist = true;
  for (const style of SUMMARY_STYLES) {
    const filePath = join(SUMMARY_DIR, style.skill + '.md');
    const exists = (await getFileMtimeMs(filePath)) !== null;
    const status = exists ? '✅' : '❌';
    console.info(`   ${status} .czon/AIGC/SUMMARY/${style.skill}.md`);
    if (!exists) {
      allFilesExist = false;
    }
  }

  console.info('');

  if (allFilesExist) {
    console.info('🎉 所有分析报告生成完成！');
  } else {
    const missingCount = SUMMARY_STYLES.length - successCount;
    throw new Error(`生成不完整: ${missingCount} 个报告未能成功生成。请检查上述错误信息并重试。`);
  }

  // 保存 MetaData（包含预设的 title/slug）
  await saveMetaData();
};
