---
"title": "CZON - AI-Native Markdown Content Engine"
"summary": "CZON is an AI-native Markdown content engine designed to help content creators simplify their writing workflow. It emphasizes zero-configuration writing, deeply integrating AI technology to automatically handle tasks such as title generation, summary extraction, tag categorization, multilingual translation, and site navigation, thereby reducing user distraction. CZON includes built-in static site generation but primarily focuses on content creation and management rather than complex theme customization. It is suitable for users who wish to write in their native language and automatically generate multilingual versions, especially for website content creators who dislike complex configurations."
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

# CZON - AI-Native Markdown Content Engine

- **C**: **C**ontent oriented | Content is king, focus on content
- **Z**: **Z**ero Configuration | Zero-configuration writing, minimize interruptions
- **O**: **O**rganic AI-Native | Organic AI-native, deeply integrated AI
- **N**: **N**-shaped Energy Curve | N-shaped energy curve, involved in creation-distribution-feedback at every stage

[> Website Demo](https://czon.zccz14.com/)

In the AI era, as website content creators, we can have a more intelligent content creation engine.

**Return to Content: Minimize Distractions, Focus on Writing**

Let documents return to their essence, let writing return to tranquility.

First, I don't want to be a librarian. Sometimes I want to jot down some content, but I might not have thought of its title yet, or haven't organized it particularly well. I hope an LLM will automatically help me generate titles, create summaries, categorize, navigate, and handle other organizational tasks.

Second, my study must be kept tidy. I don't want complex configuration tools, fiddling with intricate documentation setups, or complicated structures. Every time I see the configuration files and project structures of tools like Docusaurus, VuePress, or Astro, I get a headache. Now, CZON chooses to hide all configurations in the `.czon` directory, sweeping them into a corner. Users only need to focus on writing content; CZON handles the rest. All other directories are your writing space; you can organize your Markdown files however you like.

**Return to Native Language: Write in Your Native Language, Smoothly Build Multilingual Versions**

Life is short; I'm too lazy to translate. People can best leverage the depth of their thinking when using their native language. Yet, staying connected to the world is necessary; I don't want to give up multilingual communication. Therefore, I wish for a tool that allows me to write in my native language while enabling more people to see my content. Current i18n solutions not only require self-translation but also self-maintenance of content updates, which is too troublesome. I choose to use an LLM to handle translation for me, saving a lot of time and allowing one-click translation into multiple languages.

## Core Features

1. 🌍 **Automatic Multilingual Translation**: Uses AI for incremental translation, allowing users to write Markdown in their native language while the output can be multilingual.
2. 💭 **Automatic Summary Extraction**: Uses AI to analyze and extract key points from the original text.
3. 🏷️ **Automatic Tag Categorization**: Uses AI to extract and manage tags and categories for content.
4. 🧭 **Intelligent Categorization & Navigation**: Uses AI to generate site maps and navigation, insensitive to the location of source files.

## Static Site Generation (SSG)

CZON includes a built-in SSG solution that can build any git folder containing Markdown into a static HTML site.

⚠️ Please note: CZON is not a professional Static Site Generator (SSG); it is an AI-driven Markdown content engine focused on content creation and management.

✅ CZON aims to simplify the content creation and publishing process, allowing users to focus on writing itself rather than being bogged down by complex configurations and tools.

❌ CZON will not provide complex theme customization or a plugin ecosystem; it focuses on enhancing content quality and accessibility through AI.

🔔 However, CZON can still generate static sites. If necessary, CZON can be used as a preprocessor and integrated with other SSG solutions to generate personalized, aesthetically pleasing sites.

## Quick Start

Prerequisites:

- [Node.js](https://nodejs.org/) installed (version 18 or above recommended, requires `npx` command)
- An [OpenAI API Key](https://platform.openai.com/account/api-keys) obtained, or an OpenAI-compatible API Key
- Git installed (used to list Markdown files from Git, ignoring files filtered by .gitignore rules)

First, work within a folder already managed by Git:

Configure environment variables

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Required: Replace with your OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optional, defaults to the official OpenAI API
export OPENAI_MODEL="gpt-3.5-turbo"  # Optional, defaults to the gpt-3.5-turbo model
export OPENAI_MAX_TOKENS="4096"  # Optional, sets the maximum token limit (if omitted, uses the model's default; for long-text translation, a higher value like 8192 is recommended, depending on the model's maximum supported tokens)
```

Build the site, supporting multilingual translation. Uses the current directory as the source and outputs to the `.czon/dist` directory.

- You can specify the language versions to generate by using the `--lang` parameter multiple times (e.g., `--lang zh-Hans --lang en-US`).
- No need to configure the source language; CZON will detect it automatically.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**View more parameters or help**:

```bash
npx czon@latest
```