---
"title": "Testdokument för KaTeX-formelvisning"
"summary": "Detta dokument är ett testdokument för att visa KaTeX-matematiska formlers renderingsförmåga. Dokumentet innehåller inline-formler som E=mc², blockformler som integral- och derivataformler, komplexa formler som oändliga seriers summor, samt specialformler med cases, matriser och tabeller. Dokumentet testar även formler med textbeskrivningar och den generaliserade Kelly-formeln. Alla formler syftar till att verifiera KaTeX:s korrekta visningsförmåga, vilket är lämpligt för tekniska dokument eller utbildningsmaterial som kräver matematiska formler."
"tags":
  - "KaTeX"
  - "Matematiska formler"
  - "Formeltest"
  - "LaTeX"
  - "Dokumenttest"
  - "Tekniska dokument"
---

# Test av KaTeX-formelvisning

Detta är ett test av en inline-formel: $ E = mc^2 $.

Detta är ett test av en blockformel:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Detta är ytterligare ett test av en blockformel:

$$
\frac{d}{dx}e^x = e^x
$$

Detta är ett test av en komplex formel:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Test av formel med cases:

$$
f(x) =
\begin{cases}
x^2 & \text{om } x \geq 0 \\
-x & \text{om } x < 0
\end{cases}
$$

Tabellformel:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Matrisformel:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Test av formel med text:

$$
E = mc^2 \quad \text{där } m \text{ är massa och } c \text{ är ljusets hastighet}
$$

Den generaliserade Kelly-formeln:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Se till att alla ovanstående formler visas korrekt.