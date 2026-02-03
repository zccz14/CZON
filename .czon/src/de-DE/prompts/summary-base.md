---
"title": "Grundregeln für die Erstellung von KI-Analyseberichten"
"summary": "Dieses Dokument stellt die Grundregeln für die Erstellung von KI-Analyseberichten bereit und betont die strikte Einhaltung des Dokumentenleseprozesses, der die fünf Phasen Abrufen der Dateiliste, Stapelweises Lesen und Zusammenfassen, Kontextverwaltung, Vollständigkeitsprüfung und Berichtserstellung umfasst. Zu den Kernprinzipien gehören das Lesen aller Dateien einzeln, die Faktenbasierung, die standardisierte Verlinkung und die Berücksichtigung des Zeitgewichts. Allgemeine Regeln verlangen, dass Berichte mit einem bestimmten Format beginnen, in ein bestimmtes Verzeichnis ausgegeben werden und dass es verboten ist, vor dem Lesen aller Dateien einen Bericht zu erstellen oder Dateien zu überspringen."
"tags":
  - "KI-Analyse"
  - "Berichtserstellung"
  - "Dokumentenlesen"
  - "Regeln"
  - "Markdown"
  - "Faktenbasis"
  - "Zitierrichtlinien"
  - "Prozessmanagement"
---

# KI-Analyseberichterstellung - Grundregeln

## Dokumentenleseprozess (muss strikt eingehalten werden)

### Kernprinzipien

Dieses Repository kann Hunderte oder Tausende von Markdown-Dateien enthalten. Du musst **jede Datei einzeln lesen**, Überspringen ist nicht erlaubt.
Um die große Anzahl von Dateien zu bewältigen, wird eine **Strategie des schrittweisen Lesens und Zusammenfassens** angewendet.

### Phase 1: Abrufen der vollständigen Dateiliste

1.  Führe `npx czon@latest ls-files` aus, um alle Markdown-Dateien zu erhalten.
2.  Notiere die Gesamtzahl der Dateien N.
3.  Speichere die Dateiliste als Warteschlange für das Lesen.

### Phase 2: Stapelweises Lesen und Zusammenfassen

Verarbeite die Dateien in Stapeln. Empfohlen werden 10-20 Dateien pro Stapel, du kannst dies jedoch basierend auf Dateigröße und Komplexität anpassen.

**Für jeden Stapel:**

1.  **Lesen**: Verwende das Read-Tool, um den vollständigen Inhalt jeder Datei im Stapel einzeln zu lesen.
2.  **Extrahieren**: Extrahiere relevante Informationen basierend auf den **Schwerpunkten des aktuellen Stils** (siehe Stilrichtlinie unten).
3.  **Stapelzusammenfassung**: Fasse die extrahierten Informationen des Stapels in einer strukturierten Zusammenfassung zusammen.
4.  **Akkumulieren**: Füge die Stapelzusammenfassung zur "Wissensdatenbank" hinzu (Struktur der Wissensdatenbank siehe Stilrichtlinie unten).

### Phase 3: Kontextverwaltung

Wenn der Kontext sich der Grenze nähert:

1.  **Komprimieren der Wissensdatenbank**: Komprimiere die Wissensdatenbank gemäß der **Komprimierungsstrategie des aktuellen Stils** (siehe Stilrichtlinie unten).
2.  **Index beibehalten**: Unabhängig von der Komprimierung müssen Pfad- und Titelindex aller Dateien erhalten bleiben.
3.  **Weiterlesen**: Verarbeite die verbleibenden Dateien mit der komprimierten Wissensdatenbank weiter.

### Phase 4: Vollständigkeitsprüfung

Vor der Berichtserstellung muss bestätigt werden:

1.  Alle N Dateien aus der Dateiliste wurden verarbeitet.
2.  Die Wissensdatenbank enthält grundlegende Informationen (mindestens Pfad und Titel) für jede Datei.

**Wenn Lücken entdeckt werden**: Kehre zu Phase 2 zurück, um die fehlenden Dateien zu verarbeiten.

### Phase 5: Berichtserstellung

Erst nach Abschluss aller oben genannten Phasen darf mit der Berichtserstellung begonnen werden.

### Verbotene Handlungen

-   ❌ Es darf nicht mit der Berichtserstellung begonnen werden, bevor nicht alle Dateien gelesen wurden.
-   ❌ Es dürfen keine Dateien übersprungen werden, unabhängig von der Anzahl.
-   ❌ Es darf nicht behauptet werden, "das Gesamtbild verstanden zu haben", nachdem nur ein Teil der Dateien gelesen wurde.
-   ❌ Es dürfen keine nicht existierenden Dateien oder Inhalte in der Wissensdatenbank erfunden werden.

---

## Allgemeine Regeln

### 1. Prinzip der Faktenbasis

-   Denke stets daran, dich auf faktische Inhalte zu stützen. Abweichungen von den Fakten sind nicht erlaubt.
-   Alle Standpunkte müssen durch den Originaltext gestützt sein.
-   Nicht existierende Inhalte dürfen nicht erfunden werden.

### 2. Richtlinien für Verweislinks

-   Stelle beim Verlinken auf den Originaltext sicher, dass die Links funktionieren.
-   **Verlinke immer auf die spezifische Markdown-Datei**, nicht auf das Verzeichnis.
-   **Der Linktext sollte der entsprechende Titel sein**, nicht der Dateiname.
-   Da in das SUMMARY-Verzeichnis generiert wird, verwende beim Verweisen relative Pfade, die mit `../` beginnen.

**Richtiges Beispiel**:

```markdown
[Kapital-Dauerkampf: Die Strategie des Privatanlegers zum Klassenwechsel](../INSIGHTS/6.md)
[Von der Kreation zur Verteilung – Aufbau einer KI-nativen Content-Engine](../INSIGHTS/4.md)
```

**Falsches Beispiel**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Dateiname statt Titel verwendet
[Kapital-Dauerkampf](../INSIGHTS/) ← Auf Verzeichnis verlinkt
```

### 3. Kopfzeilenformat

Jeder Bericht muss mit folgendem Format beginnen:

```markdown
# [Berichtstitel]

**KI-Analysezeit**: YYYY-MM-TT
**Hinweis**: Dieser Bericht wurde von einer KI generiert. Der Inhalt dient nur als Referenz.

---
```

### 4. Zeitgewichtung

-   Berücksichtige den Zeitrahmen und gewichte neuere Artikel stärker.
-   Wichtige ältere Inhalte sollten jedoch nicht ignoriert werden.

### 5. Ausgabeverzeichnis

-   Alle Berichte werden im Verzeichnis `SUMMARY/` generiert.
-   Dateinamen werden gemäß dem angegebenen Format benannt.