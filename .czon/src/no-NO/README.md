---
"title": "CZON - AI-Nativ Markdown-innholdsengine"
"summary": "CZON er en AI-nativ Markdown-innholdsengine designet for å hjelpe innholdsskapere med å forenkle skriveprosessen. Den legger vekt på nullkonfigurasjonsskriving, og ved å dype integrere AI-teknologi håndterer den automatisk oppgaver som tittelgenerering, sammendragsextrahering, taggkategorisering, flerspråklig oversettelse og nettstedsnavigering, noe som reduserer brukerforstyrrelser. CZON har innebygd statisk nettstedsgenerering, men fokuserer hovedsakelig på innholdsskaping og -administrasjon, snarere enn kompleks tematisering. Den passer for brukere som ønsker å skrive på morsmålet sitt og automatisk generere flerspråklige versjoner, spesielt egnet for nettstedinnholdsskapere som misliker kompleks konfigurasjon."
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

![Logo av CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Besøk CZONs nettsted 🚀
    </a>
</div>

# CZON - AI-Nativ Markdown-innholdsengine

- **C**: **C**ontent oriented | Innhold er kongen, fokus på innhold
- **Z**: **Z**ero Configuration | Nullkonfigurasjonsskriving, reduserer forstyrrelser
- **O**: **O**rganic AI-Native | Organisk AI-nativ, dyp AI-integrasjon
- **N**: **N**-shaped Energy Curve | N-formet energikurve, involverer alle ledd i skaping-distribusjon-tilbakemelding

I AI-tiden kan vi som nettstedinnholdsskapere ha en smartere innholdsskapingmotor.

**Tilbake til innholdet: Minimaliser forstyrrelser, fokuser på skriving**

La dokumenter gå tilbake til essensen, la skrivingen gå tilbake til ro.

For det første vil jeg ikke være bibliotekar. Noen ganger vil jeg skrive ned noe innhold, men jeg har kanskje ikke tenkt ut tittelen ennå, eller organisert det spesielt. Jeg ønsker at LLM automatisk skal hjelpe meg med å generere tittel, lage sammendrag, kategorisere, navigere og annet organisasjonsarbeid.

For det andre må mitt skrivebord være rent. Jeg vil ikke ha komplekse byggeverktøy, tukle med komplekse dokumentkonfigurasjoner, eller liker komplekse strukturer. Hver gang jeg ser konfigurasjonsfiler og prosjektstrukturer for verktøy som Docusaurus, VuePress, Astro, får jeg hodepine. Nå velger CZON å skjule all konfigurasjon i `.czon`-katalogen, feie den bort i et hjørne. Brukeren trenger bare å fokusere på å skrive innhold, alt annet overlates til CZON. Alle andre kataloger er ditt skriveområde, du kan organisere Markdown-filene dine som du vil.

**Tilbake til morsmålet: Skriv på morsmålet, bygg flerspråklige versjoner sømløst**

Livet er kort, jeg gidder ikke oversette. Når man bruker morsmålet, utnytter man tenkedybden best. Men samtidig er det nødvendig å holde kontakt med verden, jeg vil ikke gi opp flerspråklig kommunikasjon. Derfor ønsker jeg et verktøy som lar meg skrive på morsmålet, samtidig som det lar flere se innholdet mitt. Nåværende i18n krever ikke bare at man oversetter selv, men også at man vedlikeholder innholdsopdateringer selv, det er for tungvint. Jeg velger å bruke LLM til å hjelpe meg med oversettelse, det sparer meg mye tid og kan fullføre flerspråklig oversettelse med ett klikk.

## ✨ Kjernefunksjoner

1. 🌍 **AI flerspråklig oversettelse**: Bruker AI for inkrementell oversettelse, lar brukeren skrive Markdown på morsmålet, men brukeren kan være flerspråklig.
2. 📊 **AI metadatauttrekk**: Autmatisk uttrekk av tittel, beskrivelse, sammendrag, nøkkelord, målgruppe, URL-vennlig alias, etc.
3. 🏷️ **AI taggkategorisering**: Bruker AI for uttrekk og administrasjon av tags og kategorier for innhold.
4. 🧭 **AI kategorinavigasjon**: Bruker AI for å generere nettstedskart og navigasjon, kildefilenes plassering er ikke følsom.
5. 🤖 **AI helnettstedssammendrag**: Kan generere helnettstedssammendrag i ulike stiler.

Og noen ikke-AI-funksjoner:

1. ⚙️ **Nullkonfigurasjon**: All konfigurasjon og hurtiglager skjules i `.czon`-katalogen, prosjektstrukturen holdes ryddig.
2. 🔄 **Inkrementell bygging**: Basert på innholdshasj for å oppdage endringer, behandler kun endrede filer.
3. 📚 **Markdown-utvidelsesstøtte**: Støtter nativt KaTeX matematiske formler, Mermaid-diagrammer, Embla-karuseller, fotnoter, etc.
4. 🚀 **Statisk nettstedsgenerering**: Innebygd React-basert SSG, genererer flerspråklige statiske nettsteder.
5. 🌐 **Automatisk ruting basert på besøkerens språk**: Ruter automatisk til riktig språkversjon basert på besøkerens språk.

## 📦 Hurtigstart

### Forutsetninger

- [Node.js](https://nodejs.org/) installert (anbefales LTS-versjon 24, eller versjon 18 og oppover, må ha npx-kommandoen)
- Har fått [OpenAI API-nøkkel](https://platform.openai.com/account/api-keys), eller OPENAI-kompatibel API-nøkkel
- Git installert (brukes for å liste Markdown-filer fra Git, ignorerer filer filtrert av .gitignore-regler)

### Miljøvariabelkonfigurasjon

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Påkrevd: Erstatt med din OpenAI API-nøkkel
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valgfri, bruker offisiell OpenAI API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valgfri, bruker gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valgfri, sett maksimal token-grense (ignoreres brukes modellens standardverdi, for langtekstoversettelse anbefales høyere verdi, f.eks. 8192, avhengig av modellens støttede maksimale token-antall)

# Hvis du trenger HTTP-proxy for å få tilgang til OpenAI API, kan du sette følgende variabler
export HTTPS_PROXY="http://your-proxy.com:8080"  # Valgfri, sett HTTPS-proxy
export HTTP_PROXY="http://your-proxy.com:8080"   # Valgfri, sett HTTP-proxy
```

### Bygg flerspråklig nettsted

Kjør i en hvilken som helst Git-administrert mappe:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Siden språkkodene senere vil bli brukt i mange deler av den statiske nettstedsgenereringen, vennligst bruk BCP 47-standard språkkoder. For eksempel, `zh-Hans` representerer forenklet kinesisk, `en-US` representerer amerikansk engelsk. Du kan legge til flere språk etter behov, for eksempel `es-ES` (spansk), `ja-JP` (japansk), `ko-KR` (koreansk), etc.
For standard språkkodeliste, se [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Output-katalog: `.czon/dist`, innholdet i denne katalogen må deretter distribueres til en statisk nettstedshostingplattform.

For detaljert bruk, kjør `npx czon@latest --help`.

## 🔗 Sammenligning med andre verktøy

| Funksjon               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ---------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-nativ**           | ✅ Dyp integrasjon       | ❌              | ❌              | ❌              |
| **Nullkonfigurasjon**  | ✅ Skjult konfigurasjon  | ❌ Trenger konfigurasjonsfil | ❌ Trenger konfigurasjonsfil | ❌ Trenger konfigurasjonsfil |
| **Flerspråklig AI-oversettelse** | ✅ Automatisk inkrementell oversettelse | ❌ Manuell oversettelse | ❌ Manuell oversettelse | ❌ Manuell oversettelse |
| **Automatisk kategorisering/tagging** | ✅ AI-uttrekk | ❌ Manuell konfigurasjon | ❌ Manuell konfigurasjon | ❌ Manuell konfigurasjon |
| **Markdown-utvidelser** | ✅ KaTeX, Mermaid, Embla | ✅ Gjennom tillegg | ✅ Gjennom tillegg | ✅ Gjennom tillegg |
| **Tematilpasning**     | ❌ Begrenset             | ✅ Rik           | ✅ Rik           | ✅ Rik           |

CZON er posisjonert som en **AI-forbedret innholdsengine**, ikke et fullfunksjons-SSG. Den fokuserer på å øke innholdsskapingseffektiviteten gjennom AI, og passer for skapere som legger vekt på innholdskvalitet og ønsker å redusere konfigurasjonsbyrden. Faktisk kan CZON brukes sammen med SSG-verktøy som Docusaurus, VuePress, Astro, som en frontend-motor for innholdsgenerering og -administrasjon.

## 📞 Støtte

- Prosjekthjemmeside: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord-diskusjonsforum: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_La skrivingen gå tilbake til ro, la innholdet vokse naturlig._