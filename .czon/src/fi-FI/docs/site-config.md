---
"title": "CZON-sivuston konfigurointiohje"
"summary": "Tämä dokumentti kuvaa yksityiskohtaisesti CZON-sivuston konfigurointimenetelmät ja vaihtoehdot. Konfiguraatio sijaitsee .czon/meta.json-tiedoston options.site-kentässä, ja se sisältää site.baseUrl (käytetään sitemap.xml:n ja robots.txt:n luomiseen), site.title (sivuston otsikko, oletusarvo 'CZON'), site.gaID (Google Analytics Measurement ID) ja site.clarityID (Microsoft Clarity Project ID). Kaikki konfiguraatiokohdat ovat valinnaisia, ja muutosten jälkeen on suoritettava czon build uudelleen. Jos baseUrl:ia ei ole määritetty, sitemap.xml:n luonti ohitetaan. Analysointityökalut latautuvat vain, kun vastaava ID on määritetty, eikä se vaikuta sivujen suorituskykyyn. Dokumentti tarjoaa konfiguraation sijainnin, saatavilla olevat konfiguraatiokohdat, täydellisen esimerkin ja huomioitavat seikat, jotta käyttäjät voivat helposti määrittää sivustonsa."
"tags":
  - "CZON"
  - "Sivuston konfigurointi"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Sivuston konfigurointi

CZON tukee sivuston asetusten konfigurointia `.czon/meta.json`-tiedoston kautta. Nämä asetukset ovat valinnaisia eivätkä estä ensimmäistä käyttökertaa.

## Konfiguraation sijainti

Konfiguraatiokohdat sijaitsevat `.czon/meta.json`-tiedoston `options.site`-kentässä:

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

## Käytettävissä olevat konfiguraatiokohdat

### `site.baseUrl`

Sivuston perus-URL, jota käytetään sitemap.xml:n ja robots.txt:n luomiseen.

- **Tyyppi**: `string`
- **Muoto**: Täydellinen URL, esim. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Konfiguroinnin jälkeen luodaan automaattisesti:

- `sitemap.xml` - sivukartta, joka sisältää kaikki sivut
- Sitemap-ilmoitus `robots.txt`-tiedostossa

### `site.title`

Sivuston otsikko, joka näkyy sivun yläosassa.

- **Tyyppi**: `string`
- **Oletusarvo**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Dokumentaatiopisteeni"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, jota käytetään Google Analytics -tilastojen integrointiin.

- **Tyyppi**: `string`
- **Muoto**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Hankkiminen: Siirry [Google Analyticsiin](https://analytics.google.com/), luo mediaomaisuus ja hae Measurement ID "Data Streams" -osiosta.

### `site.clarityID`

Microsoft Clarity Project ID, jota käytetään Clarity-käyttäjätietojen analysoinnin integrointiin.

- **Tyyppi**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Hankkiminen: Siirry [Microsoft Clarityyn](https://clarity.microsoft.com/), luo projekti ja hae Project ID projektin asetuksista.

## Täydellinen esimerkki

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Tekninen blogi",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Huomioitavat seikat

- Konfiguraation muuttamisen jälkeen on suoritettava `czon build` uudelleen, jotta muutokset tulevat voimaan
- Kaikki `site`-konfiguraatiokohdat ovat valinnaisia; voit määrittää vain tarvitsemasi osat
- Analysointityökalut (GA, Clarity) latautuvat vain, kun vastaava ID on määritetty, eikä se vaikuta sivujen suorituskykyyn
- Jos `baseUrl`-arvoa ei ole määritetty, sitemap.xml:n luonti ohitetaan