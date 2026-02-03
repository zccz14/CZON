---
"title": "Panduan Menyebarkan Situs Statis CZON ke GitHub Pages"
"summary": "Artikel ini menjelaskan secara rinci cara menyebarkan situs statis multibahasa yang dihasilkan CZON ke GitHub Pages melalui GitHub CLI. Pertama, Anda perlu menginstal dan login ke GitHub CLI, serta memastikan memiliki izin repo. Kemudian jalankan perintah npx czon@latest config github, yang akan memandu pengguna melalui serangkaian langkah, termasuk memeriksa izin, menginisialisasi repositori Git, mengonfigurasi repositori remote, mengaktifkan GitHub Pages dan mengaturnya ke tipe workflow, membuat atau memperbarui file Workflow, melakukan commit dan push perubahan, serta akhirnya mendapatkan URL Pages. Seluruh proses otomatis, menyederhanakan alur penyebaran."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Situs Statis"
  - "Panduan Penyebaran"
  - "GitHub CLI"
  - "Multibahasa"
  - "Penyebaran Otomatis"
---

# Menyebarkan ke GitHub Pages

Panduan ini menjelaskan cara menyebarkan situs statis multibahasa yang dihasilkan CZON ke GitHub Pages melalui GitHub CLI.

Pertama, instal alat [GitHub CLI](https://cli.github.com/) (jika belum terinstal), dan pastikan Anda sudah login (jika belum):

```bash
$ gh --version # Lihat versi, pastikan instalasi berhasil
```

Pastikan sudah login, dan memiliki izin `repo` untuk mengakses repositori target:

```bash
$ gh auth login -s repo # Login ke akun GitHub, akan diminta memilih login via browser atau menggunakan token
$ gh auth status # Lihat status login, pastikan berhasil login dan memiliki izin repo untuk mengakses repositori target
```

Selanjutnya, cukup jalankan perintah berikut dan ikuti petunjuknya:

```bash
$ npx czon@latest config github
```

Perintah ini akan memandu Anda melalui langkah-langkah berikut:

1.  Memeriksa apakah izin `gh` mencakup `repo`. Jika tidak, akan diminta untuk login ulang dan menambahkan izin `repo`.
2.  Jika direktori lokal bukan repositori Git, Anda akan diminta untuk menginisialisasi repositori Git baru.
3.  Memeriksa pengaturan repositori Git remote di direktori lokal, melihat apakah ada repositori remote GitHub. Jika tidak ada repositori remote GitHub, Anda akan diminta untuk membuat repositori remote baru dan menambahkannya sebagai remote `origin`. Jika `origin` sudah ada tetapi bukan repositori GitHub, Anda akan diminta untuk menambahkan repositori GitHub baru sebagai `upstream`.
4.  Memeriksa apakah GitHub Pages sudah diaktifkan dan bertipe `workflow`. Jika tidak, akan diaktifkan dan diperbaiki melalui API `gh api` agar disebarkan dari Actions. Juga mengatur CNAME (jika Anda memiliki domain kustom).
5.  Memeriksa file GitHub Workflow. Jika belum dibuat, akan membuat file Workflow Pages; jika sudah ada tetapi bukan versi terbaru, akan menanyakan apakah Anda ingin memperbarui file Workflow.
6.  Melakukan commit pada file Workflow, dan melakukan push perubahan ke repositori remote.
7.  Menampilkan URL situs GitHub Pages untuk diakses, dengan mengambil URL Pages terbaru melalui `gh api`.