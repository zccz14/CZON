---
"title": "CZON - Công Cụ Nội Dung Markdown Bản Địa AI"
"summary": "CZON là một công cụ nội dung Markdown bản địa AI, được thiết kế để giúp người sáng tạo nội dung đơn giản hóa quy trình viết. Nó nhấn mạnh việc viết không cần cấu hình, thông qua tích hợp sâu công nghệ AI, tự động xử lý các tác vụ như tạo tiêu đề, trích xuất tóm tắt, phân loại thẻ, dịch đa ngôn ngữ và điều hướng trang web, giảm thiểu sự gián đoạn cho người dùng. CZON có sẵn chức năng tạo trang web tĩnh, nhưng chủ yếu tập trung vào sáng tạo và quản lý nội dung, thay vì tùy chỉnh chủ đề phức tạp. Nó phù hợp với người dùng muốn viết bằng ngôn ngữ mẹ đẻ và tự động tạo các phiên bản đa ngôn ngữ, đặc biệt phù hợp với người sáng tạo nội dung trang web không thích các cấu hình phức tạp."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Công cụ nội dung"
  - "Dịch đa ngôn ngữ"
  - "Tạo trang web tĩnh"
  - "Không cấu hình"
  - "Sáng tạo nội dung"
---

![Logo của CZON](logo.png)

# CZON - Công Cụ Nội Dung Markdown Bản Địa AI

- **C**: **C**ontent oriented | Nội dung là vua, tập trung vào nội dung
- **Z**: **Z**ero Configuration | Viết không cần cấu hình, giảm thiểu gián đoạn
- **O**: **O**rganic AI-Native | Bản địa AI hữu cơ, tích hợp sâu AI
- **N**: **N**-shaped Energy Curve | Đường cong năng lượng hình chữ N, can thiệp vào mọi khâu sáng tạo - phân phối - phản hồi

