---
"title": "KaTeX公式顯示效果測試文件"
"summary": "本文檔是一個KaTeX數學公式顯示效果的測試文件，展示了多種數學公式的渲染效果。文件包含行內公式如E=mc²，塊級公式如積分和導數公式\
  ，複雜公式如無窮級數求和，以及帶有cases、矩陣和表格的特殊公式。文件還測試了包含文字說明的公式和廣義凱利公式。所有公式均旨在驗證KaTeX的正確顯示能\
  力，適用於需要數學公式展示的技術文件或教育材料。"
"tags":
  - "KaTeX"
  - "數學公式"
  - "公式測試"
  - "LaTeX"
  - "文件測試"
  - "技術文件"
---

# KaTeX 公式顯示效果測試

這是一個行內公式測試： $ E = mc^2 $ 。

這是一個塊級公式測試：

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

這是另一個塊級公式測試：

$$
\frac{d}{dx}e^x = e^x
$$

這是一個複雜的公式測試：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

帶有 cases 的公式測試：

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

表格公式:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

矩陣公式:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

含有 text 的公式測試：

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

廣義凱利公式：

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

請確保以上公式均能正確顯示。