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
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id"
    }
  },
  "files": []
}
```

## 사용 가능한 구성 항목

### `site.baseUrl`

사이트 기본 URL로, sitemap.xml 및 robots.txt 생성에 사용됩니다.

- **유형**: `string`
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

- **유형**: `string`
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

- **유형**: `string`
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

확인 방법: [Google Analytics](https://analytics.google.com/)로 이동하여 속성을 생성하고, '데이터 스트림'에서 Measurement ID를 확인하세요.

### `site.clarityID`

Microsoft Clarity Project ID로, Clarity 사용자 행동 분석 통합에 사용됩니다.

- **유형**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

확인 방법: [Microsoft Clarity](https://clarity.microsoft.com/)로 이동하여 프로젝트를 생성하고, 프로젝트 설정에서 Project ID를 확인하세요.

## 완전한 예시

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "기술 블로그",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## 주의사항

- 구성 수정 후에는 `czon build`를 다시 실행해야 적용됩니다.
- 모든 `site` 구성 항목은 선택 사항이며, 필요한 부분만 구성할 수 있습니다.
- 분석 도구(GA, Clarity)는 해당 ID가 구성된 경우에만 로드되며, 페이지 성능에 영향을 주지 않습니다.
- `baseUrl`이 구성되지 않으면 sitemap.xml 생성을 건너뜁니다.