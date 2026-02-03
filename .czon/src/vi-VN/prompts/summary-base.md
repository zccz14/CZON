---
"title": "Quy tắc cơ bản tạo báo cáo phân tích AI"
"summary": "Tài liệu này cung cấp các quy tắc cơ bản để tạo báo cáo phân tích AI, nhấn mạnh việc phải tuân thủ nghiêm ngặt quy trình đọc tài liệu, bao gồm năm giai đoạn: lấy danh sách tệp, đọc và tóm tắt theo lô, quản lý ngữ cảnh, xác minh tính đầy đủ và tạo báo cáo. Các nguyên tắc cốt lõi bao gồm đọc tất cả các tệp một cách tuần tự, dựa trên sự kiện, trích dẫn liên kết theo quy chuẩn, cân nhắc trọng số thời gian, v.v. Các quy tắc chung yêu cầu báo cáo bắt đầu bằng định dạng cụ thể, xuất ra thư mục chỉ định và cấm tạo báo cáo hoặc bỏ qua bất kỳ tệp nào trước khi đọc xong tất cả các tệp."
"tags":
  - "Phân tích AI"
  - "Tạo báo cáo"
  - "Đọc tài liệu"
  - "Quy tắc"
  - "Markdown"
  - "Cơ sở sự kiện"
  - "Quy chuẩn trích dẫn"
  - "Quản lý quy trình"
---

# Tạo báo cáo phân tích AI - Quy tắc cơ bản

## Quy trình đọc tài liệu (Phải tuân thủ nghiêm ngặt)

### Nguyên tắc cốt lõi

Kho lưu trữ này có thể chứa hàng trăm hoặc hàng nghìn tệp Markdown. Bạn phải **đọc từng tệp một cách tuần tự**, không được bỏ qua.
Để xử lý số lượng lớn tệp, sử dụng chiến lược **đọc và tóm tắt tiến triển**.

### Giai đoạn 1: Lấy danh sách tệp đầy đủ

1. Thực thi `npx czon@latest ls-files` để lấy tất cả các tệp Markdown
2. Ghi lại tổng số tệp N
3. Lưu danh sách tệp dưới dạng hàng đợi chờ đọc

### Giai đoạn 2: Đọc và tóm tắt theo lô

Xử lý tệp theo từng lô. Đề xuất mỗi lô 10-20 tệp, nhưng bạn có thể điều chỉnh dựa trên kích thước và độ phức tạp của tệp.

**Đối với mỗi lô:**

1.  **Đọc**: Sử dụng công cụ Read để đọc lần lượt toàn bộ nội dung của từng tệp trong lô đó
2.  **Trích xuất**: Dựa trên **các điểm quan tâm của phong cách hiện tại** (xem hướng dẫn phong cách bên dưới), trích xuất thông tin liên quan
3.  **Tóm tắt lô**: Tổ chức thông tin trích xuất của lô đó thành một bản tóm tắt có cấu trúc
4.  **Tích lũy**: Hợp nhất bản tóm tắt lô vào "kho kiến thức" (cấu trúc kho kiến thức xem hướng dẫn phong cách bên dưới)

### Giai đoạn 3: Quản lý ngữ cảnh

Khi ngữ cảnh gần đạt đến giới hạn:

1.  **Nén kho kiến thức**: Nén kho kiến thức theo **chiến lược nén của phong cách hiện tại** (xem hướng dẫn phong cách bên dưới)
2.  **Giữ chỉ mục**: Dù nén thế nào, phải giữ lại chỉ mục đường dẫn và tiêu đề của tất cả các tệp
3.  **Tiếp tục đọc**: Sử dụng kho kiến thức đã nén để tiếp tục xử lý các tệp còn lại

### Giai đoạn 4: Xác minh tính đầy đủ

Trước khi tạo báo cáo, phải xác nhận:

1.  Tất cả N tệp trong danh sách tệp đã được xử lý
2.  Kho kiến thức chứa thông tin cơ bản của mỗi tệp (ít nhất là đường dẫn và tiêu đề)

**Nếu phát hiện thiếu sót**: Quay lại Giai đoạn 2 để xử lý các tệp bị bỏ sót.

### Giai đoạn 5: Tạo báo cáo

Chỉ sau khi hoàn thành tất cả các giai đoạn trên, mới có thể bắt đầu tạo báo cáo.

### Hành vi bị cấm

-   ❌ Không được bắt đầu tạo báo cáo trước khi đọc xong tất cả các tệp
-   ❌ Không được bỏ qua bất kỳ tệp nào, bất kể số lượng tệp là bao nhiêu
-   ❌ Không được chỉ đọc một phần tệp và tuyên bố "đã hiểu toàn bộ"
-   ❌ Không được hư cấu tệp hoặc nội dung không tồn tại trong kho kiến thức

---

## Quy tắc chung

### 1. Nguyên tắc dựa trên sự kiện

-   Luôn nhớ dựa trên nội dung sự kiện, không được xuất hiện tình trạng tách rời sự kiện
-   Tất cả quan điểm phải có sự hỗ trợ từ văn bản gốc
-   Không được hư cấu nội dung không tồn tại

### 2. Quy chuẩn trích dẫn liên kết

-   Khi trích dẫn liên kết văn bản gốc, đảm bảo liên kết có hiệu lực
-   **Luôn liên kết đến tệp Markdown cụ thể**, không liên kết đến thư mục
-   **Văn bản liên kết phải là tiêu đề tương ứng**, không phải tên tệp
-   Vì được tạo trong thư mục SUMMARY, khi trích dẫn sử dụng đường dẫn tương đối bắt đầu bằng `../`

**Ví dụ đúng**:

```markdown
[Chiến tranh trường kỳ của vốn: Chiến lược vượt qua giai cấp cho nhà đầu tư cá nhân](../INSIGHTS/6.md)
[Từ sáng tạo đến phân phối - Xây dựng động cơ nội dung AI-Native](../INSIGHTS/4.md)
```

**Ví dụ sai**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Sử dụng tên tệp thay vì tiêu đề
[Chiến tranh trường kỳ của vốn](../INSIGHTS/) ← Liên kết đến thư mục
```

### 3. Định dạng phần đầu

Mỗi báo cáo phải bắt đầu bằng định dạng sau:

```markdown
# [Tiêu đề báo cáo]

**Thời gian phân tích AI**: Ngày DD tháng MM năm YYYY
**Lưu ý**: Báo cáo này được tạo bởi AI, nội dung chỉ mang tính chất tham khảo.

---
```

### 4. Trọng số thời gian

-   Cân nhắc khoảng thời gian, dành trọng số cao hơn cho các bài viết gần đây
-   Nhưng không được bỏ qua nội dung quan trọng từ trước

### 5. Vị trí xuất

-   Tất cả báo cáo được tạo trong thư mục `SUMMARY/`
-   Tên tệp được đặt theo định dạng chỉ định