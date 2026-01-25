---
"title": "Documento di test per la visualizzazione delle formule KaTeX"
"summary": "Questo documento è un test per la visualizzazione delle formule matematiche KaTeX, che mostra l'effetto di rendering di varie formule matematiche. Il documento include formule in linea come E=mc², formule a blocco come integrali e derivate, formule complesse come la somma di serie infinite, e formule speciali con casi, matrici e tabelle. Il documento testa anche formule con descrizioni testuali e la formula generalizzata di Kelly. Tutte le formule mirano a verificare la corretta capacità di visualizzazione di KaTeX, adatta per documenti tecnici o materiali educativi che richiedono la presentazione di formule matematiche."
"tags":
  - "KaTeX"
  - "Formule matematiche"
  - "Test formule"
  - "LaTeX"
  - "Test documenti"
  - "Documentazione tecnica"
---

# Test di visualizzazione delle formule KaTeX

Questo è un test di formula in linea: $ E = mc^2 $ .

Questo è un test di formula a blocco:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Questo è un altro test di formula a blocco:

$$
\frac{d}{dx}e^x = e^x
$$

Questo è un test di formula complessa:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Test di formula con casi:

$$
f(x) =
\begin{cases}
x^2 & \text{se } x \geq 0 \\
-x & \text{se } x < 0
\end{cases}
$$

Formula con tabella:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Formula con matrice:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Test di formula contenente testo:

$$
E = mc^2 \quad \text{dove } m \text{ è la massa e
    } c \text{ è la velocità della luce}
$$

Formula generalizzata di Kelly:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Assicurarsi che tutte le formule sopra siano visualizzate correttamente.