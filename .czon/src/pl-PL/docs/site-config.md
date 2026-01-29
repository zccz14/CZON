---
"title": "Przewodnik konfiguracji witryny CZON"
"summary": "Ten dokument szczegółowo opisuje metody i opcje konfiguracji witryny CZON. Konfiguracja znajduje się w polu `options.site` pliku `.czon/meta.json` i obejmuje `site.baseUrl` (używane do generowania `sitemap.xml` i `robots.txt`), `site.title` (tytuł witryny, domyślnie 'CZON'), `site.gaID` (Google Analytics Measurement ID) oraz `site.clarityID` (Microsoft Clarity Project ID). Wszystkie elementy konfiguracji są opcjonalne; po wprowadzeniu zmian należy ponownie uruchomić `czon build`, aby zaczęły obowiązywać. Jeśli `baseUrl` nie jest skonfigurowane, generowanie `sitemap.xml` zostanie pominięte. Narzędzia analityczne są ładowane tylko po skonfigurowaniu odpowiedniego ID i nie wpływają na wydajność strony. Dokument zawiera lokalizację konfiguracji, dostępne opcje, pełny przykład oraz uwagi, ułatwiając użytkownikom łatwą konfigurację witryny."
"tags":
  - "CZON"
  - "Konfiguracja witryny"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Konfiguracja witryny

CZON umożliwia konfigurację opcji witryny za pomocą pliku `.czon/meta.json`. Te ustawienia są opcjonalne i nie blokują pierwszego użycia.

## Lokalizacja konfiguracji

Elementy konfiguracji znajdują się w polu `options.site` pliku `.czon/meta.json`:

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

## Dostępne opcje konfiguracji

### `site.baseUrl`

Podstawowy adres URL witryny, używany do generowania `sitemap.xml` i `robots.txt`.

- **Typ**: `string`
- **Format**: Pełny adres URL, np. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Po skonfigurowaniu zostaną automatycznie wygenerowane:

- `sitemap.xml` - mapa witryny zawierająca wszystkie strony
- Deklaracja Sitemap w pliku `robots.txt`

### `site.title`

Tytuł witryny wyświetlany w nagłówku strony.

- **Typ**: `string`
- **Wartość domyślna**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Moja dokumentacja"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, używane do integracji statystyk Google Analytics.

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

Jak uzyskać: Przejdź do [Google Analytics](https://analytics.google.com/), utwórz zasób i pobierz Measurement ID w sekcji "Strumienie danych".

### `site.clarityID`

Microsoft Clarity Project ID, używane do integracji analizy zachowań użytkowników Clarity.

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

Jak uzyskać: Przejdź do [Microsoft Clarity](https://clarity.microsoft.com/), utwórz projekt i pobierz Project ID w ustawieniach projektu.

## Pełny przykład

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog techniczny",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Uwagi

- Po zmianie konfiguracji należy ponownie uruchomić `czon build`, aby zmiany zaczęły obowiązywać.
- Wszystkie elementy konfiguracji `site` są opcjonalne; można skonfigurować tylko potrzebne części.
- Narzędzia analityczne (GA, Clarity) są ładowane tylko po skonfigurowaniu odpowiedniego ID i nie wpływają na wydajność strony.
- Jeśli `baseUrl` nie jest skonfigurowane, generowanie `sitemap.xml` zostanie pominięte.