---
"title": "CZON - Mesin Konten Markdown AI-Native"
"summary": "CZON adalah mesin konten Markdown AI-native yang dirancang untuk membantu pembuat konten menyederhanakan proses penulisan. Ini menekankan penulisan tanpa konfigurasi, dengan mengintegrasikan teknologi AI secara mendalam untuk menangani tugas-tugas seperti pembuatan judul, ekstraksi ringkasan, klasifikasi tag, penerjemahan multibahasa, dan navigasi situs secara otomatis, sehingga mengurangi gangguan bagi pengguna. CZON memiliki fitur pembuatan situs statis bawaan, tetapi terutama berfokus pada pembuatan dan pengelolaan konten, bukan kustomisasi tema yang kompleks. Ini cocok untuk pengguna yang ingin menulis dalam bahasa ibu mereka dan secara otomatis menghasilkan versi multibahasa, terutama untuk pembuat konten situs web yang tidak menyukai konfigurasi yang rumit."
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

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Lihat Situs Web CZON 🚀
    </a>
</div>

# CZON - Mesin Konten Markdown AI-Native

- **C**: Berorientasi **K**onten | Konten adalah raja, fokus pada konten
- **Z**: **T**anpa Konfigurasi | Menulis tanpa konfigurasi, mengurangi gangguan
- **O**: AI-Native **O**rganik | AI-native yang organik, integrasi AI yang mendalam
- **N**: Kurva Energi Berbentuk **N** | Kurva energi berbentuk N, terlibat di setiap tahap penciptaan-distribusi-umpan balik

Di era AI, sebagai pembuat konten situs web, kita dapat memiliki mesin pembuatan konten yang lebih cerdas.

**Kembali ke Konten: Minimalkan Gangguan, Fokus pada Menulis**

Kembalikan dokumen ke esensinya, kembalikan ketenangan dalam menulis.

Pertama, saya tidak ingin menjadi pustakawan. Terkadang saya ingin menulis sesuatu, tetapi mungkin saya belum memikirkan judulnya, belum membentuk organisasi yang khusus. Saya berharap LLM akan secara otomatis membantu saya membuat judul, membuat ringkasan, mengklasifikasikan, navigasi, dan pekerjaan pengorganisasian lainnya.

Kedua, ruang kerja saya harus bersih. Saya tidak ingin alat pembangun dengan konfigurasi yang rumit, berurusan dengan konfigurasi dokumen yang kompleks, tidak menyukai struktur yang rumit. Setiap kali saya melihat file konfigurasi dan struktur proyek dari alat-alat seperti Docusaurus, VuePress, Astro, kepala saya pusing. Sekarang, CZON memilih untuk menyembunyikan semua konfigurasi ke dalam direktori `.czon`, disingkirkan ke sudut, pengguna hanya perlu fokus pada penulisan konten, sisanya diserahkan kepada CZON untuk menanganinya. Direktori lainnya adalah ruang penulisan Anda, Anda dapat mengatur file Markdown Anda sesuka hati.

**Kembali ke Bahasa Ibu: Menulis dengan Bahasa Ibu, Membangun Versi Multibahasa dengan Lancar**

Hidup ini singkat, saya malas menerjemahkan. Saat menggunakan bahasa ibu, seseorang dapat mengeluarkan kedalaman pemikiran terbaiknya. Tetapi tetap terhubung dengan dunia juga diperlukan, saya tidak ingin melepaskan komunikasi multibahasa. Oleh karena itu, saya berharap ada alat yang memungkinkan saya menulis dalam bahasa ibu, sekaligus memungkinkan lebih banyak orang melihat konten saya. i18n saat ini tidak hanya mengharuskan menerjemahkan sendiri, tetapi juga harus menjaga pembaruan konten sendiri, terlalu merepotkan. Saya memilih menggunakan LLM untuk membantu saya menerjemahkan, menghemat banyak waktu saya, dan dapat menyelesaikan penerjemahan multibahasa dengan satu klik.

## ✨ Fitur Inti

1. 🌍 **Penerjemahan Multibahasa AI**: Menggunakan AI untuk penerjemahan inkremental, memungkinkan pengguna menulis Markdown dalam bahasa ibu, tetapi pengguna dapat multibahasa.
2. 📊 **Ekstraksi Metadata AI**: Ekstraksi otomatis judul, deskripsi, ringkasan, kata kunci, target pembaca, alias ramah URL, dll.
3. 🏷️ **Klasifikasi Tag AI**: Menggunakan AI untuk ekstraksi dan pengelolaan tag serta klasifikasi konten.
4. 🧭 **Navigasi Klasifikasi AI**: Menggunakan AI untuk menghasilkan peta situs dan navigasi, lokasi file sumber tidak sensitif.
5. 🤖 **Ringkasan Situs Lengkap AI**: Dapat menghasilkan ringkasan situs lengkap dengan berbagai gaya.

