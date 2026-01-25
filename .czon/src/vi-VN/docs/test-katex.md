---
"title": "Tài liệu Kiểm tra Hiển thị Công thức KaTeX"
"summary": "Tài liệu này là một tài liệu kiểm tra hiển thị công thức toán học KaTeX, trình bày hiệu ứng kết xuất của nhiều loại công thức toán học. Tài liệu bao gồm các công thức nội dòng như E=mc², công thức khối như công thức tích phân và đạo hàm, công thức phức tạp như tổng chuỗi vô hạn, cũng như các công thức đặc biệt với cases, ma trận và bảng. Tài liệu cũng kiểm tra các công thức có kèm mô tả văn bản và công thức Kelly tổng quát. Tất cả các công thức đều nhằm mục đích xác minh khả năng hiển thị chính xác của KaTeX, phù hợp cho các tài liệu kỹ thuật hoặc tài liệu giáo dục cần trình bày công thức toán học."
"tags":
  - "KaTeX"
  - "Công thức Toán học"
  - "Kiểm tra Công thức"
  - "LaTeX"
  - "Kiểm tra Tài liệu"
  - "Tài liệu Kỹ thuật"
---

# Kiểm tra Hiển thị Công thức KaTeX

Đây là một bài kiểm tra công thức nội dòng: $ E = mc^2 $ .

Đây là một bài kiểm tra công thức khối:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Đây là một bài kiểm tra công thức khối khác:

$$
\frac{d}{dx}e^x = e^x
$$

Đây là một bài kiểm tra công thức phức tạp:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Kiểm tra công thức với cases:

$$
f(x) =
\begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

Công thức bảng:

$$
\begin{array}{c|c|c}
a & b & c \\
\hline
1 & 2 & 3 \\
4 & 5 & 6 \\
\end{array}
$$

Công thức ma trận:

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

Kiểm tra công thức có chứa text:

$$
E = mc^2 \quad \text{where } m \text{ is mass and
    } c \text{ is the speed of light}
$$

Công thức Kelly tổng quát:

$$
f^* = \argmax_f \sum_{i \in X} P_i \ln (1 + f \cdot R_i)
$$

Vui lòng đảm bảo rằng tất cả các công thức trên đều hiển thị chính xác.