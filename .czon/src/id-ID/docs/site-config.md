---
"title": "Panduan Konfigurasi Situs CZON"
"summary": "Dokumen ini menjelaskan secara rinci metode dan opsi konfigurasi situs CZON. Konfigurasi terletak di bidang `options.site` pada file `.czon/meta.json`, termasuk `site.baseUrl` (untuk menghasilkan `sitemap.xml` dan `robots.txt`), `site.title` (judul situs, nilai default adalah 'CZON'), `site.gaID` (Google Analytics Measurement ID), dan `site.clarityID` (Microsoft Clarity Project ID). Semua item konfigurasi bersifat opsional, dan perubahan memerlukan eksekusi ulang `czon build` untuk berlaku. Pembuatan `sitemap.xml` akan dilewati jika `baseUrl` tidak dikonfigurasi. Alat analitik hanya akan dimuat setelah ID yang sesuai dikonfigurasi, tanpa memengaruhi kinerja halaman. Dokumen ini menyediakan lokasi konfigurasi, item konfigurasi yang tersedia, contoh lengkap, dan hal-hal yang perlu diperhatikan untuk membantu pengguna mengatur situs dengan mudah."
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
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id"
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

Judul situs, ditampilkan di bagian kepala halaman.

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

## Contoh Lengkap

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Teknis",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Hal-hal yang Perlu Diperhatikan

- Setelah mengubah konfigurasi, perlu menjalankan ulang `czon build` agar berlaku
- Semua item konfigurasi `site` bersifat opsional, Anda dapat hanya mengonfigurasi bagian yang diperlukan
- Alat analitik (GA, Clarity) hanya akan dimuat setelah ID yang sesuai dikonfigurasi, tidak memengaruhi kinerja halaman
- Jika `baseUrl` tidak dikonfigurasi, pembuatan `sitemap.xml` akan dilewati