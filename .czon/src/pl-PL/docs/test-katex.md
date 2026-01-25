---
"title": "Dokument testowy wyświetlania formuł KaTeX"
"summary": "Ten dokument jest testowym dokumentem sprawdzającym wyświetlanie formuł matematycznych w KaTeX. Prezentuje on renderowanie różnych formuł matematycznych. Dokument zawiera formuły w tekście, takie jak E=mc², formuły blokowe, takie jak całki i pochodne, złożone formuły, takie jak sumy nieskończonych szeregów, oraz specjalne formuły z przypadkami, macierzami i tabelami. Dokument testuje również formuły zawierające opisy tekstowe oraz uogólnioną formułę Kelly'ego. Wszystkie formuły mają na celu weryfikację poprawnego wyświetlania przez KaTeX i są odpowiednie dla dokumentacji technicznej lub materiałów edukacyjnych wymagających prezentacji formuł matematycznych."
"tags":
  - "KaTeX"
  - "formuły matematyczne"
  - "test formuł"
  - "LaTeX"
  - "test dokumentu"
  - "dokumentacja techniczna"
---

# Test wyświetlania formuł KaTeX

To jest test formuły w tekście: $ E = mc^2 $.

To jest test formuły blokowej:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

To jest kolejny test formuły blokowej:

$$
\frac{d}{dx}e^x = e^x
$$

To jest test złożonej formuły:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Test formuły z przypadkami:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Formuła z tabelą:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Formuła z macierzą:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Test formuły zawierającej tekst:

$$
E = mc^2 \quad \text{gdzie } m \text{ to masa, a } c \text{ to prędkość światła}
$$

Uogólniona formuła Kelly'ego:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Proszę upewnić się, że wszystkie powyższe formuły wyświetlają się poprawnie.