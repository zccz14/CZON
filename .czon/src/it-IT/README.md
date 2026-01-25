---
"title": "CZON - Motore di contenuti Markdown AI-Native"
"summary": "CZON è un motore di contenuti Markdown AI-Native progettato per aiutare i creatori di contenuti a semplificare il processo di scrittura. Sottolinea la scrittura a configurazione zero, integrando profondamente la tecnologia AI per gestire automaticamente compiti come la generazione di titoli, l'estrazione di riassunti, la classificazione dei tag, la traduzione multilingue e la navigazione del sito, riducendo le distrazioni per l'utente. CZON include funzionalità di generazione di siti statici, ma si concentra principalmente sulla creazione e gestione dei contenuti, piuttosto che sulla personalizzazione complessa dei temi. È adatto a utenti che desiderano scrivere nella loro lingua madre e generare automaticamente versioni multilingue, in particolare per i creatori di contenuti per siti web che odiano configurazioni complesse."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Motore di contenuti"
  - "Traduzione multilingue"
  - "Generazione siti statici"
  - "Configurazione zero"
  - "Creazione contenuti"
---

![Logo di CZON](logo.png)

# CZON - Motore di contenuti Markdown AI-Native

- **C**: **C**ontent oriented | Il contenuto è re, concentrato sui contenuti
- **Z**: **Z**ero Configuration | Scrittura a configurazione zero, meno distrazioni
- **O**: **O**rganic AI-Native | AI-Native organica, integrazione profonda dell'IA
- **N**: **N**-shaped Energy Curve | Curva energetica a forma di N, coinvolta in ogni fase: creazione, distribuzione, feedback

[> Demo del Sito Web](https://czon.zccz14.com/)

Nell'era dell'IA, come creatori di contenuti per siti web, possiamo avere un motore di creazione dei contenuti più intelligente.

**Ritorno ai contenuti: minimizzare le distrazioni, concentrarsi sulla scrittura**

Riportare i documenti alla loro essenza, riportare la scrittura alla tranquillità.

In primo luogo, non voglio fare il bibliotecario. A volte voglio scrivere qualcosa, ma potrei non aver ancora pensato al titolo, o non averlo organizzato in modo particolare. Spero che l'LLM mi aiuti automaticamente a generare titoli, fare riassunti, classificare, navigare e altre attività di organizzazione.

In secondo luogo, il mio studio deve essere pulito. Non voglio strumenti di build con configurazioni complesse, armeggiare con configurazioni di documenti complicate, non mi piacciono strutture complesse. Ogni volta che vedo i file di configurazione e la struttura del progetto di strumenti come Docusaurus, VuePress, Astro, mi viene il mal di testa. Ora, CZON sceglie di nascondere tutte le configurazioni nella directory `.czon`, spazzandole in un angolo, in modo che l'utente debba concentrarsi solo sulla scrittura dei contenuti, lasciando il resto a CZON. Tutte le altre directory sono il tuo spazio di scrittura, puoi organizzare i tuoi file Markdown come preferisci.

**Ritorno alla lingua madre: scrivere nella lingua madre, costruire senza intoppi versioni multilingue**

La vita è breve, sono troppo pigro per tradurre. Quando si usa la propria lingua madre, si esprime al meglio la profondità del proprio pensiero. Ma allo stesso tempo, è necessario rimanere connessi con il mondo, e non voglio rinunciare alla comunicazione multilingue. Quindi spero in uno strumento che mi permetta di scrivere nella mia lingua madre, e allo stesso tempo di far vedere i miei contenuti a più persone. L'attuale i18n non solo richiede di tradurre da soli, ma anche di mantenere aggiornati i contenuti, è troppo complicato. Scelgo di usare l'LLM per aiutarmi a tradurre, risparmiando molto tempo e completando la traduzione in più lingue con un solo clic.

## Funzionalità di base

1. 🌍 **Traduzione multilingue automatica**: Utilizza l'IA per la traduzione incrementale, permettendo agli utenti di scrivere in Markdown nella loro lingua madre, ma i contenuti possono essere multilingue.
2. 💭 **Estrazione automatica del riassunto**: Utilizza l'IA per analizzare ed estrarre il contenuto dal testo originale.
3. 🏷️ **Classificazione automatica dei tag**: Utilizza l'IA per estrarre e gestire tag e categorie dei contenuti.
4. 🧭 **Navigazione intelligente per categorie**: Utilizza l'IA per generare mappe del sito e navigazione, indipendente dalla posizione dei file sorgente.

## Generazione di siti statici (SSG)

CZON include una soluzione SSG integrata che può trasformare qualsiasi cartella git contenente file Markdown in un sito HTML statico.

⚠️ Nota: CZON non è un generatore di siti statici (SSG) professionale, ma un motore di contenuti Markdown guidato dall'IA, focalizzato sulla creazione e gestione dei contenuti.

✅ CZON mira a semplificare il processo di creazione e pubblicazione dei contenuti, permettendo agli utenti di concentrarsi sulla scrittura stessa, senza essere ostacolati da configurazioni e strumenti complessi.

❌ CZON non fornirà personalizzazioni complesse dei temi o un ecosistema di plugin, ma si concentrerà sul migliorare la qualità e l'accessibilità dei contenuti attraverso l'IA.

🔔 Tuttavia, CZON può comunque generare siti statici. Se necessario, CZON può essere utilizzato come preprocessore e integrato con altre soluzioni SSG per generare siti personalizzati e gradevoli.

## Inizio rapido

Prerequisiti:

- [Node.js](https://nodejs.org/) installato (versione consigliata 18 o superiore, deve avere il comando npx)
- Ottenuta una [OpenAI API Key](https://platform.openai.com/account/api-keys), o una API Key compatibile con OPENAI
- Git installato (per elencare i file Markdown da Git, ignorando i file filtrati dalle regole .gitignore)

Innanzitutto, lavora in una cartella già gestita da git:

Configura le variabili d'ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obbligatorio: sostituisci con la tua OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opzionale, per impostazione predefinita utilizza l'API ufficiale di OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opzionale, per impostazione predefinita utilizza il modello gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opzionale, imposta il limite massimo di token (se omesso, utilizza il valore predefinito del modello; per traduzioni di testi lunghi si consiglia di impostare un valore più alto, ad esempio 8192, a seconda del numero massimo di token supportato dal modello utilizzato)
```

Costruisci il sito, supportando la traduzione multilingue. Utilizza la directory corrente come directory sorgente, l'output va nella directory `.czon/dist`.

- È possibile specificare le versioni linguistiche da generare utilizzando più volte il parametro `--lang` (ad esempio `--lang zh-Hans --lang en-US`).
- Non è necessario configurare la lingua sorgente, CZON la rileverà automaticamente.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Visualizza più parametri o la guida**:

```bash
npx czon@latest
```