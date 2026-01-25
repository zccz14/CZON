---
"title": "Dokument testowy diagramów Mermaid"
"summary": "Ten dokument jest plikiem testowym, którego celem jest weryfikacja obsługi renderowania diagramów Mermaid na platformie CZON. Dokument zawiera przykłady różnych typów diagramów Mermaid, takich jak schematy blokowe, diagramy sekwencji, diagramy Gantta, diagramy klas, diagramy stanów i wykresy kołowe, prezentując definicje diagramów od podstawowych struktur po złożone zastosowania. Dodatkowo, dokument zawiera test błędnej składni, służący do sprawdzenia, jak system radzi sobie z nieprawidłowymi diagramami. Dzięki tym przykładom dokument kompleksowo testuje funkcjonalność i niezawodność integracji Mermaid na platformie CZON, zapewniając poprawne renderowanie diagramów oraz obsługę sytuacji wyjątkowych."
"tags":
  - "Mermaid"
  - "Test diagramów"
  - "CZON"
  - "Schemat blokowy"
  - "Diagram sekwencji"
  - "Diagram Gantta"
  - "Diagram klas"
  - "Diagram stanów"
"date": "2024-01-01"
---

# Test diagramów Mermaid

To jest plik testowy służący do weryfikacji funkcji renderowania diagramów Mermaid w CZON.

## Przykład schematu blokowego

```mermaid
graph TD
    A[Początek] --> B{Czy kontynuować?}
    B -->|Tak| C[Wykonaj operację]
    B -->|Nie| D[Koniec]
    C --> E[Sprawdź wynik]
    E --> F{Czy sukces?}
    F -->|Tak| G[Zakończono]
    F -->|Nie| H[Ponów próbę]
    H --> C
    G --> D
```

## Przykład diagramu sekwencji

```mermaid
sequenceDiagram
    participant Użytkownik
    participant System
    participant BazaDanych

    Użytkownik->>System: Wyślij żądanie
    System->>BazaDanych: Zapytaj o dane
    BazaDanych-->>System: Zwróć wynik
    System-->>Użytkownik: Wyświetl wynik
```

## Przykład diagramu Gantta

```mermaid
gantt
    title Harmonogram projektu
    dateFormat  YYYY-MM-DD
    section Projekt
    Analiza wymagań     :done,    des1, 2024-01-01, 7d
    Projekt prototypu   :active,  des2, 2024-01-08, 5d
    Projekt szczegółowy :         des3, after des2, 5d
    section Rozwój
    Rozwój frontendu    :         dev1, after des3, 10d
    Rozwój backendu     :         dev2, after des3, 15d
    section Testy
    Testy jednostkowe   :         test1, after dev1, 5d
    Testy integracyjne  :         test2, after dev2, 5d
```

## Przykład diagramu klas

```mermaid
classDiagram
    class Zwierze {
        +String imie
        +int wiek
        +void jedz()
        +void spij()
    }
    class Pies {
        +void szczekaj()
    }
    class Kot {
        +void miaucz()
    }

    Zwierze <|-- Pies
    Zwierze <|-- Kot
```

## Przykład diagramu stanów

```mermaid
stateDiagram-v2
    [*] --> Bezczynny
    Bezczynny --> Przetwarzanie : Rozpocznij przetwarzanie
    Przetwarzanie --> Sukces : Przetwarzanie zakończone sukcesem
    Przetwarzanie --> Błąd : Przetwarzanie zakończone niepowodzeniem
    Sukces --> [*]
    Błąd --> [*]
```

## Przykład wykresu kołowego

```mermaid
pie title Udział w rynku przeglądarek
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Inne" : 1.8
```

## Test błędnej składni (powinien wyświetlić komunikat o błędzie)

```mermaid
graph TD
    A --> B
    // Brak definicji strzałki tutaj
    C --> D
```

Ten plik testowy zawiera różne typy diagramów Mermaid, służące do weryfikacji, czy integracja Mermaid w CZON działa poprawnie.