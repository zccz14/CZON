---
"title": "CZON - AI-Native Markdown Content Engine"
"summary": "CZON is een AI-native Markdown-contentengine, ontworpen om contentmakers te helpen hun schrijfproces te vereenvoudigen. Het benadrukt schrijven zonder configuratie, door diepgaande integratie van AI-technologie om taken zoals titelgeneratie, samenvattingsextractie, tagclassificatie, meertalige vertaling en sitenavigatie automatisch te verwerken, waardoor gebruikersonderbrekingen worden verminderd. CZON heeft ingebouwde statische sitegeneratie, maar richt zich voornamelijk op contentcreatie en -beheer, in plaats van complexe thema-aanpassingen. Het is geschikt voor gebruikers die in hun moedertaal willen schrijven en automatisch meertalige versies willen genereren, vooral voor website-contentmakers die een hekel hebben aan complexe configuraties."
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

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Bekijk de Website van CZON 🚀
    </a>
</div>

# CZON - AI-Native Markdown Content Engine

- **C**: **C**ontent oriented | Content is koning, focus op inhoud
- **Z**: **Z**ero Configuration | Schrijven zonder configuratie, minder onderbrekingen
- **O**: **O**rganic AI-Native | Organisch AI-native, diepgaande AI-integratie
- **N**: **N**-shaped Energy Curve | N-vormige energiekromme, betrokken bij alle fasen van creatie-distributie-feedback

In het AI-tijdperk kunnen wij, als website-contentmakers, een slimmere engine voor contentcreatie hebben.

**Terug naar de inhoud: Minimaliseer onderbrekingen, focus op schrijven**

Laat documenten terugkeren naar hun essentie, laat schrijven terugkeren naar rust.

Ten eerste, ik wil geen bibliothecaris zijn. Soms wil ik wat inhoud opschrijven, maar ik heb misschien nog geen titel bedacht of een specifieke structuur gevormd. Ik wil dat een LLM automatisch titels voor me genereert, samenvattingen maakt, classificeert, navigatie en andere organisatietaken uitvoert.

Ten tweede, mijn werkkamer moet schoon zijn. Ik wil geen gecompliceerde bouwtools configureren, geen ingewikkelde documentconfiguraties uitzoeken en houd niet van complexe structuren. Elke keer als ik de configuratiebestanden en projectstructuren van tools zoals Docusaurus, VuePress en Astro zie, krijg ik hoofdpijn. Nu kiest CZON ervoor om alle configuratie te verbergen in de `.czon` map, weg te vegen in een hoekje, zodat gebruikers zich alleen op het schrijven van inhoud hoeven te concentreren. De rest laat CZON afhandelen. Alle andere mappen zijn uw schrijfruimte, u kunt uw Markdown-bestanden vrij organiseren.

**Terug naar de moedertaal: Schrijf in je moedertaal, bouw soepel meertalige versies**

Het leven is kort, ik ben te lui om te vertalen. Mensen kunnen hun denkdiepte het beste benutten wanneer ze hun moedertaal gebruiken. Maar tegelijkertijd is het nodig om verbonden te blijven met de wereld, en ik wil meertalige communicatie niet opgeven. Daarom wens ik een tool die me in staat stelt in mijn moedertaal te schrijven, terwijl meer mensen mijn inhoud kunnen zien. De huidige i18n vereist niet alleen zelfvertaling, maar ook zelfonderhoud van contentupdates, wat te veel gedoe is. Ik kies ervoor om LLM te gebruiken om voor mij te vertalen, wat me veel tijd bespaart en meertalige vertalingen met één klik mogelijk maakt.

## ✨ Kernfuncties

1. 🌍 **AI Meertalige Vertaling**: Gebruik AI voor incrementele vertaling, zodat gebruikers Markdown in hun moedertaal kunnen schrijven, maar de inhoud meertalig kan zijn.
2. 📊 **AI Metadata-extractie**: Automatische extractie van titel, beschrijving, samenvatting, trefwoorden, doelgroep, URL-vriendelijke aliassen, enz.
3. 🏷️ **AI Tagclassificatie**: Gebruik AI voor het extraheren en beheren van tags en categorieën voor inhoud.
4. 🧭 **AI Categorisatienavigatie**: Gebruik AI om een sitemap en navigatie te genereren, ongevoelig voor de locatie van bronbestanden.
5. 🤖 **AI Volledige-site Samenvatting**: Genereer een samenvatting van de hele site in verschillende stijlen.

En enkele niet-AI-functies:

