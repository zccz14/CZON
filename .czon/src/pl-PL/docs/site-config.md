---
"title": "Przewodnik konfiguracji witryny CZON"
"summary": "Ten dokument szczegółowo opisuje metody i opcje konfiguracji witryny CZON. Konfiguracja znajduje się w polu `options.site` pliku `.czon/meta.json` i obejmuje `site.baseUrl` (używane do generowania `sitemap.xml` i `robots.txt`), `site.title` (tytuł witryny, domyślnie 'CZON'), `site.gaID` (Google Analytics Measurement ID) oraz `site.clarityID` (Microsoft Clarity Project ID). Wszystkie elementy konfiguracji są opcjonalne; po wprowadzeniu zmian należy ponownie uruchomić `czon build`, aby zaczęły obowiązywać. Jeśli `baseUrl` nie jest skonfigurowane, generowanie `sitemap.xml` zostanie pominięte. Narzędzia analityczne są ładowane tylko po skonfigurowaniu odpowiedniego ID i nie wpływają na wydajność strony. Dokument zawiera informacje o lokalizacji konfiguracji, dostępnych opcjach, pełny przykład oraz uwagi, pomagając użytkownikom w łatwym skonfigurowaniu witryny."
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

CZON umożliwia konfigurację opcji witryny za pomocą pliku `.czon/meta.json`. Konfiguracja ta jest opcjonalna i nie blokuje pierwszego użycia.

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
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Strona główna", "href": "index.html" },
        { "title": "O nas", "href": "about.html" }
      ]
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

Google Analytics Measurement ID, używany do integracji statystyk Google Analytics.

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

Microsoft Clarity Project ID, używany do integracji analizy zachowań użytkowników Clarity.

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

### `site.home`

Konfiguracja ścieżki strony głównej, służąca do dostosowania docelowego przekierowania strony głównej.

- **Typ**: `string`
- **Wartość domyślna**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Opis działania**:

- **Podczas odwiedzania głównej strony głównej**: Gdy użytkownik odwiedza `/index.html`, zostanie automatycznie przekierowany do `/{wykryty język}/{home}` na podstawie języka przeglądarki.
- **Po kliknięciu tytułu w Nagłówku**: Przekierowanie do ścieżki `home` w katalogu bieżącego języka.

**Przypadki użycia**:

- Chcesz, aby użytkownicy przy pierwszej wizycie trafiali bezpośrednio na konkretną stronę (np. przewodnik wprowadzający, opis produktu).
- Strona główna witryny nie jest listą artykułów, ale konkretną stroną dokumentacji.

### `site.navLinks`

Konfiguracja szybkich linków nawigacyjnych, wyświetlanych w nagłówku strony.

- **Typ**: `Array<{ title: string, href: string }>`
- **Wartość domyślna**: `undefined` (nawigacja nie jest wyświetlana)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Strona główna", "href": "index.html" },
        { "title": "Dokumentacja", "href": "docs.html" },
        { "title": "O nas", "href": "about.html" }
      ]
    }
  }
}
```

**Zachowanie responsywne**:

- **Wersja mobilna**: Wyświetlana jest ikona menu hamburgerowego; kliknięcie rozwija wszystkie linki nawigacyjne.
- **Wersja desktopowa**: Linki nawigacyjne są wyświetlane bezpośrednio w Nagłówku, ale nie zajmują więcej niż 40% szerokości ekranu; nadmiarowe linki są wyświetlane w rozwijanym menu "Więcej".

## Pełny przykład

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog techniczny",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Strona główna", "href": "index.html" },
        { "title": "Dokumentacja", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Uwagi

- Po wprowadzeniu zmian w konfiguracji należy ponownie uruchomić `czon build`, aby zaczęły obowiązywać.
- Wszystkie elementy konfiguracji `site` są opcjonalne; można skonfigurować tylko potrzebne części.
- Narzędzia analityczne (GA, Clarity) są ładowane tylko po skonfigurowaniu odpowiedniego ID i nie wpływają na wydajność strony.
- Jeśli `baseUrl` nie jest skonfigurowane, generowanie `sitemap.xml` zostanie pominięte.