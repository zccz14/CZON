---
"title": "Guida alla Configurazione del Sito CZON"
"summary": "Questo documento descrive in dettaglio i metodi e le opzioni per configurare un sito CZON. La configurazione si trova nel campo `options.site` del file `.czon/meta.json` e include `site.baseUrl` (usato per generare `sitemap.xml` e `robots.txt`), `site.title` (titolo del sito, valore predefinito 'CZON'), `site.gaID` (Google Analytics Measurement ID) e `site.clarityID` (Microsoft Clarity Project ID). Tutte le opzioni sono facoltative; dopo le modifiche è necessario eseguire nuovamente `czon build` per renderle effettive. Se `baseUrl` non è configurato, la generazione di `sitemap.xml` viene saltata. Gli strumenti di analisi vengono caricati solo dopo aver configurato il rispettivo ID, senza influire sulle prestazioni della pagina. Il documento fornisce la posizione della configurazione, le opzioni disponibili, un esempio completo e note importanti per aiutare gli utenti a configurare facilmente il proprio sito."
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
      "home": "guide.html",
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

Una volta configurato, verranno generati automaticamente:

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

### `site.home`

Configurazione del percorso della homepage, utilizzata per personalizzare la destinazione del reindirizzamento iniziale.

- **Tipo**: `string`
- **Valore predefinito**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Comportamento**:

- **Quando si accede alla homepage principale**: Quando un utente visita `/index.html`, verrà reindirizzato automaticamente a `/{lingua rilevata}/{home}` in base alla lingua del browser.
- **Quando si fa clic sul titolo nell'Header**: Reindirizza al percorso `home` nella directory della lingua corrente.

**Casi d'uso**:

- Si desidera che gli utenti, al primo accesso, vengano indirizzati direttamente a una pagina specifica (ad esempio, una guida introduttiva, una presentazione del prodotto, ecc.).
- La homepage del sito non è un elenco di articoli, ma una pagina di documentazione specifica.

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
        { "title": "Informazioni", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamento responsivo**:

- **Dispositivi mobili**: Mostra un'icona a menu hamburger; al tocco espande tutti i collegamenti di navigazione.
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
      "home": "getting-started.html",
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
- Tutte le opzioni di configurazione `site` sono facoltative; è possibile configurare solo le parti necessarie.
- Gli strumenti di analisi (GA, Clarity) vengono caricati solo dopo aver configurato il rispettivo ID e non influiscono sulle prestazioni della pagina.
- Se `baseUrl` non è configurato, la generazione di `sitemap.xml` viene saltata.