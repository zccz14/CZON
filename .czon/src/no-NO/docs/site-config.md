---
"title": "CZON Nettstedskonfigurasjonsveiledning"
"summary": "Dette dokumentet beskriver i detalj metoder og alternativer for CZON nettstedskonfigurasjon. Konfigurasjonen finnes i `options.site`-feltet i `.czon/meta.json`-filen, og inkluderer `site.baseUrl` (brukes til å generere `sitemap.xml` og `robots.txt`), `site.title` (nettstedstittel, standardverdi er 'CZON'), `site.gaID` (Google Analytics Measurement ID) og `site.clarityID` (Microsoft Clarity Project ID). Alle konfigurasjonsalternativer er valgfrie, og endringer krever at du kjører `czon build` på nytt for å tre i kraft. Hvis `baseUrl` ikke er konfigurert, vil generering av `sitemap.xml` bli hoppet over. Analyseverktøy vil bare lastes inn hvis tilsvarende ID er konfigurert, og påvirker ikke sideytelsen. Dokumentet gir informasjon om konfigurasjonsplassering, tilgjengelige alternativer, et fullstendig eksempel og viktige merknader for å hjelpe brukere med å enkelt sette opp nettstedet."
"tags":
  - "CZON"
  - "Nettstedskonfigurasjon"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Nettstedskonfigurasjon

CZON støtter konfigurasjon av nettstedsalternativer via `.czon/meta.json`-filen. Disse konfigurasjonene er valgfrie og vil ikke blokkere første gangs bruk.

## Konfigurasjonsplassering

Konfigurasjonsalternativene finnes i `options.site`-feltet i `.czon/meta.json`-filen:

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

## Tilgjengelige konfigurasjonsalternativer

### `site.baseUrl`

Nettstedets basis-URL, brukes til å generere `sitemap.xml` og `robots.txt`.

- **Type**: `string`
- **Format**: Fullstendig URL, f.eks. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Etter konfigurasjon genereres følgende automatisk:

- `sitemap.xml` - Nettkart som inneholder alle sider
- Sitemap-deklarasjon i `robots.txt`

### `site.title`

Nettstedstittel, vises i sidehodet.

- **Type**: `string`
- **Standardverdi**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Mitt dokumentasjonsnettsted"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, brukes for å integrere Google Analytics-statistikk.

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

Hvordan få tak i det: Gå til [Google Analytics](https://analytics.google.com/) og opprett en eiendom. Finn Measurement ID under «Datastrømmer».

### `site.clarityID`

Microsoft Clarity Project ID, brukes for å integrere Clarity for brukeratferdsanalyse.

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

Hvordan få tak i det: Gå til [Microsoft Clarity](https://clarity.microsoft.com/) og opprett et prosjekt. Finn Project ID i prosjektinnstillingene.

## Fullstendig eksempel

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

## Viktige merknader

- Etter endring av konfigurasjon må du kjøre `czon build` på nytt for at endringene skal tre i kraft
- Alle `site`-konfigurasjonsalternativer er valgfrie; du kan bare konfigurere delene du trenger
- Analyseverktøy (GA, Clarity) lastes bare inn hvis tilsvarende ID er konfigurert, og påvirker ikke sideytelsen
- Hvis `baseUrl` ikke er konfigurert, vil generering av `sitemap.xml` bli hoppet over