Serta beberapa fitur non-AI:

1. ⚙️ **Tanpa Konfigurasi**: Semua konfigurasi dan cache tersembunyi di direktori `.czon`, struktur proyek tetap rapi.
2. 🔄 **Pembangunan Inkremental**: Mendeteksi perubahan berdasarkan hash konten, hanya memproses file yang berubah.
3. 📚 **Dukungan Ekstensi Markdown**: Dukungan native untuk rumus matematika KaTeX, diagram Mermaid, carousel Embla, catatan kaki, dll.
4. 🚀 **Pembuatan Situs Statis**: SSG berbasis React bawaan, menghasilkan situs statis multibahasa.
5. 🌐 **Perutean Otomatis Berdasarkan Bahasa Pengunjung**: Secara otomatis merutekan ke versi bahasa yang sesuai berdasarkan bahasa pengunjung.

## 📦 Memulai Cepat

### Prasyarat

- Sudah menginstal [Node.js](https://nodejs.org/) (disarankan menggunakan versi LTS 24, atau versi 18 ke atas, perlu memiliki perintah npx)
- Sudah mendapatkan [OpenAI API Key](https://platform.openai.com/account/api-keys), atau API Key yang kompatibel dengan OPENAI
- Sudah menginstal Git (untuk mendaftar file Markdown dari Git, mengabaikan file yang difilter oleh aturan .gitignore)

### Konfigurasi Variabel Lingkungan

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Wajib: Ganti dengan OpenAI API Key Anda
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opsional, default menggunakan API resmi OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opsional, default menggunakan model gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opsional, atur batas jumlah token maksimum (jika diabaikan akan menggunakan nilai default model, untuk penerjemahan teks panjang disarankan menetapkan nilai yang lebih tinggi, misalnya 8192, tergantung pada jumlah token maksimum yang didukung oleh model yang digunakan)

# Jika perlu menggunakan proxy HTTP untuk mengakses OpenAI API, variabel berikut dapat diatur
export HTTPS_PROXY="http://your-proxy.com:8080"  # Opsional, atur proxy HTTPS
export HTTP_PROXY="http://your-proxy.com:8080"   # Opsional, atur proxy HTTP
```

### Membangun Situs Multibahasa

Jalankan di folder apa pun yang dikelola Git:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Karena kode bahasa nantinya akan digunakan sebagai bagian dari banyak fungsi dalam pembuatan situs statis, pastikan untuk menggunakan kode bahasa standar BCP 47. Misalnya, `zh-Hans` mewakili Bahasa Tionghoa Sederhana, `en-US` mewakili Bahasa Inggris Amerika. Anda dapat menambahkan lebih banyak bahasa sesuai kebutuhan, misalnya `es-ES` (Bahasa Spanyol), `ja-JP` (Bahasa Jepang), `ko-KR` (Bahasa Korea), dll.
Untuk daftar kode bahasa standar, silakan lihat [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Direktori output: `.czon/dist`, konten di bawah direktori ini perlu dideploy ke platform hosting situs statis nantinya.

Untuk penggunaan detail, jalankan `npx czon@latest --help`.

## 🔗 Perbandingan dengan Alat Lain

| Fitur               | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Native**       | ✅ Integrasi Mendalam    | ❌              | ❌              | ❌              |
| **Tanpa Konfigurasi** | ✅ Konfigurasi Tersembunyi | ❌ Perlu File Konfigurasi | ❌ Perlu File Konfigurasi | ❌ Perlu File Konfigurasi |
| **Penerjemahan Multibahasa AI** | ✅ Penerjemahan Inkremental Otomatis | ❌ Terjemahan Manual | ❌ Terjemahan Manual | ❌ Terjemahan Manual |
| **Klasifikasi/Tag Otomatis** | ✅ Ekstraksi AI          | ❌ Konfigurasi Manual | ❌ Konfigurasi Manual | ❌ Konfigurasi Manual |
| **Ekstensi Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Melalui Plugin | ✅ Melalui Plugin | ✅ Melalui Plugin |
| **Kustomisasi Tema** | ❌ Terbatas              | ✅ Kaya         | ✅ Kaya         | ✅ Kaya         |

CZON diposisikan sebagai **mesin konten yang ditingkatkan AI**, bukan SSG lengkap. Ini berfokus pada peningkatan efisiensi pembuatan konten melalui AI, cocok untuk pembuat konten yang mementingkan kualitas konten dan ingin mengurangi beban konfigurasi. Sebenarnya, CZON dapat digunakan bersama dengan alat SSG seperti Docusaurus, VuePress, Astro, sebagai mesin depan untuk pembuatan dan pengelolaan konten.

## 📞 Dukungan

- Halaman Proyek: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- GitHub Issues: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Biarkan menulis kembali tenang, biarkan konten tumbuh secara alami._