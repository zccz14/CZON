---
"title": "Przewodnik po stylach niestandardowych CZON"
"summary": "Ten artykuł szczegółowo opisuje metody dostosowywania stylów w projekcie CZON. Poprzez utworzenie pliku style.css w katalogu .czony projektu i napisanie kodu CSS, można zastąpić domyślne style lub dodać spersonalizowany wygląd. Dokumentacja wyjaśnia, że CZON podczas budowania wykryje i skopiuje ten plik do katalogu wyjściowego oraz doda link do stylów na każdej stronie HTML, zapewniając, że niestandardowe style zostaną załadowane po wbudowanych stylach, co umożliwia ich nadpisanie. W artykule przedstawiono listę dostępnych zmiennych CSS, w tym kolor tła, kolor tekstu, kolor linków itp., oraz pokazano kilka praktycznych przykładów, takich jak dostosowanie kolorów marki, regulacja szerokości obszaru treści, dostosowanie stylów bloków kodu i ukrywanie określonych elementów. Na koniec podkreślono ważne uwagi, takie jak konieczność nazwania pliku style.css, konieczność ponownego zbudowania po modyfikacjach, zalecenie używania zmiennych CSS do nadpisywania oraz fakt, że CZON używa Tailwind CSS, co może wymagać użycia !important."
"tags":
  - "CZON"
  - "Style niestandardowe"
  - "CSS"
  - "Rozwój front-end"
  - "Budowanie strony"
  - "Nadpisywanie stylów"
  - "Zmienne CSS"
  - "Tailwind CSS"
---

# Style niestandardowe

CZON obsługuje dostosowywanie stylów witryny poprzez plik `.czon/style.css`, co pozwala na zastąpienie domyślnych stylów lub dodanie spersonalizowanego wyglądu.

## Sposób użycia

1.  Utwórz plik `style.css` w katalogu `.czon` projektu:

```
twój-projekt/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- utwórz ten plik
├── README.md
└── docs/
```

2.  Napisz swój niestandardowy kod CSS w pliku `style.css`:

```css
/* Przykład: zmiana koloru linków */
:root {
  --link-color: #0066cc;
}

/* Przykład: zmiana tła w trybie ciemnym */
html.dark {
  --bg-primary: #0d1117;
}
```

3.  Uruchom ponownie `czon build`, a niestandardowe style zostaną automatycznie zastosowane do wszystkich stron.

## Zasada działania

-   Podczas budowania CZON sprawdza, czy istnieje plik `.czon/style.css`
-   Jeśli istnieje, kopiuje go do katalogu wyjściowego `.czon/dist/style.css`
-   Na każdej wygenerowanej stronie HTML w sekcji `<head>` dodawany jest link do stylów:
    ```html
    <link rel="stylesheet" href="style.css" />
    ```
-   Niestandardowe style są ładowane po wbudowanych stylach, dzięki czemu mogą je nadpisać

## Dostępne zmienne CSS

CZON używa zmiennych CSS do definiowania kolorów motywu. Możesz szybko dostosować kolorystykę, nadpisując te zmienne:

```css
:root {
  /* Kolory tła */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Kolory tekstu */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Kolory linków i akcentów */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Kolory obramowań */
  --border-color: #dee2e6;
}

/* Zmienne dla trybu ciemnego */
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

## Przykłady

### Dostosowanie kolorów marki

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

### Regulacja szerokości obszaru treści

```css
.content {
  max-width: 60rem;
}
```

### Dostosowanie stylów bloków kodu

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Ukrywanie określonych elementów

```css
/* Ukryj prawą pasek boczny z spisem treści */
.sidebar-right {
  display: none;
}
```

## Ważne uwagi

-   Nazwa pliku z niestandardowymi stylami musi brzmieć `style.css` i musi znajdować się w katalogu `.czon/`
-   Po zmianie stylów należy ponownie uruchomić `czon build`, aby zmiany zaczęły obowiązywać
-   Zaleca się dostosowywanie stylów poprzez nadpisywanie zmiennych CSS, co zapewnia kompatybilność zarówno z trybem jasnym, jak i ciemnym
-   CZON używa Tailwind CSS. Jeśli konieczne jest nadpisanie stylów wygenerowanych przez Tailwind, może być wymagane użycie `!important`