---
"title": "CZON Siteconfiguratiehandleiding"
"summary": "Dit document beschrijft de methoden en opties voor het configureren van een CZON-site. De configuratie bevindt zich in het veld `options.site` van het bestand `.czon/meta.json` en omvat `site.baseUrl` (gebruikt voor het genereren van sitemap.xml en robots.txt), `site.title` (sitetitel, standaardwaarde 'CZON'), `site.gaID` (Google Analytics Measurement ID) en `site.clarityID` (Microsoft Clarity Project ID). Alle configuratie-items zijn optioneel; wijzigingen worden pas actief na het opnieuw uitvoeren van `czon build`. Zonder `baseUrl` wordt de generatie van sitemap.xml overgeslagen. Analysehulpmiddelen worden alleen geladen als de bijbehorende ID is geconfigureerd, wat de pagina-prestaties niet beïnvloedt. Het document biedt de configuratielocatie, beschikbare opties, een volledig voorbeeld en belangrijke aandachtspunten om gebruikers te helpen hun site eenvoudig in te stellen."
"tags":
  - "CZON"
  - "Siteconfiguratie"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Siteconfiguratie

CZON ondersteunt het configureren van site-opties via het bestand `.czon/meta.json`. Deze configuratie is optioneel en blokkeert het eerste gebruik niet.

## Configuratielocatie

De configuratie-items bevinden zich in het veld `options.site` van het bestand `.czon/meta.json`:

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

## Beschikbare configuratie-items

### `site.baseUrl`

De basis-URL van de site, gebruikt voor het genereren van sitemap.xml en robots.txt.

- **Type**: `string`
- **Formaat**: Volledige URL, zoals `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Na configuratie worden automatisch gegenereerd:

- `sitemap.xml` - Een sitemap met alle pagina's
- De Sitemap-verklaring in `robots.txt`

### `site.title`

De titel van de site, weergegeven in de paginakop.

- **Type**: `string`
- **Standaardwaarde**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Mijn documentatiesite"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, gebruikt voor de integratie van Google Analytics-statistieken.

- **Type**: `string`
- **Formaat**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Hoe te verkrijgen: Ga naar [Google Analytics](https://analytics.google.com/), maak een eigenschap aan en verkrijg de Measurement ID onder 'Gegevensstromen'.

### `site.clarityID`

Microsoft Clarity Project ID, gebruikt voor de integratie van Clarity-gebruikersgedragsanalyse.

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

Hoe te verkrijgen: Ga naar [Microsoft Clarity](https://clarity.microsoft.com/), maak een project aan en verkrijg de Project ID in de projectinstellingen.

## Volledig voorbeeld

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Technische Blog",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Belangrijke aandachtspunten

- Na het wijzigen van de configuratie moet `czon build` opnieuw worden uitgevoerd om de wijzigingen door te voeren.
- Alle `site` configuratie-items zijn optioneel; je kunt alleen de benodigde onderdelen configureren.
- Analysehulpmiddelen (GA, Clarity) worden alleen geladen als de bijbehorende ID is geconfigureerd, wat de pagina-prestaties niet beïnvloedt.
- Zonder configuratie van `baseUrl` wordt de generatie van sitemap.xml overgeslagen.