1. ⚙️ **Zero Configuration**: Alle configuratie en cache verborgen in de `.czon` map, projectstructuur blijft netjes.
2. 🔄 **Incrementele Bouw**: Detectie van wijzigingen op basis van content-hash, alleen gewijzigde bestanden worden verwerkt.
3. 📚 **Markdown-extensieondersteuning**: Native ondersteuning voor KaTeX wiskundeformules, Mermaid-diagrammen, Embla-carrousels, voetnoten, enz.
4. 🚀 **Statische Site Generatie**: Ingebouwde React-gebaseerde SSG, genereert meertalige statische sites.
5. 🌐 **Automatische routering op basis van bezoekerstaal**: Routeert automatisch naar de juiste taalversie op basis van de taal van de bezoeker.

## 📦 Snel Starten

### Vereisten

- [Node.js](https://nodejs.org/) geïnstalleerd (aanbevolen LTS-versie 24, of versie 18 en hoger, moet `npx` commando hebben)
- Een [OpenAI API Key](https://platform.openai.com/account/api-keys) verkregen, of een OPENAI-compatibele API Key
- Git geïnstalleerd (gebruikt om Markdown-bestanden uit Git op te lijsten, bestanden gefilterd door .gitignore-regels worden genegeerd)

### Omgevingsvariabelen Configureren

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Verplicht: Vervang door uw OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optioneel, gebruikt standaard de officiële OpenAI API
export OPENAI_MODEL="gpt-3.5-turbo"  # Optioneel, gebruikt standaard het gpt-3.5-turbo model
export OPENAI_MAX_TOKENS="4096"  # Optioneel, stel een maximum tokenlimiet in (indien genegeerd, wordt de standaardwaarde van het model gebruikt, voor lange tekstvertalingen wordt een hogere waarde aanbevolen, bijvoorbeeld 8192, afhankelijk van het maximale aantal tokens dat het gebruikte model ondersteunt)

# Als u een HTTP-proxy nodig heeft om de OpenAI API te bereiken, kunt u de volgende variabelen instellen
export HTTPS_PROXY="http://uw-proxy.com:8080"  # Optioneel, stel HTTPS-proxy in
export HTTP_PROXY="http://uw-proxy.com:8080"   # Optioneel, stel HTTP-proxy in
```

### Bouw een Meertalige Site

Voer in elke door Git beheerde map uit:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Omdat taalcodes later worden gebruikt voor veel functies in de statische sitegeneratie, zorg ervoor dat u taalcodes volgens de BCP 47-standaard gebruikt. Bijvoorbeeld, `zh-Hans` staat voor Vereenvoudigd Chinees, `en-US` voor Amerikaans Engels. U kunt meer talen toevoegen naar behoefte, bijvoorbeeld `es-ES` (Spaans), `ja-JP` (Japans), `ko-KR` (Koreaans), enz.
Raadpleeg voor een lijst met standaardtaalcodes [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Uitvoermap: `.czon/dist`, de inhoud van deze map moet later worden geïmplementeerd naar een statische sitehostingplatform.

Voor gedetailleerd gebruik, voer `npx czon@latest --help` uit.

## 🔗 Vergelijking met Andere Tools

| Functie               | CZON                     | Docusaurus      | VuePress        | Astro           |
| --------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI Native**         | ✅ Diep geïntegreerd     | ❌              | ❌              | ❌              |
| **Zero Configuration**| ✅ Configuratie verborgen| ❌ Configuratiebestand nodig | ❌ Configuratiebestand nodig | ❌ Configuratiebestand nodig |
| **Meertalige AI Vertaling** | ✅ Automatische incrementele vertaling | ❌ Handmatige vertaling | ❌ Handmatige vertaling | ❌ Handmatige vertaling |
| **Automatische Classificatie/Tags** | ✅ AI-extractie | ❌ Handmatige configuratie | ❌ Handmatige configuratie | ❌ Handmatige configuratie |
| **Markdown-extensies**| ✅ KaTeX, Mermaid, Embla | ✅ Via plugins  | ✅ Via plugins  | ✅ Via plugins  |
| **Thema-aanpassing**  | ❌ Beperkt               | ✅ Rijk         | ✅ Rijk         | ✅ Rijk         |

CZON positioneert zich als een **AI-versterkte contentengine**, niet als een volwaardige SSG. Het richt zich op het verbeteren van de efficiëntie van contentcreatie via AI en is geschikt voor makers die de nadruk leggen op contentkwaliteit en de configuratielast willen verminderen. In feite kan CZON worden gecombineerd met SSG-tools zoals Docusaurus, VuePress en Astro, als een front-end engine voor contentgeneratie en -beheer.

## 📞 Ondersteuning

- Project Homepage: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord Discussiegroep: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Laat schrijven terugkeren naar rust, laat inhoud natuurlijk groeien._