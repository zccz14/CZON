---
"title": "Hướng dẫn Tùy chỉnh Kiểu dáng CZON"
"summary": "Tài liệu này mô tả chi tiết cách tùy chỉnh kiểu dáng trong dự án CZON bằng cách tạo tệp style.css trong thư mục .czony và viết mã CSS để ghi đè kiểu dáng mặc định hoặc thêm giao diện cá nhân hóa. Tài liệu giải thích rằng CZON sẽ phát hiện và sao chép tệp này vào thư mục đầu ra khi xây dựng, đồng thời thêm liên kết kiểu dáng vào mỗi trang HTML, đảm bảo kiểu dáng tùy chỉnh được tải sau kiểu dáng tích hợp để đạt hiệu ứng ghi đè. Văn bản cung cấp danh sách các biến CSS có sẵn, bao gồm màu nền, màu văn bản, màu liên kết, v.v., và trình bày nhiều ví dụ thực tế như tùy chỉnh màu thương hiệu, điều chỉnh chiều rộng vùng nội dung, tùy chỉnh kiểu dáng khối mã và ẩn các phần tử cụ thể. Cuối cùng, tài liệu nhấn mạnh các lưu ý như tên tệp phải là style.css, cần xây dựng lại sau khi sửa đổi, khuyến nghị sử dụng biến CSS để ghi đè và có thể cần sử dụng !important khi CZON sử dụng Tailwind CSS."
"tags":
  - "CZON"
  - "Tùy chỉnh kiểu dáng"
  - "CSS"
  - "Phát triển Frontend"
  - "Xây dựng Website"
  - "Ghi đè kiểu dáng"
  - "Biến CSS"
  - "Tailwind CSS"
---

# Tùy chỉnh Kiểu dáng

CZON hỗ trợ tùy chỉnh kiểu dáng trang web thông qua tệp `.czon/style.css`, cho phép bạn ghi đè kiểu dáng mặc định hoặc thêm giao diện cá nhân hóa.

## Cách sử dụng

1. Tạo tệp `style.css` trong thư mục `.czon` của dự án:

```
your-project/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Tạo tệp này
├── README.md
└── docs/
```

2. Viết CSS tùy chỉnh của bạn trong `style.css`:

```css
/* Ví dụ: Thay đổi màu liên kết */
:root {
  --link-color: #0066cc;
}

/* Ví dụ: Thay đổi nền trong chế độ tối */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Chạy lại `czon build`, kiểu dáng tùy chỉnh sẽ tự động được áp dụng cho tất cả các trang.

## Cách thức hoạt động

- Khi xây dựng, CZON sẽ phát hiện xem `.czon/style.css` có tồn tại không
- Nếu tồn tại, nó sẽ được sao chép vào thư mục đầu ra `.czon/dist/style.css`
- Trong mỗi trang HTML được tạo, một liên kết kiểu dáng sẽ được thêm vào `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Kiểu dáng tùy chỉnh được tải sau kiểu dáng tích hợp, do đó có thể ghi đè kiểu dáng mặc định

## Các biến CSS có sẵn

CZON sử dụng biến CSS để định nghĩa màu chủ đề. Bạn có thể điều chỉnh bảng màu nhanh chóng bằng cách ghi đè các biến này:

```css
:root {
  /* Màu nền */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Màu văn bản */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Màu liên kết và nhấn mạnh */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Màu viền */
  --border-color: #dee2e6;
}

/* Biến cho chế độ tối */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## Ví dụ

### Tùy chỉnh màu thương hiệu

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### Điều chỉnh chiều rộng vùng nội dung

```css
.content {
  max-width: 60rem;
}
```

### Tùy chỉnh kiểu dáng khối mã

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Ẩn phần tử cụ thể

```css
/* Ẩn thanh mục lục bên phải */
.sidebar-right {
  display: none;
}
```

## Lưu ý

- Tên tệp kiểu dáng tùy chỉnh phải là `style.css`, đặt trong thư mục `.czon/`
- Cần chạy lại `czon build` sau khi sửa đổi kiểu dáng để có hiệu lực
- Nên sử dụng phương pháp ghi đè bằng biến CSS để tùy chỉnh kiểu dáng, điều này giúp tương thích đồng thời với chế độ sáng và tối
- CZON sử dụng Tailwind CSS, nếu cần ghi đè kiểu dáng được tạo bởi Tailwind, có thể cần sử dụng `!important`