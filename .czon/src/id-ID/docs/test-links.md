---
"title": "Dokumen Pengujian Tautan Internal"
"summary": "Dokumen ini adalah dokumen pengujian yang terutama digunakan untuk memverifikasi kebenaran tautan internal. Dokumen ini menyediakan dua tautan pengujian, masing-masing mengarah ke dokumen pengujian KaTeX dan contoh diagram Mermaid, sekaligus juga mencakup pengujian catatan kaki, menunjukkan cara tampilan konten catatan kaki yang benar di bagian bawah halaman. Tujuan utama dokumen ini adalah membantu pengguna menguji dan memverifikasi fungsi tautan internal, memastikan tautan dan catatan kaki dapat berfungsi dengan baik di dalam halaman."
"tags":
  - "Pengujian"
  - "Tautan Internal"
  - "Verifikasi Dokumen"
  - "KaTeX"
  - "Mermaid"
  - "Catatan Kaki"
---

# Pengujian Tautan Internal

## Pengujian Tautan Markdown Internal

Ini adalah dokumen pengujian untuk memverifikasi kebenaran tautan internal.

Silakan klik tautan berikut untuk menguji:

- [Tautan ke Dokumen Pengujian KaTeX](test-katex.md)
- [Tautan ke Contoh Diagram Mermaid](test-mermaid.md)

## Pengujian Catatan Kaki:

Ini adalah pengujian catatan kaki[^1].

[^1]: Ini adalah konten catatan kaki, konten catatan kaki seharusnya ditampilkan dengan benar di bagian bawah halaman.

## Tautan File Sumber Daya

Menguji tautan biasa ke file non-Markdown atau gambar, seharusnya mengarah ke sumber daya asli:

[Ini adalah tautan ke JSON](../package.json)