---
"title": "Посібник з налаштування сайту CZON"
"summary": "Цей документ детально описує методи та параметри налаштування сайту CZON. Конфігурація знаходиться в полі `options.site` файлу `.czon/meta.json` та включає `site.baseUrl` (використовується для генерації `sitemap.xml` та `robots.txt`), `site.title` (назва сайту, значення за замовчуванням — 'CZON'), `site.gaID` (Google Analytics Measurement ID) та `site.clarityID` (Microsoft Clarity Project ID). Усі параметри є необов'язковими. Після внесення змін необхідно повторно запустити `czon build`, щоб вони набули чинності. Якщо `baseUrl` не налаштовано, генерація `sitemap.xml` буде пропущена. Інструменти аналітики завантажуються лише після налаштування відповідного ID, що не впливає на продуктивність сторінок. Документ містить інформацію про розташування конфігурації, доступні параметри, повний приклад та важливі зауваження, що допомагає користувачам легко налаштувати свій сайт."
"tags":
  - "CZON"
  - "Налаштування сайту"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Налаштування сайту

CZON підтримує налаштування параметрів сайту через файл `.czon/meta.json`. Ці налаштування є необов'язковими та не блокують перше використання.

## Розташування конфігурації

Параметри конфігурації знаходяться в полі `options.site` файлу `.czon/meta.json`:

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

## Доступні параметри конфігурації

### `site.baseUrl`

Базова URL-адреса сайту, що використовується для генерації `sitemap.xml` та `robots.txt`.

- **Тип**: `string`
- **Формат**: Повна URL-адреса, наприклад `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Після налаштування автоматично генеруються:

- `sitemap.xml` — карта сайту, що містить усі сторінки
- Оголошення Sitemap у файлі `robots.txt`

### `site.title`

Назва сайту, що відображається у верхній частині сторінки.

- **Тип**: `string`
- **Значення за замовчуванням**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Моя документація"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, що використовується для інтеграції статистики Google Analytics.

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

Спосіб отримання: перейдіть до [Google Analytics](https://analytics.google.com/), створіть ресурс і отримайте Measurement ID у розділі «Потоки даних».

### `site.clarityID`

Microsoft Clarity Project ID, що використовується для інтеграції аналітики поведінки користувачів Clarity.

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

Спосіб отримання: перейдіть до [Microsoft Clarity](https://clarity.microsoft.com/), створіть проект і отримайте Project ID у налаштуваннях проекту.

## Повний приклад

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Технічний блог",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Важливі зауваження

- Після зміни конфігурації необхідно повторно запустити `czon build`, щоб зміни набули чинності.
- Усі параметри `site` є необов'язковими, можна налаштувати лише потрібні частини.
- Інструменти аналітики (GA, Clarity) завантажуються лише після налаштування відповідного ID, що не впливає на продуктивність сторінок.
- Якщо `baseUrl` не налаштовано, генерація `sitemap.xml` буде пропущена.