---
"title": "KaTeX Formül Görüntüleme Test Dokümanı"
"summary": "Bu doküman, KaTeX matematik formüllerinin görüntülenme etkisini test eden bir test dokümanıdır ve çeşitli matematik formüllerinin işlenme etkilerini gösterir. Doküman, $E=mc^2$ gibi satır içi formülleri, integral ve türev formülleri gibi blok düzeyindeki formülleri, sonsuz seri toplamı gibi karmaşık formülleri ve cases, matris ve tablo içeren özel formülleri içerir. Doküman ayrıca metin açıklamaları içeren formülleri ve genelleştirilmiş Kelly formülünü test eder. Tüm formüller, KaTeX'in doğru görüntüleme yeteneğini doğrulamayı amaçlar ve matematik formülü gösterimi gerektiren teknik dokümanlar veya eğitim materyalleri için uygundur."
"tags":
  - "KaTeX"
  - "Matematik Formülleri"
  - "Formül Testi"
  - "LaTeX"
  - "Doküman Testi"
  - "Teknik Doküman"
---

# KaTeX Formül Görüntüleme Testi

Bu bir satır içi formül testidir: $ E = mc^2 $ .

Bu bir blok düzeyi formül testidir:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Bu başka bir blok düzeyi formül testidir:

$$
\frac{d}{dx}e^x = e^x
$$

Bu karmaşık bir formül testidir:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Cases içeren formül testi:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Tablo formülü:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Matris formülü:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Metin içeren formül testi:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

Genelleştirilmiş Kelly formülü:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Lütfen yukarıdaki formüllerin tümünün doğru şekilde görüntülendiğinden emin olun.