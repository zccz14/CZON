---
"title": "CZON自定义样式指南"
"summary": "本文详细介绍了CZON项目中自定义样式的方法，通过在项目的.czony目录下创建style.css文件并编写CSS代码，可以覆盖默认样\
  式或添加个性化外观。文档解释了CZON在构建时会检测并复制该文件到输出目录，并在每个HTML页面中添加样式链接，确保自定义样式在内置样式之后加载以实现覆盖\
  效果。文中提供了可用的CSS变量列表，包括背景色、文字色、链接色等，并展示了多个实际示例，如自定义品牌色、调整内容区域宽度、自定义代码块样式和隐藏特定元素\
  。最后强调了注意事项，如文件名必须为style.css、修改后需重新构建、建议使用CSS变量覆盖以及CZON使用Tailwind
  CSS时可能需要使用!important。"
"tags":
  - "CZON"
  - "自定义样式"
  - "CSS"
  - "前端开发"
  - "网站构建"
  - "样式覆盖"
  - "CSS变量"
  - "Tailwind CSS"
---

# 自定义样式

CZON 支持通过 `.czon/style.css` 文件自定义站点样式，让你可以覆盖默认样式或添加个性化的外观。

## 使用方法

1. 在项目的 `.czon` 目录下创建 `style.css` 文件：

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- 创建此文件
├── README.md
└── docs/
```

2. 在 `style.css` 中编写你的自定义 CSS：

```css
/* 示例：修改链接颜色 */
:root {
  --link-color: #0066cc;
}

/* 示例：修改暗色模式下的背景 */
html.dark {
  --bg-primary: #0d1117;
}
```

3. 重新运行 `czon build`，自定义样式会自动应用到所有页面。

## 工作原理

- 构建时，CZON 会检测 `.czon/style.css` 是否存在
- 如果存在，将其复制到输出目录 `.czon/dist/style.css`
- 在每个生成的 HTML 页面中，会在 `<head>` 内添加样式链接：
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- 自定义样式在内置样式之后加载，因此可以覆盖默认样式

## 可用的 CSS 变量

CZON 使用 CSS 变量定义主题颜色，你可以通过覆盖这些变量来快速调整配色：

```css
:root {
  /* 背景色 */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* 文字色 */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* 链接和强调色 */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* 边框色 */
  --border-color: #dee2e6;
}

/* 暗色模式变量 */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## 示例

### 自定义品牌色

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### 调整内容区域宽度

```css
.content {
  max-width: 60rem;
}
```

### 自定义代码块样式

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### 隐藏特定元素

```css
/* 隐藏右侧目录栏 */
.sidebar-right {
  display: none;
}
```

## 注意事项

- 自定义样式文件名必须是 `style.css`，放置在 `.czon/` 目录下
- 修改样式后需要重新运行 `czon build` 才能生效
- 建议使用 CSS 变量覆盖的方式进行样式定制，这样可以同时兼容亮色和暗色模式
- CZON 使用 Tailwind CSS，如果需要覆盖 Tailwind 生成的样式，可能需要使用 `!important`
