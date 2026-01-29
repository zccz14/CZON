---
"title": "CZON Brugerdefineret Stilguide"
"summary": "Denne artikel beskriver i detaljer metoder til brugerdefinerede stilarter i CZON-projektet. Ved at oprette en style.css-fil i projektets .czon-mappe og skrive CSS-kode kan du tilsidesætte standardstilarter eller tilføje et personligt udseende. Dokumentationen forklarer, at CZON under bygning vil registrere og kopiere denne fil til outputmappen og tilføje et stil-link på hver HTML-side for at sikre, at brugerdefinerede stilarter indlæses efter de indbyggede stilarter for at opnå tilsidesættelse. Artiklen indeholder en liste over tilgængelige CSS-variabler, herunder baggrundsfarver, tekstfarver, linkfarver osv., og viser flere praktiske eksempler, såsom tilpasning af brandfarver, justering af indholdsområdets bredde, tilpasning af kodeblokstilarter og skjuling af specifikke elementer. Til sidst understøges vigtige overvejelser, såsom at filnavnet skal være style.css, at ændringer kræver en genopbygning, at det anbefales at bruge CSS-variabler til tilsidesættelse, og at CZONs brug af Tailwind CSS muligvis kræver brug af !important."
"tags":
  - "CZON"
  - "Brugerdefineret Stil"
  - "CSS"
  - "Frontend-udvikling"
  - "Webstedsbygning"
  - "Stiltilsidesættelse"
  - "CSS-variabler"
  - "Tailwind CSS"
---

# Brugerdefineret Stil

CZON understøtter tilpasning af webstedets stil via filen `.czon/style.css`, hvilket giver dig mulighed for at tilsidesætte standardstilarter eller tilføje et personligt udseende.

## Sådan bruges det

1. Opret filen `style.css` i projektets `.czon`-mappe:

```
dit-projekt/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Opret denne fil
├── README.md
└── docs/
```

2. Skriv din brugerdefinerede CSS i `style.css`:

```css
/* Eksempel: Ændring af linkfarve */
:root {
  --link-color: #0066cc;
}

/* Eksempel: Ændring af baggrund i mørk tilstand */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Kør `czon build` igen, og den brugerdefinerede stil anvendes automatisk på alle sider.

## Sådan virker det

- Under bygningen registrerer CZON, om `.czon/style.css` eksisterer
- Hvis den eksisterer, kopieres den til outputmappen `.czon/dist/style.css`
- På hver genereret HTML-side tilføjes et stil-link i `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Brugerdefinerede stilarter indlæses efter de indbyggede stilarter, så de kan tilsidesætte standardstilarterne

## Tilgængelige CSS-variabler

CZON bruger CSS-variabler til at definere temafarver. Du kan hurtigt justere farveskemaet ved at tilsidesætte disse variabler:

```css
:root {
  /* Baggrundsfarver */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Tekstfarver */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Link- og fremhævningsfarver */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Ramme- og kantfarver */
  --border-color: #dee2e6;
}

/* Variabler for mørk tilstand */
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

## Eksempler

### Tilpasning af brandfarver

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

### Justering af indholdsområdets bredde

```css
.content {
  max-width: 60rem;
}
```

### Tilpasning af kodeblokstilarter

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Skjuling af specifikke elementer

```css
/* Skjul højre sidebjælke med indholdsfortegnelse */
.sidebar-right {
  display: none;
}
```

## Vigtige overvejelser

- Den brugerdefinerede stilfil skal have navnet `style.css` og placeres i mappen `.czon/`
- Ændringer i stilen kræver, at du kører `czon build` igen, før de træder i kraft
- Det anbefales at bruge CSS-variabler til stilændringer, da dette sikrer kompatibilitet med både lys og mørk tilstand
- CZON bruger Tailwind CSS. Hvis du skal tilsidesætte stilarter genereret af Tailwind, kan det være nødvendigt at bruge `!important`