---
"title": "CZON - Motore di contenuti Markdown AI-Native"
"summary": "CZON è un motore di contenuti Markdown AI-Native progettato per aiutare i creatori di contenuti a semplificare il processo di scrittura. Sottolinea la scrittura a configurazione zero, integrando profondamente la tecnologia AI per gestire automaticamente compiti come la generazione di titoli, l'estrazione di riassunti, la classificazione per tag, la traduzione multilingue e la navigazione del sito, riducendo le distrazioni per l'utente. CZON include funzionalità di generazione di siti statici, ma si concentra principalmente sulla creazione e gestione dei contenuti, piuttosto che sulla personalizzazione complessa dei temi. È adatto a utenti che desiderano scrivere nella propria lingua madre e generare automaticamente versioni multilingue, in particolare per i creatori di contenuti per siti web che odiano configurazioni complesse."
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

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Vedi il Sito Web di CZON 🚀
    </a>
</div>

# CZON - Motore di contenuti Markdown AI-Native

- **C**: **C**ontent oriented | I contenuti sono il re, concentrati sui contenuti
- **Z**: **Z**ero Configuration | Scrittura a configurazione zero, meno distrazioni
- **O**: **O**rganic AI-Native | AI-Native organica, integrazione profonda dell'AI
- **N**: **N**-shaped Energy Curve | Curva energetica a forma di N, coinvolta in ogni fase: creazione, distribuzione, feedback

Nell'era dell'AI, come creatori di contenuti per siti web, possiamo avere un motore di creazione dei contenuti più intelligente.

**Ritorno ai contenuti: minimizzare le distrazioni, concentrarsi sulla scrittura**

Riportare i documenti alla loro essenza, riportare la scrittura alla tranquillità.

In primo luogo, non voglio fare il bibliotecario. A volte voglio scrivere qualcosa, ma potrei non aver ancora pensato al titolo, o non averlo organizzato in modo particolare. Desidero che un LLM generi automaticamente titoli, crei riassunti, classifichi, navighi e svolga altri lavori di organizzazione.

In secondo luogo, il mio studio deve essere ordinato. Non voglio strumenti di build con configurazioni complesse, armeggiare con configurazioni di documenti intricate, non mi piacciono strutture complicate. Ogni volta che vedo i file di configurazione e la struttura dei progetti di strumenti come Docusaurus, VuePress, Astro, mi viene il mal di testa. Ora, CZON sceglie di nascondere tutte le configurazioni nella directory `.czon`, spazzandole in un angolo, in modo che l'utente debba concentrarsi solo sulla scrittura dei contenuti, lasciando il resto a CZON. Tutte le altre directory sono il tuo spazio di scrittura, puoi organizzare i tuoi file Markdown come preferisci.

**Ritorno alla lingua madre: scrivere nella lingua madre, costruire senza intoppi versioni multilingue**

La vita è breve, sono troppo pigro per tradurre. Quando si usa la propria lingua madre, si esprime al meglio la profondità del proprio pensiero. Ma allo stesso tempo, è necessario rimanere connessi con il mondo, e non voglio rinunciare alla comunicazione multilingue. Quindi desidero uno strumento che mi permetta di scrivere nella mia lingua madre, e allo stesso tempo di far vedere i miei contenuti a più persone. L'attuale i18n non solo richiede di tradurre da soli, ma anche di mantenere aggiornati i contenuti, è troppo complicato. Scelgo di usare un LLM per aiutarmi con le traduzioni, risparmiando molto tempo e completando le traduzioni in più lingue con un clic.

## ✨ Funzionalità principali

1. 🌍 **Traduzione multilingue con AI**: Utilizza l'AI per traduzioni incrementali, permettendo all'utente di scrivere in Markdown nella propria lingua madre, ma di essere multilingue.
2. 📊 **Estrazione metadati con AI**: Estrae automaticamente titolo, descrizione, riassunto, parole chiave, pubblico target, alias URL-friendly, ecc.
3. 🏷️ **Classificazione per tag con AI**: Utilizza l'AI per estrarre e gestire tag e categorie dei contenuti.
4. 🧭 **Navigazione per categorie con AI**: Utilizza l'AI per generare mappe del sito e navigazione, indipendentemente dalla posizione dei file sorgente.
5. 🤖 **Riassunto del sito completo con AI**: Permette di generare riassunti del sito completo in vari stili.

E alcune funzionalità non AI:

