---
"title": "Veiledning for å deploye CZON-statisk nettsted til GitHub Pages"
"summary": "Denne artikkelen beskriver i detalj hvordan du kan deploye et flerspråklig statisk nettsted generert av CZON til GitHub Pages via GitHub CLI. Først må du installere og logge inn på GitHub CLI, og sikre at du har repo-tilgang. Deretter kjører du kommandoen npx czon@latest config github. Denne kommandoen vil veilede deg gjennom en rekke steg, inkludert å sjekke tilganger, initialisere et Git-repositorium, konfigurere et fjernrepositorium, aktivere GitHub Pages og sette det til workflow-type, opprette eller oppdatere Workflow-filen, committe og pushe endringer, og til slutt hente URL-en til Pages. Hele prosessen er automatisert og forenkler deploy-prosessen."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statisk nettsted"
  - "Deploy-veiledning"
  - "GitHub CLI"
  - "Flerspråklig"
  - "Automatisert deploy"
---

# Deploy til GitHub Pages

Denne veiledningen forklarer hvordan du deployer et flerspråklig statisk nettsted generert av CZON til GitHub Pages via GitHub CLI.

Først må du installere [GitHub CLI](https://cli.github.com/)-verktøyet (hvis det ikke allerede er installert), og sikre at du er logget inn (hvis du ikke allerede er det):

```bash
$ gh --version # Sjekk versjonen for å bekrefte vellykket installasjon
```

Sørg for at du er logget inn, og at du har `repo`-tilgang til målrepositoriet:

```bash
$ gh auth login -s repo # Logg inn på GitHub-kontoen din. Du vil bli bedt om å logge inn via nettleser eller bruke en token.
$ gh auth status # Sjekk påloggingsstatusen for å sikre at du er logget inn og har repo-tilgang til målrepositoriet.
```

Resten er bare å kjøre følgende kommando og følge instruksjonene:

```bash
$ npx czon@latest config github
```

Denne kommandoen vil veilede deg gjennom følgende steg:

1.  Sjekk om gh-tilgangen inkluderer `repo`. Hvis ikke, vil du bli bedt om å logge inn på nytt og legge til `repo`-tilgang.
2.  Hvis den lokale mappen ikke er et Git-repositorium, vil du bli bedt om å initialisere et nytt Git-repositorium.
3.  Sjekk de eksterne Git-repositorieinnstillingene for den lokale mappen for å se om det finnes et GitHub-fjernrepositorium. Hvis det ikke finnes noe GitHub-fjernrepositorium, vil du bli bedt om å opprette et nytt fjernrepositorium og legge det til som `origin`. Hvis `origin` allerede eksisterer, men ikke er et GitHub-repositorium, vil du bli bedt om å legge til et nytt GitHub-fjernrepositorium som `upstream`.
4.  Sjekk om GitHub Pages er aktivert og satt til workflow-type. Hvis ikke, vil det bli aktivert og korrigert til å deploye fra Actions via API-et `gh api`. CNAME vil også bli satt (hvis du har et eget domene).
5.  Sjekk GitHub Workflow-filen. Hvis den ikke er opprettet, vil en Pages Workflow-fil bli opprettet. Hvis den allerede eksisterer, men ikke er den nyeste versjonen, vil du bli spurt om du vil oppdatere Workflow-filen.
6.  Commit Workflow-filen og push endringene til fjernrepositoriet.
7.  Du vil få en melding om å besøke URL-en til GitHub Pages-nettstedet. Den nyeste Pages-URL-en hentes via `gh api`.