---
"title": "Mermaid-kaavioiden testidokumentti"
"summary": "Tämä dokumentti on testitiedosto, jonka tarkoituksena on varmistaa CZON-alustan Mermaid-kaavioiden renderöintituki. Dokumentissa esitellään esimerkkejä useista Mermaid-kaaviotyypeistä, kuten vuokaavioista, sekvenssikaavioista, Gantt-kaavioista, luokkakaavioista, tilakaavioista ja ympyräkaavioista, jotka näyttävät kaavioiden määrittelyn perusrakenteesta monimutkaisiin sovelluksiin. Lisäksi dokumentti sisältää virheellisen syntaksin testauksen, jolla varmistetaan järjestelmän kyky käsitellä virheellisiä kaavioita. Näiden esimerkkien avulla dokumentti testaa kattavasti CZON-alustan Mermaid-integraation toiminnallisuutta ja robustisuutta, varmistaen, että kaaviot renderöityvät oikein ja poikkeustilanteet käsitellään asianmukaisesti."
"tags":
  - "Mermaid"
  - "Kaaviotestaus"
  - "CZON"
  - "Vuokaavio"
  - "Sekvenssikaavio"
  - "Gantt-kaavio"
  - "Luokkakaavio"
  - "Tilakaavio"
"date": "2024-01-01"
---

# Mermaid-kaavioiden testaus

Tämä on testitiedosto, jolla varmistetaan Mermaid-kaavioiden renderöintitoiminto CZON:ssa.

## Vuokaavio-esimerkki

```mermaid
graph TD
    A[Aloitus] --> B{Jatketaanko?}
    B -->|Kyllä| C[Suorita toiminto]
    B -->|Ei| D[Lopetus]
    C --> E[Tarkista tulos]
    E --> F{Onnistuiko?}
    F -->|Kyllä| G[Valmis]
    F -->|Ei| H[Yritä uudelleen]
    H --> C
    G --> D
```

## Sekvenssikaavio-esimerkki

```mermaid
sequenceDiagram
    participant Käyttäjä
    participant Järjestelmä
    participant Tietokanta

    Käyttäjä->>Järjestelmä: Lähetä pyyntö
    Järjestelmä->>Tietokanta: Kysely tietoja
    Tietokanta-->>Järjestelmä: Palauta tulokset
    Järjestelmä-->>Käyttäjä: Näytä tulokset
```

## Gantt-kaavio-esimerkki

```mermaid
gantt
    title Projektin aikataulu
    dateFormat  YYYY-MM-DD
    section Suunnittelu
    Vaatimusanalyysi     :done,    des1, 2024-01-01, 7d
    Prototyyppisuunnittelu     :active,  des2, 2024-01-08, 5d
    Yksityiskohtainen suunnittelu     :         des3, after des2, 5d
    section Kehitys
    Frontend-kehitys     :         dev1, after des3, 10d
    Backend-kehitys     :         dev2, after des3, 15d
    section Testaus
    Yksikkötestaus     :         test1, after dev1, 5d
    Integraatiotestaus     :         test2, after dev2, 5d
```

## Luokkakaavio-esimerkki

```mermaid
classDiagram
    class Eläin {
        +String nimi
        +int ikä
        +void syö()
        +void nukkuu()
    }
    class Koira {
        +void hauku()
    }
    class Kissa {
        +void nauku()
    }

    Eläin <|-- Koira
    Eläin <|-- Kissa
```

## Tilakaavio-esimerkki

```mermaid
stateDiagram-v2
    [*] --> Lepotila
    Lepotila --> Käsittely : Aloita käsittely
    Käsittely --> Onnistuminen : Käsittely onnistui
    Käsittely --> Virhe : Käsittely epäonnistui
    Onnistuminen --> [*]
    Virhe --> [*]
```

## Ympyräkaavio-esimerkki

```mermaid
pie title Selainten käyttöosuudet
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Muut" : 1.8
```

## Virheellisen syntaksin testaus (pitäisi näyttää virheilmoitus)

```mermaid
graph TD
    A --> B
    // Täältä puuttuu nuolen määrittely
    C --> D
```

Tämä testitiedosto sisältää useita Mermaid-kaaviotyyppejä, joilla varmistetaan, että CZON:n Mermaid-integraatio toimii oikein.