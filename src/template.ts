import { TemplateData, NavigationItem, FileInfo } from './types';
import * as fs from 'fs/promises';
import * as path from 'path';

export class TemplateEngine {
  private defaultTemplate = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          typography: {
            DEFAULT: {
              css: {
                maxWidth: '65ch',
                color: '#374151',
                lineHeight: '1.75',
                fontSize: '1.125rem',
                a: {
                  color: '#2563eb',
                  textDecoration: 'none',
                  fontWeight: '500',
                  '&:hover': {
                    color: '#1d4ed8',
                    textDecoration: 'underline',
                  },
                },
                'h1, h2, h3, h4': {
                  color: '#111827',
                  fontWeight: '700',
                  letterSpacing: '-0.025em',
                  marginTop: '2.5em',
                  marginBottom: '0.5em',
                },
                h1: {
                  fontSize: '2.25rem',
                  lineHeight: '1.2',
                },
                h2: {
                  fontSize: '1.875rem',
                  lineHeight: '1.3',
                },
                h3: {
                  fontSize: '1.5rem',
                  lineHeight: '1.4',
                },
                h4: {
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                },
                p: {
                  marginTop: '1.25em',
                  marginBottom: '1.25em',
                },
                code: {
                  color: '#dc2626',
                  backgroundColor: '#f3f4f6',
                  padding: '0.2em 0.4em',
                  borderRadius: '0.25rem',
                  fontWeight: '400',
                  fontSize: '0.875em',
                },
                'code::before': {
                  content: '""',
                },
                'code::after': {
                  content: '""',
                },
                pre: {
                  backgroundColor: '#1f2937',
                  color: '#f9fafb',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  overflowX: 'auto',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                },
                'pre code': {
                  backgroundColor: 'transparent',
                  color: 'inherit',
                  padding: '0',
                  fontSize: 'inherit',
                },
                blockquote: {
                  borderLeftColor: '#d1d5db',
                  borderLeftWidth: '4px',
                  fontStyle: 'normal',
                  paddingLeft: '1.5rem',
                  marginTop: '2rem',
                  marginBottom: '2rem',
                  color: '#4b5563',
                },
                ul: {
                  marginTop: '1.25em',
                  marginBottom: '1.25em',
                  paddingLeft: '1.625em',
                },
                ol: {
                  marginTop: '1.25em',
                  marginBottom: '1.25em',
                  paddingLeft: '1.625em',
                },
                li: {
                  marginTop: '0.5em',
                  marginBottom: '0.5em',
                },
                table: {
                  width: '100%',
                  marginTop: '2em',
                  marginBottom: '2em',
                  fontSize: '0.875em',
                  lineHeight: '1.5',
                },
                thead: {
                  borderBottomWidth: '2px',
                  borderBottomColor: '#e5e7eb',
                },
                'thead th': {
                  color: '#374151',
                  fontWeight: '600',
                  textAlign: 'left',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                },
                'tbody tr': {
                  borderBottomWidth: '1px',
                  borderBottomColor: '#e5e7eb',
                },
                'tbody td': {
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                },
                'tbody tr:hover': {
                  backgroundColor: '#f9fafb',
                },
                img: {
                  marginTop: '2em',
                  marginBottom: '2em',
                  borderRadius: '0.5rem',
                },
                hr: {
                  borderColor: '#e5e7eb',
                  marginTop: '3em',
                  marginBottom: '3em',
                },
              },
            },
          },
        },
      },
    }
  </script>
  <!-- Highlight.js -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css">
  <style>
    .hljs {
      background: transparent;
    }
  </style>
</head>
<body class="bg-gray-50 min-h-screen">
  <div class="flex flex-col lg:flex-row min-h-screen">
    <!-- Sidebar -->
    <aside class="lg:w-64 bg-white border-r border-gray-200 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto">
      <div class="p-6">
        <div class="mb-8">
          <h1 class="text-xl font-bold text-gray-900">ZEN Documentation</h1>
          <p class="text-sm text-gray-600 mt-2">A minimalist Markdown documentation site builder</p>
        </div>

        <nav class="space-y-1">
          {{navigation}}
        </nav>

        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="text-sm text-gray-600">
            <p class="mb-2">Version {{metadata.version}}</p>
            <p>Built on {{metadata.buildDate}}</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <!-- Header -->
        <header class="mb-8 pb-6 border-b border-gray-200">
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{title}}</h1>
          <div class="flex flex-wrap gap-4 text-sm text-gray-600">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Updated: {{metadata.lastUpdated}}</span>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{metadata.readingTime}} min read</span>
            </div>
          </div>
        </header>

        <!-- Article Content -->
        <article class="prose prose-gray max-w-none">
          {{{content}}}
        </article>

        <!-- Navigation -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex justify-between">
            <a href="{{prevLink}}" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 {{prevLinkDisabled}}" {{prevLinkDisabled}}>
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </a>
            <a href="{{nextLink}}" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 {{nextLinkDisabled}}" {{nextLinkDisabled}}>
              Next
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-12 pt-8 border-t border-gray-200">
          <div class="text-center text-sm text-gray-600">
            <p class="mb-2">Generated by <strong class="font-semibold">ZEN</strong></p>
            <p>
              <a href="https://github.com/zccz14/ZEN" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 hover:underline">
                View on GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
