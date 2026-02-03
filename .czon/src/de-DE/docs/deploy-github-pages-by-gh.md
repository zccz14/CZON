---
"title": "Anleitung zur Bereitstellung einer CZON-Statischen Website auf GitHub Pages"
"summary": "Dieser Artikel beschreibt detailliert, wie Sie eine mehrsprachige, von CZON generierte statische Website über die GitHub CLI auf GitHub Pages bereitstellen. Zuerst müssen Sie die GitHub CLI installieren und sich anmelden, um sicherzustellen, dass Sie über die erforderlichen Repository-Berechtigungen verfügen. Führen Sie dann den Befehl `npx czon@latest config github` aus. Dieser Befehl führt Sie durch eine Reihe von Schritten, einschließlich der Überprüfung von Berechtigungen, der Initialisierung eines Git-Repositorys, der Konfiguration des Remote-Repositorys, der Aktivierung von GitHub Pages und der Einstellung auf den Workflow-Typ, der Erstellung oder Aktualisierung einer Workflow-Datei, dem Commit und Push der Änderungen und schließlich dem Abrufen der Pages-URL. Der gesamte Prozess ist automatisiert und vereinfacht den Bereitstellungsablauf."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statische Website"
  - "Bereitstellungsanleitung"
  - "GitHub CLI"
  - "Mehrsprachig"
  - "Automatisierte Bereitstellung"
---

# Bereitstellung auf GitHub Pages

Diese Anleitung beschreibt, wie Sie eine mehrsprachige, von CZON generierte statische Website über die GitHub CLI auf GitHub Pages bereitstellen.

Installieren Sie zuerst das [GitHub CLI](https://cli.github.com/)-Tool (falls noch nicht geschehen) und stellen Sie sicher, dass Sie angemeldet sind (falls noch nicht geschehen):

```bash
$ gh --version # Version prüfen, um eine erfolgreiche Installation sicherzustellen
```

Stellen Sie sicher, dass Sie angemeldet sind und über die Berechtigung `repo` für das Ziel-Repository verfügen:

```bash
$ gh auth login -s repo # Bei Ihrem GitHub-Konto anmelden; Sie werden aufgefordert, sich über den Browser anzumelden oder ein Token zu verwenden.
$ gh auth status # Anmeldestatus prüfen, um sicherzustellen, dass die Anmeldung erfolgreich war und Sie über die erforderlichen Repository-Berechtigungen verfügen.
```

Danach müssen Sie nur noch den folgenden Befehl ausführen und den Anweisungen folgen:

```bash
$ npx czon@latest config github
```

Dieser Befehl führt Sie durch die folgenden Schritte:

1.  Überprüfen, ob die `gh`-Berechtigungen `repo` enthalten. Falls nicht, werden Sie aufgefordert, sich erneut anzumelden und die `repo`-Berechtigung hinzuzufügen.
2.  Wenn das lokale Verzeichnis kein Git-Repository ist, werden Sie aufgefordert, ein neues Git-Repository zu initialisieren.
3.  Überprüfen der Remote-Git-Repository-Einstellungen des lokalen Verzeichnisses, um festzustellen, ob ein GitHub-Remote-Repository vorhanden ist. Falls kein GitHub-Remote-Repository vorhanden ist, werden Sie aufgefordert, ein neues Remote-Repository zu erstellen und es als `origin` hinzuzufügen. Wenn `origin` bereits existiert, aber kein GitHub-Repository ist, werden Sie aufgefordert, ein neues GitHub-Remote-Repository als `upstream` hinzuzufügen.
4.  Überprüfen, ob GitHub Pages aktiviert ist und vom Typ `workflow`. Falls nicht, wird es über die API `gh api` aktiviert und korrigiert, sodass es über Actions bereitgestellt wird. Gleichzeitig wird ein CNAME gesetzt (falls Sie eine benutzerdefinierte Domain haben).
5.  Überprüfen der GitHub-Workflow-Datei. Falls noch nicht erstellt, wird eine Pages-Workflow-Datei erstellt. Falls bereits vorhanden, aber nicht die neueste Version, werden Sie gefragt, ob Sie die Workflow-Datei aktualisieren möchten.
6.  Die Workflow-Datei committen und die Änderungen in das Remote-Repository pushen.
7.  Anzeigen der URL der GitHub Pages-Website, indem die neueste Pages-URL über `gh api` abgerufen wird.