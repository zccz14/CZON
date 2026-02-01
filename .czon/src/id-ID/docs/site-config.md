---
"title": "Panduan Konfigurasi Situs CZON"
"summary": "Dokumen ini menjelaskan secara rinci metode dan opsi konfigurasi situs CZON. Konfigurasi terletak di bidang `options.site` pada file `.czon/meta.json`, termasuk `site.baseUrl` (untuk menghasilkan `sitemap.xml` dan `robots.txt`), `site.title` (judul situs, nilai default 'CZON'), `site.gaID` (Google Analytics Measurement ID), dan `site.clarityID` (Microsoft Clarity Project ID). Semua item konfigurasi bersifat opsional, dan perubahan memerlukan eksekusi ulang `czon build` untuk berlaku. Pembuatan `sitemap.xml` akan dilewati jika `baseUrl` tidak dikonfigurasi. Alat analitik hanya akan dimuat jika ID yang sesuai dikonfigurasi, tanpa memengaruhi kinerja halaman. Dokumen ini menyediakan lokasi konfigurasi, item konfigurasi yang tersedia, contoh lengkap, dan hal-hal yang perlu diperhatikan untuk membantu pengguna mengatur situs dengan mudah."
"tags":
  - "CZON"
  - "Konfigurasi Situs"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Konfigurasi Situs

CZON mendukung konfigurasi opsi situs melalui file `.czon/meta.json`. Konfigurasi ini bersifat opsional dan tidak akan menghalangi penggunaan pertama kali.

## Lokasi Konfigurasi

Item konfigurasi terletak di bidang `options.site` pada file `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Beranda", "href": "index.html" },
        { "title": "Tentang", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Item Konfigurasi yang Tersedia

### `site.baseUrl`

URL dasar situs, digunakan untuk menghasilkan `sitemap.xml` dan `robots.txt`.

- **Tipe**: `string`
- **Format**: URL lengkap, seperti `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Setelah dikonfigurasi, akan dihasilkan secara otomatis:

- `sitemap.xml` - Peta situs yang berisi semua halaman
- Deklarasi Sitemap di `robots.txt`

### `site.title`

Judul situs, ditampilkan di bagian header halaman.

- **Tipe**: `string`
- **Nilai Default**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Situs Dokumentasi Saya"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, digunakan untuk mengintegrasikan statistik Google Analytics.

- **Tipe**: `string`
- **Format**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Cara mendapatkan: Kunjungi [Google Analytics](https://analytics.google.com/) untuk membuat properti, lalu dapatkan Measurement ID di bagian "Aliran Data".

### `site.clarityID`

Microsoft Clarity Project ID, digunakan untuk mengintegrasikan analisis perilaku pengguna Clarity.

- **Tipe**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Cara mendapatkan: Kunjungi [Microsoft Clarity](https://clarity.microsoft.com/) untuk membuat proyek, lalu dapatkan Project ID di pengaturan proyek.

### `site.home`

Konfigurasi jalur beranda, digunakan untuk menyesuaikan target pengalihan beranda.

- **Tipe**: `string`
- **Nilai Default**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Penjelasan Perilaku**:

- **Saat mengakses beranda root**: Saat pengguna mengakses `/index.html`, akan dialihkan secara otomatis ke `/{bahasa yang terdeteksi}/{home}` berdasarkan bahasa browser.
- **Saat mengklik judul Header**: Dialihkan ke jalur `home` di direktori bahasa saat ini.

**Skenario Penggunaan**:

- Ingin pengguna langsung masuk ke halaman tertentu saat pertama kali mengunjungi (misalnya panduan memulai, pengenalan produk, dll.)
- Halaman beranda situs bukan daftar artikel, melainkan halaman dokumen tertentu.

### `site.navLinks`

Konfigurasi tautan navigasi cepat, menampilkan tautan navigasi di bagian header halaman.

- **Tipe**: `Array<{ title: string, href: string }>`
- **Nilai Default**: `undefined` (tidak menampilkan navigasi)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Beranda", "href": "index.html" },
        { "title": "Dokumen", "href": "docs.html" },
        { "title": "Tentang", "href": "about.html" }
      ]
    }
  }
}
```

**Perilaku Responsif**:

- **Perangkat Seluler**: Menampilkan ikon menu hamburger, klik untuk memperluas semua tautan navigasi.
- **Desktop**: Menampilkan tautan navigasi langsung di Header, tetapi tidak melebihi 40% lebar layar; bagian yang melebihi akan ditampilkan melalui menu tarik-turun "More".

## Contoh Lengkap

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Teknis",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Beranda", "href": "index.html" },
        { "title": "Dokumen", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Hal-hal yang Perlu Diperhatikan

- Setelah mengubah konfigurasi, perlu menjalankan ulang `czon build` agar berlaku.
- Semua item konfigurasi `site` bersifat opsional, Anda dapat hanya mengonfigurasi bagian yang diperlukan.
- Alat analitik (GA, Clarity) hanya akan dimuat jika ID yang sesuai dikonfigurasi, tidak memengaruhi kinerja halaman.
- Jika `baseUrl` tidak dikonfigurasi, pembuatan `sitemap.xml` akan dilewati.