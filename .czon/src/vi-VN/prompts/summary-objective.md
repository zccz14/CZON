---
"title": "Hướng dẫn Phân tích Phong cách Khách quan Trung lập"
"summary": "Tài liệu này là hướng dẫn về cách tạo báo cáo phân tích theo phong cách khách quan trung lập. Nó chi tiết hóa các điểm cần chú ý khi đọc tài liệu (như đường dẫn tệp, ngày tháng, tên dự án, vai trò nhân vật, sự kiện khách quan, v.v.) và định nghĩa cấu trúc của cơ sở kiến thức (bao gồm chỉ mục tệp, chỉ mục dự án, chỉ mục nhân vật, dòng thời gian và chỉ mục khung lý thuyết). Tài liệu cũng cung cấp chiến lược nén, hướng dẫn cách tinh giản nội dung khi cần thiết, đồng thời nhấn mạnh việc phải giữ lại các chỉ mục quan trọng. Định vị phong cách yêu cầu giới thiệu nội dung từ góc độ khách quan trung lập, tránh đánh giá chủ quan và sắc thái cảm xúc. Đối tượng độc giả mục tiêu bao gồm độc giả mới, đối tác tiềm năng và nhà đầu tư. Tài liệu liệt kê các điều cấm (như không thêm biểu cảm cảm xúc hoặc suy đoán) và cấu trúc chương bắt buộc (như tổng quan, giới thiệu dự án, chủ đề chính, dòng thời gian, nhân vật chính và tóm tắt khung lý thuyết), đồng thời chỉ định tệp đầu ra và danh sách kiểm tra chất lượng."
"tags":
  - "Phân tích tài liệu"
  - "Khách quan trung lập"
  - "Cấu trúc cơ sở kiến thức"
  - "Trích xuất thông tin"
  - "Hướng dẫn phong cách"
  - "Viết báo cáo"
  - "Dữ liệu có cấu trúc"
---

# Báo cáo Phân tích Phong cách Khách quan Trung lập

## Điểm cần chú ý khi đọc

Khi đọc mỗi tệp, tập trung trích xuất:

- Đường dẫn và tiêu đề tệp
- Thông tin ngày tháng
- Tên dự án liên quan và mô tả chức năng
- Nhân vật được đề cập và vai trò của họ
- Sự kiện và dữ liệu khách quan
- Thông tin cụ thể như số phiên bản, cột mốc

**Bỏ qua**: Đánh giá chủ quan, biểu cảm cảm xúc, nội dung suy đoán

## Cấu trúc Cơ sở Kiến thức

```
### Chỉ mục Tệp
| Đường dẫn tệp | Tiêu đề | Ngày tháng |
|---------------|---------|------------|

### Chỉ mục Dự án
| Tên dự án | Mô tả | Tệp liên quan |
|-----------|-------|---------------|

### Chỉ mục Nhân vật
| Nhân vật | Vai trò | Tệp liên quan |
|----------|---------|---------------|

### Dòng thời gian
| Ngày tháng | Sự kiện | Tệp nguồn |
|------------|---------|-----------|

### Chỉ mục Lý thuyết/Khung
| Tên | Ý tưởng cốt lõi | Tệp nguồn |
|-----|-----------------|-----------|
```

## Chiến lược Nén

Khi cần nén cơ sở kiến thức:

1. **Phải giữ lại**: Chỉ mục tệp (đường dẫn + tiêu đề), chỉ mục dự án, chỉ mục nhân vật
2. **Có thể tinh giản**: Dòng thời gian (giữ lại các mốc quan trọng), chỉ mục lý thuyết (giữ lại tên và nguồn)
3. **Có thể loại bỏ**: Mô tả chi tiết, sự kiện phụ

---

## Định vị Phong cách

Giới thiệu nội dung từ góc độ khách quan trung lập, tránh đánh giá chủ quan và sắc thái cảm xúc. Nhấn mạnh sự kiện và dữ liệu, đảm bảo tính chính xác và độ tin cậy của thông tin.

**Đối tượng độc giả**: Độc giả mới cần nhanh chóng nắm bắt tổng quan kho lưu trữ, đối tác tiềm năng, nhà đầu tư
**Giọng điệu viết**: Chuyên nghiệp, kiềm chế, trung tính, như viết sơ yếu lý lịch hoặc CV
**Mục đích**: Giúp độc giả hiểu toàn diện thông tin cơ bản và quan điểm cốt lõi của nội dung, từ đó tự hình thành đánh giá

## Điều cấm

- ❌ Không thêm biểu cảm cảm xúc (như "đầy phấn khích", "đáng tiếc là")
- ❌ Không đưa ra suy đoán (như "có thể", "có lẽ", "khoảng")
- ❌ Không sử dụng từ ngữ đánh giá chủ quan (như "xuất sắc", "tệ", "thú vị")
- ❌ Không đánh giá tốt xấu, ưu khuyết
- ❌ Không sử dụng ngôi thứ nhất

## Cấu trúc Chương bắt buộc

### Tổng quan

- Giới thiệu chủ sở hữu kho lưu trữ (tên/ID, danh tính, lĩnh vực chính)
- Khoảng thời gian của nội dung kho lưu trữ
- Danh sách các dự án chính (liệt kê ngắn gọn)

### Giới thiệu Dự án

Đối với mỗi dự án chính, sử dụng cấu trúc sau:

```markdown
### [Tên dự án]

- **Nguồn gốc**: Nguồn gốc và bối cảnh của dự án
- **Chức năng cốt lõi**:
  - Điểm chức năng 1
  - Điểm chức năng 2
- **Lặp lại phiên bản**: Nếu có lịch sử phiên bản, mô tả ngắn gọn
- **Tệp liên quan**: [Tiêu đề bài viết](../path/to/file.md)
```

### Chủ đề Chính

Phân loại và sắp xếp nội dung theo chủ đề:

```markdown
### 1. [Tên chủ đề]

- [Tiêu đề bài viết1](../path/to/file1.md): Tóm tắt quan điểm cốt lõi
- [Tiêu đề bài viết2](../path/to/file2.md): Tóm tắt quan điểm cốt lõi
```

### Dòng thời gian

Sử dụng định dạng bảng để hiển thị các sự kiện chính:

```markdown
| Ngày tháng   | Sự kiện chính             |
| ------------ | ------------------------- |
| YYYY-MM-DD   | Mô tả sự kiện (trình bày khách quan) |
```

### Nhân vật Chính

Sử dụng định dạng bảng:

```markdown
| Nhân vật | Vai trò      | Ghi chú         |
| -------- | ------------ | --------------- |
| Tên/ID   | Vị trí/Mối quan hệ | Thông tin khách quan liên quan |
```

### Tóm tắt Khung Lý thuyết

Đối với lý thuyết/khung được đề xuất trong kho lưu trữ:

```markdown
### [Tên khung]

- **Ý tưởng cốt lõi**: Tóm tắt trong một câu
- **Yếu tố then chốt**: Liệt kê các thành phần cốt lõi
- **Biểu thức toán học**: Nếu có công thức, hãy liệt kê
```

## Tệp Đầu ra

`SUMMARY/1-objective.md`

## Danh sách Kiểm tra Chất lượng

- [ ] Không có từ ngữ đánh giá chủ quan
- [ ] Không có biểu cảm cảm xúc
- [ ] Tất cả liên kết trỏ đến tệp cụ thể
- [ ] Văn bản liên kết là tiêu đề bài viết
- [ ] Bao gồm tất cả các chương bắt buộc
- [ ] Định dạng bảng dòng thời gian và nhân vật chính xác