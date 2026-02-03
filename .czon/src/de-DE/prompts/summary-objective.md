---
"title": "Leitfaden für objektive und neutrale Stilanalyseberichte"
"summary": "Dieses Dokument ist ein Leitfaden zur Erstellung objektiver und neutraler Stilanalyseberichte. Es erläutert detailliert die Lesepunkte, die bei der Analyse von Dokumenten zu beachten sind (wie Dateipfad, Datum, Projektname, Personenrollen, objektive Fakten usw.), und definiert die Struktur der Wissensdatenbank (einschließlich Dateiindex, Projektindex, Personenindex, Timeline und Theorie-/Framework-Index). Das Dokument bietet auch Komprimierungsstrategien, die anleiten, wie Inhalte bei Bedarf gekürzt werden können, wobei gleichzeitig betont wird, dass Schlüsselindizes beibehalten werden müssen. Der Stilansatz erfordert, Inhalte aus einer objektiven und neutralen Perspektive vorzustellen, subjektive Bewertungen und emotionale Färbungen zu vermeiden. Die Zielgruppe umfasst neue Leser, potenzielle Partner und Investoren. Das Dokument listet Verbote auf (z. B. keine emotionalen Äußerungen oder Spekulationen) und erforderliche Kapitelstrukturen (wie Übersicht, Projektvorstellung, Schlüsselthemen, Timeline, Hauptpersonen und Theorie-/Framework-Zusammenfassung) und legt die Ausgabedatei sowie eine Qualitätsprüfliste fest."
"tags":
  - "Dokumentenanalyse"
  - "Objektiv neutral"
  - "Wissensdatenbankstruktur"
  - "Informationsextraktion"
  - "Stilleitfaden"
  - "Berichterstellung"
  - "Strukturierte Daten"
---

# Objektiver und neutraler Stilanalysebericht

## Lesepunkte

Beim Lesen jeder Datei liegt der Fokus auf der Extraktion von:

- Dateipfad und Titel
- Datumsinformationen
- Genannte Projektnamen und Funktionsbeschreibungen
- Erwähnte Personen und deren Rollen
- Objektive Fakten und Daten
- Konkrete Informationen wie Versionsnummern, Meilensteine usw.

**Ignorieren**: Subjektive Bewertungen, emotionale Äußerungen, spekulative Inhalte

## Wissensdatenbankstruktur

```
### Dateiindex
| Dateipfad | Titel | Datum |
|-----------|-------|-------|

### Projektindex
| Projektname | Beschreibung | Verknüpfte Dateien |
|-------------|--------------|--------------------|

### Personenindex
| Person | Rolle | Verknüpfte Dateien |
|--------|-------|--------------------|

### Timeline
| Datum | Ereignis | Quellendatei |
|-------|----------|--------------|

### Theorie-/Framework-Index
| Name | Kernidee | Quellendatei |
|------|----------|--------------|
```

## Komprimierungsstrategie

Bei Bedarf einer Komprimierung der Wissensdatenbank:

1. **Muss beibehalten werden**: Dateiindex (Pfad+Titel), Projektindex, Personenindex
2. **Kann gekürzt werden**: Timeline (Schlüsselereignisse beibehalten), Theorieindex (Namen und Quellen beibehalten)
3. **Kann verworfen werden**: Detaillierte Beschreibungen, nebensächliche Ereignisse

---

## Stilansatz

Inhalte aus einer objektiven und neutralen Perspektive vorstellen, subjektive Bewertungen und emotionale Färbungen vermeiden. Fakten und Daten hervorheben, um Genauigkeit und Zuverlässigkeit der Informationen zu gewährleisten.

**Zielgruppe**: Neue Leser, die einen schnellen Überblick über das Repository benötigen, potenzielle Partner, Investoren
**Schreibton**: Professionell, zurückhaltend, neutral, wie beim Verfassen eines Lebenslaufs oder einer Vita
**Zweck**: Dem Leser helfen, grundlegende Informationen und Kernaussagen der Inhalte umfassend zu verstehen, um eigene Schlüsse zu ziehen

## Verbotene Praktiken

- ❌ Keine emotionalen Äußerungen (wie "aufregend", "leider")
- ❌ Keine Spekulationen (wie "möglicherweise", "vielleicht", "wahrscheinlich")
- ❌ Keine subjektiven Bewertungswörter (wie "ausgezeichnet", "schlecht", "interessant")
- ❌ Keine Bewertung von Gut oder Schlecht
- ❌ Keine Verwendung der ersten Person

## Erforderliche Kapitelstruktur

### Übersicht

- Kurzvorstellung des Repository-Besitzers (Name/ID, Identität, Hauptbereiche)
- Zeitlicher Rahmen der Repository-Inhalte
- Liste der Hauptprojekte (kurze Aufzählung)

### Projektvorstellung

Für jedes Hauptprojekt folgende Struktur verwenden:

```markdown
### [Projektname]

- **Ursprung**: Herkunft und Hintergrund des Projekts
- **Kernfunktionen**:
  - Funktion 1
  - Funktion 2
- **Versionsverlauf**: Falls vorhanden, kurz erläutern
- **Verknüpfte Dateien**: [Artikel-Titel](../pfad/zur/datei.md)
```

### Schlüsselthemen

Inhalte nach Themen kategorisieren und zusammenfassen:

```markdown
### 1. [Themenname]

- [Artikel-Titel1](../pfad/zur/datei1.md): Kernaussagen-Zusammenfassung
- [Artikel-Titel2](../pfad/zur/datei2.md): Kernaussagen-Zusammenfassung
```

### Timeline

Schlüsselereignisse im Tabellenformat darstellen:

```markdown
| Datum       | Schlüsselereignis             |
| ----------- | ----------------------------- |
| JJJJ-MM-TT | Ereignisbeschreibung (objektive Darstellung) |
```

### Hauptpersonen

Tabellenformat verwenden:

```markdown
| Person    | Rolle      | Anmerkung         |
| --------- | ---------- | ----------------- |
| Name/ID | Position/Beziehung | Verknüpfte objektive Informationen |
```

### Theorie-/Framework-Zusammenfassung

Für im Repository vorgestellte Theorien/Frameworks:

```markdown
### [Framework-Name]

- **Kernidee**: In einem Satz zusammenfassen
- **Schlüsselelemente**: Kernkomponenten auflisten
- **Mathematischer Ausdruck**: Falls vorhanden, Formel angeben
```

## Ausgabedatei

`SUMMARY/1-objective.md`

## Qualitätsprüfliste

- [ ] Keine subjektiven Bewertungswörter
- [ ] Keine emotionalen Äußerungen
- [ ] Alle Links verweisen auf konkrete Dateien
- [ ] Link-Text entspricht dem Artikel-Titel
- [ ] Alle erforderlichen Kapitel enthalten
- [ ] Timeline- und Personentabellen korrekt formatiert