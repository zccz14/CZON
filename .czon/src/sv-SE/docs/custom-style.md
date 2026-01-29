---
"title": "CZON Anpassad Stilguide"
"summary": "Detta dokument beskriver i detalj hur man anpassar stilar i CZON-projektet. Genom att skapa en style.css-fil i projektets .czony-katalog och skriva CSS-kod kan du åsidosätta standardstilar eller lägga till ett personligt utseende. Dokumentet förklarar att CZON vid bygge upptäcker och kopierar denna fil till utdatakatalogen, samt lägger till en stil-länk på varje HTML-sida för att säkerställa att de anpassade stilarna laddas efter de inbyggda stilarna för att uppnå överskrivningseffekt. Texten innehåller en lista över tillgängliga CSS-variabler, inklusive bakgrundsfärg, textfärg, länkfärg med mera, och visar flera praktiska exempel, såsom anpassning av varumärkesfärger, justering av innehållsområdets bredd, anpassning av kodblocksstilar och döljning av specifika element. Slutligen betonas viktiga punkter som att filnamnet måste vara style.css, att ändringar kräver ombyggnad, att det rekommenderas att använda CSS-variabler för överskrivning, och att CZON använder Tailwind CSS vilket kan kräva användning av !important."
"tags":
  - "CZON"
  - "Anpassad styling"
  - "CSS"
  - "Frontend-utveckling"
  - "Webbplatsbygge"
  - "Stilöverskrivning"
  - "CSS-variabler"
  - "Tailwind CSS"
---

# Anpassad Styling

CZON stöder anpassning av webbplatsens utseende via filen `.czon/style.css`, vilket låter dig åsidosätta standardstilar eller lägga till ett personligt utseende.

## Användning

1. Skapa filen `style.css` i projektets `.czon`-katalog:

```
ditt-projekt/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Skapa denna fil
├── README.md
└── docs/
```

2. Skriv din anpassade CSS i `style.css`:

```css
/* Exempel: Ändra länkfärg */
:root {
  --link-color: #0066cc;
}

/* Exempel: Ändra bakgrund i mörkt läge */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Kör om `czon build`, de anpassade stilarna tillämpas automatiskt på alla sidor.

## Hur det fungerar

- Vid bygge kontrollerar CZON om `.czon/style.css` finns
- Om den finns kopieras den till utdatakatalogen `.czon/dist/style.css`
- På varje genererad HTML-sida läggs en stil-länk till i `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- De anpassade stilarna laddas efter de inbyggda stilarna, vilket gör att de kan åsidosätta standardstilarna

## Tillgängliga CSS-variabler

CZON använder CSS-variabler för att definiera temafärger. Du kan snabbt justera färgschemat genom att åsidosätta dessa variabler:

```css
:root {
  /* Bakgrundsfärger */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Textfärger */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Länk- och accentfärger */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Ramfärger */
  --border-color: #dee2e6;
}

/* Variabler för mörkt läge */
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

## Exempel

### Anpassa varumärkesfärger

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

### Justera innehållsområdets bredd

```css
.content {
  max-width: 60rem;
}
```

### Anpassa kodblocksstil

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Dölja specifika element

```css
/* Dölj höger sidofält med innehållsförteckning */
.sidebar-right {
  display: none;
}
```

## Viktiga punkter

- Den anpassade stilfilen måste heta `style.css` och placeras i katalogen `.czon/`
- Efter stiländringar måste du köra om `czon build` för att de ska gälla
- Vi rekommenderar att du anpassar stilar genom att åsidosätta CSS-variabler, eftersom detta samtidigt stöder både ljust och mörkt läge
- CZON använder Tailwind CSS. Om du behöver åsidosätta stilar som genereras av Tailwind kan det vara nödvändigt att använda `!important`