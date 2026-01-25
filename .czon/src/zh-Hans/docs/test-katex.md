---
"title": "KaTeX公式显示效果测试文档"
"summary": "本文档是一个KaTeX数学公式显示效果的测试文档，展示了多种数学公式的渲染效果。文档包含行内公式如E=mc²，块级公式如积分和导数公式\
  ，复杂公式如无穷级数求和，以及带有cases、矩阵和表格的特殊公式。文档还测试了包含文本说明的公式和广义凯利公式。所有公式均旨在验证KaTeX的正确显示能\
  力，适用于需要数学公式展示的技术文档或教育材料。"
"tags":
  - "KaTeX"
  - "数学公式"
  - "公式测试"
  - "LaTeX"
  - "文档测试"
  - "技术文档"
---

# KaTeX 公式显示效果测试

这是一个行内公式测试： $ E = mc^2 $ 。

这是一个块级公式测试：

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

这是另一个块级公式测试：

$$
\frac{d}{dx}e^x = e^x
$$

这是一个复杂的公式测试：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

带有 cases 的公式测试：

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

矩阵公式:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

含有 text 的公式测试：

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

广义凯利公式：

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

请确保以上公式均能正确显示。
