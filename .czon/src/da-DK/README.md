---
"title": "CZON - AI-Native Markdown-indholdsengine"
"summary": "CZON er en AI-native Markdown-indholdsengine, der er designet til at hjælpe indholdsskabere med at forenkle deres skriveproces. Den lægger vægt på nul-konfigurationsskrivning og håndterer automatisk opgaver som titelgenerering, resuméudtræk, tagkategorisering, flersproget oversættelse og webstedsnavigation gennem dyb integration af AI-teknologi, hvilket reducerer brugerforstyrrelser. CZON har indbygget statisk webstedsgenerering, men fokuserer primært på indholdsproduktion og -styring frem for kompleks tematik. Den er velegnet til brugere, der ønsker at skrive på deres modersmål og automatisk generere flersprogede versioner, især for webstedsindholdsskabere, der hader kompleks konfiguration."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Indholdsengine"
  - "Flersproget oversættelse"
  - "Statisk webstedsgenerering"
  - "Nul-konfiguration"
  - "Indholdsproduktion"
---

![CZONs logo](logo.png)

# CZON - AI-Native Markdown-indholdsengine

- **C**: **C**ontent oriented | Indhold er kongen, fokus på indhold
- **Z**: **Z**ero Configuration | Nul-konfigurationsskrivning, mindre forstyrrelser
- **O**: **O**rganic AI-Native | Organisk AI-native, dyb AI-integration
- **N**: **N**-shaped Energy Curve | N-formet energikurve, involverer alle faser: produktion, distribution, feedback

[> Websted Demo](https://czon.zccz14.com/)

I AI-tiden kan vi som webstedsindholdsskabere have en mere intelligent indholdsproduktionsmotor.

**Tilbage til indholdet: Minimér forstyrrelser, fokuser på at skrive**

Lad dokumenter vende tilbage til essensen, lad skrivningen vende tilbage til ro.

For det første vil jeg ikke være bibliotekar. Nogle gange vil jeg gerne skrive noget indhold, men jeg har måske ikke tænkt på en titel endnu eller organiseret det særligt. Jeg håber, at LLM automatisk vil hjælpe mig med at generere titler, lave resuméer, kategorisere, navigere og udføre andet organisatorisk arbejde.

For det andet skal mit skriveværelse være rent. Jeg vil ikke have komplekse byggeværktøjer, rode med komplekse dokumentkonfigurationer eller have en kompleks struktur. Hver gang jeg ser konfigurationsfiler og projektstrukturer fra værktøjer som Docusaurus, VuePress eller Astro, får jeg hovedpine. Nu vælger CZON at skjule al konfiguration i mappen .czon, feje den ind i et hjørne, så brugeren kun skal fokusere på at skrive indhold, og alt andet overlades til CZON. Alle andre mapper er dit skriveområde, hvor du kan organisere dine Markdown-filer, som du vil.

**Tilbage til modersmålet: Skriv på dit modersmål, byg flersprogede versioner problemfrit**

Livet er for kort til at jeg gider oversætte. Man udtrykker sine tanker bedst, når man bruger sit modersmål. Men det er også nødvendigt at forbinde sig med verden, og jeg vil ikke opgive flersproget kommunikation. Derfor ønsker jeg et værktøj, der lader mig skrive på mit modersmål, samtidig med at flere mennesker kan se mit indhold. Nuværende i18n kræver, at man selv oversætter og vedligeholder indholdsopdateringer, hvilket er for besværligt. Jeg vælger at bruge LLM til at hjælpe mig med oversættelsen, hvilket sparer mig for meget tid og gør det muligt at fuldføre oversættelser til flere sprog med et enkelt klik.

## Grundlæggende funktioner

1. 🌍 **Automatisk flersproget oversættelse**: Brug AI til inkrementel oversættelse, så brugeren kan skrive Markdown på sit modersmål, men brugeren kan være flersproget.
2. 💭 **Automatisk resuméudtræk**: Brug AI til at analysere og udtrække indhold fra den originale tekst.
3. 🏷️ **Automatisk tagkategorisering**: Brug AI til at udtrække og administrere tags og kategorier for indholdet.
4. 🧭 **Intelligent kategorinavigation**: Brug AI til at generere et webstedskort og navigation, uafhængigt af kildefilernes placering.

## Statisk webstedsgenerering (SSG)

CZON har en indbygget SSG-løsning, der kan bygge en hvilken som helst git-mappe, der indeholder Markdown, til et statisk HTML-websted.

⚠️ Bemærk venligst, at CZON ikke er en professionel statisk webstedsgenerator (SSG), men en AI-drevet Markdown-indholdsengine, der fokuserer på indholdsproduktion og -styring.

✅ CZON sigter mod at forenkle processen for indholdsproduktion og -udgivelse, så brugeren kan fokusere på selve skrivningen i stedet for at blive forstyrret af kompleks konfiguration og værktøjer.

❌ CZON vil ikke tilbyde kompleks tematik og et plugin-økosystem, men fokuserer i stedet på at forbedre indholdets kvalitet og tilgængelighed gennem AI.

🔔 Men CZON kan stadig generere statiske websteder. Hvis nødvendigt, kan CZON bruges som en forbehandler, der integreres med andre SSG-løsninger for at generere personlige og pæne websteder.

## Hurtig start

Forudsætninger:

- [Node.js](https://nodejs.org/) er installeret (anbefalet version 18 eller nyere, npx-kommandoen skal være tilgængelig)
- Du har en [OpenAI API-nøgle](https://platform.openai.com/account/api-keys), eller en OPENAI-kompatibel API-nøgle
- Git er installeret (bruges til at liste Markdown-filer fra Git, ignorerer filer filtreret af .gitignore-regler)

Først skal du arbejde i en mappe, der allerede administreres af git:

Konfigurer miljøvariabler

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Påkrævet: Erstat med din OpenAI API-nøgle
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valgfrit, bruger standard OpenAI API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valgfrit, bruger gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valgfrit, indstiller maksimalt antal tokens (hvis udeladt, bruges modellens standardværdi; til lange oversættelser anbefales en højere værdi, f.eks. 8192, afhængigt af modellens maksimale token-understøttelse)
```

Byg webstedet, understøtter flersproget oversættelse. Brug den aktuelle mappe som kildemappe, output til mappen `.czon/dist`.

- Du kan angive de sprogversioner, der skal genereres, ved gentagne gange at bruge parameteren `--lang` (f.eks. `--lang zh-Hans --lang en-US`).
- Der er ingen behov for at konfigurere kildesproget, CZON opdager det automatisk.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Se flere parametre eller få hjælp**:

```bash
npx czon@latest
```