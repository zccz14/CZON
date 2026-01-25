---
"title": "CZON - AI-natives Markdown-Inhalts-Engine"
"summary": "CZON ist eine AI-native Markdown-Inhalts-Engine, die darauf abzielt, Inhaltsersteller beim Vereinfachen ihres Schreibprozesses zu unterstützen. Sie betont Null-Konfigurations-Schreiben und reduziert Nutzerunterbrechungen durch tiefe Integration von KI-Technologie, die automatisch Aufgaben wie Titelgenerierung, Zusammenfassungsextraktion, Tag-Klassifizierung, mehrsprachige Übersetzung und Site-Navigation übernimmt. CZON verfügt über integrierte statische Site-Generierung, konzentriert sich jedoch hauptsächlich auf Inhaltserstellung und -verwaltung, nicht auf komplexe Theme-Anpassungen. Es eignet sich für Nutzer, die in ihrer Muttersprache schreiben und automatisch mehrsprachige Versionen generieren möchten, insbesondere für Website-Inhaltsersteller, die komplexe Konfigurationen ablehnen."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Inhalts-Engine"
  - "Mehrsprachige Übersetzung"
  - "Statische Site-Generierung"
  - "Null-Konfiguration"
  - "Inhaltserstellung"
---

![Logo von CZON](logo.png)

# CZON - AI-natives Markdown-Inhalts-Engine

- **C**: **C**ontent oriented | Content is King, Fokus auf Inhalt
- **Z**: **Z**ero Configuration | Null-Konfigurations-Schreiben, weniger Unterbrechungen
- **O**: **O**rganic AI-Native | Organisch AI-nativ, tiefe KI-Integration
- **N**: **N**-shaped Energy Curve | N-förmige Energiekurve, greift in alle Phasen von Erstellung, Verteilung und Feedback ein

