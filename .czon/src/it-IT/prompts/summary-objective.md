---
"title": "Guida per l'Analisi in Stile Obiettivo e Neutrale"
"summary": "Questo documento è una guida su come creare un rapporto di analisi in stile obiettivo e neutrale. Specifica in dettaglio i punti di attenzione durante l'analisi dei documenti (come percorso del file, data, nome del progetto, ruoli delle persone, fatti oggettivi, ecc.) e definisce la struttura della knowledge base (inclusi indici per file, progetti, persone, timeline e framework teorici). Il documento fornisce anche strategie di compressione, guidando su come ridurre il contenuto quando necessario, sottolineando al contempo la necessità di conservare gli indici chiave. Il posizionamento stilistico richiede di presentare i contenuti da una prospettiva obiettiva e neutrale, evitando valutazioni soggettive e colorazioni emotive. I lettori target includono nuovi lettori, potenziali collaboratori e investitori. Il documento elenca le azioni proibite (come non aggiungere espressioni emotive o speculazioni) e la struttura dei capitoli obbligatori (come panoramica, introduzione al progetto, temi chiave, timeline, persone principali e riassunto del framework teorico), e specifica il file di output e la checklist per il controllo qualità."
"tags":
  - "Analisi Documenti"
  - "Obiettivo Neutrale"
  - "Struttura Knowledge Base"
  - "Estrazione Informazioni"
  - "Guida di Stile"
  - "Redazione Rapporti"
  - "Dati Strutturati"
---

# Rapporto di Analisi in Stile Obiettivo e Neutrale

## Punti di Attenzione nella Lettura

Durante la lettura di ogni file, concentrarsi sull'estrazione di:

- Percorso del file e titolo
- Informazioni sulla data
- Nomi dei progetti menzionati e descrizioni delle funzionalità
- Persone citate e loro ruoli
- Fatti oggettivi e dati
- Informazioni specifiche come numeri di versione, milestone, ecc.

**Ignorare**: Valutazioni soggettive, espressioni emotive, contenuti speculativi

## Struttura della Knowledge Base

```
### Indice dei File
| Percorso File | Titolo | Data |
|---------------|--------|------|

### Indice dei Progetti
| Nome Progetto | Descrizione | File Correlati |
|---------------|-------------|----------------|

### Indice delle Persone
| Persona | Ruolo | File Correlati |
|---------|-------|----------------|

### Timeline
| Data | Evento | File di Origine |
|------|--------|-----------------|

### Indice Teorie/Framework
| Nome | Idea Principale | File di Origine |
|------|-----------------|-----------------|
```

## Strategia di Compressione

Quando è necessario comprimere la knowledge base:

1.  **Deve essere conservato**: Indice dei file (percorso+titolo), Indice dei progetti, Indice delle persone
2.  **Può essere semplificato**: Timeline (conservare i nodi chiave), Indice delle teorie (conservare nome e origine)
3.  **Può essere scartato**: Descrizioni dettagliate, eventi secondari

---

## Posizionamento Stilistico

Presentare i contenuti da una prospettiva obiettiva e neutrale, evitando valutazioni soggettive e colorazioni emotive. Enfatizzare fatti e dati, garantendo accuratezza e affidabilità delle informazioni.

**Lettori Target**: Nuovi lettori che necessitano di una rapida panoramica del repository, potenziali collaboratori, investitori.
**Tono di Scrittura**: Professionale, misurato, neutro, come nella redazione di un curriculum vitae.
**Scopo**: Aiutare il lettore a comprendere appieno le informazioni di base e i punti di vista principali del contenuto, per formarsi un proprio giudizio.

## Azioni Proibite

- ❌ Non aggiungere espressioni emotive (es. "entusiasmante", "purtroppo")
- ❌ Non fare speculazioni (es. "potrebbe", "forse", "probabilmente")
- ❌ Non usare vocaboli di valutazione soggettiva (es. "eccellente", "scadente", "interessante")
- ❌ Non valutare qualità, bontà o difetti
- ❌ Non usare la prima persona

## Struttura dei Capitoli Obbligatoria

### Panoramica

- Breve introduzione del proprietario del repository (Nome/ID, identità, aree principali)
- Arco temporale dei contenuti del repository
- Elenco dei progetti principali (enumerazione sintetica)

### Introduzione ai Progetti

Per ogni progetto principale, utilizzare la seguente struttura:

```markdown
### [Nome Progetto]

- **Origine**: Origine e contesto del progetto
- **Funzionalità Principali**:
  - Punto funzionale 1
  - Punto funzionale 2
- **Iterazione delle Versioni**: Se presente una cronologia delle versioni, spiegare brevemente
- **File Correlati**: [Titolo Articolo](../percorso/del/file.md)
```

### Temi Chiave

Organizzare i contenuti per categoria tematica:

```markdown
### 1. [Nome Tema]

- [Titolo Articolo1](../percorso/del/file1.md): Riepilogo del punto di vista principale
- [Titolo Articolo2](../percorso/del/file2.md): Riepilogo del punto di vista principale
```

### Timeline

Utilizzare il formato tabella per mostrare gli eventi chiave:

```markdown
| Data        | Evento Chiave             |
| ----------- | ------------------------- |
| AAAA-MM-GG  | Descrizione evento (affermazione oggettiva) |
```

### Persone Principali

Utilizzare il formato tabella:

```markdown
| Persona   | Ruolo       | Note                |
| --------- | ----------- | ------------------- |
| Nome/ID   | Posizione/Relazione | Informazioni oggettive correlate |
```

### Riepilogo Framework Teorici

Per le teorie/framework proposti nel repository:

```markdown
### [Nome Framework]

- **Idea Principale**: Riassunto in una frase
- **Elementi Chiave**: Elencare i componenti principali
- **Espressione Matematica**: Se presente una formula, elencarla
```

## File di Output

`SUMMARY/1-objective.md`

## Checklist per il Controllo Qualità

- [ ] Nessun vocabolo di valutazione soggettiva
- [ ] Nessuna espressione emotiva
- [ ] Tutti i collegamenti puntano a file specifici
- [ ] Il testo del collegamento è il titolo dell'articolo
- [ ] Contiene tutti i capitoli obbligatori
- [ ] Formato corretto delle tabelle timeline e persone