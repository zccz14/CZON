---
"title": "KaTeX-Formeldarstellungstestdokument"
"summary": "Dieses Dokument ist ein Testdokument zur Darstellung von KaTeX-Mathematikformeln und zeigt die Rendering-Fähigkeiten verschiedener mathematischer Formeln. Es enthält Inline-Formeln wie E=mc², Blockformeln wie Integrale und Ableitungsformeln, komplexe Formeln wie unendliche Reihensummen sowie spezielle Formeln mit cases, Matrizen und Tabellen. Das Dokument testet auch Formeln mit Textbeschreibungen und die verallgemeinerte Kelly-Formel. Alle Formeln dienen der Überprüfung der korrekten Darstellungsfähigkeit von KaTeX und sind für technische Dokumente oder Lehrmaterialien geeignet, die mathematische Formeln präsentieren müssen."
"tags":
  - "KaTeX"
  - "Mathematische Formeln"
  - "Formeltest"
  - "LaTeX"
  - "Dokumententest"
  - "Technische Dokumentation"
---

# KaTeX-Formeldarstellungstest

Dies ist ein Inline-Formeltest: $ E = mc^2 $.

Dies ist ein Blockformeltest:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Dies ist ein weiterer Blockformeltest:

$$
\frac{d}{dx}e^x = e^x
$$

Dies ist ein Test einer komplexen Formel:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Formeltest mit cases:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Tabellenformel:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Matrixformel:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Formeltest mit Text:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

Verallgemeinerte Kelly-Formel:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Bitte stellen Sie sicher, dass alle oben genannten Formeln korrekt angezeigt werden.