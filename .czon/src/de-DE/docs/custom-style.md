---
"title": "CZON Benutzerdefinierter Stil-Leitfaden"
"summary": "Dieses Dokument beschreibt detailliert die Methode zur Anpassung von Stilen im CZON-Projekt. Durch Erstellen einer style.css-Datei im .czony-Verzeichnis des Projekts und Schreiben von CSS-Code können Standardstile überschrieben oder ein individuelles Erscheinungsbild hinzugefügt werden. Das Dokument erklärt, dass CZON beim Build-Vorgang diese Datei erkennt, in das Ausgabeverzeichnis kopiert und in jeder HTML-Seite einen Stylesheet-Link hinzufügt, um sicherzustellen, dass benutzerdefinierte Stile nach den integrierten Stilen geladen werden und somit überschreiben können. Es enthält eine Liste verfügbarer CSS-Variablen, einschließlich Hintergrundfarbe, Textfarbe, Linkfarbe usw., und zeigt mehrere praktische Beispiele, wie das Anpassen von Markenfarben, Ändern der Inhaltsbereichsbreite, Anpassen von Codeblock-Stilen und Ausblenden bestimmter Elemente. Abschließend werden wichtige Hinweise betont, z.B. dass der Dateiname style.css sein muss, Änderungen einen Neubuild erfordern, die Verwendung von CSS-Variablen zum Überschreiben empfohlen wird und dass bei Verwendung von Tailwind CSS in CZON möglicherweise !important benötigt wird."
"tags":
  - "CZON"
  - "Benutzerdefinierte Stile"
  - "CSS"
  - "Frontend-Entwicklung"
  - "Website-Build"
  - "Stil-Überschreibung"
  - "CSS-Variablen"
  - "Tailwind CSS"
---

# Benutzerdefinierte Stile

CZON unterstützt die Anpassung von Website-Stilen über die Datei `.czon/style.css`, sodass Sie Standardstile überschreiben oder ein individuelles Erscheinungsbild hinzufügen können.

## Verwendung

1. Erstellen Sie die Datei `style.css` im `.czon`-Verzeichnis Ihres Projekts:

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Diese Datei erstellen
├── README.md
└── docs/
```

2. Schreiben Sie Ihr benutzerdefiniertes CSS in `style.css`:

```css
/* Beispiel: Linkfarbe ändern */
:root {
  --link-color: #0066cc;
}

/* Beispiel: Hintergrund im Dunkelmodus ändern */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Führen Sie `czon build` erneut aus. Die benutzerdefinierten Stile werden automatisch auf alle Seiten angewendet.

## Funktionsweise

- Beim Build-Vorgang prüft CZON, ob `.czon/style.css` existiert.
- Falls vorhanden, wird sie in das Ausgabeverzeichnis `.czon/dist/style.css` kopiert.
- In jeder generierten HTML-Seite wird im `<head>`-Bereich ein Stylesheet-Link hinzugefügt:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Benutzerdefinierte Stile werden nach den integrierten Stilen geladen und können diese daher überschreiben.

## Verfügbare CSS-Variablen

CZON verwendet CSS-Variablen zur Definition von Themenfarben. Sie können das Farbschema schnell anpassen, indem Sie diese Variablen überschreiben:

```css
:root {
  /* Hintergrundfarben */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Textfarben */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Link- und Akzentfarben */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Rahmenfarben */
  --border-color: #dee2e6;
}

/* Variablen für Dunkelmodus */
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

## Beispiele

### Markenfarben anpassen

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

### Breite des Inhaltsbereichs anpassen

```css
.content {
  max-width: 60rem;
}
```

### Codeblock-Stil anpassen

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Bestimmte Elemente ausblenden

```css
/* Rechte Seitenleiste ausblenden */
.sidebar-right {
  display: none;
}
```

## Wichtige Hinweise

- Der Dateiname für benutzerdefinierte Stile muss `style.css` lauten und sich im `.czon/`-Verzeichnis befinden.
- Nach Änderungen an den Stilen muss `czon build` erneut ausgeführt werden, damit sie wirksam werden.
- Es wird empfohlen, Stilanpassungen durch Überschreiben von CSS-Variablen vorzunehmen, um Kompatibilität mit Hell- und Dunkelmodus zu gewährleisten.
- Da CZON Tailwind CSS verwendet, kann es erforderlich sein, `!important` zu verwenden, um von Tailwind generierte Stile zu überschreiben.