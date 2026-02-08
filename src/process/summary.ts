import { mkdir, readFile, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { runOpenCode } from '../services/opencode';
import { execSync } from 'child_process';

// Prompt 模板目录路径（在项目根目录的 prompts/ 文件夹中）
const PROMPTS_DIR = join(__dirname, '../../prompts');

// 风格配置
const SUMMARY_STYLES = [
  { skill: 'summary-objective', output: '1-objective.md', name: '客观中立' },
  { skill: 'summary-critical', output: '2-critical.md', name: '客观批判' },
  { skill: 'summary-positive', output: '3-positive.md', name: '赞扬鼓励' },
  { skill: 'summary-popular', output: '4-popular.md', name: '科普介绍' },
  { skill: 'summary-artistic', output: '5-artistic.md', name: '文艺感性' },
  { skill: 'summary-philosophical', output: '6-philosophical.md', name: '哲学思辨' },
  { skill: 'summary-psychological', output: '7-psychological.md', name: '心理分析' },
  { skill: 'summary-historical', output: '8-history.md', name: '历史时间跨度' },
] as const;

/**
 * 读取 Prompt 模板文件内容
 */
const loadPromptTemplate = async (templateName: string): Promise<string> => {
  const templatePath = join(PROMPTS_DIR, `${templateName}.md`);
  return readFile(templatePath, 'utf-8');
};

/**
 * 验证文件是否存在
 */
const verifyFileExists = (filePath: string): boolean => {
  return existsSync(filePath);
};

/**
 * 生成单个风格的报告
 */
const generateStyleReport = async (
  model: string,
  baseContent: string,
  styleConfig: (typeof SUMMARY_STYLES)[number],
  cwd: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const styleContent = await loadPromptTemplate(styleConfig.skill);

    const prompt = `
${baseContent}

---

${styleContent}

---

# 执行任务

请严格按照上述指南，生成「${styleConfig.name}」风格的分析报告。

输出文件：SUMMARY/${styleConfig.output}

注意：
1. 必须生成完整的报告文件
2. 文件必须保存到 SUMMARY/${styleConfig.output}
3. 确保所有链接使用 ../ 开头的相对路径
`.trim();

    await runOpenCode(prompt, { model, cwd });

    // 验证文件是否生成
    const outputPath = join(cwd, 'SUMMARY', styleConfig.output);
    if (!verifyFileExists(outputPath)) {
      return {
        success: false,
        error: `文件未生成: ${outputPath}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

/**
 * 主函数：生成所有风格的摘要报告
 */
export const processSummary = async (model: string): Promise<void> => {
  const cwd = process.cwd();

  // 加载基础规则
  console.info('📖 加载基础规则...');
  const baseContent = await loadPromptTemplate('summary-base');

  // Phase 0: 清空 SUMMARY 目录
  console.info('🗑️  清空 SUMMARY 目录...');
  await rm(join(cwd, 'SUMMARY'), { recursive: true, force: true });
  await mkdir(join(cwd, 'SUMMARY'), { recursive: true });

  // Phase 1: 串行生成 8 种风格报告
  console.info(`\n📊 开始生成 ${SUMMARY_STYLES.length} 种风格的分析报告...\n`);

  const results: Array<{
    name: string;
    output: string;
    success: boolean;
    error?: string;
  }> = [];

  for (let i = 0; i < SUMMARY_STYLES.length; i++) {
    const style = SUMMARY_STYLES[i];
    console.info(`[${i + 1}/${SUMMARY_STYLES.length}] 正在生成「${style.name}」风格报告...`);

    const result = await generateStyleReport(model, baseContent, style, cwd);
    results.push({
      name: style.name,
      output: style.output,
      ...result,
    });

    if (result.success) {
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
      console.info(`   - ${failed.name} (${failed.output}): ${failed.error}`);
    }
    console.info('');
  }

  // 验证所有必需文件
  console.info('📁 验证文件存在性:');
  let allFilesExist = true;
  for (const style of SUMMARY_STYLES) {
    const filePath = join(cwd, 'SUMMARY', style.output);
    const exists = verifyFileExists(filePath);
    const status = exists ? '✅' : '❌';
    console.info(`   ${status} SUMMARY/${style.output}`);
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
};
