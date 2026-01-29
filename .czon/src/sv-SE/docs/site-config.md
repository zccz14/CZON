---
"title": "CZON-webbplatskonfigurationsguide"
"summary": "Detta dokument beskriver i detalj metoder och alternativ för CZON-webbplatskonfiguration. Konfigurationen finns i fältet options.site i filen .czon/meta.json och inkluderar site.baseUrl (används för att generera sitemap.xml och robots.txt), site.title (webbplatsens titel, standardvärdet är 'CZON'), site.gaID (Google Analytics Measurement ID) och site.clarityID (Microsoft Clarity Project ID). Alla konfigurationsalternativ är valfria, och ändringar kräver att czon build körs om för att träda i kraft. Om baseUrl inte är konfigurerad hoppas generering av sitemap.xml över. Analysverktygen laddas endast när motsvarande ID är konfigurerat, vilket inte påverkar sidans prestanda. Dokumentet tillhandahåller konfigurationsplats, tillgängliga konfigurationsalternativ, kompletta exempel och viktiga punkter för att hjälpa användare att enkelt konfigurera sin webbplats."
"tags":
  - "CZON"
  - "Webbplatskonfiguration"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Webbplatskonfiguration

CZON stöder konfiguration av webbplatsalternativ via filen `.czon/meta.json`. Dessa konfigurationer är valfria och blockerar inte första användningen.

## Konfigurationsplats

Konfigurationsalternativen finns i fältet `options.site` i filen `.czon/meta.json`:

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

## Tillgängliga konfigurationsalternativ

### `site.baseUrl`

Webbplatsens bas-URL, används för att generera sitemap.xml och robots.txt.

- **Typ**: `string`
- **Format**: Fullständig URL, t.ex. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Efter konfiguration genereras automatiskt:

- `sitemap.xml` - Webbplatskarta som innehåller alla sidor
- Sitemap-deklaration i `robots.txt`

### `site.title`

Webbplatsens titel, visas i sidhuvudet.

- **Typ**: `string`
- **Standardvärde**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Min dokumentationswebbplats"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, används för att integrera Google Analytics-statistik.

- **Typ**: `string`
- **Format**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Så här får du det: Gå till [Google Analytics](https://analytics.google.com/), skapa en egenskap och hämta Measurement ID under "Dataflöden".

### `site.clarityID`

Microsoft Clarity Project ID, används för att integrera Clarity-användarbeteendeanalys.

- **Typ**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "ditt-projekt-id"
    }
  }
}
```

Så här får du det: Gå till [Microsoft Clarity](https://clarity.microsoft.com/), skapa ett projekt och hämta Project ID i projektinställningarna.

## Komplett exempel

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Teknisk blogg",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Viktiga punkter

- Efter ändring av konfiguration måste `czon build` köras om för att ändringarna ska träda i kraft
- Alla `site`-konfigurationsalternativ är valfria, du kan bara konfigurera de delar du behöver
- Analysverktyg (GA, Clarity) laddas endast när motsvarande ID är konfigurerat, vilket inte påverkar sidans prestanda
- När `baseUrl` inte är konfigurerad hoppas generering av sitemap.xml över