</body>
</html>`;

  /**
   * 生成导航 HTML
   */
  private generateNavigationHtml(navigation: NavigationItem[], currentPath?: string): string {
    const renderItem = (item: NavigationItem, depth = 0): string => {
      const isActive = currentPath === item.path;
      const activeClasses = isActive
        ? 'bg-blue-50 text-blue-700 border-blue-200'
        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-transparent';

      // Predefined padding classes for different depths
      const paddingClasses = [
        'pl-0', // depth 0
        'pl-4', // depth 1
        'pl-8', // depth 2
        'pl-12', // depth 3
        'pl-16', // depth 4
      ];
      const paddingLeft = paddingClasses[Math.min(depth, paddingClasses.length - 1)];

      // Predefined margin classes for children containers
      const marginClasses = [
        'ml-0', // depth 0
        'ml-4', // depth 1
        'ml-8', // depth 2
        'ml-12', // depth 3
        'ml-16', // depth 4
      ];
      const marginLeft = marginClasses[Math.min(depth, marginClasses.length - 1)];

      let html = '';

      // Main item
      html += `<div class="mb-1">`;
      html += `<a href="${item.path}" class="block py-2 px-3 ${paddingLeft} border-l-2 ${activeClasses} rounded-r text-sm font-medium transition-colors duration-150">`;
      html += item.title;
      html += `</a>`;
      html += `</div>`;

      // Children
      if (item.children && item.children.length > 0) {
        html += `<div class="${marginLeft}">`;
        html += item.children.map(child => renderItem(child, depth + 1)).join('');
        html += `</div>`;
      }

      return html;
    };

    return navigation.map(item => renderItem(item)).join('');
  }

  /**
   * 简单的模板变量替换
   */
  private renderTemplate(template: string, data: TemplateData): string {
    let result = template;

    // 替换导航
    const navigationHtml = this.generateNavigationHtml(data.navigation, data.currentPath);
    result = result.replace('{{navigation}}', navigationHtml);

    // 替换其他变量 - 使用全局替换
    result = result.replace(/{{title}}/g, data.title || 'Untitled');
    result = result.replace(/{{{content}}}/g, data.content || '');

    // 替换元数据变量
    if (data.metadata) {
      result = result.replace(/{{metadata\.lastUpdated}}/g, data.metadata.lastUpdated || '');
      result = result.replace(
        /{{metadata\.readingTime}}/g,
        data.metadata.readingTime?.toString() || ''
      );
      result = result.replace(/{{metadata\.version}}/g, data.metadata.version || '');
      result = result.replace(/{{metadata\.buildDate}}/g, data.metadata.buildDate || '');
    }

    // 替换导航链接
    result = result.replace(/{{prevLink}}/g, data.prevLink || '');
    result = result.replace(/{{nextLink}}/g, data.nextLink || '');

    // 处理条件变量（如果链接不存在，添加disabled属性）
    result = result.replace(/{{prevLinkDisabled}}/g, data.prevLink ? '' : 'disabled');
    result = result.replace(/{{nextLinkDisabled}}/g, data.nextLink ? '' : 'disabled');

    return result;
  }

  /**
   * 渲染模板
   */
  async render(data: TemplateData, templatePath?: string): Promise<string> {
    let template = this.defaultTemplate;

    if (templatePath) {
      try {
        template = await fs.readFile(templatePath, 'utf-8');
      } catch (error) {
        console.warn(
          `Failed to load custom template from ${templatePath}, using default template:`,
          error
        );
      }
    }

    return this.renderTemplate(template, data);
  }

  /**
   * 从文件信息生成模板数据
   */
  generateTemplateData(fileInfo: FileInfo, navigation: NavigationItem[]): TemplateData {
    const now = new Date();
    const defaultMetadata = {
      title: fileInfo.name,
      lastUpdated: now.toISOString().split('T')[0], // YYYY-MM-DD格式
      readingTime: Math.ceil((fileInfo.content.length || 0) / 1000), // 粗略估计：每1000字符约1分钟
      version: '1.0.0',
      buildDate: now.toLocaleDateString('zh-CN'),
    };

    return {
      title: fileInfo.metadata?.title || fileInfo.name, // 优先使用提取的标题，如果没有则使用文件名
      content: fileInfo.html || '',
      navigation,
      metadata: { ...defaultMetadata, ...fileInfo.metadata },
      currentPath: `/${fileInfo.relativePath.replace(/\.md$/, '.html')}`,
      prevLink: '',
      nextLink: '',
    };
  }

  /**
   * 生成输出文件路径
   */
  getOutputPath(fileInfo: FileInfo, outDir: string): string {
    const htmlFileName = `${fileInfo.name}.html`;
    const relativeDir = path.dirname(fileInfo.relativePath);
    return path.join(outDir, relativeDir, htmlFileName);
  }

  /**
   * 保存渲染结果到文件
   */
  async saveToFile(html: string, outputPath: string): Promise<void> {
    // 确保目录存在
    const dir = path.dirname(outputPath);
    await fs.mkdir(dir, { recursive: true });

    // 写入文件
    await fs.writeFile(outputPath, html, 'utf-8');
  }
}
