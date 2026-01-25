---
"title": "CZON - AI-Native Markdown-sisältömoottori"
"summary": "CZON on AI-natiivi Markdown-sisältömoottori, jonka tavoitteena on auttaa sisällöntuottajia yksinkertaistamaan kirjoitusprosessia. Se korostaa nollakonfiguraatiokirjoitusta ja syvällisen AI-teknologian integroinnin kautta käsittelee automaattisesti tehtäviä kuten otsikoiden luominen, yhteenvetojen poiminta, tunnisteiden luokittelu, monikielinen käännös ja sivuston navigointi, vähentäen käyttäjän häiriöitä. CZON sisältää staattisen sivuston luontitoiminnon, mutta keskittyy pääasiassa sisällön luontiin ja hallintaan, ei monimutkaisiin teeman mukautuksiin. Se sopii käyttäjille, jotka haluavat kirjoittaa äidinkielellään ja luoda automaattisesti monikielisiä versioita, erityisesti verkkosisällöntuottajille, jotka vihaavat monimutkaisia konfiguraatioita."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "sisältömoottori"
  - "monikielinen käännös"
  - "staattinen sivuston luonti"
  - "nollakonfiguraatio"
  - "sisällöntuotanto"
---

![CZON:n logo](logo.png)

# CZON - AI-Native Markdown-sisältömoottori

- **C**: **C**ontent oriented | Sisältö on tärkeintä, keskittyy sisältöön
- **Z**: **Z**ero Configuration | Nollakonfiguraatiokirjoitus, vähemmän häiriöitä
- **O**: **O**rganic AI-Native | Orgaaninen AI-natiivi, syvällinen AI-integraatio
- **N**: **N**-shaped Energy Curve | N-muotoinen energiakäyrä, osallistuu luonnin, jakelun ja palautteen kaikkiin vaiheisiin

