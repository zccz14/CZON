---
"title": "CZON Nettstedskonfigurasjonsveiledning"
"summary": "Dette dokumentet beskriver i detalj metoder og alternativer for CZON nettstedskonfigurasjon. Konfigurasjonen finnes i `options.site`-feltet i `.czon/meta.json`-filen, og inkluderer `site.baseUrl` (brukes til å generere `sitemap.xml` og `robots.txt`), `site.title` (nettstedstittel, standardverdi er 'CZON'), `site.gaID` (Google Analytics Measurement ID) og `site.clarityID` (Microsoft Clarity Project ID). Alle konfigurasjonsalternativer er valgfrie, og endringer krever at `czon build` kjøres på nytt for å tre i kraft. Hvis `baseUrl` ikke er konfigurert, vil generering av `sitemap.xml` bli hoppet over. Analyseverktøy vil bare lastes inn hvis tilsvarende ID er konfigurert, og påvirker ikke sideytelsen. Dokumentet gir informasjon om konfigurasjonsplassering, tilgjengelige alternativer, et fullstendig eksempel og viktige merknader for å hjelpe brukere med å enkelt sette opp nettstedet."
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

CZON støtter konfigurasjon av nettstedsalternativer gjennom `.czon/meta.json`-filen. Disse konfigurasjonene er valgfrie og vil ikke blokkere første bruk.

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
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Hjem", "href": "index.html" },
        { "title": "Om", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Tilgjengelige konfigurasjonsalternativer

### `site.baseUrl`

Grunn-URL for nettstedet, brukes til å generere `sitemap.xml` og `robots.txt`.

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

Etter konfigurasjon genereres automatisk:

- `sitemap.xml` - Nettstedskart som inneholder alle sider
- Sitemap-deklarasjon i `robots.txt`

### `site.title`

Nettstedstittel, vises i sidehodet.

- **Type**: `string`
- **Standardverdi**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Min dokumentasjonsside"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, brukes for integrering av Google Analytics-statistikk.

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

Hvordan få tak i den: Gå til [Google Analytics](https://analytics.google.com/), opprett en eiendom, og finn Measurement ID under «Datastrømmer».

### `site.clarityID`

Microsoft Clarity Project ID, brukes for integrering av Clarity brukeratferdsanalyse.

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

Hvordan få tak i den: Gå til [Microsoft Clarity](https://clarity.microsoft.com/), opprett et prosjekt, og finn Project ID i prosjektinnstillingene.

### `site.home`

Konfigurasjon for hjemmesidebane, brukes for å tilpasse målet for omdirigering til hjemmesiden.

- **Type**: `string`
- **Standardverdi**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Atferdsbeskrivelse**:

- **Ved tilgang til rothjemmesiden**: Når en bruker besøker `/index.html`, vil de automatisk bli omdirigert til `/{oppdaget språk}/{home}` basert på nettleserspråket.
- **Ved klikk på tittel i hodet**: Omdirigeres til `home`-banen i gjeldende språkkatalog.

**Bruksscenarier**:

- Ønsker at brukere skal gå direkte til en spesifikk side ved første besøk (f.eks. en komme-i-gang-guide, produktpresentasjon, etc.)
- Nettstedets hjemmeside er ikke en artikkelliste, men en spesifikk dokumentasjonsside.

### `site.navLinks`

Konfigurasjon for hurtignavigasjonslenker, viser navigasjonslenker i sidehodet.

- **Type**: `Array<{ title: string, href: string }>`
- **Standardverdi**: `undefined` (viser ikke navigasjon)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Hjem", "href": "index.html" },
        { "title": "Dokumentasjon", "href": "docs.html" },
        { "title": "Om", "href": "about.html" }
      ]
    }
  }
}
```

**Responsiv atferd**:

- **Mobil**: Viser hamburgermenyikon, klikk for å utvide alle navigasjonslenker.
- **Desktop**: Viser navigasjonslenker direkte i hodet, men ikke mer enn 40 % av skjermbredden; overskytende lenker vises gjennom en «Mer»-nedtrekksmeny.

## Fullstendig eksempel

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Teknisk blogg",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Hjem", "href": "index.html" },
        { "title": "Dokumentasjon", "href": "docs.html" },
        { "title": "Blogg", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Viktige merknader

- Etter endring av konfigurasjon må `czon build` kjøres på nytt for at endringene skal tre i kraft.
- Alle `site`-konfigurasjonsalternativer er valgfrie; du kan bare konfigurere de delene du trenger.
- Analyseverktøy (GA, Clarity) vil bare lastes inn hvis tilsvarende ID er konfigurert, og påvirker ikke sideytelsen.
- Hvis `baseUrl` ikke er konfigurert, vil generering av `sitemap.xml` bli hoppet over.