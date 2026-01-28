---
"title": "CZON - AI 原生 Markdown 內容引擎"
"summary": "CZON 是一個 AI 原生的 Markdown 內容引擎，旨在幫助內容創作者簡化寫作流程。它強調零配置寫作，透過深度整合 AI
  技術，自動處理標題生成、摘要提取、標籤分類、多語言翻譯和站點導航等任務，減少使用者干擾。CZON
  內建靜態站點生成功能，但主要專注於內容創作和管理，而非複雜的主題客製化。它適合希望用母語寫作並自動生成多語言版本的使用者，尤其適合討厭複雜配置的網站內容創作者\
  。"
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "內容引擎"
  - "多語言翻譯"
  - "靜態站點生成"
  - "零配置"
  - "內容創作"
---

![CZON 的標誌](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 瀏覽 CZON 網站 🚀
    </a>
</div>

# CZON - AI 原生 Markdown 內容引擎

- **C**: **C**ontent oriented | 內容為王，專注內容
- **Z**: **Z**ero Configuration | 零配置寫作，減少打擾
- **O**: **O**rganic AI-Native | 有機的 AI 原生，深度整合 AI
- **N**: **N**-shaped Energy Curve | N 型能量曲線，介入創作-分發-回饋的各個環節

AI 時代下，作為網站內容創作者，我們可以有更智慧的內容創作引擎。

**回歸內容：最小化打擾，專注寫作**

讓文件回歸本質，讓寫作回歸寧靜。

其一，我不想當圖書管理員。我有時想寫下一些內容，但我可能還沒想好它的標題，還沒形成特別的組織。我希望 LLM 會自動幫我生成標題、做摘要、分類、導航等整理工作。

其二，我的書房必須打掃乾淨。我不想要配置複雜的建置工具，折騰複雜的文件配置，不喜歡複雜的結構。每次我看到 Docusaurus、VuePress、Astro 這些工具的配置檔案和專案結構，我就頭疼。現在，CZON 選擇將所有的配置都隱藏到 .czon 目錄下，掃到角落裡，使用者只需要專注於寫作內容，其他的交給 CZON 來處理。其他的目錄都是您的寫作空間，您可以隨意組織您的 Markdown 檔案。

**回歸母語：用母語寫作，流暢建置多語言版本**

人生苦短，我懶得翻譯。人在使用母語時，才是最能發揮自身思考深度的。但同時與世界保持連接又是必要的，我不想放棄多語言的交流。於是我希望有一個工具，能讓我用母語寫作，同時又能讓更多人看到我的內容。現在的 i18n 需要自己翻譯不說，還得自己維護內容更新，太麻煩了。我選擇使用 LLM 來幫我做翻譯，省下了我很多時間，並且可以一鍵完成多國語言翻譯。

## ✨ 核心功能

1. 🌍 **AI 多語言翻譯**：使用 AI 進行增量翻譯，讓使用者使用母語編寫 Markdown，但是使用者可以是多語言的。
2. 📊 **AI 元資料提取**：自動提取標題、描述、摘要、關鍵字、目標讀者、URL 友好別名等。
3. 🏷️ **AI 標籤分類**：使用 AI 對內容進行標籤和分類的提取和管理。
4. 🧭 **AI 分類導航**：使用 AI 生成站點地圖和導航，原始檔的位置不敏感。
5. 🤖 **AI 全站摘要**：可使用多種風格生成全站摘要。

以及一些非 AI 功能點：

1. ⚙️ **零配置**：所有配置和快取隱藏在 `.czon` 目錄，專案結構保持整潔。
2. 🔄 **增量建置**：基於內容雜湊檢測變更，僅處理變更檔案。
3. 📚 **Markdown 擴充支援**：原生支援 KaTeX 數學公式、Mermaid 圖表、Embla 輪播圖、註腳等。
4. 🚀 **靜態站點生成**：內建 React-based SSG，生成多語言靜態站點。
5. 🌐 **自動根據訪問者語言路由**：根據訪問者的語言自動路由到對應的語言版本。

## 📦 快速開始

### 前提條件

- 已安裝 [Node.js](https://nodejs.org/)（建議使用 LTS 版本 24，或者版本 18 及以上，需要有 npx 命令）
- 已取得 [OpenAI API Key](https://platform.openai.com/account/api-keys)，或者 OPENAI 相容的 API Key
- 已安裝 Git（用於從 Git 列出 Markdown 檔案，忽略 .gitignore 規則過濾的檔案）

### 環境變數配置

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # 必須：請替換為您的 OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # 可選，預設使用 OpenAI 官方 API
export OPENAI_MODEL="gpt-3.5-turbo"  # 可選，預設使用 gpt-3.5-turbo 模型
export OPENAI_MAX_TOKENS="4096"  # 可選，設定最大 token 數量限制 (忽略則使用模型的預設值，對於長文字翻譯建議設定更高的值，例如 8192，具體取決於所使用的模型支援的最大 token 數量)

# 如果需要使用 HTTP 代理訪問 OpenAI API，可以設定以下變數
export HTTPS_PROXY="http://your-proxy.com:8080"  # 可選，設定 HTTPS 代理
export HTTP_PROXY="http://your-proxy.com:8080"   # 可選，設定 HTTP 代理
```

### 建置多語言站點

在任意 Git 管理的資料夾中執行：

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

由於語言代碼後續會用作靜態站點生成中許多功能的一部分，請確保使用 BCP 47 標準的語言代碼。例如，`zh-Hans` 代表簡體中文，`en-US` 代表美國英語。您可以根據需要新增更多語言，例如 `es-ES` (西班牙語) `ja-JP`（日語）、`ko-KR`（韓語）等。
標準語言代碼列表請參考 [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags)。

輸出目錄：`.czon/dist`，後續需要部署該目錄下的內容到靜態站點託管平台。

詳細用法請執行 `npx czon@latest --help`。

## 🔗 與其他工具的比較

| 特性               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------ | ------------------------ | --------------- | --------------- | --------------- |
| **AI 原生**        | ✅ 深度整合              | ❌              | ❌              | ❌              |
| **零配置**         | ✅ 隱藏配置              | ❌ 需要配置檔案 | ❌ 需要配置檔案 | ❌ 需要配置檔案 |
| **多語言 AI 翻譯** | ✅ 自動增量翻譯          | ❌ 手動翻譯     | ❌ 手動翻譯     | ❌ 手動翻譯     |
| **自動分類/標籤**  | ✅ AI 提取               | ❌ 手動配置     | ❌ 手動配置     | ❌ 手動配置     |
| **Markdown 擴充**  | ✅ KaTeX, Mermaid, Embla | ✅ 透過外掛     | ✅ 透過外掛     | ✅ 透過外掛     |
| **主題客製化**     | ❌ 有限                  | ✅ 豐富         | ✅ 豐富         | ✅ 豐富         |

CZON 定位為 **AI 增強的內容引擎**，而非全功能 SSG。它專注於透過 AI 提升內容創作效率，適合注重內容品質、希望減少配置負擔的創作者。實際上，CZON 可以與 Docusaurus、VuePress、Astro 等 SSG 工具結合使用，作為內容生成和管理的前端引擎。

## 📞 支援

- 專案主頁: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord 討論區: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_讓寫作回歸寧靜，讓內容自然生長。_