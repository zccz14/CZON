---
"title": "Guida agli Stili Personalizzati di CZON"
"summary": "Questo documento descrive in dettaglio come personalizzare gli stili nel progetto CZON. Creando un file style.css nella directory .czony del progetto e scrivendo codice CSS, è possibile sovrascrivere gli stili predefiniti o aggiungere un aspetto personalizzato. La documentazione spiega che CZON, durante la build, rileva e copia questo file nella directory di output, aggiungendo un link allo stile in ogni pagina HTML per garantire che gli stili personalizzati vengano caricati dopo quelli integrati, permettendo così la sovrascrittura. Viene fornito un elenco di variabili CSS disponibili, inclusi colori di sfondo, colori del testo, colori dei link, ecc., e vengono mostrati diversi esempi pratici, come la personalizzazione del colore del brand, la regolazione della larghezza dell'area dei contenuti, la personalizzazione dello stile dei blocchi di codice e la possibilità di nascondere elementi specifici. Infine, vengono sottolineati alcuni aspetti importanti: il file deve chiamarsi style.css, dopo le modifiche è necessario ricostruire il progetto, si consiglia di utilizzare le variabili CSS per la sovrascrittura e potrebbe essere necessario utilizzare !important poiché CZON utilizza Tailwind CSS."
"tags":
  - "CZON"
  - "Stili Personalizzati"
  - "CSS"
  - "Sviluppo Frontend"
  - "Costruzione Sito Web"
  - "Sovrascrittura Stili"
  - "Variabili CSS"
  - "Tailwind CSS"
---

# Stili Personalizzati

CZON supporta la personalizzazione degli stili del sito tramite il file `.czon/style.css`, permettendoti di sovrascrivere gli stili predefiniti o aggiungere un aspetto personalizzato.

## Come Utilizzarli

1. Crea il file `style.css` nella directory `.czon` del tuo progetto:

```
tuo-progetto/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Crea questo file
├── README.md
└── docs/
```

2. Scrivi il tuo CSS personalizzato in `style.css`:

```css
/* Esempio: modifica il colore dei link */
:root {
  --link-color: #0066cc;
}

/* Esempio: modifica lo sfondo in modalità scura */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Esegui nuovamente `czon build`. Gli stili personalizzati verranno applicati automaticamente a tutte le pagine.

## Come Funziona

- Durante la build, CZON verifica se esiste `.czon/style.css`
- Se esiste, lo copia nella directory di output `.czon/dist/style.css`
- In ogni pagina HTML generata, viene aggiunto un link allo stile all'interno di `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Gli stili personalizzati vengono caricati dopo quelli integrati, quindi possono sovrascriverli

## Variabili CSS Disponibili

CZON utilizza variabili CSS per definire i colori del tema. Puoi regolare rapidamente la palette sovrascrivendo queste variabili:

```css
:root {
  /* Colori di sfondo */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Colori del testo */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Colori per link e enfasi */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Colori dei bordi */
  --border-color: #dee2e6;
}

/* Variabili per la modalità scura */
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

## Esempi

### Personalizzare il Colore del Brand

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

### Regolare la Larghezza dell'Area dei Contenuti

```css
.content {
  max-width: 60rem;
}
```

### Personalizzare lo Stile dei Blocchi di Codice

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Nascondere Elementi Specifici

```css
/* Nasconde la barra laterale destra (indice) */
.sidebar-right {
  display: none;
}
```

## Note Importanti

- Il file degli stili personalizzati deve chiamarsi `style.css` e trovarsi nella directory `.czon/`
- Dopo aver modificato gli stili, è necessario eseguire nuovamente `czon build` per applicare le modifiche
- Si consiglia di personalizzare gli stili sovrascrivendo le variabili CSS, in modo da mantenere la compatibilità con le modalità chiara e scura
- Poiché CZON utilizza Tailwind CSS, per sovrascrivere gli stili generati da Tailwind potrebbe essere necessario utilizzare `!important`