[> Verkkosivuston demo](https://czon.zccz14.com/)

AI-aikakaudella verkkosisällöntuottajina meillä voi olla älykkäämpi sisällönluontimoottori.

**Palaa sisältöön: minimoi häiriöt, keskitty kirjoittamiseen**

Anna dokumenttien palata olemuksensa, anna kirjoittamisen palata rauhaan.

Ensinnäkin, en halua olla kirjastonhoitaja. Joskus haluan kirjoittaa jotain sisältöä, mutta en ehkä ole vielä päättänyt sen otsikosta tai muodostanut erityistä järjestelyä. Toivon, että LLM auttaisi automaattisesti luomaan otsikon, tekemään yhteenvedon, luokittelemaan, navigoimaan ja suorittamaan muita järjestelytehtäviä.

Toiseksi, kirjastoni on siivottava. En halua monimutkaisia rakennustyökaluja, enkä halua säätää monimutkaisten dokumenttien asetusten kanssa, enkä pidä monimutkaisista rakenteista. Aina kun näen Docusaurusin, VuePressin, Astron tai vastaavien työkalujen asetustiedostot ja projektirakenteet, särkee päätä. Nyt CZON valitsee piilottaa kaikki asetukset `.czon`-hakemistoon, nurkkaan, jotta käyttäjän tarvitsee keskittyä vain kirjoittamiseen, ja loput CZON hoitaa. Kaikki muut hakemistot ovat kirjoitustilaa, ja voit järjestää Markdown-tiedostosi haluamallasi tavalla.

**Palaa äidinkieleen: kirjoita äidinkielellä, luo sujuvasti monikielisiä versioita**

Elämä on lyhyt, en jaksa kääntää. Ihmiset käyttävät parhaiten ajattelunsa syvyyttä äidinkielellään. Mutta samalla on tarpeellista pysyä yhteydessä maailmaan, enkä halua luopua monikielisestä viestinnästä. Siksi toivon työkalua, jonka avulla voin kirjoittaa äidinkielelläni ja samalla saada sisältöni näkyville useammille ihmisille. Nykyinen i18n vaatii käännösten tekemisen itse ja sisällön päivittämisen ylläpidon, mikä on liian vaivalloista. Valitsen käyttää LLM:ää auttamaan käännöksissä, säästäen paljon aikaa ja mahdollistaen monien kielten käännökset yhdellä napsautuksella.

## Perustoiminnot

1. 🌍 **Automaattinen monikielinen käännös**: Käytä AI:ta lisäyskäännöksiin, anna käyttäjän kirjoittaa Markdown äidinkielellä, mutta käyttäjä voi olla monikielinen.
2. 💭 **Automaattinen yhteenvedon poiminta**: Käytä AI:ta alkuperäisen tekstin sisällön analysointiin ja poimintaan.
3. 🏷️ **Automaattinen tunnisteluokittelu**: Käytä AI:ta sisällön tunnisteiden ja luokkien poimintaan ja hallintaan.
4. 🧭 **Älykäs luokittelu ja navigointi**: Käytä AI:ta sivustokartan ja navigoinnin luomiseen, lähdetiedostojen sijainti ei ole merkityksellinen.

## Staattinen sivuston luonti (SSG)

CZON sisältää sisäänrakennetun SSG-ratkaisun, joka voi rakentaa minkä tahansa git-hakemiston, joka sisältää Markdown-tiedostoja, staattiseksi HTML-sivustoksi.

⚠️ Huomaa, että CZON ei ole ammattimainen staattinen sivuston luontityökalu (SSG), vaan AI-vetoinen Markdown-sisältömoottori, joka keskittyy sisällön luontiin ja hallintaan.

✅ CZON pyrkii yksinkertaistamaan sisällön luonnin ja julkaisun prosessia, jotta käyttäjät voivat keskittyä itse kirjoittamiseen eikä monimutkaisiin asetuksiin ja työkaluihin.

❌ CZON ei tarjoa monimutkaisia teeman mukautuksia ja liitännäisjärjestelmiä, vaan keskittyy sisällön laadun ja saavutettavuuden parantamiseen AI:n avulla.

🔔 Kuitenkin, CZON voi silti luoda staattisen sivuston. Tarvittaessa CZON:ia voidaan käyttää esikäsittelijänä integroidaessa muita SSG-ratkaisuja luomaan yksilöllisiä, kauniita sivustoja.

## Pika-aloitus

Edellytykset:

- [Node.js](https://nodejs.org/) asennettuna (suositeltu versio 18 tai uudempi, tarvitaan npx-komento)
- [OpenAI API -avain](https://platform.openai.com/account/api-keys) hankittu, tai OPENAI-yhteensopiva API-avain
- Git asennettuna (käytetään Markdown-tiedostojen listaukseen git:stä, .gitignore-sääntöjen mukaisesti suodatetut tiedostot ohitetaan)

Ensinnäkin, työskentele git-hallinnassa olevassa hakemistossa:

Määritä ympäristömuuttujat

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Pakollinen: korvaa omalla OpenAI API -avaimellasi
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valinnainen, käyttää oletuksena OpenAI:n virallista API:a
export OPENAI_MODEL="gpt-3.5-turbo"  # Valinnainen, käyttää oletuksena gpt-3.5-turbo -mallia
export OPENAI_MAX_TOKENS="4096"  # Valinnainen, aseta maksimimerkkien raja (jos jätetään pois, käytetään mallin oletusarvoa; pitkien tekstien kääntämiseen suositellaan korkeampaa arvoa, esim. 8192, riippuen käytetyn mallin tukemasta maksimimerkkimäärästä)
```

Rakenna sivusto, tuki monikielisiä käännöksiä. Käytä nykyistä hakemistoa lähdehakemistona, tuloste `.czon/dist`-hakemistoon.

- Voit määrittää luotavat kieliversiot käyttämällä `--lang`-parametria useita kertoja (esim. `--lang zh-Hans --lang en-US`).
- Lähdekieltä ei tarvitse määrittää, CZON tunnistaa sen automaattisesti.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Näytä lisää parametreja tai ohjeita**:

```bash
npx czon@latest
```