---
"title": "CZON - AI-Native Markdown Content Engine"
"summary": "CZON is an AI-native Markdown content engine designed to help content creators simplify their writing workflow. It emphasizes zero-configuration writing, deeply integrating AI technology to automatically handle tasks such as title generation, summary extraction, tag categorization, multilingual translation, and site navigation, thereby minimizing user distraction. CZON includes built-in static site generation but primarily focuses on content creation and management rather than complex theme customization. It is suitable for users who wish to write in their native language and automatically generate multilingual versions, especially for website content creators who dislike complex configurations."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Content Engine"
  - "Multilingual Translation"
  - "Static Site Generation"
  - "Zero Configuration"
  - "Content Creation"
---

![Logo of CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 View Website of CZON 🚀
    </a>
</div>

# CZON - AI-Native Markdown Content Engine

- **C**: **C**ontent oriented | Content is king, focus on content
- **Z**: **Z**ero Configuration | Zero-configuration writing, minimize interruptions
- **O**: **O**rganic AI-Native | Organic AI-native, deeply integrated AI
- **N**: **N**-shaped Energy Curve | N-shaped energy curve, involved in creation, distribution, and feedback at every stage

In the AI era, as website content creators, we can have a more intelligent content creation engine.

**Return to Content: Minimize Distractions, Focus on Writing**

Let documents return to their essence, let writing return to tranquility.

First, I don't want to be a librarian. Sometimes I want to jot down some content, but I might not have thought of its title yet, nor formed a specific organization. I hope LLMs will automatically help me generate titles, create summaries, categorize, navigate, and handle other organizational tasks.

Second, my study must be kept clean. I don't want complex build tools, fiddling with intricate documentation configurations, or complicated structures. Every time I see the configuration files and project structures of tools like Docusaurus, VuePress, and Astro, I get a headache. Now, CZON chooses to hide all configurations in the `.czon` directory, sweeping them into a corner. Users only need to focus on writing content; CZON handles the rest. All other directories are your writing space; you can organize your Markdown files however you like.

**Return to Native Language: Write in Your Native Language, Smoothly Build Multilingual Versions**

Life is short; I'm too lazy to translate. People can best leverage the depth of their thinking when using their native language. However, staying connected to the world is also necessary; I don't want to give up multilingual communication. Therefore, I wish for a tool that allows me to write in my native language while enabling more people to see my content. Current i18n solutions not only require manual translation but also manual maintenance of content updates, which is too troublesome. I choose to use LLMs to handle translation for me, saving a lot of time and allowing one-click translation into multiple languages.

## ✨ Core Features

1. 🌍 **AI Multilingual Translation**: Uses AI for incremental translation, allowing users to write Markdown in their native language while the content can be multilingual.
2. 📊 **AI Metadata Extraction**: Automatically extracts titles, descriptions, summaries, keywords, target audience, URL-friendly aliases, etc.
3. 🏷️ **AI Tag Categorization**: Uses AI to extract and manage tags and categories for content.
4. 🧭 **AI Classification Navigation**: Uses AI to generate site maps and navigation; source file location is not sensitive.
5. 🤖 **AI Site-wide Summary**: Can generate site-wide summaries in various styles.

And some non-AI features:

1. ⚙️ **Zero Configuration**: All configurations and caches are hidden in the `.czon` directory, keeping the project structure clean.
2. 🔄 **Incremental Build**: Detects changes based on content hashes, processing only modified files.
3. 📚 **Markdown Extension Support**: Natively supports KaTeX math formulas, Mermaid diagrams, Embla carousels, footnotes, etc.
4. 🚀 **Static Site Generation**: Built-in React-based SSG, generating multilingual static sites.
5. 🌐 **Automatic Routing Based on Visitor Language**: Automatically routes visitors to the corresponding language version based on their language.

## 📦 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) installed (LTS version 24 recommended, or version 18 and above, with `npx` command available)
- [OpenAI API Key](https://platform.openai.com/account/api-keys) obtained, or an OpenAI-compatible API Key
- Git installed (used to list Markdown files from Git, ignoring files filtered by .gitignore rules)

### Environment Variable Configuration

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Required: Replace with your OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optional, defaults to the official OpenAI API
export OPENAI_MODEL="gpt-3.5-turbo"  # Optional, defaults to the gpt-3.5-turbo model
export OPENAI_MAX_TOKENS="4096"  # Optional, sets the maximum token limit (if omitted, uses the model's default; for long-text translation, a higher value like 8192 is recommended, depending on the model's maximum supported tokens)

# If an HTTP proxy is needed to access the OpenAI API, set the following variables
export HTTPS_PROXY="http://your-proxy.com:8080"  # Optional, sets HTTPS proxy
export HTTP_PROXY="http://your-proxy.com:8080"   # Optional, sets HTTP proxy
```

### Building a Multilingual Site

Run in any Git-managed folder:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Since language codes will be used for many features in the static site generation, ensure you use BCP 47 standard language codes. For example, `zh-Hans` represents Simplified Chinese, and `en-US` represents American English. You can add more languages as needed, such as `es-ES` (Spanish), `ja-JP` (Japanese), `ko-KR` (Korean), etc.
For a list of standard language codes, please refer to [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Output directory: `.czon/dist`. The contents of this directory need to be deployed to a static site hosting platform.

For detailed usage, run `npx czon@latest --help`.

## 🔗 Comparison with Other Tools

| Feature               | CZON                     | Docusaurus      | VuePress        | Astro           |
| --------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Native**         | ✅ Deeply Integrated     | ❌              | ❌              | ❌              |
| **Zero Configuration**| ✅ Hidden Configuration  | ❌ Requires config file | ❌ Requires config file | ❌ Requires config file |
| **Multilingual AI Translation** | ✅ Automatic Incremental Translation | ❌ Manual translation | ❌ Manual translation | ❌ Manual translation |
| **Automatic Categorization/Tagging** | ✅ AI Extraction | ❌ Manual configuration | ❌ Manual configuration | ❌ Manual configuration |
| **Markdown Extensions** | ✅ KaTeX, Mermaid, Embla | ✅ Via plugins | ✅ Via plugins | ✅ Via plugins |
| **Theme Customization** | ❌ Limited | ✅ Rich | ✅ Rich | ✅ Rich |

CZON is positioned as an **AI-enhanced content engine**, not a full-featured SSG. It focuses on improving content creation efficiency through AI, suitable for creators who value content quality and wish to reduce configuration burden. In fact, CZON can be used in conjunction with SSG tools like Docusaurus, VuePress, and Astro, serving as a front-end engine for content generation and management.

## 📞 Support

- Project Homepage: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord Community: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Let writing return to tranquility, let content grow naturally._