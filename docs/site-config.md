# 站点配置

CZON 支持通过 `.czon/meta.json` 文件配置站点选项。这些配置是可选的，不会阻塞初次使用。

## 配置位置

配置项位于 `.czon/meta.json` 文件的 `options.site` 字段中：

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "首页", "href": "index.html" },
        { "title": "关于", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## 可用配置项

### `site.baseUrl`

站点基础 URL，用于生成 sitemap.xml 和 robots.txt。

- **类型**: `string`
- **格式**: 完整的 URL，如 `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

配置后会自动生成：

- `sitemap.xml` - 包含所有页面的站点地图
- `robots.txt` 中的 Sitemap 声明

### `site.title`

站点标题，显示在页面头部。

- **类型**: `string`
- **默认值**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "我的文档站"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID，用于集成 Google Analytics 统计。

- **类型**: `string`
- **格式**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

获取方式：前往 [Google Analytics](https://analytics.google.com/) 创建媒体资源，在「数据流」中获取 Measurement ID。

### `site.clarityID`

Microsoft Clarity Project ID，用于集成 Clarity 用户行为分析。

- **类型**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

获取方式：前往 [Microsoft Clarity](https://clarity.microsoft.com/) 创建项目，在项目设置中获取 Project ID。

### `site.home`

首页路径配置，用于自定义首页跳转目标。

- **类型**: `string`
- **默认值**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**行为说明**：

- **访问根首页时**：用户访问 `/index.html` 时，会根据浏览器语言自动跳转到 `/{检测到的语言}/{home}`
- **点击 Header 标题时**：跳转到当前语言目录下的 `home` 路径

**使用场景**：

- 希望用户首次访问时直接进入某个特定页面（如入门指南、产品介绍等）
- 站点首页不是文章列表，而是某个具体的文档页面

### `site.navLinks`

快速导航链接配置，在页面头部显示导航链接。

- **类型**: `Array<{ title: string, href: string }>`
- **默认值**: `undefined`（不显示导航）

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "首页", "href": "index.html" },
        { "title": "文档", "href": "docs.html" },
        { "title": "关于", "href": "about.html" }
      ]
    }
  }
}
```

**响应式行为**：

- **移动端**：显示汉堡菜单图标，点击展开全部导航链接
- **桌面端**：在 Header 中直接显示导航链接，但不超过屏幕宽度的 40%；超出部分通过「More」下拉菜单显示

## 完整示例

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "技术博客",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "首页", "href": "index.html" },
        { "title": "文档", "href": "docs.html" },
        { "title": "博客", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## 注意事项

- 修改配置后需要重新运行 `czon build` 才能生效
- 所有 `site` 配置项都是可选的，可以只配置需要的部分
- 分析工具（GA、Clarity）只有在配置了对应 ID 后才会加载，不影响页面性能
- 未配置 `baseUrl` 时，将跳过 sitemap.xml 生成
