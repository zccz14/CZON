---
"title": "CZON自訂樣式指南"
"summary": "本文詳細介紹了CZON專案中自訂樣式的方法，透過在專案的.czony目錄下建立style.css檔案並編寫CSS程式碼，可以覆蓋預設樣式或新增個人化外觀。文件解釋了CZON在建構時會偵測並複製該檔案到輸出目錄，並在每個HTML頁面中新增樣式連結，確保自訂樣式在內建樣式之後載入以實現覆蓋效果。文中提供了可用的CSS變數列表，包括背景色、文字色、連結色等，並展示了多個實際範例，如自訂品牌色、調整內容區域寬度、自訂程式碼區塊樣式和隱藏特定元素。最後強調了注意事項，如檔案名稱必須為style.css、修改後需重新建構、建議使用CSS變數覆蓋以及CZON使用Tailwind CSS時可能需要使用!important。"
"tags":
  - "CZON"
  - "自訂樣式"
  - "CSS"
  - "前端開發"
  - "網站建構"
  - "樣式覆蓋"
  - "CSS變數"
  - "Tailwind CSS"
---

# 自訂樣式

CZON 支援透過 `.czon/style.css` 檔案自訂站點樣式，讓你可以覆蓋預設樣式或新增個人化的外觀。

## 使用方法

1. 在專案的 `.czon` 目錄下建立 `style.css` 檔案：

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- 建立此檔案
├── README.md
└── docs/
```

2. 在 `style.css` 中編寫你的自訂 CSS：

```css
/* 範例：修改連結顏色 */
:root {
  --link-color: #0066cc;
}

/* 範例：修改暗色模式下的背景 */
html.dark {
  --bg-primary: #0d1117;
}
```

3. 重新執行 `czon build`，自訂樣式會自動套用到所有頁面。

## 運作原理

- 建構時，CZON 會偵測 `.czon/style.css` 是否存在
- 如果存在，將其複製到輸出目錄 `.czon/dist/style.css`
- 在每個產生的 HTML 頁面中，會在 `<head>` 內新增樣式連結：
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- 自訂樣式在內建樣式之後載入，因此可以覆蓋預設樣式

## 可用的 CSS 變數

CZON 使用 CSS 變數定義主題顏色，你可以透過覆蓋這些變數來快速調整配色：

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

  /* 連結和強調色 */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* 邊框色 */
  --border-color: #dee2e6;
}

/* 暗色模式變數 */
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

## 範例

### 自訂品牌色

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

### 調整內容區域寬度

```css
.content {
  max-width: 60rem;
}
```

### 自訂程式碼區塊樣式

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### 隱藏特定元素

```css
/* 隱藏右側目錄欄 */
.sidebar-right {
  display: none;
}
```

## 注意事項

- 自訂樣式檔案名稱必須是 `style.css`，放置在 `.czon/` 目錄下
- 修改樣式後需要重新執行 `czon build` 才能生效
- 建議使用 CSS 變數覆蓋的方式進行樣式定製，這樣可以同時相容亮色和暗色模式
- CZON 使用 Tailwind CSS，如果需要覆蓋 Tailwind 產生的樣式，可能需要使用 `!important`