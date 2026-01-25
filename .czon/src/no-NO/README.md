---
"title": "CZON - AI-Nativ Markdown-innholdsengine"
"summary": "CZON er en AI-nativ Markdown-innholdsengine designet for å hjelpe innholdsskapere med å forenkle skriveprosessen. Den legger vekt på nullkonfigurasjonsskriving, og ved å dype integrere AI-teknologi håndterer den automatisk oppgaver som tittelgenerering, sammendragsextrahering, taggkategorisering, flerspråklig oversettelse og nettstedsnavigering, noe som reduserer brukerforstyrrelser. CZON har innebygd statisk nettstedsgenerering, men fokuserer hovedsakelig på innholdsskaping og -administrasjon, snarere enn kompleks tematilpasning. Den passer for brukere som ønsker å skrive på morsmålet sitt og automatisk generere flerspråklige versjoner, og er spesielt egnet for nettstedinnholdsskapere som misliker kompleks konfigurasjon."
"tags":
  - "CZON"
  - "AI-Nativ"
  - "Markdown"
  - "Innholdsengine"
  - "Flerspråklig oversettelse"
  - "Statisk nettstedsgenerering"
  - "Nullkonfigurasjon"
  - "Innholdsskaping"
---

![Logo for CZON](logo.png)

# CZON - AI-Nativ Markdown-innholdsengine

- **C**: **C**ontent oriented | Innhold er kongen, fokus på innhold
- **Z**: **Z**ero Configuration | Nullkonfigurasjonsskriving, reduserer forstyrrelser
- **O**: **O**rganic AI-Native | Organisk AI-nativ, dyp AI-integrasjon
- **N**: **N**-shaped Energy Curve | N-formet energikurve, involverer alle ledd i skaping-distribusjon-tilbakemelding

[> Nettstedsdemo](https://czon.zccz14.com/)

I AI-tiden kan vi som nettstedinnholdsskapere ha en smartere innholdsskapingmotor.

**Tilbake til innholdet: Minimaliser forstyrrelser, fokuser på skriving**

La dokumenter gå tilbake til essensen, la skrivingen gå tilbake til ro.

For det første vil jeg ikke være bibliotekar. Noen ganger vil jeg skrive ned noe, men jeg har kanskje ikke tenkt ut tittelen ennå, eller organisert det spesielt. Jeg håper at LLM automatisk vil hjelpe meg med å generere tittel, lage sammendrag, kategorisere, navigere og annet organisasjonsarbeid.

For det andre må mitt skrivebord være rent. Jeg vil ikke ha komplekse byggeverktøy som krever mye konfigurasjon, styre med komplekse dokumentoppsett, eller liker komplekse strukturer. Hver gang jeg ser konfigurasjonsfilene og prosjektstrukturene til verktøy som Docusaurus, VuePress, Astro, får jeg hodepine. Nå velger CZON å skjule all konfigurasjon i .czon-mappen, feie den bort i et hjørne. Brukeren trenger bare å fokusere på å skrive innhold, alt annet håndteres av CZON. De andre mappene er ditt skriveområde, du kan organisere Markdown-filene dine som du vil.

**Tilbake til morsmålet: Skriv på morsmålet, bygg flerspråklige versjoner sømløst**

Livet er kort, jeg gidder ikke å oversette. Når man bruker morsmålet sitt, er man best i stand til å utnytte sin egen tankedybde. Men samtidig er det nødvendig å holde kontakt med verden, jeg vil ikke gi opp flerspråklig kommunikasjon. Derfor ønsker jeg et verktøy som lar meg skrive på morsmålet, samtidig som det lar flere se innholdet mitt. Nåværende i18n krever ikke bare at man oversetter selv, men også at man vedlikeholder innholdsopdateringer selv, det er for tungvint. Jeg velger å bruke LLM til å hjelpe meg med oversettelse, det sparer meg mye tid og kan fullføre flerspråklig oversettelse med ett klikk.

## Grunnleggende funksjoner

1. 🌍 **Automatisk flerspråklig oversettelse**: Bruker AI for inkrementell oversettelse, lar brukeren skrive Markdown på morsmålet, men brukeren kan være flerspråklig.
2. 💭 **Automatisk sammendragsextrahering**: Bruker AI for innholdsanalyse og -uttrekk av originalteksten.
3. 🏷️ **Automatisk taggkategorisering**: Bruker AI for uttrekk og administrasjon av tags og kategorier for innhold.
4. 🧭 **Smart kategorinavigasjon**: Bruker AI for å generere nettstedskart og navigasjon, kildefilenes plassering er ikke følsom.

## Statisk nettstedsgenerering (SSG)

CZON har en innebygd SSG-løsning som kan bygge en hvilken som helst git-mappe som inneholder Markdown til et statisk HTML-nettsted.

⚠️ Vær oppmerksom på at CZON ikke er en profesjonell statisk nettstedsgenerator (SSG), men en AI-drevet Markdown-innholdsengine som fokuserer på innholdsskaping og -administrasjon.

✅ CZON har som mål å forenkle prosessen for innholdsskaping og publisering, slik at brukeren kan fokusere på selve skrivingen, i stedet for å bli forstyrret av kompleks konfigurasjon og verktøy.

❌ CZON vil ikke tilby kompleks tematilpasning og plug-in-økosystem, men fokuserer på å forbedre innholdets kvalitet og tilgjengelighet gjennom AI.

🔔 Men CZON kan fortsatt generere statiske nettsteder. Om nødvendig kan CZON brukes som en forprosessor, integrert med andre SSG-løsninger for å generere personlige, vakre nettsteder.

## Kom i gang raskt

Forutsetninger:

- [Node.js](https://nodejs.org/) er installert (anbefalt versjon 18 eller høyere, må ha npx-kommandoen)
- Har fått [OpenAI API-nøkkel](https://platform.openai.com/account/api-keys), eller en OPENAI-kompatibel API-nøkkel
- Git er installert (brukes for å liste Markdown-filer fra Git, ignorerer filer filtrert av .gitignore-regler)

Først, arbeid i en mappe som allerede administreres av git:

Konfigurer miljøvariabler

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Påkrevd: Erstatt med din OpenAI API-nøkkel
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valgfritt, bruker offisiell OpenAI API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valgfritt, bruker gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valgfritt, sett maksimal token-grense (hvis utelatt brukes modellens standardverdi, for langtekstoversettelse anbefales det å sette en høyere verdi, f.eks. 8192, avhengig av modellens støttede maksimale token-antall)
```

Bygg nettstedet, støtter flerspråklig oversettelse. Bruker gjeldende katalog som kildekatalog, skriver ut til `.czon/dist`-mappen.

- Kan spesifisere språkversjoner som skal genereres ved å bruke `--lang`-parameteren flere ganger (f.eks. `--lang zh-Hans --lang en-US`).
- Kilde språk trenger ikke konfigureres, CZON oppdager det automatisk.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Se flere parametere eller få hjelp**:

```bash
npx czon@latest
```