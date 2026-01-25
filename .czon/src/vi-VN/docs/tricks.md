---
"title": "Kỹ thuật khai báo ngày tháng trong tài liệu CZON"
"summary": "Bài viết này giới thiệu một phương pháp khai báo ngày tháng sáng tạo trong hệ thống tài liệu CZON, cho phép người dùng trực tiếp khai báo ngày tháng dưới dạng tự do trong nội dung chính (ví dụ: \"Hôm nay là ngày 8 tháng 1 năm 2026\"), hệ thống sẽ tự động nhận diện và xử lý thành ngày tạo tài liệu. So với cách truyền thống của Markdown phụ thuộc vào các trường cố định trong YAML Frontmatter, phương pháp này linh hoạt và thông minh hơn, tránh được vấn đề quên điền thông tin vào trường. AI sẽ tự động trích xuất và suy luận thông tin ngày tháng, phù hợp với các loại nội dung như nhật ký, blog, và có thể tạo chế độ xem dòng thời gian để thuận tiện cho việc duyệt và quản lý."
"tags":
  - "CZON"
  - "Xử lý tài liệu"
  - "Khai báo ngày tháng"
  - "Markdown"
  - "Dòng thời gian"
  - "Trải nghiệm người dùng"
  - "Trích xuất AI"
"date": "2026-01-08"
---

# Kỹ thuật sử dụng

## Khai báo ngày tháng trong nội dung chính

Trong nội dung chính, bạn có thể sử dụng khai báo ngày tháng như "Hôm nay là ngày 8 tháng 1 năm 2026" (định dạng tự do), CZON sẽ tự động nhận diện và xử lý.

Tài liệu Markdown truyền thống khai báo ngày tháng thông qua YAML Frontmatter, cần phải nhớ các trường tương ứng, nếu không sẽ dẫn đến việc ngày tháng không được nhận diện chính xác.

CZON hỗ trợ khai báo ngày tháng trực tiếp trong nội dung chính, tránh được vấn đề quên điền thông tin vào trường Frontmatter.

AI sẽ tự động trích xuất và suy luận thông tin ngày tháng trong nội dung chính, và xử lý nó như ngày tạo tài liệu.

Phương pháp này linh hoạt và thông minh hơn, nâng cao trải nghiệm người dùng.

Nhân tiện, các tài liệu có ngày tháng có thể tạo chế độ xem dòng thời gian, thuận tiện cho việc duyệt và quản lý. Đặc biệt phù hợp với các loại nội dung cần có dòng thời gian như nhật ký, blog.