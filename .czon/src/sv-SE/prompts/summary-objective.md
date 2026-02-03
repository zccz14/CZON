---
"title": "Guide för objektiv och neutral stilanalysrapport"
"summary": "Detta dokument är en guide för hur man skapar en objektiv och neutral stilanalysrapport. Den specificerar läsningspunkter att fokusera på vid dokumentanalys (som filvägar, datum, projektnamn, personroller, objektiva fakta etc.) och definierar kunskapsbasens struktur (inklusive filindex, projektindex, personindex, tidslinje och teoretiskt ramverksindex). Dokumentet ger också komprimeringsstrategier som vägleder om hur man förenklar innehåll vid behov, samtidigt som det betonar att nyckelindex måste bevaras. Stilen kräver att innehållet presenteras från ett objektivt och neutralt perspektiv, undvik subjektiva bedömningar och känslomässiga nyanser. Målgruppen inkluderar nya läsare, potentiella samarbetspartners och investerare. Dokumentet listar förbjudna handlingar (som att inte inkludera känslouttryck eller spekulationer) och obligatoriska kapitelstrukturer (som översikt, projektintroduktion, nyckelteman, tidslinje, huvudpersoner och sammanfattning av teoretiska ramverk), samt specificerar utdatafil och checklista för kvalitetskontroll."
"tags":
  - "Dokumentanalys"
  - "Objektiv neutralitet"
  - "Kunskapsbasstruktur"
  - "Informationsutvinning"
  - "Stilguide"
  - "Rapportskrivande"
  - "Strukturerad data"
---

# Objektiv och neutral stilanalysrapport

## Läsningsfokus

När du läser varje fil, fokusera på att extrahera:

- Filväg och titel
- Datuminformation
- Involverade projektnamn och funktionsbeskrivningar
- Nämnda personer och deras roller
- Objektiva fakta och data
- Specifik information som versionsnummer, milstolpar etc.

**Ignorera**: Subjektiva bedömningar, känslouttryck, spekulativt innehåll

## Kunskapsbasstruktur

```
### Filindex
| Filväg | Titel | Datum |
|--------|-------|-------|

### Projektindex
| Projektnamn | Beskrivning | Relaterade filer |
|-------------|-------------|------------------|

### Personindex
| Person | Roll | Relaterade filer |
|--------|------|------------------|

### Tidslinje
| Datum | Händelse | Källfil |
|-------|----------|---------|

### Teoretiskt/Ramverksindex
| Namn | Kärnidé | Källfil |
|------|---------|---------|
```

## Komprimeringsstrategi

När kunskapsbasen behöver komprimeras:

1. **Måste behållas**: Filindex (väg+titel), projektindex, personindex
2. **Kan förenklas**: Tidslinje (behåll nyckelnoder), teoretiskt index (behåll namn och källa)
3. **Kan kasseras**: Detaljerade beskrivningar, mindre viktiga händelser

---

## Stilpositionering

Presentera innehållet från ett objektivt och neutralt perspektiv, undvik subjektiva bedömningar och känslomässiga nyanser. Betona fakta och data, säkerställ informationens noggrannhet och tillförlitlighet.

**Målgrupp**: Nya läsare som snabbt behöver förstå hela arkivet, potentiella samarbetspartners, investerare
**Skrivton**: Professionell, återhållsam, neutral, som att skriva ett CV eller meritförteckning
**Syfte**: Hjälpa läsaren att omfattande förstå innehållets grundläggande information och kärnåsikter, för att bilda sin egen bedömning

## Förbjudna handlingar

- ❌ Inkludera inte känslouttryck (t.ex. "spännande", "tyvärr")
- ❌ Spekulera inte (t.ex. "kanske", "möjligen", "förmodligen")
- ❌ Använd inte subjektiva bedömningsord (t.ex. "utmärkt", "dålig", "intressant")
- ❌ Bedöm inte bra/dålig eller fördelar/nackdelar
- ❌ Använd inte första person

## Obligatorisk kapitelstruktur

### Översikt

- Introduktion till arkivägaren (namn/ID, identitet, huvudområden)
- Tidsomfattning för arkivinnehåll
- Lista över huvudprojekt (kort uppräkning)

### Projektintroduktion

För varje huvudprojekt, använd följande struktur:

```markdown
### [Projektnamn]

- **Ursprung**: Projektets källa och bakgrund
- **Kärnfunktioner**:
  - Funktion 1
  - Funktion 2
- **Versionsiteration**: Om versionshistorik finns, förklara kort
- **Relaterade filer**: [Artikeltitel](../path/to/file.md)
```

### Nyckelteman

Organisera innehåll efter temaklassificering:

```markdown
### 1. [Temanamn]

- [Artikeltitel1](../path/to/file1.md): Sammanfattning av kärnåsikt
- [Artikeltitel2](../path/to/file2.md): Sammanfattning av kärnåsikt
```

### Tidslinje

Använd tabellformat för att visa nyckelhändelser:

```markdown
| Datum       | Nyckelhändelse          |
| ----------- | ----------------------- |
| ÅÅÅÅ-MM-DD | Händelsebeskrivning (objektiv redogörelse) |
```

### Huvudpersoner

Använd tabellformat:

```markdown
| Person   | Roll       | Kommentar       |
| -------- | ---------- | --------------- |
| Namn/ID | Position/Relation | Relaterad objektiv information |
```

### Sammanfattning av teoretiska ramverk

För teorier/ramverk som föreslås i arkivet:

```markdown
### [Ramverksnamn]

- **Kärnidé**: Sammanfatta i en mening
- **Nyckelelement**: Lista kärnkomponenter
- **Matematiskt uttryck**: Om formler finns, lista dem
```

## Utdatafil

`SUMMARY/1-objective.md`

## Checklista för kvalitetskontroll

- [ ] Inga subjektiva bedömningsord
- [ ] Inga känslouttryck
- [ ] Alla länkar pekar på specifika filer
- [ ] Länktext är artikeltitel
- [ ] Innehåller alla obligatoriska kapitel
- [ ] Tidslinje- och persontabeller har korrekt format