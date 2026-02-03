---
"title": "Veiledning for objektiv og nøytral stilanalyse"
"summary": "Dette dokumentet er en veiledning for hvordan man lager en objektiv og nøytral stilanalyse. Det spesifiserer hva man bør fokusere på når man analyserer dokumenter (som filbane, dato, prosjektnavn, personroller, objektive fakta osv.), og definerer strukturen til en kunnskapsbase (inkludert filindeks, prosjektindeks, personindeks, tidslinje og indeks for teorier/rammeverk). Dokumentet gir også en komprimeringsstrategi som veileder i hvordan man kan forenkle innholdet når nødvendig, samtidig som det understreker at nøkkelindekser må beholdes. Stilen krever at innholdet presenteres fra et objektivt og nøytralt perspektiv, og man skal unngå subjektive vurderinger og følelsesladet språk. Målgruppen inkluderer nye lesere, potensielle samarbeidspartnere og investorer. Dokumentet lister opp forbudte handlinger (som å ikke inkludere følelsesuttrykk eller spekulasjoner) og nødvendige seksjonsstrukturer (som oversikt, prosjektpresentasjon, nøkktemaer, tidslinje, hovedpersoner og sammendrag av teoretiske rammeverk), og spesifiserer utdatafilen og en kvalitetssjekkliste."
"tags":
  - "Dokumentanalyse"
  - "Objektiv og nøytral"
  - "Kunnskapsbasestruktur"
  - "Informasjonsuttrekking"
  - "Stilveiledning"
  - "Rapportskriving"
  - "Strukturert data"
---

# Objektiv og nøytral stilanalyse

## Fokusområder ved lesing

Når du leser hver fil, fokuser på å trekke ut:

- Filbane og tittel
- Datoinformasjon
- Nevnte prosjektnavn og funksjonsbeskrivelser
- Nevnte personer og deres roller
- Objektive fakta og data
- Spesifikk informasjon som versjonsnumre, milepæler osv.

**Ignorer**: Subjektive vurderinger, følelsesuttrykk, spekulativt innhold

## Kunnskapsbasestruktur

```
### Filindeks
| Filbane | Tittel | Dato |
|---------|--------|------|

### Prosjektindeks
| Prosjektnavn | Beskrivelse | Relaterte filer |
|--------------|-------------|-----------------|

### Personindeks
| Person | Rolle | Relaterte filer |
|--------|-------|-----------------|

### Tidslinje
| Dato | Hendelse | Kildefil |
|------|----------|----------|

### Teori-/Rammeverkindeks
| Navn | Kjerneidé | Kildefil |
|------|-----------|----------|
```

## Komprimeringsstrategi

Når kunnskapsbasen må komprimeres:

1. **Må beholdes**: Filindeks (bane + tittel), prosjektindeks, personindeks
2. **Kan forenkles**: Tidslinje (behold nøkkelnoder), teoriindeks (behold navn og kilde)
3. **Kan forkastes**: Detaljerte beskrivelser, mindre viktige hendelser

---

## Stilposisjonering

Presenter innholdet fra et objektivt og nøytralt perspektiv, unngå subjektive vurderinger og følelsesladet språk. Fremhev fakta og data, og sikre at informasjonen er nøyaktig og pålitelig.

**Målgruppe**: Nye lesere som raskt må forstå helheten i depotet, potensielle samarbeidspartnere, investorer
**Skrivetone**: Profesjonell, tilbakeholden, nøytral, som ved skriving av CV eller karriereoversikt
**Formål**: Hjelpe leseren med å få en helhetlig forståelse av innholdets grunnleggende informasjon og kjerneideer, slik at de kan danne sine egne konklusjoner

## Forbudte handlinger

- ❌ Ikke inkluder følelsesuttrykk (f.eks. "spennende", "dessverre")
- ❌ Ikke spekuler (f.eks. "kanskje", "muligens", "sannsynligvis")
- ❌ Ikke bruk subjektive vurderingsord (f.eks. "utmerket", "dårlig", "interessant")
- ❌ Ikke vurder godt/dårlig eller fordel/ulempe
- ❌ Ikke bruk første person

## Nødvendig seksjonsstruktur

### Oversikt

- Kort introduksjon av depotets eier (navn/ID, identitet, hovedområder)
- Tidsrommet depotets innhold dekker
- Liste over hovedprosjekter (kort oppramsing)

### Prosjektpresentasjon

For hvert hovedprosjekt, bruk følgende struktur:

```markdown
### [Prosjektnavn]

- **Opprinnelse**: Prosjektets kilde og bakgrunn
- **Kjernefunksjonalitet**:
  - Funksjonspunkt 1
  - Funksjonspunkt 2
- **Versjonshistorikk**: Hvis tilgjengelig, kort beskrivelse
- **Relaterte filer**: [Artikkeltittel](../sti/til/fil.md)
```

### Nøkktemaer

Organiser innholdet etter tema:

```markdown
### 1. [Temanavn]

- [Artikkeltittel1](../sti/til/fil1.md): Sammendrag av kjerneide
- [Artikkeltittel2](../sti/til/fil2.md): Sammendrag av kjerneide
```

### Tidslinje

Bruk tabellformat for å vise nøkkelhendelser:

```markdown
| Dato       | Nøkkelhendelse          |
| ---------- | ----------------------- |
| ÅÅÅÅ-MM-DD | Hendelsesbeskrivelse (objektiv fremstilling) |
```

### Hovedpersoner

Bruk tabellformat:

```markdown
| Person   | Rolle      | Merknader       |
| -------- | ---------- | --------------- |
| Navn/ID  | Stilling/forhold | Relatert objektiv informasjon |
```

### Sammendrag av teoretiske rammeverk

For teorier/rammeverk presentert i depotet:

```markdown
### [Rammeverknavn]

- **Kjerneidé**: Oppsummering i én setning
- **Nøkkelelementer**: List opp kjernekomponenter
- **Matematisk uttrykk**: Hvis formler finnes, list dem opp
```

## Utdatafil

`SUMMARY/1-objective.md`

## Kvalitetssjekkliste

- [ ] Ingen subjektive vurderingsord
- [ ] Ingen følelsesuttrykk
- [ ] Alle lenker peker til konkrete filer
- [ ] Lenketekst er artikkeltittel
- [ ] Inneholder alle nødvendige seksjoner
- [ ] Tidslinje- og person-tabeller er korrekt formatert