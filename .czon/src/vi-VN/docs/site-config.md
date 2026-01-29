---
"title": "Hướng dẫn Cấu hình Trang CZON"
"summary": "Tài liệu này giải thích chi tiết phương pháp và các tùy chọn cấu hình trang CZON. Cấu hình nằm trong trường `options.site` của tệp `.czon/meta.json`, bao gồm `site.baseUrl` (dùng để tạo `sitemap.xml` và `robots.txt`), `site.title` (tiêu đề trang, giá trị mặc định là 'CZON'), `site.gaID` (Google Analytics Measurement ID) và `site.clarityID` (Microsoft Clarity Project ID). Tất cả các mục cấu hình đều là tùy chọn, sau khi sửa đổi cần chạy lại lệnh `czon build` để có hiệu lực. Nếu không cấu hình `baseUrl`, việc tạo `sitemap.xml` sẽ bị bỏ qua. Các công cụ phân tích chỉ được tải khi ID tương ứng được cấu hình, không ảnh hưởng đến hiệu suất trang. Tài liệu cung cấp vị trí cấu hình, các mục cấu hình có sẵn, ví dụ đầy đủ và các lưu ý, giúp người dùng dễ dàng thiết lập trang."
"tags":
  - "CZON"
  - "Cấu hình trang"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Cấu hình Trang

CZON hỗ trợ cấu hình các tùy chọn trang thông qua tệp `.czon/meta.json`. Các cấu hình này là tùy chọn và sẽ không làm gián đoạn lần sử dụng đầu tiên.

## Vị trí Cấu hình

Các mục cấu hình nằm trong trường `options.site` của tệp `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Trang chủ", "href": "index.html" },
        { "title": "Giới thiệu", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Các Mục Cấu hình Có sẵn

### `site.baseUrl`

URL cơ sở của trang, dùng để tạo `sitemap.xml` và `robots.txt`.

- **Kiểu**: `string`
- **Định dạng**: URL đầy đủ, ví dụ `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Sau khi cấu hình sẽ tự động tạo:

- `sitemap.xml` - Sơ đồ trang chứa tất cả các trang
- Khai báo Sitemap trong `robots.txt`

### `site.title`

Tiêu đề trang, hiển thị ở phần đầu trang.

- **Kiểu**: `string`
- **Giá trị mặc định**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Trang tài liệu của tôi"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, dùng để tích hợp thống kê Google Analytics.

- **Kiểu**: `string`
- **Định dạng**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Cách lấy: Truy cập [Google Analytics](https://analytics.google.com/) để tạo một thuộc tính, lấy Measurement ID trong phần "Luồng dữ liệu".

### `site.clarityID`

Microsoft Clarity Project ID, dùng để tích hợp phân tích hành vi người dùng Clarity.

- **Kiểu**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Cách lấy: Truy cập [Microsoft Clarity](https://clarity.microsoft.com/) để tạo một dự án, lấy Project ID trong cài đặt dự án.

### `site.navLinks`

Cấu hình liên kết điều hướng nhanh, hiển thị các liên kết điều hướng ở phần đầu trang.

- **Kiểu**: `Array<{ title: string, href: string }>`
- **Giá trị mặc định**: `undefined` (không hiển thị điều hướng)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Trang chủ", "href": "index.html" },
        { "title": "Tài liệu", "href": "docs.html" },
        { "title": "Giới thiệu", "href": "about.html" }
      ]
    }
  }
}
```

**Hành vi đáp ứng**:

- **Thiết bị di động**: Hiển thị biểu tượng menu hamburger, nhấp để mở rộng tất cả liên kết điều hướng
- **Máy tính để bàn**: Hiển thị trực tiếp các liên kết điều hướng trong Header, nhưng không vượt quá 40% chiều rộng màn hình; phần vượt quá sẽ được hiển thị thông qua menu thả xuống "Thêm"

## Ví dụ Đầy đủ

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Kỹ thuật",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Trang chủ", "href": "index.html" },
        { "title": "Tài liệu", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Lưu ý

- Sau khi sửa đổi cấu hình, cần chạy lại lệnh `czon build` để có hiệu lực
- Tất cả các mục cấu hình `site` đều là tùy chọn, bạn có thể chỉ cấu hình những phần cần thiết
- Các công cụ phân tích (GA, Clarity) chỉ được tải khi ID tương ứng được cấu hình, không ảnh hưởng đến hiệu suất trang
- Khi không cấu hình `baseUrl`, việc tạo `sitemap.xml` sẽ bị bỏ qua