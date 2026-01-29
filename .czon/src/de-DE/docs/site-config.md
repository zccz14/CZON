---
"title": "CZON Website-Konfigurationsleitfaden"
"summary": "Dieses Dokument erläutert detailliert die Methoden und Optionen zur Konfiguration einer CZON-Website. Die Konfiguration befindet sich im Feld `options.site` der Datei `.czon/meta.json` und umfasst `site.baseUrl` (zur Generierung von `sitemap.xml` und `robots.txt`), `site.title` (Website-Titel, Standardwert ist 'CZON'), `site.gaID` (Google Analytics Measurement ID) und `site.clarityID` (Microsoft Clarity Project ID). Alle Konfigurationselemente sind optional. Nach Änderungen muss `czon build` erneut ausgeführt werden, damit sie wirksam werden. Ohne konfigurierte `baseUrl` wird die Generierung von `sitemap.xml` übersprungen. Analyse-Tools werden nur geladen, wenn die entsprechende ID konfiguriert ist, was die Seitenleistung nicht beeinträchtigt. Das Dokument bietet Konfigurationsort, verfügbare Optionen, vollständige Beispiele und wichtige Hinweise, um Benutzern die einfache Einrichtung ihrer Website zu ermöglichen."
"tags":
  - "CZON"
  - "Website-Konfiguration"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Website-Konfiguration

CZON unterstützt die Konfiguration von Website-Optionen über die Datei `.czon/meta.json`. Diese Konfigurationen sind optional und blockieren die erstmalige Nutzung nicht.

## Konfigurationsort

Die Konfigurationselemente befinden sich im Feld `options.site` der Datei `.czon/meta.json`:

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

## Verfügbare Konfigurationselemente

### `site.baseUrl`

Die Basis-URL der Website, verwendet zur Generierung von `sitemap.xml` und `robots.txt`.

- **Typ**: `string`
- **Format**: Vollständige URL, z.B. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Nach der Konfiguration werden automatisch generiert:

- `sitemap.xml` – Eine Sitemap, die alle Seiten enthält
- Die Sitemap-Deklaration in `robots.txt`

### `site.title`

Der Titel der Website, der im Seitenkopf angezeigt wird.

- **Typ**: `string`
- **Standardwert**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Meine Dokumentationsseite"
    }
  }
}
```

### `site.gaID`

Die Google Analytics Measurement ID zur Integration von Google Analytics Statistiken.

- **Typ**: `string`
- **Format**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

So erhalten Sie sie: Gehen Sie zu [Google Analytics](https://analytics.google.com/), erstellen Sie eine Datenquelle und holen Sie sich die Measurement ID unter "Datenströme".

### `site.clarityID`

Die Microsoft Clarity Project ID zur Integration der Clarity-Nutzerverhaltensanalyse.

- **Typ**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

So erhalten Sie sie: Gehen Sie zu [Microsoft Clarity](https://clarity.microsoft.com/), erstellen Sie ein Projekt und holen Sie sich die Project ID in den Projekteinstellungen.

## Vollständiges Beispiel

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Technik-Blog",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Wichtige Hinweise

- Nach Änderungen der Konfiguration muss `czon build` erneut ausgeführt werden, damit sie wirksam werden.
- Alle `site`-Konfigurationselemente sind optional. Sie können nur die benötigten Teile konfigurieren.
- Analyse-Tools (GA, Clarity) werden nur geladen, wenn die entsprechende ID konfiguriert ist, und beeinträchtigen nicht die Seitenleistung.
- Ohne konfigurierte `baseUrl` wird die Generierung von `sitemap.xml` übersprungen.