import { access, readFile } from 'fs/promises';
import path, { join } from 'path';
import { translateMarkdown } from '../ai/translateMarkdown';
import { LANGUAGE_NAMES } from '../languages';
import { MetaData } from '../metadata';
import { CZON_DIR, CZON_SRC_DIR } from '../paths';
import { runOpenCode, RunOpenCodeOptions } from '../services/opencode';
import { sha256 } from '../utils/sha256';
import { writeFile } from '../utils/writeFile';

async function translateWithOpenCode(
  sourcePath: string,
  targetPath: string,
  targetLang: string,
  options?: RunOpenCodeOptions
): Promise<void> {
  const langName = LANGUAGE_NAMES[targetLang];

  const taskId = crypto.randomUUID();

  const COMMENT_FILE = join(CZON_DIR, 'tmp', `comment-${taskId}.txt`);
  // 清理旧的评论文件
  await writeFile(COMMENT_FILE, '');

  // 任务定义：每个任务包含提示、代理名称和描述
  const tasks = [
    {
      description: '翻译任务',
      prompt: `将 ${sourcePath} 翻译成 ${langName} (${targetLang}) 并保存为 ${targetPath}。阅读 ${COMMENT_FILE} (如果存在) 以了解改进建议。`,
      model: 'deepseek/deepseek-chat',
    },
    {
      description: '翻译质量评估任务',
      prompt: `请判断 ${targetPath} 是否是 ${sourcePath} 的优秀翻译。评估标准包括准确性、流畅性、术语一致性、文化适应性。输出评估结果和分数（0-10分）。将评审意见保存到 ${COMMENT_FILE} 文件中。如果通过评估，请写入 "Result: Passed"。否则写入 "Result: Failed" 并附上改进建议。`,
      model: 'deepseek/deepseek-chat',
    },
  ];

  for (let it = 0; it < 10; it++) {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      console.log(`\n=== 任务 ${i + 1}: ${task.description} ===`);
      console.log(`提示: ${task.prompt}`);

      await runOpenCode(task.prompt, { model: task.model });
      console.log(`✅ 任务 ${i + 1} 完成`);
    }
    const reviewFileContent = await readFile(COMMENT_FILE, 'utf-8').catch(() => '');
    // 检查评审结果是否通过
    if (
      reviewFileContent.includes('Result: Passed') &&
      !reviewFileContent.includes('Result: Failed')
    ) {
      console.log('\n=== 翻译质量评估通过，所有任务完成 ===');
      return;
    }
  }
}

const translateWithLLMCall = async (sourcePath: string, targetPath: string, lang: string) => {
  const content = await readFile(sourcePath, 'utf-8');
  const translatedResponse = await translateMarkdown(sourcePath, content, lang);
  const translatedContent = translatedResponse.choices?.[0].message.content?.trim() || '';

  await writeFile(targetPath, translatedContent);
};

/**
 * 处理翻译
 */
export async function processTranslations(): Promise<void> {
  const {
    files,
    options: { langs = [] },
  } = MetaData;

  await Promise.all(
    files.flatMap(async file => {
      if (!file.path.endsWith('.md')) {
        console.info(`ℹ️ Skipping ${file.path}, not a Markdown file`);
        return;
      }
      return Promise.all(
        langs.map(async lang => {
          console.info(`📄 Processing file for translation: ${file.path}`);
          if (!file.metadata) {
            console.warn(`⚠️ Missing metadata for file: ${file.path}, skipping translation.`);
            return;
          }
          console.log(`🌐 Translating to ${lang}...`);
          // 存储翻译文件到 .czon/src/{lang}
          const sourcePath = path.join(CZON_SRC_DIR, file.metadata.inferred_lang, file.path); // 使用已经加强的母语文件路径
          const targetPath = path.join(CZON_SRC_DIR, lang, file.path);

          try {
            const content = await readFile(sourcePath, 'utf-8');
            if (file.metadata.inferred_lang === lang) {
              console.log(`ℹ️ Skipping translation for ${file.path}, already in target language`);
              return;
            }

            const hash = sha256(content);

            const isTargetExists = await access(targetPath).then(
              () => true,
              () => false
            );

            if (hash === file.nativeMarkdownHash && isTargetExists) {
              console.info(`ℹ️ Content unchanged for ${file.path}, skipping translation.`);
              return;
            }

            await translateWithLLMCall(sourcePath, targetPath, lang);
            // await translateWithOpenCode(sourcePath, targetPath, lang);

            // const translationMeta = ((file.translations ??= {})[lang] ??= {});

            // translationMeta.content_length = translatedContent.length; // 记录翻译后内容长度
            // translationMeta.token_used = translatedResponse.usage; // 记录 token 使用情况

            // 存储已增强内容的哈希值
            file.nativeMarkdownHash = hash;

            console.log(`✅ Translated file saved: ${targetPath}`);
          } catch (error) {
            console.error(`❌ Failed to translate to ${lang}:`, error);
          }
        })
      );
    })
  );
}
