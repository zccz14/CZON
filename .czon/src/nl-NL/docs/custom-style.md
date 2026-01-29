---
"title": "CZON Aangepaste Stijlgids"
"summary": "Dit document beschrijft in detail hoe je aangepaste stijlen kunt toepassen in het CZON-project. Door een style.css-bestand aan te maken in de .czony-map van het project en CSS-code te schrijven, kun je standaardstijlen overschrijven of een persoonlijke uitstraling toevoegen. De documentatie legt uit dat CZON dit bestand tijdens het bouwen detecteert en kopieert naar de uitvoermap, en op elke HTML-pagina een stijllink toevoegt, zodat aangepaste stijlen na de ingebouwde stijlen worden geladen en overschrijving mogelijk is. Het document bevat een lijst met beschikbare CSS-variabelen, zoals achtergrondkleuren, tekstkleuren, linkkleuren, en toont meerdere praktijkvoorbeelden, zoals het aanpassen van merkkleuren, het wijzigen van de breedte van inhoudsgebieden, het aanpassen van codeblokstijlen en het verbergen van specifieke elementen. Tot slot worden belangrijke aandachtspunten benadrukt, zoals dat de bestandsnaam style.css moet zijn, dat na wijzigingen opnieuw gebouwd moet worden, dat het aanbevolen is CSS-variabelen te gebruiken voor overschrijving, en dat CZON Tailwind CSS gebruikt, waardoor soms !important nodig kan zijn."
"tags":
  - "CZON"
  - "Aangepaste stijlen"
  - "CSS"
  - "Front-end ontwikkeling"
  - "Website bouwen"
  - "Stijl overschrijven"
  - "CSS-variabelen"
  - "Tailwind CSS"
---

# Aangepaste stijlen

CZON ondersteunt het aanpassen van sitestijlen via het bestand `.czon/style.css`, zodat je standaardstijlen kunt overschrijven of een persoonlijke uitstraling kunt toevoegen.

## Gebruik

1. Maak het bestand `style.css` aan in de `.czon`-map van je project:

```
jouw-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Maak dit bestand aan
├── README.md
└── docs/
```

2. Schrijf je aangepaste CSS in `style.css`:

```css
/* Voorbeeld: linkkleur aanpassen */
:root {
  --link-color: #0066cc;
}

/* Voorbeeld: achtergrond in donkere modus aanpassen */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Voer `czon build` opnieuw uit; de aangepaste stijlen worden automatisch op alle pagina's toegepast.

## Werking

- Tijdens het bouwen controleert CZON of `.czon/style.css` bestaat
- Als het bestaat, wordt het gekopieerd naar de uitvoermap `.czon/dist/style.css`
- In elke gegenereerde HTML-pagina wordt een stijllink toegevoegd in de `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Aangepaste stijlen worden na de ingebouwde stijlen geladen, waardoor ze standaardstijlen kunnen overschrijven

## Beschikbare CSS-variabelen

CZON gebruikt CSS-variabelen om themakleuren te definiëren. Je kunt deze variabelen overschrijven om snel kleuraanpassingen te maken:

```css
:root {
  /* Achtergrondkleuren */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Tekstkleuren */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Link- en accentkleuren */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Randkleuren */
  --border-color: #dee2e6;
}

/* Variabelen voor donkere modus */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## Voorbeelden

### Merkkleuren aanpassen

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### Breedte van inhoudsgebied aanpassen

```css
.content {
  max-width: 60rem;
}
```

### Codeblokstijl aanpassen

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Specifieke elementen verbergen

```css
/* Rechter zijbalk verbergen */
.sidebar-right {
  display: none;
}
```

## Belangrijke punten

- De bestandsnaam voor aangepaste stijlen moet `style.css` zijn en moet in de `.czon/`-map staan
- Na het aanpassen van stijlen moet je `czon build` opnieuw uitvoeren om de wijzigingen door te voeren
- Het wordt aanbevolen om CSS-variabelen te gebruiken voor stijlaanpassingen, zodat zowel de lichte als donkere modus worden ondersteund
- CZON gebruikt Tailwind CSS; als je door Tailwind gegenereerde stijlen wilt overschrijven, kan `!important` nodig zijn