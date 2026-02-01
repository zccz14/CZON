---
"title": "CZON 사이트 구성 가이드"
"summary": "이 문서는 CZON 사이트 구성 방법과 옵션을 상세히 설명합니다. 구성은 .czon/meta.json 파일의 options.site 필드에 위치하며, site.baseUrl(sitemap.xml 및 robots.txt 생성용), site.title(사이트 제목, 기본값 'CZON'), site.gaID(Google Analytics Measurement ID), site.clarityID(Microsoft Clarity Project ID)를 포함합니다. 모든 구성 항목은 선택 사항이며, 수정 후에는 czon build를 다시 실행해야 적용됩니다. baseUrl이 구성되지 않으면 sitemap.xml 생성을 건너뛰며, 분석 도구는 해당 ID가 구성된 경우에만 로드되어 페이지 성능에 영향을 주지 않습니다. 문서는 구성 위치, 사용 가능한 구성 항목, 완전한 예시 및 주의사항을 제공하여 사용자가 사이트를 쉽게 설정할 수 있도록 돕습니다."
"tags":
  - "CZON"
  - "사이트 구성"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# 사이트 구성

CZON은 `.czon/meta.json` 파일을 통해 사이트 옵션을 구성할 수 있습니다. 이 구성은 선택 사항이며, 초기 사용을 차단하지 않습니다.

## 구성 위치

구성 항목은 `.czon/meta.json` 파일의 `options.site` 필드에 있습니다:

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
        { "title": "홈", "href": "index.html" },
        { "title": "소개", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## 사용 가능한 구성 항목

### `site.baseUrl`

사이트 기본 URL로, sitemap.xml 및 robots.txt 생성에 사용됩니다.

- **타입**: `string`
- **형식**: `https://example.com`과 같은 완전한 URL

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

구성하면 자동으로 생성됩니다:

- `sitemap.xml` - 모든 페이지를 포함하는 사이트맵
- `robots.txt` 내의 Sitemap 선언

### `site.title`

사이트 제목으로, 페이지 헤더에 표시됩니다.

- **타입**: `string`
- **기본값**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "내 문서 사이트"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID로, Google Analytics 통계 통합에 사용됩니다.

- **타입**: `string`
- **형식**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

획득 방법: [Google Analytics](https://analytics.google.com/)로 이동하여 속성을 생성하고, '데이터 스트림'에서 Measurement ID를 획득하세요.

### `site.clarityID`

Microsoft Clarity Project ID로, Clarity 사용자 행동 분석 통합에 사용됩니다.

- **타입**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

획득 방법: [Microsoft Clarity](https://clarity.microsoft.com/)로 이동하여 프로젝트를 생성하고, 프로젝트 설정에서 Project ID를 획득하세요.

### `site.home`

홈페이지 경로 구성으로, 사용자 정의 홈페이지 리디렉션 대상에 사용됩니다.

- **타입**: `string`
- **기본값**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**동작 설명**:

- **루트 홈페이지 접근 시**: 사용자가 `/index.html`에 접근하면 브라우저 언어에 따라 `/{감지된 언어}/{home}`으로 자동 리디렉션됩니다.
- **헤더 제목 클릭 시**: 현재 언어 디렉토리 하위의 `home` 경로로 이동합니다.

**사용 시나리오**:

- 사용자가 처음 접속할 때 특정 페이지(예: 시작 가이드, 제품 소개 등)로 직접 진입하도록 하고 싶을 때
- 사이트 홈페이지가 글 목록이 아닌 특정 문서 페이지일 때

### `site.navLinks`

빠른 탐색 링크 구성으로, 페이지 헤더에 탐색 링크를 표시합니다.

- **타입**: `Array<{ title: string, href: string }>`
- **기본값**: `undefined` (탐색을 표시하지 않음)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "홈", "href": "index.html" },
        { "title": "문서", "href": "docs.html" },
        { "title": "소개", "href": "about.html" }
      ]
    }
  }
}
```

**반응형 동작**:

- **모바일**: 햄버거 메뉴 아이콘을 표시하고, 클릭 시 모든 탐색 링크를 펼쳐 보여줍니다.
- **데스크톱**: 헤더에 직접 탐색 링크를 표시하지만, 화면 너비의 40%를 초과하지 않습니다. 초과 부분은 '더보기' 드롭다운 메뉴를 통해 표시됩니다.

## 완전한 예시

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "기술 블로그",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "홈", "href": "index.html" },
        { "title": "문서", "href": "docs.html" },
        { "title": "블로그", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## 주의사항

- 구성을 수정한 후에는 `czon build`를 다시 실행해야 적용됩니다.
- 모든 `site` 구성 항목은 선택 사항이며, 필요한 부분만 구성할 수 있습니다.
- 분석 도구(GA, Clarity)는 해당 ID가 구성된 경우에만 로드되며, 페이지 성능에 영향을 주지 않습니다.
- `baseUrl`이 구성되지 않으면 sitemap.xml 생성을 건너뜁니다.