---
"title": "Guide för att distribuera CZON-statiska webbplatser till GitHub Pages"
"summary": "Denna artikel beskriver i detalj hur man distribuerar CZON-genererade flerspråkiga statiska webbplatser till GitHub Pages via GitHub CLI. Först måste du installera och logga in på GitHub CLI och säkerställa att du har repo-behörighet. Kör sedan kommandot npx czon@latest config github, som guidar dig genom en serie steg: kontrollera behörigheter, initiera ett Git-repository, konfigurera fjärrrepository, aktivera GitHub Pages och ställa in det som workflow-typ, skapa eller uppdatera Workflow-fil, committa och pusha ändringar samt slutligen hämta Pages-URL. Hela processen automatiseras och förenklar distributionsflödet."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statisk webbplats"
  - "Distributionsguide"
  - "GitHub CLI"
  - "Flerspråkig"
  - "Automatiserad distribution"
---

# Distribuera till GitHub Pages

Denna guide beskriver hur du distribuerar CZON-genererade flerspråkiga statiska webbplatser till GitHub Pages via GitHub CLI.

Installera först verktyget [GitHub CLI](https://cli.github.com/) (om det inte redan är installerat) och se till att du är inloggad (om du inte redan är det):

```bash
$ gh --version # Kontrollera versionen för att säkerställa att installationen lyckades
```

Se till att du är inloggad och har behörighet att komma åt `repo` för målrepositoryt:

```bash
$ gh auth login -s repo # Logga in på ditt GitHub-konto, du kommer att få välja mellan att logga in via webbläsare eller använda en token
$ gh auth status # Kontrollera inloggningsstatus, se till att du är inloggad och har repo-behörighet för målrepositoryt
```

Resten är bara att köra följande kommando och följa anvisningarna:

```bash
$ npx czon@latest config github
```

Detta kommando guidar dig genom följande steg:

1.  Kontrollera om gh-behörigheterna inkluderar repo; om inte, uppmanas du att logga in igen och lägga till repo-behörighet.
2.  Om den lokala katalogen inte är ett Git-repository, uppmanas du att initiera ett nytt Git-repository.
3.  Kontrollera inställningarna för fjärr-Git-repository i den lokala katalogen för att se om det finns ett GitHub-fjärrrepository. Om det inte finns något GitHub-fjärrrepository, uppmanas du att skapa ett nytt fjärrrepository och lägga till det som origin. Om origin redan finns men inte är ett GitHub-repository, uppmanas du att lägga till ett nytt GitHub-fjärrrepository som upstream.
4.  Kontrollera om GitHub Pages är aktiverat och av typen workflow. Om inte, aktiveras det via API:t `gh api` och korrigeras så att det distribueras från Actions. Ställ även in CNAME (om du har en anpassad domän).
5.  Kontrollera GitHub Workflow-filen. Om den inte är skapad, skapas en Pages Workflow-fil; om den redan finns men inte är den senaste versionen, uppmanas du att uppdatera Workflow-filen.
6.  Committa Workflow-filen och pusha ändringarna till fjärrrepositoryt.
7.  Uppmanas att besöka URL:en för GitHub Pages-webbplatsen genom att hämta den senaste Pages-URL:en via gh api.