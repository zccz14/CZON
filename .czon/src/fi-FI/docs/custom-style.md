---
"title": "CZON-mukautetun tyylin opas"
"summary": "Tämä dokumentti kuvaa yksityiskohtaisesti CZON-projektin mukautetun tyylin määrittelytavat. Luomalla style.css-tiedoston projektin .czony-hakemistoon ja kirjoittamalla CSS-koodia voit korvata oletustyylejä tai lisätä henkilökohtaisen ulkoasun. Dokumentti selittää, että CZON tunnistaa ja kopioi tiedoston tuotoshakemistoon rakennusvaiheessa, ja lisää tyylilinkin jokaiseen HTML-sivuun varmistaen, että mukautettu tyyli ladataan sisäänrakennetun tyylin jälkeen korvaustarkoituksessa. Tekstissä esitetään käytettävissä olevien CSS-muuttujien luettelo, mukaan lukien taustavärit, tekstivärit, linkkivärit jne., sekä useita käytännön esimerkkejä, kuten brändivärien mukauttaminen, sisältöalueen leveyden säätäminen, koodilohkojen tyylin mukauttaminen ja tiettyjen elementtien piilottaminen. Lopuksi korostetaan huomioitavia seikkoja, kuten että tiedoston nimen on oltava style.css, muutosten jälkeen on suoritettava uudelleenrakennus, CSS-muuttujien käyttöä suositellaan korvauksiin, ja CZON:n käyttäessä Tailwind CSS:ää saattaa tarvita !important-määrettä."
"tags":
  - "CZON"
  - "mukautettu tyyli"
  - "CSS"
  - "frontend-kehitys"
  - "verkkosivujen rakentaminen"
  - "tyylin korvaus"
  - "CSS-muuttujat"
  - "Tailwind CSS"
---

# Mukautettu tyyli

CZON tukee sivuston tyylin mukauttamista `.czon/style.css`-tiedoston kautta, jolloin voit korvata oletustyylejä tai lisätä henkilökohtaisen ulkoasun.

## Käyttötapa

1. Luo `style.css`-tiedosto projektin `.czon`-hakemistoon:

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Luo tämä tiedosto
├── README.md
└── docs/
```

2. Kirjoita mukautettu CSS `style.css`-tiedostoon:

```css
/* Esimerkki: Muuta linkkien väriä */
:root {
  --link-color: #0066cc;
}

/* Esimerkki: Muuta taustaa tummassa tilassa */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Suorita `czon build` uudelleen, niin mukautettu tyyli otetaan automaattisesti käyttöön kaikilla sivuilla.

## Toimintaperiaate

- Rakennusvaiheessa CZON tarkistaa, onko `.czon/style.css`-tiedosto olemassa
- Jos tiedosto on olemassa, se kopioidaan tuotoshakemistoon `.czon/dist/style.css`
- Jokaisessa generoidussa HTML-sivussa lisätään tyylilinkki `<head>`-osion sisälle:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Mukautettu tyyli ladataan sisäänrakennetun tyylin jälkeen, joten se voi korvata oletustyylit

## Käytettävissä olevat CSS-muuttujat

CZON käyttää CSS-muuttujia teemavärien määrittelyyn. Voit nopeasti säätää värimaailmaa korvaamalla nämä muuttujat:

```css
:root {
  /* Taustavärit */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Tekstivärit */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Linkki- ja korostusvärit */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Reunaviivojen värit */
  --border-color: #dee2e6;
}

/* Tummantilan muuttujat */
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

## Esimerkkejä

### Brändivärien mukauttaminen

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

### Sisältöalueen leveyden säätäminen

```css
.content {
  max-width: 60rem;
}
```

### Koodilohkojen tyylin mukauttaminen

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Tiettyjen elementtien piilottaminen

```css
/* Piilota oikeanpuoleinen sisällysluettelopalkki */
.sidebar-right {
  display: none;
}
```

## Huomioitavaa

- Mukautetun tyylitiedoston nimen on oltava `style.css`, ja sen tulee sijaita `.czon/`-hakemistossa
- Tyylimuutosten jälkeen on suoritettava `czon build` uudelleen, jotta muutokset tulevat voimaan
- Suosittelemme käyttämään CSS-muuttujien korvaamista tyylin mukauttamiseen, jotta yhteensopivuus sekä vaalean että tumman tilan kanssa säilyy
- CZON käyttää Tailwind CSS:ää. Jos haluat korvata Tailwindin generoimia tyylejä, saatat tarvita `!important`-määrettä