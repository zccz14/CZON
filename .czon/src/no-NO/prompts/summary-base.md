---
"title": "Grunnleggende regler for AI-analyse rapportgenerering"
"summary": "Dette dokumentet gir grunnleggende regler for generering av AI-analyse rapporter, og understreker at dokumentleseprosessen må følges strengt. Den inkluderer fem faser: henting av filliste, batch-lesing og sammenfatning, konteksthåndtering, fullstendighetsvalidering og rapportgenerering. Kjerneprinsippene inkluderer å lese alle filer én etter én, basere seg på fakta, standardisere referanselenker og vurdere tidsvekt. Generelle regler krever at rapporter starter med et spesifikt format, skrives til en angitt mappe, og forbyr generering av rapport før alle filer er lest eller å hoppe over noen filer."
"tags":
  - "AI-analyse"
  - "rapportgenerering"
  - "dokumentlesing"
  - "regler"
  - "Markdown"
  - "faktabasert"
  - "referansestandard"
  - "prosesshåndtering"
---

# AI-analyse rapportgenerering - Grunnleggende regler

## Dokumentleseprosess (må følges strengt)

### Kjerneprinsipp

Dette depotet kan inneholde hundrevis eller tusenvis av Markdown-filer. Du må **lese hver fil én etter én**, og kan ikke hoppe over noen.
For å håndtere et stort antall filer, brukes en **gradvis lese- og sammenfatningsstrategi**.

### Fase 1: Hent fullstendig filliste

1.  Kjør `npx czon@latest ls-files` for å hente alle Markdown-filer
2.  Registrer totalt antall filer N
3.  Lagre fillisten som en kø for lesing

### Fase 2: Batch-lesing og sammenfatning

Behandle filene i batcher. Anbefalt batchstørrelse er 10-20 filer, men du kan justere basert på filstørrelse og kompleksitet.

**For hver batch:**

1.  **Les**: Bruk Read-verktøyet til å lese hele innholdet i hver fil i batchen én etter én
2.  **Trekk ut**: Trekk ut relevant informasjon basert på **gjeldende stils fokusområder** (se stilguide nedenfor)
3.  **Batch-sammendrag**: Organiser den uttrukne informasjonen for batchen til et strukturert sammendrag
4.  **Akkumuler**: Slå sammen batch-sammendraget til «kunnskapsbasen» (se kunnskapsbasestruktur i stilguide nedenfor)

### Fase 3: Konteksthåndtering

Når konteksten nærmer seg grensen:

1.  **Komprimer kunnskapsbasen**: Komprimer kunnskapsbasen i henhold til **gjeldende stils komprimeringsstrategi** (se stilguide nedenfor)
2.  **Behold indeks**: Uansett komprimering, må indeksen over alle filbaner og titler beholdes
3.  **Fortsett lesing**: Fortsett å behandle gjenværende filer med den komprimerte kunnskapsbasen

### Fase 4: Fullstendighetsvalidering

Før rapportgenerering må du bekrefte:

1.  Alle N filene i fillisten er behandlet
2.  Kunnskapsbasen inneholder grunnleggende informasjon om hver fil (minst bane og tittel)

**Hvis du oppdager utelatelser**: Gå tilbake til fase 2 for å behandle de utelatte filene.

### Fase 5: Generer rapport

Bare etter at alle foregående faser er fullført, kan du begynne å generere rapporten.

### Forbudt oppførsel

-   ❌ Ikke begynn å generere rapport før alle filer er lest
-   ❌ Ikke hopp over noen filer, uansett hvor mange filer det er
-   ❌ Ikke hevd at du "forstår hele bildet" etter å ha lest bare noen filer
-   ❌ Ikke oppfinn filer eller innhold som ikke finnes i kunnskapsbasen

---

## Generelle regler

### 1. Prinsipp om faktabasering

-   Husk å alltid basere deg på faktisk innhold, unngå påstander uten faktagrunnlag
-   Alle synspunkter må støttes av originalteksten
-   Ikke oppfinn innhold som ikke finnes

### 2. Standard for referanselenker

-   Når du lenker til originaltekst, sørg for at lenken er gyldig
-   **Lenk alltid til den spesifikke Markdown-filen**, ikke til en mappe
-   **Lenketeksten skal være den tilsvarende tittelen**, ikke filnavnet
-   Siden rapportene genereres til SUMMARY-mappen, bruk relative stier som starter med `../` i referanser

**Riktig eksempel**:

```markdown
[Kapitalens utmattelseskrig: Strategi for individuelle investorer til å krysse klasser](../INSIGHTS/6.md)
[Fra skaping til distribusjon – Bygging av en AI-Native innholdsengine](../INSIGHTS/4.md)
```

**Feil eksempel**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Bruker filnavn i stedet for tittel
[Kapitalens utmattelseskrig](../INSIGHTS/) ← Lenker til en mappe
```

### 3. Topptekstformat

Hver rapport må starte med følgende format:

```markdown
# [Rapporttittel]

**AI-analyse tid**: ÅÅÅÅ-MM-DD
**Merk**: Denne rapporten er generert av AI, innholdet er kun til referanse.

---
```

### 4. Tidsvekt

-   Vurder tidsperioden, gi nyere artikler høyere vekt
-   Men ikke overse viktig tidligere innhold

### 5. Utdataplassering

-   Alle rapporter genereres til `SUMMARY/`-mappen
-   Filnavnene navngis i henhold til spesifisert format