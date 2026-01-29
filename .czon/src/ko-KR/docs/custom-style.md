---
"title": "CZON 사용자 정의 스타일 가이드"
"summary": "이 문서는 CZON 프로젝트에서 사용자 정의 스타일을 적용하는 방법을 상세히 설명합니다. 프로젝트의 .czon 디렉토리 아래에 style.css 파일을 생성하고 CSS 코드를 작성하여 기본 스타일을 덮어쓰거나 개인화된 외관을 추가할 수 있습니다. 문서는 CZON이 빌드 시 해당 파일을 감지하여 출력 디렉토리로 복사하고, 각 HTML 페이지에 스타일 링크를 추가하여 사용자 정의 스타일이 내장 스타일 이후에 로드되어 덮어쓰기 효과를 보장하는 방식을 설명합니다. 문서에서는 배경색, 텍스트 색상, 링크 색상 등을 포함한 사용 가능한 CSS 변수 목록을 제공하고, 브랜드 색상 사용자 정의, 콘텐츠 영역 너비 조정, 코드 블록 스타일 사용자 정의, 특정 요소 숨기기 등 여러 실제 예시를 보여줍니다. 마지막으로 파일명은 반드시 style.css여야 함, 수정 후 재빌드 필요, CSS 변수 덮어쓰기 사용 권장, CZON이 Tailwind CSS를 사용할 때 !important가 필요할 수 있음 등의 주의사항을 강조합니다."
"tags":
  - "CZON"
  - "사용자 정의 스타일"
  - "CSS"
  - "프론트엔드 개발"
  - "웹사이트 빌드"
  - "스타일 오버라이드"
  - "CSS 변수"
  - "Tailwind CSS"
---

# 사용자 정의 스타일

CZON은 `.czon/style.css` 파일을 통해 사이트 스타일을 사용자 정의하는 것을 지원하여, 기본 스타일을 덮어쓰거나 개인화된 외관을 추가할 수 있습니다.

## 사용 방법

1. 프로젝트의 `.czon` 디렉토리 아래에 `style.css` 파일을 생성합니다:

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- 이 파일 생성
├── README.md
└── docs/
```

2. `style.css`에서 사용자 정의 CSS를 작성합니다:

```css
/* 예시: 링크 색상 수정 */
:root {
  --link-color: #0066cc;
}

/* 예시: 다크 모드에서 배경 수정 */
html.dark {
  --bg-primary: #0d1117;
}
```

3. `czon build`를 다시 실행하면, 사용자 정의 스타일이 모든 페이지에 자동으로 적용됩니다.

## 작동 원리

- 빌드 시, CZON은 `.czon/style.css` 파일의 존재 여부를 감지합니다.
- 파일이 존재하면, 출력 디렉토리 `.czon/dist/style.css`로 복사합니다.
- 생성된 각 HTML 페이지의 `<head>` 내부에 스타일 링크를 추가합니다:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- 사용자 정의 스타일은 내장 스타일 이후에 로드되므로, 기본 스타일을 덮어쓸 수 있습니다.

## 사용 가능한 CSS 변수

CZON은 테마 색상을 정의하기 위해 CSS 변수를 사용합니다. 이러한 변수를 덮어씀으로써 색상 구성을 빠르게 조정할 수 있습니다:

```css
:root {
  /* 배경색 */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* 텍스트 색상 */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* 링크 및 강조 색상 */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* 테두리 색상 */
  --border-color: #dee2e6;
}

/* 다크 모드 변수 */
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

## 예시

### 브랜드 색상 사용자 정의

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

### 콘텐츠 영역 너비 조정

```css
.content {
  max-width: 60rem;
}
```

### 코드 블록 스타일 사용자 정의

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### 특정 요소 숨기기

```css
/* 오른쪽 사이드바(목차) 숨기기 */
.sidebar-right {
  display: none;
}
```

## 주의사항

- 사용자 정의 스타일 파일명은 반드시 `style.css`여야 하며, `.czon/` 디렉토리 아래에 위치해야 합니다.
- 스타일 수정 후에는 `czon build`를 다시 실행해야 적용됩니다.
- CSS 변수 덮어쓰기 방식을 사용하여 스타일을 맞춤 설정하는 것이 좋습니다. 이렇게 하면 라이트 모드와 다크 모드를 모두 호환할 수 있습니다.
- CZON은 Tailwind CSS를 사용합니다. Tailwind에서 생성된 스타일을 덮어쓰려면 `!important`가 필요할 수 있습니다.