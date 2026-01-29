---
"title": "Guida alla Configurazione del Sito CZON"
"summary": "Questo documento descrive in dettaglio i metodi e le opzioni per configurare il sito CZON. La configurazione si trova nel campo `options.site` del file `.czon/meta.json` e include `site.baseUrl` (utilizzato per generare `sitemap.xml` e `robots.txt`), `site.title` (titolo del sito, valore predefinito 'CZON'), `site.gaID` (Google Analytics Measurement ID) e `site.clarityID` (Microsoft Clarity Project ID). Tutte le opzioni sono facoltative; dopo le modifiche è necessario eseguire nuovamente `czon build` per renderle effettive. Se `baseUrl` non è configurato, la generazione di `sitemap.xml` viene saltata. Gli strumenti di analisi vengono caricati solo dopo aver configurato il rispettivo ID, senza influire sulle prestazioni della pagina. Il documento fornisce la posizione della configurazione, le opzioni disponibili, un esempio completo e note importanti per aiutare gli utenti a configurare facilmente il proprio sito."
"tags":
  - "CZON"
  - "Configurazione Sito"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configurazione del Sito

CZON supporta la configurazione delle opzioni del sito tramite il file `.czon/meta.json`. Queste configurazioni sono facoltative e non bloccano l'uso iniziale.

## Posizione della Configurazione

Le opzioni di configurazione si trovano nel campo `options.site` del file `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Home", "href": "index.html" },
        { "title": "About", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Opzioni di Configurazione Disponibili

### `site.baseUrl`

URL di base del sito, utilizzato per generare `sitemap.xml` e `robots.txt`.

- **Tipo**: `string`
- **Formato**: URL completo, ad esempio `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Dopo la configurazione, verranno generati automaticamente:

- `sitemap.xml` - Mappa del sito contenente tutte le pagine
- Dichiarazione Sitemap in `robots.txt`

### `site.title`

Titolo del sito, visualizzato nell'intestazione della pagina.

- **Tipo**: `string`
- **Valore predefinito**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Il mio sito di documentazione"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, utilizzato per integrare le statistiche di Google Analytics.

- **Tipo**: `string`
- **Formato**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Come ottenerlo: Vai su [Google Analytics](https://analytics.google.com/), crea una proprietà e ottieni il Measurement ID nella sezione "Flussi di dati".

### `site.clarityID`

Microsoft Clarity Project ID, utilizzato per integrare l'analisi del comportamento degli utenti con Clarity.

- **Tipo**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Come ottenerlo: Vai su [Microsoft Clarity](https://clarity.microsoft.com/), crea un progetto e ottieni il Project ID nelle impostazioni del progetto.

### `site.navLinks`

Configurazione dei collegamenti di navigazione rapida, visualizzati nell'intestazione della pagina.

- **Tipo**: `Array<{ title: string, href: string }>`
- **Valore predefinito**: `undefined` (nessuna navigazione visualizzata)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Home", "href": "index.html" },
        { "title": "Documentazione", "href": "docs.html" },
        { "title": "About", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamento responsivo**:

- **Dispositivi mobili**: Mostra un'icona a hamburger, clicca per espandere tutti i collegamenti di navigazione.
- **Desktop**: Mostra i collegamenti di navigazione direttamente nell'Header, ma non oltre il 40% della larghezza dello schermo; gli elementi in eccesso vengono visualizzati tramite un menu a discesa "Altro".

## Esempio Completo

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Tecnico",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Home", "href": "index.html" },
        { "title": "Documentazione", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Note Importanti

- Dopo aver modificato la configurazione, è necessario eseguire nuovamente `czon build` per renderla effettiva.
- Tutte le opzioni di configurazione `site` sono facoltative; puoi configurare solo le parti necessarie.
- Gli strumenti di analisi (GA, Clarity) vengono caricati solo dopo aver configurato il rispettivo ID, senza influire sulle prestazioni della pagina.
- Se `baseUrl` non è configurato, la generazione di `sitemap.xml` viene saltata.