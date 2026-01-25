---
"title": "KaTeX-kaavojen näyttötestausasiakirja"
"summary": "Tämä asiakirja on KaTeX-matemaattisten kaavojen näyttöefektien testausasiakirja, joka esittää monenlaisia matemaattisten kaavojen renderöintituloksia. Asiakirja sisältää rivinsisäisiä kaavoja kuten E=mc², lohkokaavoja kuten integraali- ja derivaattakaavoja, monimutkaisia kaavoja kuten äärettömien sarjojen summia sekä erikoiskäyttöisiä kaavoja cases-, matriisi- ja taulukkomuodoissa. Asiakirjassa testataan myös tekstiä sisältäviä kaavoja sekä yleistettyä Kelly-kaavaa. Kaikki kaavat on tarkoitettu KaTeX:n oikean näyttökyvyn varmistamiseen, ja ne soveltuvat teknisiin asiakirjoihin tai opetusmateriaaleihin, jotka vaativat matemaattisten kaavojen esittämistä."
"tags":
  - "KaTeX"
  - "matemaattiset kaavat"
  - "kaavojen testaus"
  - "LaTeX"
  - "asiakirjatestaus"
  - "tekninen dokumentaatio"
---

# KaTeX-kaavojen näyttötestaus

Tämä on rivinsisäisen kaavan testi: $ E = mc^2 $ .

Tämä on lohkokaavan testi:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Tämä on toinen lohkokaavan testi:

$$
\frac{d}{dx}e^x = e^x
$$

Tämä on monimutkaisen kaavan testi:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Kaavan testi cases-rakenteella:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Taulukkokaava:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Matriisikaava:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Kaavan testi, joka sisältää tekstiä:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

Yleistetty Kelly-kaava:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Varmista, että kaikki yllä olevat kaavat näkyvät oikein.