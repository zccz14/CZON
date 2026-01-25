---
"title": "KaTeX-formelvisningstestdokument"
"summary": "Dette dokumentet er et testdokument for visning av KaTeX-matematiske formler, som viser gjengivelsen av ulike typer matematiske formler. Dokumentet inneholder inline-formler som E=mc², blokkformler som integral- og deriverteformler, komplekse formler som uendelige summer, samt spesialformler med cases, matriser og tabeller. Dokumentet tester også formler med tekstforklaringer og den generaliserte Kelly-formelen. Alle formlene har som mål å verifisere KaTeXs korrekte visningsevne, og er egnet for tekniske dokumenter eller undervisningsmateriell som krever matematisk formelpresentasjon."
"tags":
  - "KaTeX"
  - "Matematiske formler"
  - "Formeltesting"
  - "LaTeX"
  - "Dokumenttesting"
  - "Teknisk dokumentasjon"
---

# KaTeX-formelvisningstest

Dette er en test av en inline-formel: $ E = mc^2 $.

Dette er en test av en blokkformel:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Dette er en annen test av en blokkformel:

$$
\frac{d}{dx}e^x = e^x
$$

Dette er en test av en kompleks formel:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Test av formel med cases:

$$
f(x) =
\begin{cases}
x^2 & \text{hvis } x \geq 0 \\
-x & \text{hvis } x < 0
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

Matriseformel:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Test av formel med tekst:

$$
E = mc^2 \quad \text{der } m \text{ er masse og } c \text{ er lysets hastighet}
$$

Generaliserte Kelly-formel:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Vennligst sørg for at alle formlene ovenfor vises korrekt.