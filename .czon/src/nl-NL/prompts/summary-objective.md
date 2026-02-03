---
"title": "Handleiding voor objectieve en neutrale stijlanalyse"
"summary": "Dit document is een handleiding voor het maken van objectieve en neutrale stijlanalyserapporten. Het specificeert aandachtspunten bij het analyseren van documenten (zoals bestandspaden, data, projectnamen, personenrollen, objectieve feiten, etc.) en definieert de structuur van een kennisbank (inclusief bestandsindex, projectindex, personenindex, tijdlijn en theorie-/raamwerkindex). Het document biedt ook compressiestrategieën voor het vereenvoudigen van inhoud waar nodig, waarbij het belang van het behouden van cruciale indexen wordt benadrukt. De stijlvereiste is om inhoud vanuit een objectief en neutraal perspectief te presenteren, waarbij subjectieve beoordelingen en emotionele kleuring worden vermeden. De doelgroep omvat nieuwe lezers, potentiële samenwerkingspartners en investeerders. Het document somt verboden zaken op (zoals het vermijden van emotionele uitdrukkingen of speculatie) en vereiste hoofdstukstructuren (zoals overzicht, projectintroductie, sleutelthema's, tijdlijn, hoofdpersonen en theorie-/raamwerksamenvatting), en specificeert het uitvoerbestand en een kwaliteitscontrolelijst."
"tags":
  - "Documentanalyse"
  - "Objectief en neutraal"
  - "Kennisbankstructuur"
  - "Informatie-extractie"
  - "Stijlhandleiding"
  - "Rapportage schrijven"
  - "Gestructureerde data"
---

# Objectieve en neutrale stijlanalyse

## Aandachtspunten bij het lezen

Bij het lezen van elk bestand, focus op het extraheren van:

- Bestandspad en titel
- Datuminformatie
- Genoemde projectnamen en functiebeschrijvingen
- Genoemde personen en hun rollen
- Objectieve feiten en data
- Specifieke informatie zoals versienummers, mijlpalen, etc.

**Negeer**: Subjectieve beoordelingen, emotionele uitdrukkingen, speculatieve inhoud

## Kennisbankstructuur

```
### Bestandsindex
| Bestandspad | Titel | Datum |
|-------------|-------|-------|

### Projectindex
| Projectnaam | Beschrijving | Gerelateerde bestanden |
|-------------|--------------|------------------------|

### Personenindex
| Persoon | Rol | Gerelateerde bestanden |
|---------|-----|------------------------|

### Tijdlijn
| Datum | Gebeurtenis | Bronbestand |
|-------|-------------|-------------|

### Theorie-/Raamwerkindex
| Naam | Kernidee | Bronbestand |
|------|----------|-------------|
```

## Compressiestrategie

Wanneer het nodig is de kennisbank te comprimeren:

1. **Moet behouden blijven**: Bestandsindex (pad+titel), projectindex, personenindex
2. **Kan worden vereenvoudigd**: Tijdlijn (behoud sleutelmomenten), theorie-index (behoud naam en bron)
3. **Kan worden verwijderd**: Gedetailleerde beschrijvingen, secundaire gebeurtenissen

---

## Stijlbepaling

Presenteer de inhoud vanuit een objectief en neutraal perspectief, vermijd subjectieve beoordelingen en emotionele kleuring. Benadruk feiten en data, en zorg voor nauwkeurige en betrouwbare informatie.

**Doelgroep**: Nieuwe lezers die snel een overzicht van de repository nodig hebben, potentiële samenwerkingspartners, investeerders
**Schrijftoon**: Professioneel, ingetogen, neutraal, zoals bij het schrijven van een CV of curriculum vitae
**Doel**: De lezer helpen een volledig begrip te krijgen van de basisinformatie en kernideeën van de inhoud, zodat zij hun eigen oordeel kunnen vormen

## Verboden zaken

- ❌ Voeg geen emotionele uitdrukkingen toe (zoals "opwindend", "helaas")
- ❌ Speculeer niet (zoals "mogelijk", "misschien", "waarschijnlijk")
- ❌ Gebruik geen subjectieve beoordelingswoorden (zoals "uitstekend", "slecht", "interessant")
- ❌ Beoordeel niet wat goed of slecht is
- ❌ Gebruik geen eerste persoon

## Vereiste hoofdstukstructuur

### Overzicht

- Introductie van de repository-eigenaar (naam/ID, identiteit, hoofdgebieden)
- Tijdsbestek van de repository-inhoud
- Lijst met hoofdprojecten (kort opgesomd)

### Projectintroductie

Voor elk hoofdproject, gebruik de volgende structuur:

```markdown
### [Projectnaam]

- **Oorsprong**: De bron en achtergrond van het project
- **Kernfunctionaliteit**:
  - Functionaliteit 1
  - Functionaliteit 2
- **Versie-iteraties**: Als er een versiegeschiedenis is, geef een korte uitleg
- **Gerelateerde bestanden**: [Artikeltitel](../pad/naar/bestand.md)
```

### Sleutelthema's

Categoriseer en organiseer inhoud per thema:

```markdown
### 1. [Themanaam]

- [Artikeltitel1](../pad/naar/bestand1.md): Samenvatting van het kernpunt
- [Artikeltitel2](../pad/naar/bestand2.md): Samenvatting van het kernpunt
```

### Tijdlijn

Gebruik tabelformaat om sleutelgebeurtenissen weer te geven:

```markdown
| Datum       | Sleutelgebeurtenis             |
| ----------- | ------------------------------ |
| JJJJ-MM-DD  | Gebeurtenisbeschrijving (objectieve verklaring) |
```

### Hoofdpersonen

Gebruik tabelformaat:

```markdown
| Persoon  | Rol        | Opmerkingen       |
| -------- | ---------- | ----------------- |
| Naam/ID  | Positie/Relatie | Gerelateerde objectieve informatie |
```

### Theorie-/Raamwerksamenvatting

Voor theorieën/raamwerken die in de repository worden gepresenteerd:

```markdown
### [Raamwerknaam]

- **Kernidee**: Eén zin samenvatting
- **Sleutelelementen**: Lijst de kerncomponenten op
- **Wiskundige uitdrukking**: Als er formules zijn, vermeld deze
```

## Uitvoerbestand

`SUMMARY/1-objective.md`

## Kwaliteitscontrolelijst

- [ ] Geen subjectieve beoordelingswoorden
- [ ] Geen emotionele uitdrukkingen
- [ ] Alle links verwijzen naar specifieke bestanden
- [ ] Linktekst is de artikeltitel
- [ ] Bevat alle vereiste hoofdstukken
- [ ] Tijdlijn- en personentabellen zijn correct geformatteerd