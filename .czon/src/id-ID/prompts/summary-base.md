---
"title": "Aturan Dasar Pembuatan Laporan Analisis AI"
"summary": "Dokumen ini menyediakan aturan dasar untuk pembuatan laporan analisis AI, menekankan pentingnya mengikuti alur membaca dokumen secara ketat, yang mencakup lima tahap: mendapatkan daftar file, membaca dan meringkas secara bertahap, manajemen konteks, verifikasi kelengkapan, dan pembuatan laporan. Prinsip inti meliputi membaca semua file satu per satu, berlandaskan fakta, mengutip tautan secara standar, mempertimbangkan bobot waktu, dan lainnya. Aturan umum mengharuskan laporan dimulai dengan format tertentu, dikeluarkan ke direktori yang ditentukan, dan melarang pembuatan laporan atau melewatkan file apa pun sebelum semua file selesai dibaca."
"tags":
  - "Analisis AI"
  - "Pembuatan Laporan"
  - "Membaca Dokumen"
  - "Aturan"
  - "Markdown"
  - "Landasan Fakta"
  - "Standar Kutipan"
  - "Manajemen Alur"
---

# Pembuatan Laporan Analisis AI - Aturan Dasar

## Alur Membaca Dokumen (Harus Diikuti Secara Ketat)

### Prinsip Inti

Repositori ini mungkin berisi ratusan hingga ribuan file Markdown. Anda **harus membaca setiap file satu per satu**, tidak boleh dilewati.
Untuk menangani banyak file, gunakan strategi **membaca dan meringkas secara bertahap**.

### Tahap 1: Mendapatkan Daftar File Lengkap

1. Jalankan `npx czon@latest ls-files` untuk mendapatkan semua file Markdown
2. Catat jumlah total file N
3. Simpan daftar file sebagai antrian yang akan dibaca

### Tahap 2: Membaca dan Meringkas Secara Bertahap

Proses file secara bertahap. Disarankan setiap tahap berisi 10-20 file, tetapi Anda dapat menyesuaikan berdasarkan ukuran dan kompleksitas file.

**Untuk setiap tahap:**

1. **Baca**: Gunakan alat Read untuk membaca konten lengkap setiap file dalam tahap tersebut satu per satu
2. **Ekstrak**: Ekstrak informasi relevan berdasarkan **fokus gaya saat ini** (lihat panduan gaya di bawah)
3. **Ringkasan Tahap**: Susun informasi yang diekstrak dari tahap tersebut menjadi ringkasan terstruktur
4. **Akumulasi**: Gabungkan ringkasan tahap ke dalam "basis pengetahuan" (struktur basis pengetahuan lihat panduan gaya di bawah)

### Tahap 3: Manajemen Konteks

Ketika konteks mendekati batas:

1. **Kompresi Basis Pengetahuan**: Kompres basis pengetahuan sesuai **strategi kompresi gaya saat ini** (lihat panduan gaya di bawah)
2. **Pertahankan Indeks**: Bagaimanapun kompresinya, indeks jalur dan judul semua file harus dipertahankan
3. **Lanjutkan Membaca**: Gunakan basis pengetahuan yang telah dikompresi untuk melanjutkan pemrosesan file yang tersisa

### Tahap 4: Verifikasi Kelengkapan

Sebelum membuat laporan, pastikan:

1. Semua N file dalam daftar file telah diproses
2. Basis pengetahuan berisi informasi dasar setiap file (setidaknya jalur dan judul)

**Jika ditemukan yang terlewat**: Kembali ke Tahap 2 untuk memproses file yang terlewat.

### Tahap 5: Pembuatan Laporan

Hanya setelah menyelesaikan semua tahap di atas, Anda dapat mulai membuat laporan.

### Perilaku yang Dilarang

- ❌ Tidak boleh mulai membuat laporan sebelum semua file selesai dibaca
- ❌ Tidak boleh melewatkan file apa pun, berapa pun jumlah filenya
- ❌ Tidak boleh hanya membaca sebagian file dan mengklaim "sudah memahami keseluruhan"
- ❌ Tidak boleh memalsukan file atau konten yang tidak ada dalam basis pengetahuan

---

## Aturan Umum

### 1. Prinsip Landasan Fakta

- Ingatlah untuk selalu berlandaskan konten fakta, tidak boleh ada situasi yang menyimpang dari fakta
- Semua pandangan harus didukung oleh teks asli
- Tidak boleh memalsukan konten yang tidak ada

### 2. Standar Kutipan Tautan

- Saat mengutip tautan teks asli, pastikan tautan valid
- **Selalu tautkan ke file Markdown spesifik**, jangan tautkan ke direktori
- **Teks tautan harus berupa judul yang sesuai**, bukan nama file
- Karena dibuat ke direktori SUMMARY, gunakan jalur relatif yang diawali dengan `../` saat mengutip

**Contoh Benar**:

```markdown
[Perang Modal Abadi: Strategi Investor Individu Melintasi Kelas](../INSIGHTS/6.md)
[Dari Kreasi ke Distribusi—Membangun Mesin Konten AI-Native](../INSIGHTS/4.md)
```

**Contoh Salah**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← menggunakan nama file, bukan judul
[Perang Modal Abadi](../INSIGHTS/) ← menautkan ke direktori
```

### 3. Format Kepala

Setiap laporan harus dimulai dengan format berikut:

```markdown
# [Judul Laporan]

**Waktu Analisis AI**: YYYY-MM-DD
**Catatan**: Laporan ini dibuat oleh AI, kontennya hanya untuk referensi.

---
```

### 4. Bobot Waktu

- Pertimbangkan rentang waktu, berikan bobot lebih tinggi pada artikel yang lebih baru
- Namun jangan abaikan konten penting yang lebih lama

### 5. Lokasi Keluaran

- Semua laporan dibuat ke direktori `SUMMARY/`
- Nama file diberi nama sesuai format yang ditentukan