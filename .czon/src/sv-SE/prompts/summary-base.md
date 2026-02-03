---
"title": "Grundläggande regler för AI-analysrapportgenerering"
"summary": "Detta dokument tillhandahåller grundläggande regler för AI-analysrapportgenerering och betonar att dokumentläsningsprocessen måste följas strikt. Processen inkluderar fem faser: hämta fillista, batchläsning och sammanfattning, kontexthantering, fullständighetsverifiering och rapportgenerering. Kärnprinciper inkluderar att läsa alla filer en efter en, basera sig på fakta, standardisera referenslänkar och beakta tidsviktning. Allmänna regler kräver att rapporter börjar med ett specifikt format, skrivs till en angiven katalog och förbjuder rapportgenerering eller att hoppa över filer innan alla filer är lästa."
"tags":
  - "AI-analys"
  - "Rapportgenerering"
  - "Dokumentläsning"
  - "Regler"
  - "Markdown"
  - "Faktabas"
  - "Referensstandard"
  - "Processhantering"
---

# AI-analysrapportgenerering - Grundläggande regler

## Dokumentläsningsprocess (Måste följas strikt)

### Kärnprinciper

Detta arkiv kan innehålla hundratals eller tusentals Markdown-filer. Du måste **läsa varje fil en efter en** och får inte hoppa över någon.
För att hantera ett stort antal filer används en **progressiv läsnings- och sammanfattningsstrategi**.

### Fas 1: Hämta komplett fillista

1. Kör `npx czon@latest ls-files` för att hämta alla Markdown-filer
2. Anteckna det totala antalet filer N
3. Spara fillistan som en kö för att läsa

### Fas 2: Batchläsning och sammanfattning

Bearbeta filerna i batchar. Rekommenderat är 10-20 filer per batch, men du kan justera baserat på filstorlek och komplexitet.

**För varje batch:**

1.  **Läs**: Använd Read-verktyget för att läsa hela innehållet i varje fil i batchen en efter en
2.  **Extrahera**: Extrahera relevant information baserat på **aktuell stils fokusområden** (se stilguide nedan)
3.  **Batchsammanfattning**: Sammanställ den extraherade informationen för batchen till en strukturerad sammanfattning
4.  **Ackumulera**: Slå ihop batchsammanfattningen till "kunskapsbasen" (kunskapsbasstruktur se stilguide nedan)

### Fas 3: Kontexthantering

När kontexten närmar sig gränsen:

1.  **Komprimera kunskapsbas**: Komprimera kunskapsbasen enligt **aktuell stils komprimeringsstrategi** (se stilguide nedan)
2.  **Behåll index**: Oavsett komprimering måste index för alla filers sökvägar och titlar bevaras
3.  **Fortsätt läsa**: Använd den komprimerade kunskapsbasen för att fortsätta bearbeta återstående filer

### Fas 4: Fullständighetsverifiering

Innan rapportgenerering måste du bekräfta:

1.  Alla N filer i fillistan har bearbetats
2.  Kunskapsbasen innehåller grundläggande information om varje fil (åtminstone sökväg och titel)

**Om du upptäcker att något saknas**: Återgå till fas 2 för att bearbeta de saknade filerna.

### Fas 5: Generera rapport

Endast efter att alla ovanstående faser är slutförda kan du börja generera rapporten.

### Förbjudet beteende

-   ❌ Får inte börja generera rapport innan alla filer är lästa
-   ❌ Får inte hoppa över några filer, oavsett antal filer
-   ❌ Får inte bara läsa en del av filerna och påstå att du "förstår helheten"
-   ❌ Får inte hitta på filer eller innehåll som inte finns i kunskapsbasen

---

## Allmänna regler

### 1. Faktabasprincip

-   Kom ihåg att alltid basera dig på faktiskt innehåll, undvik situationer som avviker från fakta
-   Alla åsikter måste stödjas av originaltexten
-   Får inte hitta på innehåll som inte finns

### 2. Standard för referenslänkar

-   När du refererar till originaltextlänkar, se till att länkarna är giltiga
-   **Länka alltid till specifika Markdown-filer**, inte till kataloger
-   **Länktexten ska vara motsvarande titel**, inte filnamn
-   Eftersom genereringen sker till SUMMARY-katalogen, använd relativa sökvägar som börjar med `../` vid referenser

**Korrekt exempel**:

```markdown
[Kapitalets långa krig: Strategi för enskilda investerare att krossa klassgränser](../INSIGHTS/6.md)
[Från skapande till distribution – Bygg en AI-Native innehållsmotor](../INSIGHTS/4.md)
```

**Felaktigt exempel**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Använde filnamn istället för titel
[Kapitalets långa krig](../INSIGHTS/) ← Länkade till en katalog
```

### 3. Huvudformat

Varje rapport måste börja med följande format:

```markdown
# [Rapporttitel]

**AI-analystid**: ÅÅÅÅ-MM-DD
**Obs**: Denna rapport genereras av AI, innehållet är endast för referens.

---
```

### 4. Tidsviktning

-   Beakta tidsintervall, ge högre vikt till nyare artiklar
-   Men ignorera inte viktigt äldre innehåll

### 5. Utmatningsplats

-   Alla rapporter genereras till katalogen `SUMMARY/`
-   Filnamn namnges enligt angivet format