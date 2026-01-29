---
"title": "CZON Webstedskonfigurationsguide"
"summary": "Dette dokument beskriver i detaljer metoder og muligheder for konfiguration af CZON-webstedet. Konfigurationen findes i feltet options.site i filen .czon/meta.json og omfatter site.baseUrl (bruges til at generere sitemap.xml og robots.txt), site.title (webstedets titel, standardværdi er 'CZON'), site.gaID (Google Analytics Measurement ID) og site.clarityID (Microsoft Clarity Project ID). Alle konfigurationsindstillinger er valgfrie, og ændringer kræver en genkørsel af `czon build` for at træde i kraft. Hvis baseUrl ikke er konfigureret, springes generering af sitemap.xml over. Analyseværktøjer indlæses kun, når deres tilsvarende ID'er er konfigureret, hvilket ikke påvirker sidens ydeevne. Dokumentet giver information om konfigurationsplacering, tilgængelige indstillinger, komplette eksempler og vigtige bemærkninger for at hjælpe brugeren med nemt at opsætte webstedet."
"tags":
  - "CZON"
  - "Webstedskonfiguration"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Webstedskonfiguration

CZON understøtter konfiguration af webstedsindstillinger via filen `.czon/meta.json`. Disse konfigurationer er valgfrie og blokerer ikke for første brug.

## Konfigurationsplacering

Konfigurationsindstillingerne findes i feltet `options.site` i filen `.czon/meta.json`:

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
        { "title": "Forside", "href": "index.html" },
        { "title": "Om", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Tilgængelige konfigurationsindstillinger

### `site.baseUrl`

Webstedets basis-URL, bruges til at generere sitemap.xml og robots.txt.

- **Type**: `string`
- **Format**: Fuldstændig URL, f.eks. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Efter konfiguration genereres følgende automatisk:

- `sitemap.xml` - Et sitemap, der indeholder alle sider
- Sitemap-deklaration i `robots.txt`

### `site.title`

Webstedets titel, vises i sidehovedet.

- **Type**: `string`
- **Standardværdi**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Mit dokumentationswebsted"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, bruges til at integrere Google Analytics-statistik.

- **Type**: `string`
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

Sådan får du det: Gå til [Google Analytics](https://analytics.google.com/), opret en medieejendom, og find Measurement ID under "Datastrømme".

### `site.clarityID`

Microsoft Clarity Project ID, bruges til at integrere Clarity-brugeradfærdsanalyse.

- **Type**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Sådan får du det: Gå til [Microsoft Clarity](https://clarity.microsoft.com/), opret et projekt, og find Project ID i projektindstillingerne.

### `site.navLinks`

Konfiguration af hurtige navigationslinks, vises som navigationslinks i sidehovedet.

- **Type**: `Array<{ title: string, href: string }>`
- **Standardværdi**: `undefined` (viser ikke navigation)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Forside", "href": "index.html" },
        { "title": "Dokumentation", "href": "docs.html" },
        { "title": "Om", "href": "about.html" }
      ]
    }
  }
}
```

**Responsiv adfærd**:

- **Mobil**: Viser hamburger-menuikon, klik for at udvide alle navigationslinks
- **Desktop**: Viser navigationslinks direkte i Header, men ikke mere end 40% af skærmbredden; overskydende links vises via en "Mere"-drop-down-menu

## Komplet eksempel

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Teknisk Blog",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Forside", "href": "index.html" },
        { "title": "Dokumentation", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Vigtige bemærkninger

- Ændringer i konfigurationen kræver en genkørsel af `czon build` for at træde i kraft
- Alle `site`-konfigurationsindstillinger er valgfrie, du kan kun konfigurere de dele, du har brug for
- Analyseværktøjer (GA, Clarity) indlæses kun, når deres tilsvarende ID'er er konfigureret, hvilket ikke påvirker sidens ydeevne
- Hvis `baseUrl` ikke er konfigureret, springes generering af sitemap.xml over