---
"title": "Guide til at deploye CZON statisk side til GitHub Pages"
"summary": "Denne artikel beskriver i detaljer, hvordan man deployer et CZON-genereret flersproget statisk site til GitHub Pages via GitHub CLI. Først skal du installere og logge ind på GitHub CLI og sikre dig, at du har repo-tilladelser. Derefter kører du kommandoen `npx czon@latest config github`, som vil guide dig gennem en række trin: tjek af tilladelser, initialisering af Git-repository, konfiguration af fjernrepository, aktivering af GitHub Pages med workflow-type, oprettelse eller opdatering af Workflow-fil, commit og push af ændringer og endelig hentning af Pages-URL. Hele processen er automatiseret og forenkler deploy-processen."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statisk site"
  - "Deploy-guide"
  - "GitHub CLI"
  - "Flersproget"
  - "Automatiseret deployment"
---

# Deploy til GitHub Pages

Denne guide forklarer, hvordan du deployer et CZON-genereret flersproget statisk site til GitHub Pages via GitHub CLI.

Installér først værktøjet [GitHub CLI](https://cli.github.com/) (hvis det ikke allerede er installeret), og sørg for at være logget ind (hvis du ikke allerede er det):

```bash
$ gh --version # Se versionen for at sikre, at installationen lykkedes
```

Sørg for at være logget ind og have `repo`-adgang til det målrettede repository:

```bash
$ gh auth login -s repo # Log ind på din GitHub-konto; du vil blive bedt om at logge ind via browser eller bruge et token
$ gh auth status # Se login-status for at sikre, at du er logget ind og har repo-adgang til det målrettede repository
```

Resten handler blot om at køre følgende kommando og følge instruktionerne:

```bash
$ npx czon@latest config github
```

Denne kommando vil guide dig gennem følgende trin:

1.  Tjek om gh-tilladelserne inkluderer `repo`. Hvis ikke, bedes du om at logge ind igen og tilføje `repo`-tilladelsen.
2.  Hvis den lokale mappe ikke er et Git-repository, vil du blive bedt om at initialisere et nyt Git-repository.
3.  Tjek de lokale fjern-Git-repository-indstillinger for at se, om der er et GitHub-fjernrepository. Hvis der ikke er et GitHub-fjernrepository, vil du blive bedt om at oprette et nyt fjernrepository og tilføje det som `origin`. Hvis `origin` allerede findes, men ikke er et GitHub-repository, vil du blive bedt om at tilføje et nyt GitHub-fjernrepository som `upstream`.
4.  Tjek om GitHub Pages er aktiveret og af typen `workflow`. Hvis ikke, aktiveres det via API'et `gh api` og ændres til at blive deployet fra Actions. Samtidig konfigureres CNAME (hvis du har et brugerdefineret domænenavn).
5.  Tjek GitHub Workflow-filen. Hvis den ikke er oprettet, oprettes en Pages Workflow-fil. Hvis den allerede findes, men ikke er den nyeste version, vil du blive spurgt, om du vil opdatere Workflow-filen.
6.  Commit Workflow-filen, og push ændringerne til fjernrepositoryet.
7.  Du får vist URL'en til GitHub Pages-webstedet, som hentes via `gh api` for at få den seneste Pages-URL.