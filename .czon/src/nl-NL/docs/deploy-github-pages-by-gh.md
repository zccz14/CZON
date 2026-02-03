---
"title": "Handleiding voor het implementeren van een CZON statische site op GitHub Pages"
"summary": "Dit artikel beschrijft in detail hoe je een door CZON gegenereerde meertalige statische site kunt implementeren op GitHub Pages via GitHub CLI. Eerst moet je GitHub CLI installeren en inloggen, en ervoor zorgen dat je repo-rechten hebt. Vervolgens voer je het commando `npx czon@latest config github` uit. Dit commando begeleidt de gebruiker door een reeks stappen, waaronder het controleren van rechten, het initialiseren van een Git-repository, het configureren van een externe repository, het inschakelen van GitHub Pages en instellen op workflow-type, het aanmaken of bijwerken van een Workflow-bestand, het committen en pushen van wijzigingen, en tot slot het ophalen van de Pages URL. Het hele proces is geautomatiseerd en vereenvoudigt de implementatie."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statische site"
  - "Implementatiehandleiding"
  - "GitHub CLI"
  - "Meertalig"
  - "Geautomatiseerde implementatie"
---

# Implementeren op GitHub Pages

Deze handleiding legt uit hoe je een door CZON gegenereerde meertalige statische site kunt implementeren op GitHub Pages via GitHub CLI.

Installeer eerst het [GitHub CLI](https://cli.github.com/) hulpmiddel (als het nog niet geïnstalleerd is) en zorg ervoor dat je bent ingelogd (als je dat nog niet bent):

```bash
$ gh --version # Controleer de versie om te verifiëren dat de installatie succesvol was
```

Zorg ervoor dat je bent ingelogd en dat je `repo`-toegangsrechten hebt voor de doelrepository:

```bash
$ gh auth login -s repo # Log in op je GitHub-account; je wordt gevraagd om via de browser in te loggen of een token te gebruiken
$ gh auth status # Controleer de inlogstatus; zorg ervoor dat je succesvol bent ingelogd en repo-rechten hebt voor de doelrepository
```

Daarna hoef je alleen nog maar het volgende commando uit te voeren en de instructies te volgen:

```bash
$ npx czon@latest config github
```

Dit commando begeleidt je door de volgende stappen:

1.  Controleer of de gh-rechten `repo` bevatten. Zo niet, wordt je gevraagd om opnieuw in te loggen en `repo`-rechten toe te voegen.
2.  Als de lokale map geen Git-repository is, wordt je gevraagd om een nieuwe Git-repository te initialiseren.
3.  Controleer de instellingen van de externe Git-repository voor de lokale map. Kijk of er een GitHub-externe repository is. Als er geen GitHub-externe repository is, wordt je gevraagd om een nieuwe externe repository aan te maken en deze als `origin` toe te voegen. Als `origin` al bestaat maar geen GitHub-repository is, wordt je gevraagd om een nieuwe GitHub-externe repository als `upstream` toe te voegen.
4.  Controleer of GitHub Pages is ingeschakeld en of het type `workflow` is. Als dat niet het geval is, wordt het via de API `gh api` ingeschakeld en gecorrigeerd om vanuit Actions te implementeren. Stel ook CNAME in (als je een aangepast domein hebt).
5.  Controleer het GitHub Workflow-bestand. Als het nog niet bestaat, wordt een Pages Workflow-bestand aangemaakt. Als het al bestaat maar niet de nieuwste versie is, wordt je gevraagd of je het Workflow-bestand wilt bijwerken.
6.  Commit het Workflow-bestand en push de wijzigingen naar de externe repository.
7.  Toon de URL van de GitHub Pages-website, verkregen via `gh api` om de meest recente Pages URL op te halen.