---
"title": "CZON - AI-Native Markdown 内容引擎"
"summary": "CZON 是一个 AI 原生的 Markdown 内容引擎，旨在帮助内容创作者简化写作流程。它强调零配置写作，通过深度集成 AI
  技术，自动处理标题生成、摘要提取、标签分类、多语言翻译和站点导航等任务，减少用户干扰。CZON
  内置静态站点生成功能，但主要专注于内容创作和管理，而非复杂的主题定制。它适合希望用母语写作并自动生成多语言版本的用户，尤其适合讨厌复杂配置的网站内容创作者\
  。"
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "内容引擎"
  - "多语言翻译"
  - "静态站点生成"
  - "零配置"
  - "内容创作"
---

![Logo of CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 View Website of CZON 🚀
    </a>
</div>

# CZON - AI-Native Markdown 内容引擎

- **C**: **C**ontent oriented | 内容为王，专注内容
- **Z**: **Z**ero Configuration | 零配置写作，减少打扰
- **O**: **O**rganic AI-Native | 有机的 AI 原生，深度集成 AI
- **N**: **N**-shaped Energy Curve | N 型能量曲线，介入创作-分发-反馈的各个环节

AI 时代下，作为网站内容创作者，我们可以有更智能的内容创作引擎。

**回归内容：最小化打扰，专注写作**

让文档回归本质，让写作回归宁静。

其一，我不想做图书管理员。我有时想写下一些内容，但我可能还没有想好它的标题，还没有形成特别的组织。我希望 LLM 会自动帮我生成标题、做摘要、分类、导航等整理工作。

其二，我的书房必须打扫干净。我不想要配置复杂的构建工具，折腾复杂的文档配置，不喜欢复杂的结构。每次我看到 Docusaurus、VuePress、Astro 这些工具的配置文件和项目结构，我就头疼。现在，CZON 选择将所有的配置都隐藏到 .czon 目录下，扫到角落里，用户只需要专注于写作内容，其他的交给 CZON 来处理。其他的目录都是您的写作空间，您可以随意组织您的 Markdown 文件。

**回归母语：用母语写作，丝滑构建多语言版本**

人生苦短，我懒得翻译。人在使用母语时，才是最能发挥自身思考深度的。但同时与世界保持连接又是必要的，我不想放弃多语言的交流。于是我希望有一个工具，能让我用母语写作，同时又能让更多人看到我的内容。现在的 i18n 需要自己翻译不说，还得自己维护内容更新，太麻烦了。我选择使用 LLM 来帮我做翻译，省下了我很多时间，并且可以一键完成多国语言翻译。

## ✨ 核心功能

1. 🌍 **AI 多语言翻译**：使用 AI 进行增量翻译，让用户使用母语编写 Markdown，但是用户可以是多语言的。
2. 📊 **AI 元数据提取**：自动提取标题、描述、摘要、关键词、目标读者、URL 友好别名等。
3. 🏷️ **AI 标签分类**：使用 AI 对内容进行标签和分类的提取和管理。
4. 🧭 **AI 分类导航**：使用 AI 生成站点地图和导航，源文件的位置不敏感。
5. 🤖 **AI 全站摘要**：可使用多种风格生成全站摘要。

以及一些非 AI 功能点：

1. ⚙️ **零配置**：所有配置和缓存隐藏在 `.czon` 目录，项目结构保持整洁。
2. 🔄 **增量构建**：基于内容哈希检测更改，仅处理变更文件。
3. 📚 **Markdown 扩展支持**：原生支持 KaTeX 数学公式、Mermaid 图表、Embla 轮播图、脚注等。
4. 🚀 **静态站点生成**：内置 React-based SSG，生成多语言静态站点。
5. 🌐 **自动根据访问者语言路由**：根据访问者的语言自动路由到对应的语言版本。

## 📦 快速开始

### 前提条件

- 已安装 [Node.js](https://nodejs.org/)（建议使用 LTS 版本 24，或者版本 18 及以上，需要有 npx 命令）
- 已获取 [OpenAI API Key](https://platform.openai.com/account/api-keys)，或者 OPENAI 兼容的 API Key
- 已安装 Git（用于从 Git 列出 Markdown 文件，忽略 .gitignore 规则过滤的文件）

### 环境变量配置

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # 必须：请替换为您的 OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # 可选，默认使用 OpenAI 官方 API
export OPENAI_MODEL="gpt-3.5-turbo"  # 可选，默认使用 gpt-3.5-turbo 模型
export OPENAI_MAX_TOKENS="4096"  # 可选，设置最大 token 数量限制 (忽略则使用模型的默认值，对于长文本翻译建议设置更高的值，例如 8192，具体取决于所使用的模型支持的最大 token 数量)

# 如果需要使用 HTTP 代理访问 OpenAI API，可以设置以下变量
export HTTPS_PROXY="http://your-proxy.com:8080"  # 可选，设置 HTTPS 代理
export HTTP_PROXY="http://your-proxy.com:8080"   # 可选，设置 HTTP 代理
```

### 构建多语言站点

在任意 Git 管理的文件夹中运行：

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

由于语言代码后续会用作静态站点生成中许多功能的一部分，请确保使用 BCP 47 标准的语言代码。例如，`zh-Hans` 代表简体中文，`en-US` 代表美国英语。您可以根据需要添加更多语言，例如 `es-ES` (西班牙语) `ja-JP`（日语）、`ko-KR`（韩语）等。
标准语言代码列表请参考 [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags)。

输出目录：`.czon/dist`，后续需要部署该目录下的内容到静态站点托管平台。

详细用法请运行 `npx czon@latest --help`。

## 🔗 与其他工具的比较

| 特性               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------ | ------------------------ | --------------- | --------------- | --------------- |
| **AI 原生**        | ✅ 深度集成              | ❌              | ❌              | ❌              |
| **零配置**         | ✅ 隐藏配置              | ❌ 需要配置文件 | ❌ 需要配置文件 | ❌ 需要配置文件 |
| **多语言 AI 翻译** | ✅ 自动增量翻译          | ❌ 手动翻译     | ❌ 手动翻译     | ❌ 手动翻译     |
| **自动分类/标签**  | ✅ AI 提取               | ❌ 手动配置     | ❌ 手动配置     | ❌ 手动配置     |
| **Markdown 扩展**  | ✅ KaTeX, Mermaid, Embla | ✅ 通过插件     | ✅ 通过插件     | ✅ 通过插件     |
| **主题定制**       | ❌ 有限                  | ✅ 丰富         | ✅ 丰富         | ✅ 丰富         |

CZON 定位为 **AI 增强的内容引擎**，而非全功能 SSG。它专注于通过 AI 提升内容创作效率，适合注重内容质量、希望减少配置负担的创作者。实际上，CZON 可以与 Docusaurus、VuePress、Astro 等 SSG 工具结合使用，作为内容生成和管理的前端引擎。

## 📞 支持

- 项目主页: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord 讨论区: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_让写作回归宁静，让内容自然生长。_
