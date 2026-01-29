---
"title": "CZON Tilpasset Stilguide"
"summary": "Denne artikkelen beskriver i detalj hvordan du tilpasser stiler i CZON-prosjektet. Ved å opprette en style.css-fil i prosjektets .czon-katalog og skrive CSS-kode, kan du overstyre standardstiler eller legge til et personlig utseende. Dokumentasjonen forklarer at CZON under bygging vil oppdage og kopiere denne filen til utdatakatalogen, og legge til en stil-lenke i hver HTML-side for å sikre at de tilpassede stilene lastes etter de innebygde stilene for å oppnå overstyringseffekt. Artikkelen lister opp tilgjengelige CSS-variabler, inkludert bakgrunnsfarger, tekstfarger, lenkefarger osv., og viser flere praktiske eksempler, som tilpassing av merkevarefarger, justering av innholdsområdets bredde, tilpassing av kodeblokkstiler og skjuling av spesifikke elementer. Til slutt understrekes viktige punkter, som at filnavnet må være style.css, at endringer krever ombygging, at det anbefales å bruke CSS-variabler for overstyring, og at CZON bruker Tailwind CSS, noe som kan kreve bruk av !important."
"tags":
  - "CZON"
  - "Tilpassede stiler"
  - "CSS"
  - "Frontend-utvikling"
  - "Nettstedbygging"
  - "Stiloverstyring"
  - "CSS-variabler"
  - "Tailwind CSS"
---

# Tilpassede stiler

CZON støtter tilpassing av nettstedstiler gjennom `.czon/style.css`-fila, slik at du kan overstyre standardstiler eller legge til et personlig utseende.

## Bruksmåte

1. Opprett `style.css`-fila i prosjektets `.czon`-katalog:

```
ditt-prosjekt/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Opprett denne fila
├── README.md
└── docs/
```

2. Skriv din tilpassede CSS i `style.css`:

```css
/* Eksempel: Endre lenkefarge */
:root {
  --link-color: #0066cc;
}

/* Eksempel: Endre bakgrunn i mørk modus */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Kjør `czon build` på nytt, de tilpassede stilene vil automatisk bli brukt på alle sider.

## Hvordan det fungerer

- Under bygging vil CZON sjekke om `.czon/style.css` eksisterer
- Hvis den eksisterer, kopieres den til utdatakatalogen `.czon/dist/style.css`
- I hver generert HTML-side legges det til en stil-lenke i `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- De tilpassede stilene lastes etter de innebygde stilene, og kan derfor overstyre standardstilene

## Tilgjengelige CSS-variabler

CZON bruker CSS-variabler for å definere temafarger. Du kan raskt justere fargepaletten ved å overstyre disse variablene:

```css
:root {
  /* Bakgrunnsfarger */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Tekstfarger */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Lenke- og fremhevingsfarger */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Ramme-/kantfarger */
  --border-color: #dee2e6;
}

/* Variabler for mørk modus */
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

### Tilpass merkevarefarger

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

### Juster bredden på innholdsområdet

```css
.content {
  max-width: 60rem;
}
```

### Tilpass kodeblokkstiler

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Skjul spesifikke elementer

```css
/* Skjul høyre sidemeny */
.sidebar-right {
  display: none;
}
```

## Viktige punkter

- Den tilpassede stilfilen må hete `style.css` og plasseres i `.czon/`-katalogen
- Endringer i stilene krever at du kjører `czon build` på nytt for å tre i kraft
- Det anbefales å bruke CSS-variabler for stiloverstyring, da dette sikrer kompatibilitet med både lys og mørk modus
- CZON bruker Tailwind CSS. Hvis du trenger å overstyre stiler generert av Tailwind, kan det være nødvendig å bruke `!important`