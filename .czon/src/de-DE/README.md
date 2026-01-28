---
"title": "CZON - AI-nativer Markdown-Inhaltsmotor"
"summary": "CZON ist ein AI-nativer Markdown-Inhaltsmotor, der darauf ausgelegt ist, Inhaltsersteller beim Vereinfachen ihres Schreibprozesses zu unterstützen. Er betont Null-Konfigurations-Schreiben und reduziert Nutzerunterbrechungen durch tiefe Integration von KI-Technologie, die automatisch Aufgaben wie Titelgenerierung, Zusammenfassungsextraktion, Tag-Klassifizierung, mehrsprachige Übersetzung und Seiten-Navigation übernimmt. CZON verfügt über integrierte statische Seitengenerierung, konzentriert sich jedoch hauptsächlich auf Inhaltserstellung und -verwaltung, nicht auf komplexe Themenanpassung. Es eignet sich für Nutzer, die in ihrer Muttersprache schreiben und automatisch mehrsprachige Versionen generieren möchten, insbesondere für Website-Inhaltsersteller, die komplexe Konfigurationen ablehnen."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Inhaltsmotor"
  - "Mehrsprachige Übersetzung"
  - "Statische Seitengenerierung"
  - "Null-Konfiguration"
  - "Inhaltserstellung"
---

