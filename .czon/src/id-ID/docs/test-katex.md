---
"title": "Dokumen Uji Tampilan Rumus KaTeX"
"summary": "Dokumen ini adalah dokumen uji untuk mengevaluasi tampilan rumus matematika KaTeX, menampilkan berbagai jenis rumus matematika. Dokumen mencakup rumus sebaris seperti E=mc², rumus blok seperti rumus integral dan turunan, rumus kompleks seperti penjumlahan deret tak hingga, serta rumus khusus dengan cases, matriks, dan tabel. Dokumen juga menguji rumus yang disertai penjelasan teks dan rumus Kelly yang digeneralisasi. Semua rumus dirancang untuk memverifikasi kemampuan tampilan KaTeX yang benar, cocok untuk dokumen teknis atau materi pendidikan yang memerlukan penyajian rumus matematika."
"tags":
  - "KaTeX"
  - "Rumus Matematika"
  - "Uji Rumus"
  - "LaTeX"
  - "Uji Dokumen"
  - "Dokumen Teknis"
---

# Uji Tampilan Rumus KaTeX

Ini adalah uji rumus sebaris: $ E = mc^2 $ .

Ini adalah uji rumus blok:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Ini adalah uji rumus blok lainnya:

$$
\frac{d}{dx}e^x = e^x
$$

Ini adalah uji rumus kompleks:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Uji rumus dengan cases:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Rumus tabel:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Rumus matriks:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Uji rumus yang mengandung teks:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

Rumus Kelly yang digeneralisasi:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Pastikan semua rumus di atas dapat ditampilkan dengan benar.