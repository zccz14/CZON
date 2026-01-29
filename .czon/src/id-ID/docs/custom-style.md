---
"title": "Panduan Penyesuaian Gaya CZON"
"summary": "Dokumen ini menjelaskan secara rinci metode penyesuaian gaya pada proyek CZON. Dengan membuat file style.css di direktori .czony proyek dan menulis kode CSS, Anda dapat mengganti gaya default atau menambahkan tampilan personalisasi. Dokumen menjelaskan bahwa CZON akan mendeteksi dan menyalin file tersebut ke direktori output saat proses build, serta menambahkan tautan gaya di setiap halaman HTML untuk memastikan gaya kustom dimuat setelah gaya bawaan agar efek penggantian tercapai. Dokumen menyediakan daftar variabel CSS yang tersedia, termasuk warna latar belakang, warna teks, warna tautan, dan lainnya, serta menampilkan beberapa contoh praktis seperti menyesuaikan warna merek, mengatur lebar area konten, menyesuaikan gaya blok kode, dan menyembunyikan elemen tertentu. Terakhir, dokumen menekankan hal-hal yang perlu diperhatikan, seperti nama file harus style.css, perlu build ulang setelah modifikasi, disarankan menggunakan variabel CSS untuk penggantian, dan kemungkinan perlu menggunakan !important karena CZON menggunakan Tailwind CSS."
"tags":
  - "CZON"
  - "Penyesuaian Gaya"
  - "CSS"
  - "Pengembangan Frontend"
  - "Pembuatan Situs Web"
  - "Penggantian Gaya"
  - "Variabel CSS"
  - "Tailwind CSS"
---

# Penyesuaian Gaya

CZON mendukung penyesuaian gaya situs melalui file `.czon/style.css`, memungkinkan Anda mengganti gaya default atau menambahkan tampilan yang dipersonalisasi.

## Cara Penggunaan

1. Buat file `style.css` di direktori `.czon` proyek Anda:

```
proyek-anda/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Buat file ini
├── README.md
└── docs/
```

2. Tulis CSS kustom Anda di `style.css`:

```css
/* Contoh: Mengubah warna tautan */
:root {
  --link-color: #0066cc;
}

/* Contoh: Mengubah latar belakang dalam mode gelap */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Jalankan kembali `czon build`, gaya kustom akan otomatis diterapkan ke semua halaman.

## Cara Kerja

- Saat proses build, CZON akan mendeteksi keberadaan `.czon/style.css`
- Jika ada, file tersebut akan disalin ke direktori output `.czon/dist/style.css`
- Di setiap halaman HTML yang dihasilkan, tautan gaya akan ditambahkan di dalam `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Gaya kustom dimuat setelah gaya bawaan, sehingga dapat mengganti gaya default

## Variabel CSS yang Tersedia

CZON menggunakan variabel CSS untuk mendefinisikan warna tema. Anda dapat dengan cepat menyesuaikan skema warna dengan mengganti variabel-variabel ini:

```css
:root {
  /* Warna latar belakang */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Warna teks */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Warna tautan dan aksen */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Warna batas */
  --border-color: #dee2e6;
}

/* Variabel mode gelap */
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

## Contoh

### Menyesuaikan Warna Merek

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

### Mengatur Lebar Area Konten

```css
.content {
  max-width: 60rem;
}
```

### Menyesuaikan Gaya Blok Kode

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Menyembunyikan Elemen Tertentu

```css
/* Menyembunyikan bilah daftar isi kanan */
.sidebar-right {
  display: none;
}
```

## Hal yang Perlu Diperhatikan

- Nama file gaya kustom harus `style.css` dan ditempatkan di direktori `.czon/`
- Setelah mengubah gaya, Anda perlu menjalankan kembali `czon build` agar perubahan berlaku
- Disarankan menggunakan metode penggantian variabel CSS untuk penyesuaian gaya, karena ini dapat mendukung mode terang dan gelap secara bersamaan
- CZON menggunakan Tailwind CSS. Jika perlu mengganti gaya yang dihasilkan Tailwind, Anda mungkin perlu menggunakan `!important`