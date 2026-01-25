---
"title": "CZON - Mesin Konten Markdown Berbasis AI-Native"
"summary": "CZON adalah mesin konten Markdown berbasis AI-native yang dirancang untuk membantu pembuat konten menyederhanakan proses penulisan. CZON menekankan penulisan tanpa konfigurasi, dengan mengintegrasikan teknologi AI secara mendalam untuk menangani tugas-tugas seperti pembuatan judul, ekstraksi ringkasan, klasifikasi tag, penerjemahan multibahasa, dan navigasi situs secara otomatis, sehingga mengurangi gangguan bagi pengguna. CZON memiliki fitur pembuatan situs statis bawaan, tetapi fokus utamanya adalah pada pembuatan dan pengelolaan konten, bukan kustomisasi tema yang kompleks. CZON cocok untuk pengguna yang ingin menulis dalam bahasa ibu mereka dan secara otomatis menghasilkan versi multibahasa, terutama cocok untuk pembuat konten situs web yang tidak menyukai konfigurasi yang rumit."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Mesin Konten"
  - "Penerjemahan Multibahasa"
  - "Pembuatan Situs Statis"
  - "Tanpa Konfigurasi"
  - "Pembuatan Konten"
---

![Logo CZON](logo.png)

# CZON - Mesin Konten Markdown Berbasis AI-Native

- **C**: **C**ontent oriented | Konten adalah raja, fokus pada konten
- **Z**: **Z**ero Configuration | Penulisan tanpa konfigurasi, mengurangi gangguan
- **O**: **O**rganic AI-Native | AI-native yang organik, integrasi AI yang mendalam
- **N**: **N**-shaped Energy Curve | Kurva energi berbentuk N, terlibat dalam setiap tahap penciptaan-distribusi-umpan balik

[> Demo Situs Web](https://czon.zccz14.com/)

Di era AI, sebagai pembuat konten situs web, kita dapat memiliki mesin pembuat konten yang lebih cerdas.

**Kembali ke Konten: Minimalkan Gangguan, Fokus pada Penulisan**

Kembalikan esensi dokumen, kembalikan ketenangan dalam menulis.

Pertama, saya tidak ingin menjadi pustakawan. Terkadang saya ingin menulis sesuatu, tetapi mungkin saya belum memikirkan judulnya, belum membentuk organisasi yang khusus. Saya berharap LLM akan secara otomatis membantu saya membuat judul, membuat ringkasan, mengklasifikasikan, navigasi, dan pekerjaan pengorganisasian lainnya.

Kedua, ruang kerja saya harus bersih. Saya tidak ingin alat pembangun dengan konfigurasi yang rumit, mengutak-atik konfigurasi dokumen yang kompleks, tidak menyukai struktur yang rumit. Setiap kali saya melihat file konfigurasi dan struktur proyek dari alat-alat seperti Docusaurus, VuePress, Astro, kepala saya pusing. Sekarang, CZON memilih untuk menyembunyikan semua konfigurasi ke dalam direktori .czon, menyimpannya di sudut, pengguna hanya perlu fokus pada penulisan konten, sisanya diserahkan kepada CZON untuk menanganinya. Direktori lainnya adalah ruang penulisan Anda, Anda dapat mengatur file Markdown Anda sesuka hati.

**Kembali ke Bahasa Ibu: Menulis dengan Bahasa Ibu, Membangun Versi Multibahasa dengan Lancar**

Hidup ini singkat, saya malas menerjemahkan. Saat menggunakan bahasa ibu, seseorang dapat mengeluarkan kedalaman pemikirannya dengan maksimal. Tetapi pada saat yang sama, tetap terhubung dengan dunia adalah hal yang diperlukan, saya tidak ingin melepaskan komunikasi multibahasa. Oleh karena itu, saya berharap ada alat yang memungkinkan saya menulis dalam bahasa ibu, sekaligus memungkinkan lebih banyak orang melihat konten saya. Saat ini, i18n tidak hanya mengharuskan kita menerjemahkan sendiri, tetapi juga harus memelihara pembaruan konten sendiri, terlalu merepotkan. Saya memilih menggunakan LLM untuk membantu saya menerjemahkan, menghemat banyak waktu saya, dan dapat menyelesaikan penerjemahan multibahasa dengan satu klik.

## Fitur Dasar

1. 🌍 **Penerjemahan Multibahasa Otomatis**: Menggunakan AI untuk penerjemahan inkremental, memungkinkan pengguna menulis Markdown dalam bahasa ibu, tetapi pengguna dapat bersifat multibahasa.
2. 💭 **Ekstraksi Ringkasan Otomatis**: Menggunakan AI untuk menganalisis dan mengekstrak konten dari teks asli.
3. 🏷️ **Klasifikasi Tag Otomatis**: Menggunakan AI untuk mengekstrak dan mengelola tag serta klasifikasi konten.
4. 🧭 **Navigasi Klasifikasi Cerdas**: Menggunakan AI untuk menghasilkan peta situs dan navigasi, lokasi file sumber tidak sensitif.

## Pembuatan Situs Statis (SSG)

CZON memiliki skema SSG bawaan yang dapat membangun folder git apa pun yang berisi Markdown menjadi situs HTML statis.

⚠️ Harap diperhatikan, CZON bukanlah generator situs statis (SSG) profesional, melainkan mesin konten Markdown yang digerakkan oleh AI, yang berfokus pada pembuatan dan pengelolaan konten.

✅ CZON bertujuan untuk menyederhanakan proses pembuatan dan penerbitan konten, memungkinkan pengguna fokus pada penulisan itu sendiri, bukan terganggu oleh konfigurasi dan alat yang rumit.

❌ CZON tidak akan menyediakan kustomisasi tema dan ekosistem plugin yang kompleks, melainkan berfokus pada peningkatan kualitas dan aksesibilitas konten melalui AI.

🔔 Namun, CZON tetap dapat menghasilkan situs statis. Jika diperlukan, CZON dapat digunakan sebagai preprocessor, diintegrasikan dengan skema SSG lain untuk menghasilkan situs yang personal dan menarik.

## Memulai dengan Cepat

Prasyarat:

- Sudah menginstal [Node.js](https://nodejs.org/) (disarankan versi 18 ke atas, perlu memiliki perintah npx)
- Sudah mendapatkan [OpenAI API Key](https://platform.openai.com/account/api-keys), atau API Key yang kompatibel dengan OPENAI
- Sudah menginstal Git (untuk mendaftar file Markdown dari Git, mengabaikan file yang difilter oleh aturan .gitignore)

Pertama, bekerja di dalam folder yang sudah dikelola oleh git:

Konfigurasi variabel lingkungan

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Wajib: Ganti dengan OpenAI API Key Anda
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opsional, default menggunakan API resmi OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opsional, default menggunakan model gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opsional, atur batas maksimum token (jika diabaikan akan menggunakan nilai default model, untuk penerjemahan teks panjang disarankan untuk mengatur nilai yang lebih tinggi, misalnya 8192, tergantung pada jumlah token maksimum yang didukung oleh model yang digunakan)
```

Bangun situs, mendukung penerjemahan multibahasa. Gunakan direktori saat ini sebagai direktori sumber, output ke direktori `.czon/dist`.

- Dapat menentukan versi bahasa yang ingin dihasilkan dengan menggunakan parameter `--lang` beberapa kali (misalnya `--lang zh-Hans --lang en-US`).
- Tidak perlu mengonfigurasi bahasa sumber, CZON akan mendeteksi secara otomatis.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Lihat parameter atau bantuan lainnya**:

```bash
npx czon@latest
```