![Logo von CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Website von CZON ansehen 🚀
    </a>
</div>

# CZON - AI-nativer Markdown-Inhaltsmotor

- **C**: **C**ontent oriented | Inhalte sind König, Fokus auf Inhalte
- **Z**: **Z**ero Configuration | Null-Konfigurations-Schreiben, minimale Unterbrechungen
- **O**: **O**rganic AI-Native | Organisch AI-nativ, tiefe KI-Integration
- **N**: **N**-shaped Energy Curve | N-förmige Energiekurve, greift in alle Phasen von Erstellung, Verteilung und Feedback ein

Im KI-Zeitalter können wir als Website-Inhaltsersteller einen intelligenteren Inhaltserstellungsmotor haben.

**Zurück zu den Inhalten: Minimale Unterbrechungen, Fokus auf das Schreiben**

Lasst Dokumente zu ihrem Wesen zurückkehren, lasst das Schreiben zur Ruhe kommen.

Erstens: Ich möchte kein Bibliothekar sein. Manchmal möchte ich etwas aufschreiben, habe aber vielleicht noch keinen Titel oder eine klare Struktur. Ich möchte, dass ein LLM automatisch Titel generiert, Zusammenfassungen erstellt, kategorisiert, Navigation erstellt und andere organisatorische Aufgaben übernimmt.

Zweitens: Mein Arbeitszimmer muss sauber sein. Ich möchte keine komplexen Build-Tools konfigurieren, mich nicht mit komplizierten Dokumenteneinstellungen herumschlagen und keine komplexen Strukturen. Jedes Mal, wenn ich die Konfigurationsdateien und Projektstrukturen von Tools wie Docusaurus, VuePress oder Astro sehe, bekomme ich Kopfschmerzen. CZON versteckt jetzt alle Konfigurationen im `.czon`-Verzeichnis, fegt sie in eine Ecke. Der Nutzer muss sich nur auf den Inhalt konzentrieren, den Rest erledigt CZON. Alle anderen Verzeichnisse sind Ihr Schreibbereich, Sie können Ihre Markdown-Dateien beliebig organisieren.

**Zurück zur Muttersprache: In der Muttersprache schreiben, nahtlos mehrsprachige Versionen erstellen**

Das Leben ist kurz, ich bin zu faul zum Übersetzen. Man denkt am tiefsten in seiner Muttersprache. Gleichzeitig ist es notwendig, mit der Welt verbunden zu bleiben, ich möchte den mehrsprachigen Austausch nicht aufgeben. Daher wünsche ich mir ein Tool, mit dem ich in meiner Muttersprache schreiben kann, während mehr Menschen meine Inhalte sehen können. Aktuelle i18n-Lösungen erfordern nicht nur eigene Übersetzungen, sondern auch eigene Wartung von Inhaltsaktualisierungen – zu umständlich. Ich nutze LLMs für Übersetzungen, das spart mir viel Zeit und ermöglicht Übersetzungen in mehrere Sprachen mit einem Klick.

## ✨ Kernfunktionen

1. 🌍 **KI-Mehrsprachige Übersetzung**: Nutzt KI für inkrementelle Übersetzungen, ermöglicht das Schreiben von Markdown in der Muttersprache, während die Nutzer mehrsprachig sein können.
2. 📊 **KI-Metadatenextraktion**: Automatische Extraktion von Titel, Beschreibung, Zusammenfassung, Schlüsselwörtern, Zielgruppe, URL-freundlichen Aliases usw.
3. 🏷️ **KI-Tag-Klassifizierung**: Nutzt KI zur Extraktion und Verwaltung von Tags und Kategorien für Inhalte.
4. 🧭 **KI-Kategorienavigation**: Nutzt KI zur Generierung von Sitemaps und Navigation, unabhängig von der Quelldateiposition.
5. 🤖 **KI-Gesamtseitenzusammenfassung**: Kann Gesamtseitenzusammenfassungen in verschiedenen Stilen generieren.

Sowie einige nicht-KI-Funktionen:

1. ⚙️ **Null-Konfiguration**: Alle Konfigurationen und Caches sind im `.czon`-Verzeichnis versteckt, die Projektstruktur bleibt sauber.
2. 🔄 **Inkrementeller Build**: Änderungserkennung basierend auf Content-Hash, verarbeitet nur geänderte Dateien.
3. 📚 **Markdown-Erweiterungsunterstützung**: Native Unterstützung für KaTeX-Mathematikformeln, Mermaid-Diagramme, Embla-Karussells, Fußnoten usw.
4. 🚀 **Statische Seitengenerierung**: Integrierter React-basierter SSG, generiert mehrsprachige statische Seiten.
5. 🌐 **Automatisches Routing basierend auf Besuchersprache**: Leitet Besucher automatisch zur entsprechenden Sprachversion basierend auf ihrer Sprache weiter.

## 📦 Schnellstart

### Voraussetzungen

- [Node.js](https://nodejs.org/) installiert (empfohlen: LTS-Version 24 oder Version 18+, muss npx-Befehl unterstützen)
- [OpenAI API Key](https://platform.openai.com/account/api-keys) erhalten, oder kompatibler OPENAI-API-Key
- Git installiert (zum Auflisten von Markdown-Dateien aus Git, ignoriert durch .gitignore-Regeln gefilterte Dateien)

### Umgebungsvariablen konfigurieren

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Erforderlich: Bitte durch Ihren OpenAI API Key ersetzen
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optional, standardmäßig wird die offizielle OpenAI-API verwendet
export OPENAI_MODEL="gpt-3.5-turbo"  # Optional, standardmäßig wird das gpt-3.5-turbo-Modell verwendet
export OPENAI_MAX_TOKENS="4096"  # Optional, setzt die maximale Token-Anzahl (wenn nicht gesetzt, wird der Standardwert des Modells verwendet; für lange Übersetzungstexte wird ein höherer Wert empfohlen, z.B. 8192, abhängig von der maximalen Token-Anzahl des verwendeten Modells)

# Falls ein HTTP-Proxy für den Zugriff auf die OpenAI-API benötigt wird, können folgende Variablen gesetzt werden
export HTTPS_PROXY="http://your-proxy.com:8080"  # Optional, setzt HTTPS-Proxy
export HTTP_PROXY="http://your-proxy.com:8080"   # Optional, setzt HTTP-Proxy
```

### Mehrsprachige Seite erstellen

In einem beliebigen Git-verwalteten Ordner ausführen:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Da Sprachcodes später für viele Funktionen der statischen Seitengenerierung verwendet werden, stellen Sie sicher, dass Sie Sprachcodes nach dem BCP 47-Standard verwenden. Zum Beispiel steht `zh-Hans` für vereinfachtes Chinesisch, `en-US` für amerikanisches Englisch. Sie können bei Bedarf weitere Sprachen hinzufügen, z.B. `es-ES` (Spanisch), `ja-JP` (Japanisch), `ko-KR` (Koreanisch) usw.
Eine Liste standardisierter Sprachcodes finden Sie unter [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Ausgabeverzeichnis: `.czon/dist`. Der Inhalt dieses Verzeichnisses muss anschließend auf einer statischen Site-Hosting-Plattform bereitgestellt werden.

Detaillierte Nutzung: Führen Sie `npx czon@latest --help` aus.

## 🔗 Vergleich mit anderen Tools

| Funktion               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ---------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-nativ**           | ✅ Tief integriert       | ❌              | ❌              | ❌              |
| **Null-Konfiguration** | ✅ Konfiguration versteckt | ❌ Konfigurationsdatei erforderlich | ❌ Konfigurationsdatei erforderlich | ❌ Konfigurationsdatei erforderlich |
| **Mehrsprachige KI-Übersetzung** | ✅ Automatische inkrementelle Übersetzung | ❌ Manuelle Übersetzung | ❌ Manuelle Übersetzung | ❌ Manuelle Übersetzung |
| **Automatische Kategorisierung/Tags** | ✅ KI-Extraktion | ❌ Manuelle Konfiguration | ❌ Manuelle Konfiguration | ❌ Manuelle Konfiguration |
| **Markdown-Erweiterungen** | ✅ KaTeX, Mermaid, Embla | ✅ Über Plugins | ✅ Über Plugins | ✅ Über Plugins |
| **Themenanpassung**    | ❌ Begrenzt              | ✅ Reichhaltig  | ✅ Reichhaltig  | ✅ Reichhaltig  |

CZON positioniert sich als **KI-verstärkter Inhaltsmotor**, nicht als vollwertiger SSG. Es konzentriert sich darauf, die Effizienz der Inhaltserstellung durch KI zu steigern und eignet sich für Ersteller, die Wert auf Inhaltsqualität legen und den Konfigurationsaufwand reduzieren möchten. Tatsächlich kann CZON mit SSG-Tools wie Docusaurus, VuePress oder Astro kombiniert werden und als Frontend-Motor für Inhaltsgenerierung und -verwaltung dienen.

## 📞 Support

- Projekt-Homepage: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord-Forum: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Lasst das Schreiben zur Ruhe kommen, lasst Inhalte natürlich wachsen._