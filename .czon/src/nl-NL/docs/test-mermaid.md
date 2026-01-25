---
"title": "Mermaid Diagram Testdocument"
"summary": "Dit document is een testbestand dat bedoeld is om de ondersteuning voor het renderen van Mermaid-diagrammen op het CZON-platform te valideren. Het document bevat voorbeelden van verschillende Mermaid-diagramtypen, zoals stroomdiagrammen, sequentiediagrammen, Gantt-diagrammen, klassendiagrammen, toestandsdiagrammen en taartdiagrammen, en toont diagramdefinities van basisstructuren tot complexe toepassingen. Daarnaast bevat het document een test met foutieve syntaxis om het vermogen van het systeem om foutieve diagrammen af te handelen te verifiëren. Met deze voorbeelden test het document de functionaliteit en robuustheid van de Mermaid-integratie in het CZON-platform grondig, om ervoor te zorgen dat diagrammen correct worden gerenderd en uitzonderingssituaties goed worden afgehandeld."
"tags":
  - "Mermaid"
  - "Diagramtest"
  - "CZON"
  - "Stroomdiagram"
  - "Sequentiediagram"
  - "Gantt-diagram"
  - "Klassendiagram"
  - "Toestandsdiagram"
"date": "2024-01-01"
---

# Mermaid Diagram Test

Dit is een testbestand om de Mermaid-diagramrenderfunctionaliteit in CZON te valideren.

## Stroomdiagram Voorbeeld

```mermaid
graph TD
    A[Start] --> B{Doorgaan?}
    B -->|Ja| C[Voer actie uit]
    B -->|Nee| D[Einde]
    C --> E[Controleer resultaat]
    E --> F{Succesvol?}
    F -->|Ja| G[Voltooid]
    F -->|Nee| H[Opnieuw proberen]
    H --> C
    G --> D
```

## Sequentiediagram Voorbeeld

```mermaid
sequenceDiagram
    participant Gebruiker
    participant Systeem
    participant Database

    Gebruiker->>Systeem: Verzoek indienen
    Systeem->>Database: Gegevens opvragen
    Database-->>Systeem: Resultaat teruggeven
    Systeem-->>Gebruiker: Resultaat tonen
```

## Gantt-diagram Voorbeeld

```mermaid
gantt
    title Projecttijdlijn
    dateFormat  YYYY-MM-DD
    section Ontwerp
    Behoefteanalyse     :done,    des1, 2024-01-01, 7d
    Prototypeontwerp    :active,  des2, 2024-01-08, 5d
    Gedetailleerd ontwerp :         des3, after des2, 5d
    section Ontwikkeling
    Front-end ontwikkeling :         dev1, after des3, 10d
    Back-end ontwikkeling  :         dev2, after des3, 15d
    section Testen
    Unittesten         :         test1, after dev1, 5d
    Integratietesten   :         test2, after dev2, 5d
```

## Klassendiagram Voorbeeld

```mermaid
classDiagram
    class Dier {
        +String naam
        +int leeftijd
        +void eet()
        +void slaap()
    }
    class Hond {
        +void blaf()
    }
    class Kat {
        +void miauw()
    }

    Dier <|-- Hond
    Dier <|-- Kat
```

## Toestandsdiagram Voorbeeld

```mermaid
stateDiagram-v2
    [*] --> Inactief
    Inactief --> Verwerken : Start verwerking
    Verwerken --> Succes : Verwerking geslaagd
    Verwerken --> Fout : Verwerking mislukt
    Succes --> [*]
    Fout --> [*]
```

## Taartdiagram Voorbeeld

```mermaid
pie title Browsergebruik
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Overig" : 1.8
```

## Foutieve Syntaxis Test (moet een foutmelding tonen)

```mermaid
graph TD
    A --> B
    // Hier ontbreekt een pijldefinitie
    C --> D
```

Dit testbestand bevat meerdere Mermaid-diagramtypen om te valideren of de Mermaid-integratie in CZON correct werkt.