1. ⚙️ **Configurazione zero**: Tutte le configurazioni e le cache sono nascoste nella directory `.czon`, la struttura del progetto rimane pulita.
2. 🔄 **Build incrementale**: Rileva le modifiche basandosi sull'hash dei contenuti, elabora solo i file cambiati.
3. 📚 **Supporto estensioni Markdown**: Supporto nativo per formule matematiche KaTeX, diagrammi Mermaid, caroselli Embla, note a piè di pagina, ecc.
4. 🚀 **Generazione siti statici**: Include un SSG basato su React, genera siti statici multilingue.
5. 🌐 **Routing automatico in base alla lingua del visitatore**: Instrada automaticamente alla versione linguistica corrispondente in base alla lingua del visitatore.

## 📦 Inizio rapido

### Prerequisiti

- [Node.js](https://nodejs.org/) installato (si consiglia la versione LTS 24, o versione 18 e successive, deve avere il comando npx)
- Ottenuta una [OpenAI API Key](https://platform.openai.com/account/api-keys), o una API Key compatibile con OPENAI
- Git installato (per elencare i file Markdown da Git, ignorando i file filtrati dalle regole .gitignore)

### Configurazione variabili d'ambiente

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obbligatorio: sostituisci con la tua OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opzionale, per impostazione predefinita utilizza l'API ufficiale di OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opzionale, per impostazione predefinita utilizza il modello gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opzionale, imposta il limite massimo di token (se ignorato, usa il valore predefinito del modello; per traduzioni di testi lunghi si consiglia di impostare un valore più alto, ad esempio 8192, a seconda del numero massimo di token supportato dal modello utilizzato)

# Se è necessario utilizzare un proxy HTTP per accedere all'API OpenAI, è possibile impostare le seguenti variabili
export HTTPS_PROXY="http://your-proxy.com:8080"  # Opzionale, imposta il proxy HTTPS
export HTTP_PROXY="http://your-proxy.com:8080"   # Opzionale, imposta il proxy HTTP
```

### Costruire un sito multilingue

Esegui in qualsiasi cartella gestita da Git:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Poiché i codici lingua verranno successivamente utilizzati in molte funzionalità della generazione del sito statico, assicurati di utilizzare codici lingua standard BCP 47. Ad esempio, `zh-Hans` rappresenta il cinese semplificato, `en-US` rappresenta l'inglese americano. Puoi aggiungere più lingue secondo necessità, ad esempio `es-ES` (spagnolo), `ja-JP` (giapponese), `ko-KR` (coreano), ecc.
Per un elenco dei codici lingua standard, consulta [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Directory di output: `.czon/dist`, successivamente sarà necessario distribuire il contenuto di questa directory su una piattaforma di hosting per siti statici.

Per un utilizzo dettagliato, esegui `npx czon@latest --help`.

## 🔗 Confronto con altri strumenti

| Caratteristica      | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Native**       | ✅ Integrazione profonda | ❌              | ❌              | ❌              |
| **Configurazione zero** | ✅ Configurazione nascosta | ❌ Richiede file di configurazione | ❌ Richiede file di configurazione | ❌ Richiede file di configurazione |
| **Traduzione multilingue con AI** | ✅ Traduzione incrementale automatica | ❌ Traduzione manuale | ❌ Traduzione manuale | ❌ Traduzione manuale |
| **Classificazione/Tag automatici** | ✅ Estrazione con AI | ❌ Configurazione manuale | ❌ Configurazione manuale | ❌ Configurazione manuale |
| **Estensioni Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Tramite plugin | ✅ Tramite plugin | ✅ Tramite plugin |
| **Personalizzazione tema** | ❌ Limitata | ✅ Ampia | ✅ Ampia | ✅ Ampia |

CZON si posiziona come **motore di contenuti potenziato dall'AI**, non come un SSG a piena funzionalità. Si concentra sull'aumentare l'efficienza della creazione dei contenuti attraverso l'AI, ed è adatto a creatori che danno importanza alla qualità dei contenuti e desiderano ridurre il carico di configurazione. In effetti, CZON può essere utilizzato insieme a strumenti SSG come Docusaurus, VuePress, Astro, come motore front-end per la generazione e gestione dei contenuti.

## 📞 Supporto

- Pagina del progetto: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord per discussioni: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Lascia che la scrittura ritorni alla tranquillità, lascia che i contenuti crescano naturalmente._