---
"title": "Guida alla Distribuzione di Siti Statici CZON su GitHub Pages"
"summary": "Questo articolo descrive in dettaglio come distribuire un sito statico multilingua generato da CZON su GitHub Pages utilizzando GitHub CLI. È necessario prima installare e accedere a GitHub CLI, assicurandosi di avere i permessi 'repo'. Quindi, eseguire il comando `npx czon@latest config github`, che guiderà l'utente attraverso una serie di passaggi: verifica dei permessi, inizializzazione del repository Git, configurazione del repository remoto, abilitazione di GitHub Pages e impostazione del tipo 'workflow', creazione o aggiornamento del file Workflow, commit e push delle modifiche, e infine ottenimento dell'URL di Pages. L'intero processo è automatizzato, semplificando il flusso di distribuzione."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Sito statico"
  - "Guida alla distribuzione"
  - "GitHub CLI"
  - "Multilingua"
  - "Distribuzione automatizzata"
---

# Distribuzione su GitHub Pages

Questa guida spiega come distribuire un sito statico multilingua generato da CZON su GitHub Pages utilizzando GitHub CLI.

Innanzitutto, installa lo strumento [GitHub CLI](https://cli.github.com/) (se non è già installato) e assicurati di essere autenticato (se non lo sei già):

```bash
$ gh --version # Controlla la versione per assicurarti che l'installazione sia riuscita
```

Assicurati di essere autenticato e di avere il permesso `repo` per accedere al repository di destinazione:

```bash
$ gh auth login -s repo # Accedi al tuo account GitHub; ti verrà chiesto di scegliere l'accesso tramite browser o utilizzando un token
$ gh auth status # Controlla lo stato di autenticazione per assicurarti di aver effettuato l'accesso correttamente e di avere il permesso 'repo' per il repository di destinazione
```

Il resto del processo richiede solo l'esecuzione del seguente comando e di seguire le istruzioni:

```bash
$ npx czon@latest config github
```

Questo comando ti guiderà attraverso i seguenti passaggi:

1.  Verifica se i permessi di `gh` includono `repo`. In caso contrario, ti chiederà di effettuare nuovamente l'accesso e aggiungere il permesso `repo`.
2.  Se la directory locale non è un repository Git, ti chiederà di inizializzare un nuovo repository Git.
3.  Controlla le impostazioni del repository Git remoto per la directory locale. Se non esiste un repository GitHub remoto, ti chiederà di crearne uno nuovo e di aggiungerlo come origine remota (`origin`). Se `origin` esiste già ma non è un repository GitHub, ti chiederà di aggiungere un nuovo repository GitHub remoto come `upstream`.
4.  Verifica se GitHub Pages è abilitato e se è di tipo `workflow`. In caso contrario, lo abiliterà e correggerà l'impostazione per la distribuzione da Actions utilizzando l'API `gh api`. Configurerà anche il CNAME (se disponi di un dominio personalizzato).
5.  Controlla il file GitHub Workflow. Se non è stato creato, creerà il file Workflow per Pages. Se esiste già ma non è aggiornato, ti chiederà se desideri aggiornarlo.
6.  Effettua il commit del file Workflow e invia (`push`) le modifiche al repository remoto.
7.  Ti fornirà l'URL del sito GitHub Pages, ottenendo l'URL più recente tramite l'API `gh api`.