---
"title": "CZON - AI-Native Markdown-innehållsmotor"
"summary": "CZON är en AI-native Markdown-innehållsmotor som syftar till att hjälpa innehållsskapare att förenkla skrivprocessen. Den betonar nollkonfigurationsskrivande och hanterar automatiskt uppgifter som rubrikgenerering, sammanfattningsextrahering, taggning, flerspråkig översättning och webbplatsnavigering genom djup integration av AI-teknik, vilket minskar användarstörningar. CZON har inbyggd statisk webbplatsgenerering, men fokuserar främst på innehållsskapande och hantering snarare än komplex temaanpassning. Den är lämplig för användare som vill skriva på sitt modersmål och automatiskt generera flerspråkiga versioner, särskilt för webbplatsinnehållsskapare som avskyr komplex konfiguration."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Innehållsmotor"
  - "Flerspråkig översättning"
  - "Statisk webbplatsgenerering"
  - "Nollkonfiguration"
  - "Innehållsskapande"
---

![CZON:s logotyp](logo.png)

# CZON - AI-Native Markdown-innehållsmotor

- **C**: **C**ontent oriented | Innehåll är kung, fokus på innehåll
- **Z**: **Z**ero Configuration | Nollkonfigurationsskrivande, minskar störningar
- **O**: **O**rganic AI-Native | Organisk AI-native, djup AI-integrering
- **N**: **N**-shaped Energy Curve | N-formad energikurva, engagerar sig i alla delar av skapande-distribution-feedback

[> Webbplatsdemo](https://czon.zccz14.com/)

I AI-eran kan vi som webbplatsinnehållsskapare ha en smartare innehållsskapandemotor.

**Återgå till innehållet: Minimera störningar, fokusera på skrivandet**

Låt dokument återgå till sin essens, låt skrivandet återfå sin frid.

För det första vill jag inte vara bibliotekarie. Ibland vill jag skriva ner något, men jag kanske inte har bestämt mig för dess rubrik eller format ännu. Jag vill att LLM automatiskt ska generera rubriker, göra sammanfattningar, kategorisera, navigera och organisera åt mig.

För det andra måste mitt arbetsrum vara rent. Jag vill inte ha komplexa byggverktyg, krångla med komplicerade dokumentkonfigurationer eller gilla komplexa strukturer. Varje gång jag ser konfigurationsfiler och projektstrukturer för verktyg som Docusaurus, VuePress eller Astro får jag huvudvärk. Nu har CZON valt att gömma all konfiguration i katalogen `.czon`, sopa undan den i ett hörn, så att användaren bara behöver fokusera på att skriva innehåll. Resten hanterar CZON. Alla andra kataloger är ditt skrivutrymme, du kan organisera dina Markdown-filer hur du vill.

**Återgå till modersmålet: Skriv på ditt modersmål, bygg flerspråkiga versioner smidigt**

Livet är för kort för att jag ska orka översätta. Man uttrycker sina tankar på djupast nivå när man använder sitt modersmål. Men samtidigt är det nödvändigt att hålla kontakten med världen, jag vill inte ge upp flerspråkig kommunikation. Därför önskar jag ett verktyg som låter mig skriva på mitt modersmål, samtidigt som det gör mitt innehåll tillgängligt för fler. Nuvarande i18n kräver inte bara att man översätter själv, utan också att man underhåller innehållsuppdateringar, vilket är för besvärligt. Jag väljer att använda LLM för att hjälpa mig med översättningar, vilket sparar mycket tid och gör att flerspråkiga översättningar kan göras med ett klick.

## Grundläggande funktioner

1. 🌍 **Automatisk flerspråkig översättning**: Använder AI för inkrementell översättning, låter användaren skriva Markdown på modersmålet, men användaren kan vara flerspråkig.
2. 💭 **Automatisk sammanfattningsextrahering**: Använder AI för innehållsanalys och extrahering av originaltext.
3. 🏷️ **Automatisk taggning och kategorisering**: Använder AI för att extrahera och hantera taggar och kategorier för innehåll.
4. 🧭 **Intelligent kategorinavigering**: Använder AI för att generera webbplatsskarta och navigering, känslighet för källfilens placering är låg.

## Statisk webbplatsgenerering (SSG)

CZON har ett inbyggt SSG-alternativ som kan bygga en godtycklig git-mapp som innehåller Markdown till en statisk HTML-webbplats.

⚠️ Observera att CZON inte är en professionell statisk webbplatsgenerator (SSG), utan en AI-driven Markdown-innehållsmotor som fokuserar på innehållsskapande och hantering.

✅ CZON syftar till att förenkla processen för innehållsskapande och publicering, så att användaren kan fokusera på själva skrivandet istället för att störas av komplex konfiguration och verktyg.

❌ CZON kommer inte att erbjuda komplex temaanpassning och plugin-ekosystem, utan fokuserar på att förbättra innehållets kvalitet och tillgänglighet genom AI.

🔔 Men CZON kan fortfarande generera statiska webbplatser. Om nödvändigt kan CZON användas som en förprocessor och integreras med andra SSG-lösningar för att generera personliga, vackra webbplatser.

## Kom igång snabbt

Förutsättningar:

- [Node.js](https://nodejs.org/) installerad (rekommenderad version 18 eller senare, måste ha kommandot `npx`)
- Har fått en [OpenAI API-nyckel](https://platform.openai.com/account/api-keys), eller en OpenAI-kompatibel API-nyckel
- Git installerat (används för att lista Markdown-filer från Git, ignorerar filer som filtreras bort av `.gitignore`-regler)

Först, arbeta i en mapp som redan hanteras av git:

Konfigurera miljövariabler

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obligatoriskt: Ersätt med din OpenAI API-nyckel
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valfritt, använder OpenAIs officiella API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valfritt, använder gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valfritt, ställer in maxgräns för antal tokens (om utelämnas används modellens standardvärde; för långa textöversättningar rekommenderas ett högre värde, t.ex. 8192, beroende på modellens maximala tokenstöd)
```

Bygg webbplatsen, stöder flerspråkig översättning. Använd aktuell katalog som källkatalog, skicka utdata till katalogen `.czon/dist`.

- Du kan ange vilka språkversioner som ska genereras genom att använda parametern `--lang` flera gånger (t.ex. `--lang zh-Hans --lang en-US`).
- Ingen konfiguration av källspråk behövs, CZON upptäcker det automatiskt.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Visa fler parametrar eller hjälp**:

```bash
npx czon@latest
```