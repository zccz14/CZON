---
"title": "Basisregels voor het genereren van AI-analyserapporten"
"summary": "Dit document biedt basisregels voor het genereren van AI-analyserapporten en benadrukt dat de documentleesprocedure strikt moet worden gevolgd. Deze procedure omvat vijf fasen: het verkrijgen van de bestandslijst, batchgewijs lezen en samenvatten, contextbeheer, volledigheidscontrole en het genereren van het rapport. Kernprincipes zijn onder meer het één voor één lezen van alle bestanden, feitelijke basis, gestandaardiseerde verwijzingslinks en het meewegen van tijdsrelevantie. Algemene regels vereisen dat rapporten beginnen met een specifieke opmaak, worden uitgevoerd naar een aangewezen map, en verbieden het genereren van rapporten of het overslaan van bestanden voordat alle bestanden zijn gelezen."
"tags":
  - "AI-analyse"
  - "Rapportgeneratie"
  - "Documentlezen"
  - "Regels"
  - "Markdown"
  - "Feitelijke basis"
  - "Verwijzingsnormen"
  - "Procesbeheer"
---

# AI Analyserapport Generatie - Basisregels

## Documentleesprocedure (moet strikt worden gevolgd)

### Kernprincipes

Deze repository kan honderden of duizenden Markdown-bestanden bevatten. Je moet **elk bestand één voor één lezen**, overslaan is niet toegestaan.
Om grote aantallen bestanden te verwerken, wordt een **progressieve lees- en samenvattingsstrategie** gebruikt.

### Fase 1: Verkrijg de volledige bestandslijst

1. Voer `npx czon@latest ls-files` uit om alle Markdown-bestanden op te halen
2. Noteer het totale aantal bestanden N
3. Sla de bestandslijst op als een wachtrij voor lezen

### Fase 2: Batchgewijs lezen en samenvatten

Verwerk de bestanden in batches. Een batchgrootte van 10-20 bestanden wordt aanbevolen, maar je kunt deze aanpassen op basis van bestandsgrootte en complexiteit.

**Voor elke batch:**

1. **Lezen**: Gebruik het Read-hulpmiddel om de volledige inhoud van elk bestand in de batch één voor één te lezen
2. **Extraheren**: Haal relevante informatie op op basis van de **aandachtspunten van de huidige stijl** (zie de stijlgids hieronder)
3. **Batchsamenvatting**: Verwerk de geëxtraheerde informatie van deze batch tot een gestructureerde samenvatting
4. **Accumuleren**: Voeg de batchsamenvatting samen in de "kennisbank" (zie de structuur van de kennisbank in de stijlgids hieronder)

### Fase 3: Contextbeheer

Wanneer de contextlimiet nadert:

1. **Comprimeer de kennisbank**: Comprimeer de kennisbank volgens het **compressiestrategie van de huidige stijl** (zie de stijlgids hieronder)
2. **Behoud index**: Ongeacht de compressie, moet een index met paden en titels van alle bestanden behouden blijven
3. **Ga door met lezen**: Ga door met het verwerken van de resterende bestanden met behulp van de gecomprimeerde kennisbank

### Fase 4: Volledigheidscontrole

Voordat het rapport wordt gegenereerd, moet worden bevestigd:

1. Alle N bestanden uit de bestandslijst zijn verwerkt
2. De kennisbank bevat basisinformatie over elk bestand (minimaal het pad en de titel)

**Als er ontbrekende bestanden worden gevonden**: Ga terug naar fase 2 om de ontbrekende bestanden te verwerken.

### Fase 5: Genereer rapport

Pas na voltooiing van alle bovenstaande fasen mag worden begonnen met het genereren van het rapport.

### Verboden gedrag

- ❌ Begin niet met het genereren van het rapport voordat alle bestanden zijn gelezen
- ❌ Sla geen enkel bestand over, ongeacht het aantal bestanden
- ❌ Beweer niet dat je "het geheel begrijpt" na slechts een deel van de bestanden te hebben gelezen
- ❌ Verzin geen niet-bestaande bestanden of inhoud in de kennisbank

---

## Algemene regels

### 1. Principe van feitelijke basis

- Houd altijd vast aan feitelijke inhoud, situaties los van de feiten zijn niet toegestaan
- Alle standpunten moeten ondersteund worden door de originele tekst
- Verzin geen niet-bestaande inhoud

### 2. Norm voor verwijzingslinks

- Zorg ervoor dat links naar de originele tekst geldig zijn
- **Link altijd naar specifieke Markdown-bestanden**, niet naar mappen
- **De linktekst moet de bijbehorende titel zijn**, niet de bestandsnaam
- Omdat wordt gegenereerd naar de SUMMARY-map, gebruik relatieve paden die beginnen met `../` bij verwijzingen

**Correct voorbeeld**:

```markdown
[Kapitaalduurloop: Strategie voor individuele beleggers om klassen te overstijgen](../INSIGHTS/6.md)
[Van creatie tot distributie – Het bouwen van een AI-Native content-engine](../INSIGHTS/4.md)
```

**Incorrect voorbeeld**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← gebruikt bestandsnaam in plaats van titel
[Kapitaalduurloop](../INSIGHTS/) ← linkt naar een map
```

### 3. Kopopmaak

Elk rapport moet beginnen met de volgende opmaak:

```markdown
# [Rapporttitel]

**AI-analysetijd**: YYYY-MM-DD
**Opmerking**: Dit rapport is gegenereerd door AI, de inhoud is alleen ter referentie.

---
```

### 4. Tijdsgewicht

- Houd rekening met de tijdsperiode en geef recentere artikelen een hoger gewicht
- Maar negeer geen belangrijke oudere inhoud

### 5. Uitvoerlocatie

- Alle rapporten worden gegenereerd in de map `SUMMARY/`
- Bestandsnamen worden benoemd volgens het opgegeven formaat