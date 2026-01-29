---
"title": "Руководство по настройке сайта CZON"
"summary": "В этом документе подробно описаны методы и параметры настройки сайта CZON. Конфигурация находится в поле `options.site` файла `.czon/meta.json` и включает `site.baseUrl` (для генерации `sitemap.xml` и `robots.txt`), `site.title` (заголовок сайта, по умолчанию 'CZON'), `site.gaID` (Google Analytics Measurement ID) и `site.clarityID` (Microsoft Clarity Project ID). Все параметры являются необязательными. После внесения изменений необходимо повторно запустить `czon build`. Если `baseUrl` не настроен, генерация `sitemap.xml` пропускается. Инструменты аналитики загружаются только при наличии соответствующего ID и не влияют на производительность страницы. Документ содержит информацию о расположении конфигурации, доступных параметрах, полном примере и важных замечаниях, что помогает пользователям легко настроить сайт."
"tags":
  - "CZON"
  - "Настройка сайта"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Настройка сайта

CZON поддерживает настройку параметров сайта через файл `.czon/meta.json`. Эти настройки являются необязательными и не блокируют первое использование.

## Расположение конфигурации

Параметры конфигурации находятся в поле `options.site` файла `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Главная", "href": "index.html" },
        { "title": "О нас", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Доступные параметры конфигурации

### `site.baseUrl`

Базовый URL сайта, используется для генерации `sitemap.xml` и `robots.txt`.

- **Тип**: `string`
- **Формат**: Полный URL, например `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

После настройки автоматически генерируются:

- `sitemap.xml` — карта сайта, содержащая все страницы
- Объявление Sitemap в `robots.txt`

### `site.title`

Заголовок сайта, отображается в верхней части страницы.

- **Тип**: `string`
- **Значение по умолчанию**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Моя документация"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, используется для интеграции статистики Google Analytics.

- **Тип**: `string`
- **Формат**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

**Как получить**: Перейдите в [Google Analytics](https://analytics.google.com/), создайте ресурс и получите Measurement ID в разделе «Потоки данных».

### `site.clarityID`

Microsoft Clarity Project ID, используется для интеграции анализа поведения пользователей Clarity.

- **Тип**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

**Как получить**: Перейдите в [Microsoft Clarity](https://clarity.microsoft.com/), создайте проект и получите Project ID в настройках проекта.

### `site.navLinks`

Конфигурация ссылок для быстрой навигации, отображается в верхней части страницы.

- **Тип**: `Array<{ title: string, href: string }>`
- **Значение по умолчанию**: `undefined` (навигация не отображается)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Главная", "href": "index.html" },
        { "title": "Документация", "href": "docs.html" },
        { "title": "О нас", "href": "about.html" }
      ]
    }
  }
}
```

**Адаптивное поведение**:

- **Мобильные устройства**: Отображается значок гамбургер-меню, при нажатии раскрываются все ссылки навигации.
- **Десктоп**: Ссылки навигации отображаются непосредственно в заголовке, но не более 40% ширины экрана; дополнительные ссылки отображаются через выпадающее меню «Ещё».

## Полный пример

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Технический блог",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Главная", "href": "index.html" },
        { "title": "Документация", "href": "docs.html" },
        { "title": "Блог", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Важные замечания

- После изменения конфигурации необходимо повторно запустить `czon build`, чтобы изменения вступили в силу.
- Все параметры `site` являются необязательными, можно настраивать только необходимые части.
- Инструменты аналитики (GA, Clarity) загружаются только при наличии соответствующего ID и не влияют на производительность страницы.
- Если `baseUrl` не настроен, генерация `sitemap.xml` пропускается.