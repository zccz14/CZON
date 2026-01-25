---
"title": "CZON - AI-Native Markdown Content Engine"
"summary": "CZON is een AI-native Markdown-contentengine, ontworpen om contentmakers te helpen hun schrijfproces te vereenvoudigen. Het benadrukt schrijven zonder configuratie, door diepgaande integratie van AI-technologie om taken zoals titelgeneratie, samenvattingsextractie, tagclassificatie, meertalige vertaling en sitenavigatie automatisch af te handelen, waardoor gebruikers minder worden gestoord. CZON heeft ingebouwde statische sitegeneratie, maar richt zich voornamelijk op contentcreatie en -beheer, in plaats van complexe thema-aanpassingen. Het is geschikt voor gebruikers die in hun moedertaal willen schrijven en automatisch meertalige versies willen genereren, vooral voor website-contentmakers die een hekel hebben aan complexe configuratie."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Content Engine"
  - "Meertalige Vertaling"
  - "Statische Site Generatie"
  - "Zero Configuration"
  - "Content Creatie"
---

![Logo van CZON](logo.png)

# CZON - AI-Native Markdown Content Engine

- **C**: **C**ontent oriented | Content is koning, focus op inhoud
- **Z**: **Z**ero Configuration | Schrijven zonder configuratie, minder onderbrekingen
- **O**: **O**rganic AI-Native | Organische AI-native, diep geïntegreerde AI
- **N**: **N**-vormige Energiecurve | N-vormige energiecurve, betrokken bij alle fasen van creatie-distributie-feedback

[> Website Demo](https://czon.zccz14.com/)

In het AI-tijdperk kunnen wij, als website-contentmakers, een slimmere contentcreatie-engine hebben.

**Terug naar de inhoud: Minimaliseer onderbrekingen, focus op schrijven**

Laat documenten terugkeren naar hun essentie, laat schrijven terugkeren naar rust.

Ten eerste, ik wil geen bibliothecaris zijn. Soms wil ik wat inhoud opschrijven, maar ik heb misschien nog geen titel bedacht of een specifieke structuur gevormd. Ik wil dat een LLM automatisch titels voor me genereert, samenvattingen maakt, classificeert, navigatie en andere organisatietaken uitvoert.

Ten tweede, mijn werkkamer moet opgeruimd zijn. Ik wil geen gecompliceerde bouwtools configureren, rommelen met complexe documentconfiguraties, en houd niet van ingewikkelde structuren. Elke keer als ik de configuratiebestanden en projectstructuren van tools zoals Docusaurus, VuePress, Astro zie, krijg ik hoofdpijn. Nu kiest CZON ervoor om alle configuratie te verbergen in de .czon-map, weggeveegd in een hoekje, zodat gebruikers zich alleen op het schrijven van inhoud hoeven te concentreren, en de rest aan CZON overlaten. Alle andere mappen zijn uw schrijfruimte, u kunt uw Markdown-bestanden vrij organiseren.

**Terug naar de moedertaal: Schrijf in je moedertaal, bouw soepel meertalige versies**

Het leven is kort, ik heb geen zin om te vertalen. Mensen kunnen hun denkdiepte het beste benutten wanneer ze hun moedertaal gebruiken. Maar tegelijkertijd is het nodig om verbonden te blijven met de wereld, en ik wil meertalige communicatie niet opgeven. Daarom wens ik een tool die me in staat stelt in mijn moedertaal te schrijven, terwijl meer mensen mijn inhoud kunnen zien. De huidige i18n vereist niet alleen zelfvertaling, maar ook zelfonderhoud van contentupdates, wat te veel gedoe is. Ik kies ervoor om LLM te gebruiken om vertalingen voor me te doen, wat me veel tijd bespaart en meertalige vertalingen met één klik mogelijk maakt.

## Basisfunctionaliteiten

1. 🌍 **Automatische meertalige vertaling**: Gebruik AI voor incrementele vertaling, zodat gebruikers Markdown in hun moedertaal kunnen schrijven, maar de gebruikers meertalig kunnen zijn.
2. 💭 **Automatische samenvattingsextractie**: Gebruik AI voor inhoudsanalyse en -extractie van de originele tekst.
3. 🏷️ **Automatische tagclassificatie**: Gebruik AI voor het extraheren en beheren van tags en classificaties van inhoud.
4. 🧭 **Slimme classificatienavigatie**: Gebruik AI om een sitemap en navigatie te genereren, ongevoelig voor de locatie van bronbestanden.

## Statische Site Generatie (SSG)

CZON heeft een ingebouwd SSG-schema dat elke git-map met Markdown kan omzetten in een statische HTML-site.

⚠️ Let op: CZON is geen professionele statische sitegenerator (SSG), maar een AI-gestuurde Markdown-contentengine, gericht op contentcreatie en -beheer.

✅ CZON is bedoeld om het proces van contentcreatie en publicatie te vereenvoudigen, zodat gebruikers zich kunnen concentreren op het schrijven zelf, in plaats van gehinderd te worden door complexe configuratie en tools.

❌ CZON biedt geen complexe thema-aanpassingen en plug-in ecosystemen, maar richt zich op het verbeteren van de kwaliteit en toegankelijkheid van inhoud via AI.

🔔 CZON kan echter nog steeds statische sites genereren. Indien nodig kan CZON als preprocessor worden gebruikt, geïntegreerd met andere SSG-oplossingen om gepersonaliseerde, mooie sites te genereren.

## Snel starten

Vereisten:

- [Node.js](https://nodejs.org/) geïnstalleerd (aanbevolen versie 18 of hoger, npx-commando vereist)
- Een [OpenAI API Key](https://platform.openai.com/account/api-keys) verkregen, of een OPENAI-compatibele API Key
- Git geïnstalleerd (om Markdown-bestanden uit Git op te lijsten, bestanden die door .gitignore-regels worden gefilterd worden genegeerd)

Werk eerst in een map die al door Git wordt beheerd:

Configureer omgevingsvariabelen

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Verplicht: Vervang door uw OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optioneel, standaard wordt de officiële OpenAI API gebruikt
export OPENAI_MODEL="gpt-3.5-turbo"  # Optioneel, standaard wordt het gpt-3.5-turbo model gebruikt
export OPENAI_MAX_TOKENS="4096"  # Optioneel, stel een maximale tokenlimiet in (indien weggelaten wordt de standaardwaarde van het model gebruikt, voor lange tekstvertalingen wordt een hogere waarde aanbevolen, bijvoorbeeld 8192, afhankelijk van het maximale aantal tokens dat het gebruikte model ondersteunt)
```

Bouw de site, ondersteunt meertalige vertaling. Gebruik de huidige map als bronmap, uitvoer naar de `.czon/dist` map.

- U kunt meerdere keren de `--lang` parameter gebruiken om de te genereren taalversies op te geven (bijvoorbeeld `--lang zh-Hans --lang en-US`).
- Bron taal hoeft niet geconfigureerd te worden, CZON detecteert dit automatisch.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Bekijk meer parameters of help**:

```bash
npx czon@latest
```