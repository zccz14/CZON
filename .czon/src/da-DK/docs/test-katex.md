---
"title": "KaTeX Formelvisningstestdokument"
"summary": "Dette dokument er et testdokument for KaTeX matematiske formlers visningseffekt, der viser renderingen af forskellige matematiske formler. Dokumentet indeholder inline-formler som E=mc², blokformler som integral- og afledte formler, komplekse formler som uendelige rækkesummer, samt specielle formler med cases, matricer og tabeller. Dokumentet tester også formler med tekstbeskrivelser og den generaliserede Kelly-formel. Alle formler har til formål at verificere KaTeXs korrekte visningsevne og er velegnet til tekniske dokumenter eller undervisningsmaterialer, der kræver matematisk formelvisning."
"tags":
  - "KaTeX"
  - "Matematiske formler"
  - "Formeltest"
  - "LaTeX"
  - "Dokumenttest"
  - "Teknisk dokumentation"
---

# KaTeX Formelvisningstest

Dette er en inline-formeltest: $ E = mc^2 $.

Dette er en blokformeltest:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Dette er en anden blokformeltest:

$$
\frac{d}{dx}e^x = e^x
$$

Dette er en kompleks formeltest:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Formel med cases-test:

$$
f(x) =
\begin{cases}
x^2 & \text{hvis } x \geq 0 \\
-x & \text{hvis } x < 0
\end{cases}
$$

Tabelformel:

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

Formel med tekst-test:

$$
E = mc^2 \quad \text{hvor } m \text{ er masse og } c \text{ er lysets hastighed}
$$

Generaliserede Kelly-formel:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Sørg for, at alle ovenstående formler vises korrekt.