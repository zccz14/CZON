---
"title": "Leitfaden für objektive kritische Stilanalyse-Berichte"
"summary": "Dieses Dokument beschreibt detailliert, wie eine objektive kritische Stilanalyse durchgeführt wird, einschließlich Leseschwerpunkten, Wissensdatenbankstruktur, Komprimierungsstrategien, Stilpositionierung, Kernprinzipien, erforderlicher Kapitelstruktur und einer Vorlage für den kritischen Rahmen. Es betont konstruktive Kritik auf Faktenbasis und zielt darauf ab, der Zielgruppe (z.B. Inhaltsersteller, potenzielle Partner) zu helfen, die Stärken und Schwächen von Inhalten umfassend zu verstehen und Verbesserungen zu fördern. Das Dokument bietet konkrete Bewertungsbereiche (wie Architekturentwurf, Investitionsstrategien, technische Praktiken, theoretische Systeme) und Anforderungen an Ausgabedateien, um eine professionelle, fundierte Analyse sicherzustellen."
"tags":
  - "Kritische Analyse"
  - "Dokumentenanalyse"
  - "Konstruktives Feedback"
  - "Wissensdatenbank-Management"
  - "Bewertungsrahmen"
  - "Professionelles Schreiben"
---

# Objektiver kritischer Stilanalyse-Bericht

## Leseschwerpunkte

Beim Lesen jeder Datei liegt der Fokus auf der Extraktion von:

- Dateipfad und Titel
- Vorgebrachten Standpunkten, Behauptungen, Lösungsvorschlägen
- Argumentationsprozess und Grundlage
- Annahmen und Voraussetzungen
- Potenziellen logischen Lücken oder Widersprüchen
- Praktischer Verifizierung
- Konsistenz/Widersprüchen zu anderen Dateien

**Besondere Aufmerksamkeit gilt**: Behauptenden Aussagen, Kausalargumentation, Datenreferenzen, Annahmen/Voraussetzungen

## Wissensdatenbankstruktur

```
### Dateiindex
| Dateipfad | Titel | Hauptbehauptung |
|-----------|-------|-----------------|

### Behauptungs- und Argumentationsindex
| Behauptung | Argumentationsgrundlage | Stärkebewertung | Quelldatei |
|------------|------------------------|-----------------|------------|

### Annahmenindex
| Annahme | Plausibilität | Zugehörige Behauptung | Quelldatei |
|---------|---------------|-----------------------|------------|

### Potenzielle Probleme Index
| Problemtyp | Beschreibung | Auswirkungsbereich | Quelldatei |
|------------|--------------|--------------------|------------|

### Stärkenbeweise Index
| Stärke | Beweis | Quelldatei |
|--------|--------|------------|

### Widerspruchs-/Inkonsistenzprotokoll
| Inhalt A | Inhalt B | Widerspruchsbeschreibung | Quelldatei |
|----------|----------|--------------------------|------------|
```

## Komprimierungsstrategie

Bei Bedarf der Wissensdatenbankkomprimierung:

1. **Muss beibehalten werden**: Dateiindex, Behauptungs- und Argumentationsindex, Potenzielle Probleme Index
2. **Kann gekürzt werden**: Annahmenindex (wichtige Annahmen behalten), Stärkenbeweise (typische Beispiele behalten)
3. **Kann verworfen werden**: Detaillierte Beschreibungen nebensächlicher Probleme

---

## Stilpositionierung

Faktenbasierte, objektive kritische Analyse von Inhalten, die deren Stärken und Schwächen aufzeigt.

**Zielgruppe**: Leser, die Inhalte vertieft bewerten möchten, potenzielle Partner, Inhaltsersteller selbst
**Schreibton**: Professionell, konstruktiv, fundiert
**Zweck**: Lesern helfen, Inhalte umfassender zu verstehen, Stärken und Schwächen zu identifizieren, Verbesserungen zu fördern

## Kernprinzipien

- ✅ Kritik basiert auf Faktenbeweisen, nicht auf subjektiven Vermutungen
- ✅ Kritik ist konstruktiv, schlägt Verbesserungen vor
- ✅ Anerkennung von Stärken bei gleichzeitiger Benennung von Schwächen
- ❌ Keine Ablehnung oder Herabwürdigung
- ❌ Keine persönlichen Angriffe

## Erforderliche Kapitelstruktur

### Übersicht

Kurze Einführung in das Analyseobjekt und den Analyseumfang

### Bewertung des Architekturentwurfs

- Machbarkeitsanalyse
- Ausreichende Verifizierung
- Praktische Umsetzungssituation
- **Verbesserungsvorschläge**

### Investitions-/Strategieanalyse

- Prüfung der logischen Konsistenz
- Überprüfung der Annahmen
- Risikoidentifikation
- **Verbesserungsvorschläge**

### Bewertung technischer Praktiken

- Angemessenheit der Technologieauswahl
- Implementierungsqualität
- Wartbarkeit
- **Verbesserungsvorschläge**

### Bewertung des theoretischen Systems

- Strenge der Methodik
- Anwendungsbereich
- Grenzen
- **Verbesserungsvorschläge**

### Umfassende konstruktive Vorschläge

Verbesserungsvorschläge nach Priorität auflisten:

1. Vorschläge mit hoher Priorität
2. Vorschläge mit mittlerer Priorität
3. Langfristige Vorschläge

## Vorlage für den kritischen Rahmen

```markdown
### [Bewertungsbereich]

**Aktueller Zustand**:
[Objektive Beschreibung des aktuellen Zustands, mit Verweis auf konkrete Dateien]

**Stärken**:

- Stärke 1 (Beweis: [Link])
- Stärke 2 (Beweis: [Link])

**Schwächen**:

- Schwäche 1 (Beweis: [Link])
  - Konkrete Problembeschreibung
  - Potenzielle Auswirkungen
- Schwäche 2 (Beweis: [Link])

**Verbesserungsvorschläge**:

1. Vorschlag 1: Konkreter, umsetzbarer Verbesserungsplan
2. Vorschlag 2: Konkreter, umsetzbarer Verbesserungsplan
```

## Ausgabedatei

`SUMMARY/2-critical.md`

## Qualitätsprüfliste

- [ ] Jeder Kritikpunkt hat eine faktische Grundlage
- [ ] Zu jedem Kritikpunkt gibt es einen Verbesserungsvorschlag
- [ ] Professioneller Ton, keine persönlichen Angriffe
- [ ] Ausgewogene Analyse von Stärken und Schwächen
- [ ] Alle Links sind gültig