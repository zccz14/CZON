---
"title": "CZON-sivuston konfigurointiohje"
"summary": "Tämä dokumentti kuvaa yksityiskohtaisesti CZON-sivuston konfigurointimenetelmät ja -vaihtoehdot. Konfiguraatio sijaitsee .czon/meta.json-tiedoston options.site-kentässä, ja se sisältää site.baseUrl (käytetään sitemap.xml:n ja robots.txt:n luomiseen), site.title (sivuston otsikko, oletusarvo 'CZON'), site.gaID (Google Analytics Measurement ID) ja site.clarityID (Microsoft Clarity Project ID). Kaikki konfiguraatiokohdat ovat valinnaisia, ja muutosten jälkeen on suoritettava czon build uudelleen. Jos baseUrl:ia ei ole määritetty, sitemap.xml:n luonti ohitetaan. Analysointityökalut latautuvat vain, jos vastaava ID on määritetty, eivätkä ne vaikuta sivujen suorituskykyyn. Dokumentti tarjoaa tietoa konfiguraation sijainnista, saatavilla olevista konfiguraatiokohdista, täydellisestä esimerkistä ja huomioitavista seikoista, auttaen käyttäjiä helposti määrittämään sivuston."
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

CZON tukee sivuston asetusten määrittämistä `.czon/meta.json`-tiedoston kautta. Nämä konfiguraatiot ovat valinnaisia eivätkä estä ensimmäistä käyttökertaa.

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
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Etusivu", "href": "index.html" },
        { "title": "Tietoja", "href": "about.html" }
      ]
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

- `sitemap.xml` - Sivustokartta, joka sisältää kaikki sivut
- Sitemap-ilmoitus `robots.txt`-tiedostossa

### `site.title`

Sivuston otsikko, joka näytetään sivun yläosassa.

- **Tyyppi**: `string`
- **Oletusarvo**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Dokumentaatioportalini"
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

Hankintatapa: Siirry [Google Analyticsiin](https://analytics.google.com/), luo mediaresurssi ja hae Measurement ID "Data Streams" -osiosta.

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

Hankintatapa: Siirry [Microsoft Clarityyn](https://clarity.microsoft.com/), luo projekti ja hae Project ID projektin asetuksista.

### `site.home`

Etusivun polun konfigurointi, jolla voidaan mukauttaa etusivun uudelleenohjauskohdetta.

- **Tyyppi**: `string`
- **Oletusarvo**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Toiminnan kuvaus**:

- **Kun käyttäjä käy juurietusivulla**: Kun käyttäjä käy osoitteessa `/index.html`, hän ohjataan automaattisesti kielitunnistuksen perusteella osoitteeseen `/{havaittu kieli}/{home}`
- **Kun klikataan Header-otsikkoa**: Ohjataan nykyisen kielikansion `home`-polkuun

**Käyttötapaukset**:

- Halutaan, että käyttäjät menevät ensimmäisellä käynnillä suoraan tiettyyn sivuun (esim. aloitusopas, tuotteen esittely)
- Sivuston etusivu ei ole artikkeliluettelo, vaan tietty dokumenttisivu

### `site.navLinks`

Pikanavigointilinkkien konfigurointi, joka näyttää navigointilinkit sivun yläosassa.

- **Tyyppi**: `Array<{ title: string, href: string }>`
- **Oletusarvo**: `undefined` (navigointia ei näytetä)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Etusivu", "href": "index.html" },
        { "title": "Dokumentaatio", "href": "docs.html" },
        { "title": "Tietoja", "href": "about.html" }
      ]
    }
  }
}
```

**Responsiivinen toiminta**:

- **Mobiililaitteet**: Näytetään hampurilaisvalikon kuvake, klikkaamalla avataan kaikki navigointilinkit
- **Työpöytälaitteet**: Navigointilinkit näytetään suoraan Headerissa, mutta enintään 40 % näytön leveydestä; ylimääräiset linkit näytetään "More"-pudotusvalikossa

## Täydellinen esimerkki

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Tekninen blogi",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Etusivu", "href": "index.html" },
        { "title": "Dokumentaatio", "href": "docs.html" },
        { "title": "Blogi", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Huomioitavaa

- Konfiguraatiota muutettaessa on suoritettava `czon build` uudelleen, jotta muutokset tulevat voimaan
- Kaikki `site`-konfiguraatiokohdat ovat valinnaisia, voit määrittää vain tarvitsemasi osat
- Analysointityökalut (GA, Clarity) latautuvat vain, jos vastaava ID on määritetty, eivätkä ne vaikuta sivujen suorituskykyyn
- Jos `baseUrl`:ia ei ole määritetty, sitemap.xml:n luonti ohitetaan