[> Xem Demo Trang Web](https://czon.zccz14.com/)

Trong thời đại AI, với tư cách là người sáng tạo nội dung trang web, chúng ta có thể có một công cụ sáng tạo nội dung thông minh hơn.

**Trở về với nội dung: Tối thiểu hóa gián đoạn, tập trung vào việc viết**

Đưa tài liệu trở về bản chất, đưa việc viết trở về sự tĩnh lặng.

Thứ nhất, tôi không muốn làm thủ thư. Đôi khi tôi muốn viết ra một số nội dung, nhưng có thể tôi chưa nghĩ ra tiêu đề cho nó, chưa hình thành tổ chức cụ thể. Tôi hy vọng LLM sẽ tự động giúp tôi tạo tiêu đề, tóm tắt, phân loại, điều hướng và các công việc sắp xếp khác.

Thứ hai, phòng làm việc của tôi phải được dọn dẹp sạch sẽ. Tôi không muốn các công cụ xây dựng cấu hình phức tạp, vất vả với cấu hình tài liệu phức tạp, không thích cấu trúc phức tạp. Mỗi lần nhìn thấy các tệp cấu hình và cấu trúc dự án của các công cụ như Docusaurus, VuePress, Astro, tôi lại đau đầu. Bây giờ, CZON chọn cách ẩn tất cả cấu hình vào thư mục .czon, quét vào góc, người dùng chỉ cần tập trung vào việc viết nội dung, phần còn lại để CZON xử lý. Các thư mục khác là không gian viết của bạn, bạn có thể tự do tổ chức các tệp Markdown của mình.

**Trở về với tiếng mẹ đẻ: Viết bằng tiếng mẹ đẻ, xây dựng mượt mà các phiên bản đa ngôn ngữ**

Đời người ngắn ngủi, tôi lười dịch. Khi sử dụng tiếng mẹ đẻ, con người mới có thể phát huy tối đa chiều sâu tư duy của mình. Nhưng đồng thời việc giữ kết nối với thế giới là cần thiết, tôi không muốn từ bỏ giao tiếp đa ngôn ngữ. Vì vậy, tôi hy vọng có một công cụ cho phép tôi viết bằng tiếng mẹ đẻ, đồng thời lại để nhiều người hơn thấy được nội dung của tôi. Hiện tại, i18n không chỉ yêu cầu tự dịch mà còn phải tự duy trì cập nhật nội dung, quá phiền phức. Tôi chọn sử dụng LLM để giúp tôi dịch, tiết kiệm rất nhiều thời gian và có thể hoàn thành dịch đa ngôn ngữ chỉ với một cú nhấp chuột.

## Chức năng cơ bản

1. 🌍 **Dịch đa ngôn ngữ tự động**: Sử dụng AI để dịch tăng dần, cho phép người dùng viết Markdown bằng tiếng mẹ đẻ, nhưng người dùng có thể là đa ngôn ngữ.
2. 💭 **Trích xuất tóm tắt tự động**: Sử dụng AI để phân tích và trích xuất nội dung từ văn bản gốc.
3. 🏷️ **Phân loại thẻ tự động**: Sử dụng AI để trích xuất và quản lý thẻ và phân loại nội dung.
4. 🧭 **Điều hướng phân loại thông minh**: Sử dụng AI để tạo sơ đồ trang web và điều hướng, không nhạy cảm với vị trí tệp nguồn.

## Tạo trang web tĩnh (SSG)

CZON tích hợp sẵn một giải pháp SSG, có thể biến bất kỳ thư mục git chứa Markdown nào thành một trang web HTML tĩnh.

⚠️ Lưu ý: CZON không phải là trình tạo trang web tĩnh (SSG) chuyên nghiệp, mà là một công cụ nội dung Markdown được AI hỗ trợ, tập trung vào sáng tạo và quản lý nội dung.

✅ CZON nhằm mục đích đơn giản hóa quy trình sáng tạo và xuất bản nội dung, cho phép người dùng tập trung vào bản thân việc viết, thay vì bị làm phiền bởi các cấu hình và công cụ phức tạp.

❌ CZON sẽ không cung cấp tùy chỉnh chủ đề phức tạp và hệ sinh thái plugin, mà tập trung vào việc nâng cao chất lượng và khả năng tiếp cận nội dung thông qua AI.

🔔 Tuy nhiên, CZON vẫn có thể tạo trang web tĩnh. Nếu cần thiết, có thể sử dụng CZON như một bộ tiền xử lý, tích hợp với các giải pháp SSG khác để tạo ra các trang web cá nhân hóa, đẹp mắt.

## Bắt đầu nhanh

Điều kiện tiên quyết:

- Đã cài đặt [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 18 trở lên, cần có lệnh npx)
- Đã có [OpenAI API Key](https://platform.openai.com/account/api-keys), hoặc API Key tương thích với OPENAI
- Đã cài đặt Git (để liệt kê tệp Markdown từ Git, bỏ qua các tệp bị lọc bởi quy tắc .gitignore)

Đầu tiên, làm việc trong một thư mục đã được quản lý bởi git:

Cấu hình biến môi trường

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Bắt buộc: Vui lòng thay thế bằng OpenAI API Key của bạn
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Tùy chọn, mặc định sử dụng API chính thức của OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Tùy chọn, mặc định sử dụng mô hình gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Tùy chọn, đặt giới hạn số lượng token tối đa (bỏ qua sẽ sử dụng giá trị mặc định của mô hình, đối với dịch văn bản dài khuyến nghị đặt giá trị cao hơn, ví dụ 8192, tùy thuộc vào số lượng token tối đa mà mô hình sử dụng hỗ trợ)
```

Xây dựng trang web, hỗ trợ dịch đa ngôn ngữ. Sử dụng thư mục hiện tại làm thư mục nguồn, đầu ra đến thư mục `.czon/dist`.

- Có thể chỉ định các phiên bản ngôn ngữ cần tạo bằng cách sử dụng nhiều lần tham số `--lang` (ví dụ: `--lang zh-Hans --lang en-US`).
- Không cần cấu hình ngôn ngữ nguồn, CZON sẽ tự động phát hiện.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Xem thêm tham số hoặc trợ giúp**:

```bash
npx czon@latest
```