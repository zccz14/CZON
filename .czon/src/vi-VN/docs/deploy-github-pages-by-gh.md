---
"title": "Hướng dẫn Triển khai Trang Web Tĩnh CZON lên GitHub Pages"
"summary": "Bài viết này hướng dẫn chi tiết cách triển khai trang web tĩnh đa ngôn ngữ được tạo bởi CZON lên GitHub Pages thông qua GitHub CLI. Trước tiên cần cài đặt và đăng nhập GitHub CLI, đảm bảo có quyền truy cập `repo`. Sau đó chạy lệnh `npx czon@latest config github`, lệnh này sẽ hướng dẫn người dùng qua một loạt các bước: kiểm tra quyền, khởi tạo kho Git, cấu hình kho từ xa, bật GitHub Pages và đặt loại là workflow, tạo hoặc cập nhật tệp Workflow, commit và đẩy thay đổi, cuối cùng là lấy URL của Pages. Toàn bộ quá trình được tự động hóa, giúp đơn giản hóa quy trình triển khai."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Trang web tĩnh"
  - "Hướng dẫn triển khai"
  - "GitHub CLI"
  - "Đa ngôn ngữ"
  - "Triển khai tự động"
---

# Triển khai lên GitHub Pages

Hướng dẫn này giải thích cách triển khai trang web tĩnh đa ngôn ngữ được tạo bởi CZON lên GitHub Pages thông qua GitHub CLI.

Trước tiên, hãy cài đặt công cụ [GitHub CLI](https://cli.github.com/) (nếu chưa cài đặt) và đảm bảo bạn đã đăng nhập (nếu chưa đăng nhập):

```bash
$ gh --version # Kiểm tra phiên bản để đảm bảo cài đặt thành công
```

Đảm bảo bạn đã đăng nhập và có quyền truy cập `repo` vào kho đích:

```bash
$ gh auth login -s repo # Đăng nhập vào tài khoản GitHub, sẽ nhắc bạn chọn đăng nhập qua trình duyệt hoặc sử dụng token
$ gh auth status # Kiểm tra trạng thái đăng nhập, đảm bảo đã đăng nhập thành công và có quyền `repo` truy cập kho đích
```

Phần còn lại chỉ cần chạy lệnh sau và làm theo hướng dẫn:

```bash
$ npx czon@latest config github
```

Lệnh này sẽ hướng dẫn bạn qua các bước sau:

1.  Kiểm tra xem quyền của `gh` có bao gồm `repo` không, nếu không sẽ nhắc bạn đăng nhập lại và thêm quyền `repo`.
2.  Nếu thư mục cục bộ không phải là một kho Git, nó sẽ nhắc bạn khởi tạo một kho Git mới.
3.  Kiểm tra cài đặt kho Git từ xa của thư mục cục bộ, xem có kho GitHub từ xa nào không. Nếu không có kho GitHub từ xa, nó sẽ nhắc bạn tạo một kho từ xa mới và thêm nó làm remote `origin`. Nếu `origin` đã tồn tại nhưng không phải là kho GitHub, nó sẽ nhắc bạn thêm một kho GitHub từ xa mới làm `upstream`.
4.  Kiểm tra xem GitHub Pages đã được bật chưa và có phải là loại `workflow` không. Nếu không, sử dụng API `gh api` để bật nó và sửa thành triển khai từ Actions. Đồng thời thiết lập CNAME (nếu bạn có tên miền tùy chỉnh).
5.  Kiểm tra tệp GitHub Workflow. Nếu chưa được tạo, tạo tệp Pages Workflow; nếu đã tồn tại nhưng không phải phiên bản mới nhất, sẽ nhắc bạn cập nhật tệp Workflow.
6.  Commit tệp Workflow và đẩy các thay đổi lên kho từ xa.
7.  Nhắc bạn truy cập URL của trang GitHub Pages, lấy URL Pages mới nhất thông qua `gh api`.