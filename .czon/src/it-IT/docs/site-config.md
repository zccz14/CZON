---
"title": "Guida alla Configurazione del Sito CZON"
"summary": "Questo documento descrive in dettaglio i metodi e le opzioni per configurare il sito CZON. La configurazione si trova nel campo `options.site` del file `.czon/meta.json` e include `site.baseUrl` (utilizzato per generare `sitemap.xml` e `robots.txt`), `site.title` (titolo del sito, valore predefinito 'CZON'), `site.gaID` (Google Analytics Measurement ID) e `site.clarityID` (Microsoft Clarity Project ID). Tutte le opzioni di configurazione sono facoltative; dopo le modifiche, è necessario eseguire nuovamente `czon build` per renderle effettive. Se `baseUrl` non è configurato, la generazione di `sitemap.xml` verrà saltata. Gli strumenti di analisi verranno caricati solo dopo aver configurato il rispettivo ID, senza influire sulle prestazioni della pagina. Il documento fornisce la posizione della configurazione, le opzioni disponibili, un esempio completo e le note importanti per aiutare gli utenti a configurare facilmente il proprio sito."
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
      "clarityID": "your-clarity-id"
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
- **Valore Predefinito**: `"CZON"`

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

Come ottenerlo: Vai su [Google Analytics](https://analytics.google.com/) per creare una proprietà, quindi ottieni il Measurement ID nella sezione "Flussi di dati".

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

Come ottenerlo: Vai su [Microsoft Clarity](https://clarity.microsoft.com/) per creare un progetto, quindi ottieni il Project ID nelle impostazioni del progetto.

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
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Note Importanti

- Dopo aver modificato la configurazione, è necessario eseguire nuovamente `czon build` per renderla effettiva.
- Tutte le opzioni di configurazione `site` sono facoltative; puoi configurare solo le parti necessarie.
- Gli strumenti di analisi (GA, Clarity) verranno caricati solo dopo aver configurato il rispettivo ID, senza influire sulle prestazioni della pagina.
- Se `baseUrl` non è configurato, la generazione di `sitemap.xml` verrà saltata.