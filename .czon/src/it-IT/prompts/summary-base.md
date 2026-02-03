---
"title": "Regole Fondamentali per la Generazione di Rapporti di Analisi AI"
"summary": "Questo documento fornisce le regole fondamentali per la generazione di rapporti di analisi AI, sottolineando la necessità di seguire rigorosamente il flusso di lettura dei documenti, che include cinque fasi: ottenere l'elenco dei file, lettura e riepilogo a lotti, gestione del contesto, verifica della completezza e generazione del rapporto. I principi fondamentali includono la lettura di tutti i file uno per uno, basarsi sui fatti, citare i collegamenti in modo standardizzato e considerare il peso temporale. Le regole generali richiedono che i rapporti inizino con un formato specifico, vengano salvati in una directory designata e vietano la generazione del rapporto o la saltatura di qualsiasi file prima di aver letto tutti i file."
"tags":
  - "Analisi AI"
  - "Generazione Rapporti"
  - "Lettura Documenti"
  - "Regole"
  - "Markdown"
  - "Base Fattuale"
  - "Norme di Citazione"
  - "Gestione del Flusso"
---

# Generazione Rapporti di Analisi AI - Regole Fondamentali

## Flusso di Lettura dei Documenti (Da seguire rigorosamente)

### Principi Fondamentali

Questo repository può contenere centinaia o migliaia di file Markdown. Devi **leggere ogni file uno per uno**, senza saltarne nessuno.
Per gestire un gran numero di file, viene adottata una strategia di **lettura e riepilogo progressivi**.

### Fase 1: Ottenere l'elenco completo dei file

1.  Esegui `npx czon@latest ls-files` per ottenere tutti i file Markdown
2.  Registra il numero totale di file N
3.  Salva l'elenco dei file come coda di lettura in sospeso

### Fase 2: Lettura e Riepilogo a Lotti

Elabora i file in lotti. Si consiglia un lotto di 10-20 file, ma puoi adattarlo in base alle dimensioni e alla complessità dei file.

**Per ogni lotto:**

1.  **Lettura**: Utilizza lo strumento Read per leggere il contenuto completo di ogni file nel lotto, uno per uno
2.  **Estrazione**: Estrai le informazioni rilevanti in base ai **punti di interesse dello stile corrente** (vedi Guida allo Stile qui sotto)
3.  **Riepilogo del Lotto**: Organizza le informazioni estratte dal lotto in un riepilogo strutturato
4.  **Accumulo**: Unisci il riepilogo del lotto alla "Knowledge Base" (la struttura della Knowledge Base è descritta nella Guida allo Stile qui sotto)

### Fase 3: Gestione del Contesto

Quando il contesto si avvicina al limite:

1.  **Comprimi la Knowledge Base**: Comprimi la Knowledge Base secondo la **strategia di compressione dello stile corrente** (vedi Guida allo Stile qui sotto)
2.  **Mantieni l'Indice**: Indipendentemente dalla compressione, devi mantenere l'indice di percorsi e titoli di tutti i file
3.  **Continua a Leggere**: Utilizza la Knowledge Base compressa per continuare a elaborare i file rimanenti

### Fase 4: Verifica della Completezza

Prima di generare il rapporto, devi confermare:

1.  Tutti gli N file nell'elenco sono stati elaborati
2.  La Knowledge Base contiene le informazioni di base per ogni file (almeno il percorso e il titolo)

**Se trovi omissioni**: Torna alla Fase 2 per elaborare i file mancanti.

### Fase 5: Generazione del Rapporto

Puoi iniziare a generare il rapporto solo dopo aver completato tutte le fasi precedenti.

### Comportamenti Vietati

-   ❌ Non iniziare a generare il rapporto prima di aver letto tutti i file
-   ❌ Non saltare alcun file, indipendentemente dal loro numero
-   ❌ Non affermare di "aver compreso il quadro generale" dopo aver letto solo alcuni file
-   ❌ Non inventare file o contenuti inesistenti nella Knowledge Base

---

## Regole Generali

### 1. Principio della Base Fattuale

-   Ricorda sempre di basarti sui fatti; non devono verificarsi situazioni scollegate dalla realtà
-   Tutte le opinioni devono essere supportate dal testo originale
-   Non inventare contenuti inesistenti

### 2. Norme per i Collegamenti di Citazione

-   Quando si citano collegamenti al testo originale, assicurarsi che i collegamenti siano validi
-   **Collega sempre a un file Markdown specifico**, non a una directory
-   **Il testo del collegamento deve essere il titolo corrispondente**, non il nome del file
-   Poiché la generazione avviene nella directory SUMMARY, utilizza percorsi relativi che iniziano con `../`

**Esempio Corretto**:

```markdown
[Guerra di Logoramento del Capitale: Strategia per Investitori Individuali per Superare le Classi](../INSIGHTS/6.md)
[Dalla Creazione alla Distribuzione – Costruire un Motore di Contenuti AI-Native](../INSIGHTS/4.md)
```

**Esempio Errato**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Utilizza il nome del file invece del titolo
[Guerra di Logoramento del Capitale](../INSIGHTS/) ← Collega a una directory
```

### 3. Formato dell'Intestazione

Ogni rapporto deve iniziare con il seguente formato:

```markdown
# [Titolo del Rapporto]

**Data Analisi AI**: YYYY-MM-DD
**Nota**: Questo rapporto è generato da AI, il contenuto è solo a scopo informativo.

---
```

### 4. Peso Temporale

-   Considera l'arco temporale, dando un peso maggiore agli articoli più recenti
-   Tuttavia, non trascurare contenuti importanti più datati

### 5. Posizione di Output

-   Tutti i rapporti vengono generati nella directory `SUMMARY/`
-   I nomi dei file seguono il formato specificato