import { mkdir, readFile, rm, stat } from 'fs/promises';
import { join } from 'path';
import { loadMetaData, MetaData, saveMetaData } from '../metadata';
import { CZON_DIR, INPUT_DIR } from '../paths';
import { runOpenCode } from '../services/opencode';
import { AIMetadata } from '../types';

// 临时文件目录：.czon/tmp/
const TMP_DIR = join(CZON_DIR, 'tmp');

// Prompt 模板目录路径
const PROMPTS_DIR = join(__dirname, '../../prompts');

// 最大重试次数
const MAX_RETRIES = 3;

// TODO Summary 配置
const TODO_CONFIG = {
  promptFile: 'todo-summary',
  title: 'AI 总结：待办事项',
  slug: 'aigc-todo-list',
  category: 'AI Summary',
  outputRelative: '.czon/AIGC/TODO/todo-summary.md',
};

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
 * 生成 TODO Summary 报告
 */
export const processTodoSummary = async (model: string): Promise<void> => {
  const cwd = process.cwd();
  const relativeTmpDir = '.czon/tmp/todo-summary';
  const tmpDir = join(TMP_DIR, 'todo-summary');

  // 加载 MetaData
  await loadMetaData();

  // 开始前清理并创建 tmp 目录
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(tmpDir, { recursive: true });

  try {
    // 加载 prompt 模板
    console.info('📖 加载 TODO Summary prompt 模板...');
    const promptContent = await loadPromptTemplate(TODO_CONFIG.promptFile);

    const outputPath = join(INPUT_DIR, TODO_CONFIG.outputRelative);

    const prompt = `
${promptContent}

---

# 执行任务

请严格按照上述指南，阅读本仓库中的所有 Markdown 文件，提取所有 TODO 项，生成待办事项报告。

输出文件：${TODO_CONFIG.outputRelative}
SubAgent 摘要临时目录：${relativeTmpDir}/

注意：
1. 必须阅读所有文件后再生成报告
2. 文件必须保存到 ${TODO_CONFIG.outputRelative}
3. 确保所有链接使用 ../../../ 开头的相对路径
4. 链接文本使用文章标题
5. SubAgent 提取的 TODO 条目必须写入 ${relativeTmpDir}/batch-{N}.md（N 为批次编号，从 1 开始）
6. 每个 SubAgent 完成后，检查对应的临时文件是否已生成，未生成则重试该批次
`.trim();

    // 记录发送前的 mtime
    const mtimeBefore = await getFileMtimeMs(outputPath);

    console.info('\n📊 开始生成 TODO Summary 报告...\n');

    // 发送初始 prompt，获取句柄
    const handle = await runOpenCode(prompt, { model, cwd });

    // 验证 + 重试循环
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      const mtimeAfter = await getFileMtimeMs(outputPath);
      const fileExists = mtimeAfter !== null;
      const fileModified = mtimeBefore !== mtimeAfter;

      if (fileExists && fileModified) {
        console.info('✅ TODO Summary 报告生成成功\n');

        // 预设 title 和 slug 到 MetaData
        let fileMeta = MetaData.files.find(f => f.path === TODO_CONFIG.outputRelative);
        if (!fileMeta) {
          fileMeta = { path: TODO_CONFIG.outputRelative, links: [] };
          MetaData.files.push(fileMeta);
        }
        fileMeta.metadata = {
          ...fileMeta.metadata,
          title: TODO_CONFIG.title,
          slug: TODO_CONFIG.slug,
        } as AIMetadata;
        fileMeta.category = TODO_CONFIG.category;

        // 保存 MetaData
        await saveMetaData();
        return;
      }

      // 构造错误反馈
      let errorMsg: string;
      if (!fileExists) {
        errorMsg = `错误：文件 ${TODO_CONFIG.outputRelative} 未生成。请立即创建并写入完整的报告内容到 ${TODO_CONFIG.outputRelative}。先写大纲，再分批填充内容，每次写入不超过2000字。`;
      } else {
        errorMsg = `错误：文件 ${TODO_CONFIG.outputRelative} 未被修改。请重新生成完整内容并覆盖写入 ${TODO_CONFIG.outputRelative}。先写大纲，再分批填充内容，每次写入不超过2000字。`;
      }

      console.warn(`  ⚠️ 重试 ${attempt}/${MAX_RETRIES}: ${errorMsg}`);
      await handle.prompt(errorMsg);
    }

    // 最终检查
    const mtimeFinal = await getFileMtimeMs(outputPath);
    if (mtimeFinal !== null && mtimeBefore !== mtimeFinal) {
      console.info('✅ TODO Summary 报告生成成功（最终检查通过）\n');

      // 预设 title 和 slug 到 MetaData
      let fileMeta = MetaData.files.find(f => f.path === TODO_CONFIG.outputRelative);
      if (!fileMeta) {
        fileMeta = { path: TODO_CONFIG.outputRelative, links: [] };
        MetaData.files.push(fileMeta);
      }
      fileMeta.metadata = {
        ...fileMeta.metadata,
        title: TODO_CONFIG.title,
        slug: TODO_CONFIG.slug,
      } as AIMetadata;
      fileMeta.category = TODO_CONFIG.category;

      await saveMetaData();
      return;
    }

    throw new Error(`${MAX_RETRIES} 次重试后仍未成功生成文件: ${TODO_CONFIG.outputRelative}`);
  } finally {
    // 无论成功失败，清理 tmp 目录
    await rm(tmpDir, { recursive: true, force: true });
  }
};
