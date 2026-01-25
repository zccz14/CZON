---
"title": "KaTeX 수식 표시 효과 테스트 문서"
"summary": "이 문서는 KaTeX 수학 수식 표시 효과를 테스트하는 문서로, 다양한 수학 수식의 렌더링 효과를 보여줍니다. 문서에는 E=mc²와 같은 인라인 수식, 적분 및 미분 공식과 같은 블록 수식, 무한 급수 합과 같은 복잡한 수식, 그리고 cases, 행렬 및 표가 포함된 특수 수식이 포함되어 있습니다. 문서는 또한 텍스트 설명이 포함된 수식과 일반화된 켈리 공식을 테스트합니다. 모든 수식은 KaTeX의 올바른 표시 기능을 검증하기 위한 것으로, 수학 수식 표시가 필요한 기술 문서나 교육 자료에 적합합니다."
"tags":
  - "KaTeX"
  - "수학 수식"
  - "수식 테스트"
  - "LaTeX"
  - "문서 테스트"
  - "기술 문서"
---

# KaTeX 수식 표시 효과 테스트

이것은 인라인 수식 테스트입니다: $ E = mc^2 $.

이것은 블록 수식 테스트입니다:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

이것은 또 다른 블록 수식 테스트입니다:

$$
\frac{d}{dx}e^x = e^x
$$

이것은 복잡한 수식 테스트입니다:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

cases가 포함된 수식 테스트:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

표 수식:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

행렬 수식:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

text가 포함된 수식 테스트:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

일반화된 켈리 공식:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

위의 모든 수식이 올바르게 표시되는지 확인해 주세요.