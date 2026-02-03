---
"title": "Grundlæggende regler for AI-analyse rapportgenerering"
"summary": "Dette dokument giver grundlæggende regler for generering af AI-analyse rapporter og understreger, at dokumentlæsningsprocessen strengt skal følges. Processen omfatter fem faser: indhentning af filliste, batch-læsning og opsummering, konteksthåndtering, fuldstændighedsverificering og rapportgenerering. Kerne-principper inkluderer at læse alle filer én ad gangen, basere sig på fakta, standardisere henvisningslinks og overveje tidsvægt. Generelle regler kræver, at rapporter starter med et specifikt format, outputtes til en angivet mappe, og at det er forbudt at generere rapporter eller springe filer over før alle filer er læst."
"tags":
  - "AI-analyse"
  - "Rapportgenerering"
  - "Dokumentlæsning"
  - "Regler"
  - "Markdown"
  - "Faktabasering"
  - "Henvisningsstandard"
  - "Processtyring"
---

# AI-analyse rapportgenerering - Grundlæggende regler

## Dokumentlæsningsproces (skal strengt følges)

### Kerne-principper

Dette repository kan indeholde hundredvis eller tusindvis af Markdown-filer. Du skal **læse hver fil én ad gangen** og må ikke springe nogen over.
For at håndtere et stort antal filer anvendes en **gradueret læsnings- og opsummeringsstrategi**.

### Fase 1: Indhentning af komplet filliste

1.  Udfør `npx czon@latest ls-files` for at indhente alle Markdown-filer
2.  Registrer det samlede antal filer N
3.  Gem fillisten som en kø af filer, der skal læses

### Fase 2: Batch-læsning og opsummering

Behandle filer i batches. Anbefalet batchstørrelse er 10-20 filer, men du kan justere baseret på filstørrelse og kompleksitet.

**For hver batch:**

1.  **Læsning**: Brug Read-værktøjet til at læse det fulde indhold af hver fil i batchen én ad gangen
2.  **Uddrag**: Udtræk relevant information baseret på **den aktuelle styles fokusområder** (se stilguide nedenfor)
3.  **Batch-opsummering**: Organiser de udtrukne oplysninger fra batchen til en struktureret opsummering
4.  **Akkumulering**: Flet batch-opsummeringen ind i "videnbasen" (se stilguide nedenfor for vidensbasestruktur)

### Fase 3: Konteksthåndtering

Når konteksten nærmer sig grænsen:

1.  **Komprimer vidensbase**: Komprimer vidensbasen i henhold til **den aktuelle styles komprimeringsstrategi** (se stilguide nedenfor)
2.  **Bevar indeks**: Uanset komprimering, skal indeks for alle filers stier og titler bevares
3.  **Fortsæt læsning**: Brug den komprimerede vidensbase til at fortsætte behandlingen af resterende filer

### Fase 4: Fuldstændighedsverificering

Før rapportgenerering skal det bekræftes:

1.  Alle N filer fra fillisten er blevet behandlet
2.  Vidensbasen indeholder grundlæggende information om hver fil (mindst sti og titel)

**Hvis der opdages udeladelser**: Vend tilbage til fase 2 for at behandle de manglende filer.

### Fase 5: Rapportgenerering

Kun efter at alle ovenstående faser er fuldført, kan rapportgenereringen påbegyndes.

### Forbudte handlinger

-   ❌ Må ikke begynde at generere rapport før alle filer er læst
-   ❌ Må ikke springe nogen filer over, uanset antallet af filer
-   ❌ Må ikke kun læse en del af filerne og påstå at "kende hele billedet"
-   ❌ Må ikke opdigte ikke-eksisterende filer eller indhold i vidensbasen

---

## Generelle regler

### 1. Faktabaseringsprincip

-   Husk altid at basere dig på faktisk indhold; undgå påstande uden faktuelle belæg
-   Alle synspunkter skal have støtte i den oprindelige tekst
-   Må ikke opdigte ikke-eksisterende indhold

### 2. Henvisningslink-standard

-   Når der henvises til originaltekstlinks, skal linkene være gyldige
-   **Link altid til specifikke Markdown-filer**, ikke til mapper
-   **Link-teksten skal være den tilsvarende titel**, ikke filnavnet
-   Da der genereres til SUMMARY-mappen, skal der bruges relative stier, der starter med `../`

**Korrekt eksempel**:

```markdown
[Kapitalens udholdenhedskamp: Strategi for individuelle investorer til at krydse klasser](../INSIGHTS/6.md)
[Fra skabelse til distribution – bygning af en AI-Native indholds-motor](../INSIGHTS/4.md)
```

**Forkert eksempel**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Brugte filnavn i stedet for titel
[Kapitalens udholdenhedskamp](../INSIGHTS/) ← Linkede til en mappe
```

### 3. Topformat

Hver rapport skal starte med følgende format:

```markdown
# [Rapporttitel]

**AI-analyse tidspunkt**: ÅÅÅÅ-MM-DD
**Bemærk**: Denne rapport er genereret af AI, indholdet er kun til orientering.

---
```

### 4. Tidsvægt

-   Overvej tidsforløbet og giv nyere artikler højere vægt
-   Men ignorer ikke vigtigt ældre indhold

### 5. Outputplacering

-   Alle rapporter genereres til mappen `SUMMARY/`
-   Filnavne navngives i henhold til det angivne format