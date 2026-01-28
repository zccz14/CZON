---
"title": "CZON - AI-Nativ Markdown-indholdsengine"
"summary": "CZON er en AI-nativ Markdown-indholdsengine, der er designet til at hjælpe indholdsskabere med at forenkle skriveprocessen. Den lægger vægt på nul-konfigurationsskrivning og håndterer automatisk opgaver som titelgenerering, resuméudtræk, tagkategorisering, flersproget oversættelse og webstedsnavigation gennem dyb integration af AI-teknologi, hvilket reducerer brugerforstyrrelser. CZON har indbygget statisk webstedsgenerering, men fokuserer primært på indholdsproduktion og -administration frem for kompleks tematik. Den er velegnet til brugere, der ønsker at skrive på deres modersmål og automatisk generere flersprogede versioner, især for webstedsindholdsskabere, der hader kompleks konfiguration."
"tags":
  - "CZON"
  - "AI-Nativ"
  - "Markdown"
  - "Indholdsengine"
  - "Flersproget oversættelse"
  - "Statisk webstedsgenerering"
  - "Nul-konfiguration"
  - "Indholdsproduktion"
---

![CZONs logo](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Se CZONs websted 🚀
    </a>
</div>

# CZON - AI-Nativ Markdown-indholdsengine

- **C**: **C**ontent oriented | Indhold er kongen, fokus på indhold
- **Z**: **Z**ero Configuration | Nul-konfigurationsskrivning, mindre forstyrrelser
- **O**: **O**rganic AI-Native | Organisk AI-nativ, dyb AI-integration
- **N**: **N**-shaped Energy Curve | N-formet energikurve, involverer alle faser: produktion-distribution-feedback

I AI-tiden kan vi som webstedsindholdsskabere have en mere intelligent indholdsproduktionsmotor.

**Tilbage til indholdet: Minimér forstyrrelser, fokuser på at skrive**

Lad dokumenter vende tilbage til essensen, lad skrivningen vende tilbage til ro.

For det første vil jeg ikke være bibliotekar. Jeg vil nogle gange skrive noget indhold, men jeg har måske ikke tænkt på en titel endnu, og det er ikke organiseret særligt godt. Jeg ønsker, at LLM automatisk vil hjælpe mig med at generere titler, lave resuméer, kategorisere, navigere og andre organisatoriske opgaver.

For det andet skal mit skriveværelse være rent. Jeg vil ikke have komplekse byggeværktøjer, rode med komplekse dokumentkonfigurationer eller have komplekse strukturer. Hver gang jeg ser konfigurationsfiler og projektstrukturer for værktøjer som Docusaurus, VuePress og Astro, får jeg hovedpine. Nu vælger CZON at skjule al konfiguration i `.czon`-mappen, feje den ind i et hjørne, så brugeren kun skal fokusere på at skrive indhold, og CZON håndterer resten. Alle andre mapper er dit skriveområde, hvor du kan organisere dine Markdown-filer, som du vil.

**Tilbage til modersmålet: Skriv på dit modersmål, byg flersprogede versioner problemfrit**

Livet er for kort til, at jeg gider oversætte. Man udtrykker sine tanker bedst, når man bruger sit modersmål. Men det er også nødvendigt at forbinde sig med verden, og jeg vil ikke opgive flersproget kommunikation. Derfor ønsker jeg et værktøj, der lader mig skrive på mit modersmål, samtidig med at det gør mit indhold tilgængeligt for flere mennesker. Nuværende i18n kræver ikke kun manuel oversættelse, men også manuel opdatering af indhold, hvilket er for besværligt. Jeg vælger at bruge LLM til at hjælpe mig med oversættelsen, hvilket sparer mig for meget tid og gør det muligt at fuldføre oversættelser til flere sprog med et enkelt klik.

## ✨ Kernefunktioner

1. 🌍 **AI Flersproget Oversættelse**: Brug AI til inkrementel oversættelse, så brugeren kan skrive Markdown på modersmålet, men stadig have flersproget indhold.
2. 📊 **AI Metadataudtræk**: Automatisk udtræk af titel, beskrivelse, resumé, nøgleord, målgruppe, URL-venlige alias osv.
3. 🏷️ **AI Tagkategorisering**: Brug AI til at udtrække og administrere tags og kategorier for indhold.
4. 🧭 **AI Kategorinavigation**: Brug AI til at generere webstedsoversigt og navigation, uafhængig af kildefilplacering.
5. 🤖 **AI Fuldstændigt Webstedsresumé**: Generer fuldstændigt webstedsresumé i forskellige stilarter.

Og nogle ikke-AI-funktioner:

1. ⚙️ **Nul-konfiguration**: Al konfiguration og cache er skjult i `.czon`-mappen, projektstrukturen forbliver ren.
2. 🔄 **Inkrementel bygning**: Baseret på indholdshash for at registrere ændringer, behandler kun ændrede filer.
3. 📚 **Markdown-udvidelsesunderstøttelse**: Native understøttelse af KaTeX matematiske formler, Mermaid-diagrammer, Embla-diaspil, fodnoter osv.
4. 🚀 **Statisk webstedsgenerering**: Indbygget React-baseret SSG, genererer flersprogede statiske websteder.
5. 🌐 **Automatisk routing baseret på besøgerens sprog**: Router automatisk til den tilsvarende sprogversion baseret på besøgerens sprog.

## 📦 Hurtig start

### Forudsætninger

- [Node.js](https://nodejs.org/) installeret (anbefales LTS version 24, eller version 18 og derover, skal have npx-kommandoen)
- Har fået en [OpenAI API-nøgle](https://platform.openai.com/account/api-keys), eller en OPENAI-kompatibel API-nøgle
- Git installeret (bruges til at liste Markdown-filer fra Git, ignorerer filer filtreret af .gitignore-regler)

### Konfiguration af miljøvariabler

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Påkrævet: Erstat med din OpenAI API-nøgle
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Valgfri, bruger standard OpenAI API som standard
export OPENAI_MODEL="gpt-3.5-turbo"  # Valgfri, bruger gpt-3.5-turbo-modellen som standard
export OPENAI_MAX_TOKENS="4096"  # Valgfri, sætter maksimal token-grænse (hvis udeladt, bruges modellens standardværdi; til lange oversættelser anbefales en højere værdi, f.eks. 8192, afhængigt af modellens maksimale token-understøttelse)

# Hvis du skal bruge en HTTP-proxy for at få adgang til OpenAI API, kan du sætte følgende variabler
export HTTPS_PROXY="http://your-proxy.com:8080"  # Valgfri, sætter HTTPS-proxy
export HTTP_PROXY="http://your-proxy.com:8080"   # Valgfri, sætter HTTP-proxy
```

### Byg flersproget websted

Kør i enhver Git-styret mappe:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Da sprogkoderne senere vil blive brugt i mange funktioner i den statiske webstedsgenerering, skal du sikre dig, at du bruger BCP 47-standardens sprogkoder. For eksempel repræsenterer `zh-Hans` forenklet kinesisk, og `en-US` repræsenterer amerikansk engelsk. Du kan tilføje flere sprog efter behov, f.eks. `es-ES` (spansk), `ja-JP` (japansk), `ko-KR` (koreansk) osv.
Se [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) for en liste over standard sprogkoder.

Outputmappe: `.czon/dist`, dette indehold skal herefter deployes til en statisk webstedshostingplatform.

For detaljeret brug, kør `npx czon@latest --help`.

## 🔗 Sammenligning med andre værktøjer

| Funktion               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ---------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-nativ**           | ✅ Dyb integration       | ❌              | ❌              | ❌              |
| **Nul-konfiguration**  | ✅ Skjult konfiguration  | ❌ Kræver konfigurationsfil | ❌ Kræver konfigurationsfil | ❌ Kræver konfigurationsfil |
| **Flersproget AI-oversættelse** | ✅ Automatisk inkrementel oversættelse | ❌ Manuel oversættelse | ❌ Manuel oversættelse | ❌ Manuel oversættelse |
| **Automatisk kategorisering/tagging** | ✅ AI-udtræk | ❌ Manuel konfiguration | ❌ Manuel konfiguration | ❌ Manuel konfiguration |
| **Markdown-udvidelser** | ✅ KaTeX, Mermaid, Embla | ✅ Via plugins | ✅ Via plugins | ✅ Via plugins |
| **Temakontrol**        | ❌ Begrænset             | ✅ Rigt         | ✅ Rigt         | ✅ Rigt         |

CZON positionerer sig som en **AI-forbedret indholdsengine**, ikke et fuldt funktionelt SSG. Den fokuserer på at forbedre effektiviteten af indholdsproduktion gennem AI og er velegnet til skabere, der vægter indholdskvalitet og ønsker at reducere konfigurationsbyrden. Faktisk kan CZON kombineres med SSG-værktøjer som Docusaurus, VuePress og Astro som en frontend-engine til indholdsgenerering og -administration.

## 📞 Support

- Projektets hjemmeside: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord-forum: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Lad skrivningen vende tilbage til ro, lad indholdet vokse naturligt._