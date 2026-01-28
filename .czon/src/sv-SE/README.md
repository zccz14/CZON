---
"title": "CZON - AI-Nativ Markdown-innehållsmotor"
"summary": "CZON är en AI-nativ Markdown-innehållsmotor, utformad för att hjälpa innehållsskapare att förenkla skrivprocessen. Den betonar nollkonfigurationsskrivande och genom djup integration av AI-teknik hanterar den automatiskt uppgifter som rubrikgenerering, sammanfattningsextrahering, taggklassificering, flerspråkig översättning och webbplatsnavigering för att minska användarstörningar. CZON har inbyggd statisk webbplatsgenerering, men fokuserar främst på innehållsskapande och hantering, snarare än komplex temaanpassning. Den är lämplig för användare som vill skriva på sitt modersmål och automatiskt generera flerspråkiga versioner, särskilt för webbplatsinnehållsskapare som ogillar komplex konfiguration."
"tags":
  - "CZON"
  - "AI-Nativ"
  - "Markdown"
  - "Innehållsmotor"
  - "Flerspråkig översättning"
  - "Statisk webbplatsgenerering"
  - "Nollkonfiguration"
  - "Innehållsskapande"
---

![CZON:s logotyp](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Besök CZON:s webbplats 🚀
    </a>
</div>

# CZON - AI-Nativ Markdown-innehållsmotor

- **C**: **C**ontent oriented | Innehåll är kung, fokus på innehåll
- **Z**: **Z**ero Configuration | Nollkonfigurationsskrivande, minskar störningar
- **O**: **O**rganic AI-Native | Organisk AI-nativ, djup AI-integration
- **N**: **N**-shaped Energy Curve | N-formad energikurva, engagerar sig i alla delar av skapande-distribution-feedback

I AI-eran kan vi som webbplatsinnehållsskapare ha en smartare innehållsskapandemotor.

**Återgå till innehållet: Minimera störningar, fokusera på skrivandet**

Låt dokument återgå till sin essens, låt skrivandet återgå till lugn.

För det första vill jag inte vara bibliotekarie. Ibland vill jag skriva ner något, men jag kanske inte har bestämt mig för en rubrik eller organiserat det särskilt. Jag vill att LLM automatiskt ska generera rubriker, göra sammanfattningar, kategorisera, navigera och utföra andra organisatoriska uppgifter åt mig.

För det andra måste mitt arbetsrum vara rent. Jag vill inte ha komplexa byggverktyg, krångla med komplicerade dokumentkonfigurationer eller ogillar komplexa strukturer. Varje gång jag ser konfigurationsfiler och projektstrukturer för verktyg som Docusaurus, VuePress eller Astro får jag huvudvärk. Nu har CZON valt att gömma all konfiguration i katalogen `.czon`, sopa undan den i ett hörn, så att användaren bara behöver fokusera på att skriva innehåll. Resten hanterar CZON. Alla andra kataloger är ditt skrivutrymme, du kan organisera dina Markdown-filer hur du vill.

**Återgå till modersmålet: Skriv på ditt modersmål, bygg flerspråkiga versioner smidigt**

Livet är kort, jag orkar inte översätta. Man uttrycker sina tankar på djupast sätt när man använder sitt modersmål. Men samtidigt är det nödvändigt att hålla kontakten med världen, jag vill inte avstå från flerspråkig kommunikation. Därför önskar jag ett verktyg som låter mig skriva på mitt modersmål, samtidigt som det gör mitt innehåll tillgängligt för fler. Nuvarande i18n kräver inte bara att man översätter själv, utan också att man underhåller innehållsuppdateringar, vilket är för besvärligt. Jag väljer att använda LLM för att hjälpa mig med översättningar, vilket sparar mycket tid och gör att flerspråkiga översättningar kan göras med ett klick.

## ✨ Kärnfunktioner

1. 🌍 **AI Flerspråkig översättning**: Använder AI för inkrementell översättning, låter användare skriva Markdown på sitt modersmål, men användarna kan vara flerspråkiga.
2. 📊 **AI Metadataextrahering**: Extraherar automatiskt titel, beskrivning, sammanfattning, nyckelord, målgrupp, URL-vänliga alias, etc.
3. 🏷️ **AI Tagg- och kategorihantering**: Använder AI för att extrahera och hantera taggar och kategorier för innehåll.
4. 🧭 **AI Kategorinavigering**: Använder AI för att generera webbplatsskarta och navigering, känslighet för källfilens placering är låg.
5. 🤖 **AI Hela webbplatsens sammanfattning**: Kan generera sammanfattningar för hela webbplatsen i olika stilar.

Och några icke-AI-funktioner:

1. ⚙️ **Nollkonfiguration**: All konfiguration och cache är gömd i katalogen `.czon`, projektstrukturen hålls ren.
2. 🔄 **Inkrementell byggprocess**: Identifierar ändringar baserat på innehållshash, bearbetar endast ändrade filer.
3. 📚 **Markdown-utökningsstöd**: Inbyggt stöd för KaTeX matematiska formler, Mermaid-diagram, Embla-karuseller, fotnoter, etc.
4. 🚀 **Statisk webbplatsgenerering**: Inbyggd React-baserad SSG, genererar flerspråkiga statiska webbplatser.
5. 🌐 **Automatisk routning baserat på besökarens språk**: Dirigerar automatiskt till motsvarande språkversion baserat på besökarens språk.

## 📦 Snabbstart

### Förutsättningar

- [Node.js](https://nodejs.org/) installerad (rekommenderas LTS-version 24, eller version 18 och uppåt, måste ha kommandot `npx`)
- Har fått en [OpenAI API-nyckel](https://platform.openai.com/account/api-keys), eller en OPENAI-kompatibel API-nyckel
- Git installerat (används för att lista Markdown-filer från Git, ignorerar filer filtrerade av .gitignore-regler)

### Konfiguration av miljövariabler

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obligatoriskt: Ersätt med din OpenAI API-nyckel
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valfritt, använder OpenAIs officiella API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valfritt, använder gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valfritt, sätter maxgräns för antal tokens (om utelämnas används modellens standardvärde, för långa textöversättningar rekommenderas högre värde, t.ex. 8192, beroende på modellens maxstöd för tokens)

# Om HTTP-proxy behövs för att komma åt OpenAI API, kan följande variabler ställas in
export HTTPS_PROXY="http://your-proxy.com:8080"  # Valfritt, sätter HTTPS-proxy
export HTTP_PROXY="http://your-proxy.com:8080"   # Valfritt, sätter HTTP-proxy
```

### Bygg flerspråkig webbplats

Kör i valfri Git-hanterad mapp:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Eftersom språkkoder senare kommer att användas i många delar av den statiska webbplatsgenereringen, se till att använda BCP 47-standardens språkkoder. Till exempel representerar `zh-Hans` förenklad kinesiska, `en-US` amerikansk engelska. Du kan lägga till fler språk efter behov, t.ex. `es-ES` (spanska), `ja-JP` (japanska), `ko-KR` (koreanska), etc.
För en lista över standardspråkkoder, se [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Utmatningskatalog: `.czon/dist`, innehållet i denna katalog behöver sedan distribueras till en plattform för statisk webbplatshosting.

För detaljerad användning, kör `npx czon@latest --help`.

## 🔗 Jämförelse med andra verktyg

| Funktion               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ---------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-nativ**           | ✅ Djup integration      | ❌              | ❌              | ❌              |
| **Nollkonfiguration**  | ✅ Gömd konfiguration    | ❌ Kräver konfigurationsfil | ❌ Kräver konfigurationsfil | ❌ Kräver konfigurationsfil |
| **Flerspråkig AI-översättning** | ✅ Automatisk inkrementell översättning | ❌ Manuell översättning | ❌ Manuell översättning | ❌ Manuell översättning |
| **Automatisk klassificering/taggar** | ✅ AI-extrahering | ❌ Manuell konfiguration | ❌ Manuell konfiguration | ❌ Manuell konfiguration |
| **Markdown-utökningar** | ✅ KaTeX, Mermaid, Embla | ✅ Via tillägg  | ✅ Via tillägg  | ✅ Via tillägg  |
| **Temaanpassning**     | ❌ Begränsad             | ✅ Rik           | ✅ Rik           | ✅ Rik           |

CZON positionerar sig som en **AI-förstärkt innehållsmotor**, inte ett fullfjädrat SSG-verktyg. Den fokuserar på att öka effektiviteten i innehållsskapande genom AI och är lämplig för skapare som värdesätter innehållskvalitet och vill minska konfigurationsbördan. I själva verket kan CZON användas tillsammans med SSG-verktyg som Docusaurus, VuePress, Astro, etc., som en frontend-motor för innehållsgenerering och hantering.

## 📞 Support

- Projektets hemsida: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord-gemenskap: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Låt skrivandet återgå till lugn, låt innehållet växa naturligt._