[> Website-Demo](https://czon.zccz14.com/)

Im KI-Zeitalter können wir als Website-Inhaltsersteller eine intelligentere Engine für die Inhaltserstellung haben.

**Zurück zum Inhalt: Minimale Störung, Fokus auf das Schreiben**

Lasst Dokumente zu ihrem Wesen zurückkehren, lasst das Schreiben zur Ruhe kommen.

Erstens: Ich möchte kein Bibliothekar sein. Manchmal möchte ich etwas aufschreiben, habe aber vielleicht noch keinen Titel dafür oder eine klare Struktur. Ich wünsche mir, dass ein LLM automatisch Titel generiert, Zusammenfassungen erstellt, kategorisiert, navigiert und andere Organisationsaufgaben übernimmt.

Zweitens: Mein Arbeitsbereich muss aufgeräumt sein. Ich möchte keine komplexen Build-Tools konfigurieren, mich nicht mit komplizierten Dokumenteneinstellungen herumschlagen und keine komplexen Strukturen. Jedes Mal, wenn ich die Konfigurationsdateien und Projektstrukturen von Tools wie Docusaurus, VuePress oder Astro sehe, bekomme ich Kopfschmerzen. CZON wählt nun den Ansatz, alle Konfigurationen im `.czon`-Verzeichnis zu verstecken, in die Ecke zu kehren. Der Nutzer muss sich nur auf den Inhalt konzentrieren, den Rest erledigt CZON. Alle anderen Verzeichnisse sind Ihr Schreibbereich, Sie können Ihre Markdown-Dateien beliebig organisieren.

**Zurück zur Muttersprache: In der Muttersprache schreiben, nahtlos mehrsprachige Versionen erstellen**

Das Leben ist kurz, ich bin zu faul zum Übersetzen. Man kann die Tiefe des eigenen Denkens am besten in der Muttersprache entfalten. Gleichzeitig ist es notwendig, mit der Welt verbunden zu bleiben, ich möchte den mehrsprachigen Austausch nicht aufgeben. Daher wünsche ich mir ein Tool, mit dem ich in meiner Muttersprache schreiben kann, während mehr Menschen meine Inhalte sehen können. Aktuelle i18n-Lösungen erfordern nicht nur eigene Übersetzungen, sondern auch die Pflege von Inhaltsaktualisierungen – zu umständlich. Ich entscheide mich dafür, ein LLM für die Übersetzung zu nutzen, was mir viel Zeit spart und mit einem Klick Übersetzungen in mehrere Sprachen ermöglicht.

## Grundlegende Funktionen

1. 🌍 **Automatische mehrsprachige Übersetzung**: Nutzt KI für inkrementelle Übersetzungen, ermöglicht das Schreiben von Markdown in der Muttersprache, während die Nutzer mehrsprachig sein können.
2. 💭 **Automatische Zusammenfassungsextraktion**: Nutzt KI zur Inhaltsanalyse und -extraktion des Originaltextes.
3. 🏷️ **Automatische Tag-Klassifizierung**: Nutzt KI zur Extraktion und Verwaltung von Tags und Kategorien für Inhalte.
4. 🧭 **Intelligente Kategorien-Navigation**: Nutzt KI zur Generierung von Sitemaps und Navigation, unabhängig von der Position der Quelldateien.

## Statische Site-Generierung (SSG)

CZON verfügt über eine integrierte SSG-Lösung, die einen beliebigen Git-Ordner mit Markdown-Dateien in eine statische HTML-Site umwandeln kann.

⚠️ Bitte beachten Sie: CZON ist kein professioneller Static Site Generator (SSG), sondern eine KI-gesteuerte Markdown-Inhalts-Engine, die sich auf Inhaltserstellung und -verwaltung konzentriert.

✅ CZON zielt darauf ab, den Prozess der Inhaltserstellung und -veröffentlichung zu vereinfachen, damit sich Nutzer auf das Schreiben selbst konzentrieren können, anstatt von komplexen Konfigurationen und Tools abgelenkt zu werden.

❌ CZON bietet keine komplexen Theme-Anpassungen oder Plugin-Ökosysteme, sondern konzentriert sich darauf, die Qualität und Zugänglichkeit von Inhalten durch KI zu verbessern.

🔔 Dennoch kann CZON statische Sites generieren. Falls nötig, kann CZON als Vorverarbeitungsschritt genutzt werden, um es in andere SSG-Lösungen zu integrieren und personalisierte, ansprechende Sites zu erstellen.

## Schnellstart

Voraussetzungen:

- [Node.js](https://nodejs.org/) installiert (empfohlene Version 18 oder höher, `npx`-Befehl erforderlich)
- [OpenAI API Key](https://platform.openai.com/account/api-keys) erhalten oder einen OPENAI-kompatiblen API Key
- Git installiert (um Markdown-Dateien aus Git aufzulisten und Dateien zu ignorieren, die von .gitignore-Regeln gefiltert werden)

Zuerst: Arbeiten Sie in einem Ordner, der bereits von Git verwaltet wird:

Umgebungsvariablen konfigurieren

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Erforderlich: Bitte ersetzen Sie dies mit Ihrem OpenAI API Key
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optional, standardmäßig wird die offizielle OpenAI API verwendet
export OPENAI_MODEL="gpt-3.5-turbo"  # Optional, standardmäßig wird das gpt-3.5-turbo Modell verwendet
export OPENAI_MAX_TOKENS="4096"  # Optional, setzt die maximale Token-Limitierung (wenn nicht gesetzt, wird der Standardwert des Modells verwendet; für lange Übersetzungstexte wird ein höherer Wert wie 8192 empfohlen, abhängig von der maximalen Token-Anzahl des verwendeten Modells)
```

Site erstellen, mit Unterstützung für mehrsprachige Übersetzung. Nutzt das aktuelle Verzeichnis als Quellverzeichnis und gibt die Dateien im `.czon/dist`-Verzeichnis aus.

- Sie können die benötigten Sprachversionen durch mehrfache Verwendung des `--lang`-Parameters angeben (z.B. `--lang zh-Hans --lang en-US`).
- Die Quellsprache muss nicht konfiguriert werden, CZON erkennt sie automatisch.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Weitere Parameter oder Hilfe anzeigen**:

```bash
npx czon@latest
```