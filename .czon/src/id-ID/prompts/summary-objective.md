---
"title": "Panduan Analisis Gaya Objektif dan Netral"
"summary": "Dokumen ini adalah panduan tentang cara membuat laporan analisis gaya objektif dan netral. Panduan ini menjelaskan secara rinci poin-poin yang perlu diperhatikan saat menganalisis dokumen (seperti jalur file, tanggal, nama proyek, peran individu, fakta objektif, dll.), dan mendefinisikan struktur basis pengetahuan (termasuk indeks file, indeks proyek, indeks orang, garis waktu, dan indeks kerangka teori). Dokumen ini juga menyediakan strategi kompresi, memberikan panduan tentang cara menyederhanakan konten jika diperlukan, sambil menekankan bahwa indeks kunci harus tetap dipertahankan. Penentuan gaya mengharuskan penyajian konten dari sudut pandang objektif dan netral, menghindari penilaian subjektif dan nuansa emosional. Target pembaca meliputi pembaca baru, calon kolaborator, dan investor. Dokumen ini mencantumkan larangan (seperti tidak menambahkan ekspresi emosional atau spekulasi) dan struktur bab yang diperlukan (seperti Ringkasan, Pengenalan Proyek, Topik Utama, Garis Waktu, Individu Utama, dan Ringkasan Kerangka Teori), serta menentukan file keluaran dan daftar periksa kualitas."
"tags":
  - "Analisis Dokumen"
  - "Objektif Netral"
  - "Struktur Basis Pengetahuan"
  - "Ekstraksi Informasi"
  - "Panduan Gaya"
  - "Penulisan Laporan"
  - "Data Terstruktur"
---

# Laporan Analisis Gaya Objektif dan Netral

## Poin Perhatian Saat Membaca

Saat membaca setiap file, fokus pada ekstraksi:

- Jalur file dan judul
- Informasi tanggal
- Nama proyek yang terlibat dan deskripsi fungsinya
- Individu yang disebutkan dan peran mereka
- Fakta dan data objektif
- Informasi spesifik seperti nomor versi, pencapaian, dll.

**Abaikan**: Penilaian subjektif, ekspresi emosional, konten spekulatif

## Struktur Basis Pengetahuan

```
### Indeks File
| Jalur File | Judul | Tanggal |
|------------|-------|---------|

### Indeks Proyek
| Nama Proyek | Deskripsi | File Terkait |
|-------------|-----------|--------------|

### Indeks Orang
| Orang | Peran | File Terkait |
|-------|-------|--------------|

### Garis Waktu
| Tanggal | Peristiwa | File Sumber |
|---------|-----------|-------------|

### Indeks Teori/Kerangka
| Nama | Ide Inti | File Sumber |
|------|----------|-------------|
```

## Strategi Kompresi

Saat perlu mengompresi basis pengetahuan:

1. **Harus Dipertahankan**: Indeks file (jalur+judul), indeks proyek, indeks orang
2. **Dapat Disederhanakan**: Garis waktu (pertahankan simpul kunci), indeks teori (pertahankan nama dan sumber)
3. **Dapat Dihapus**: Deskripsi rinci, peristiwa sekunder

---

## Penentuan Gaya

Perkenalkan konten dari sudut pandang objektif dan netral, hindari penilaian subjektif dan nuansa emosional. Tekankan fakta dan data, pastikan keakuratan dan keandalan informasi.

**Target Pembaca**: Pembaca baru yang perlu memahami gambaran umum repositori dengan cepat, calon kolaborator, investor
**Nada Penulisan**: Profesional, terkendali, netral, seperti menulis resume atau riwayat hidup
**Tujuan**: Membantu pembaca memahami informasi dasar dan sudut pandang inti dari konten secara komprehensif, untuk membentuk penilaian mereka sendiri

## Larangan

- ❌ Jangan tambahkan ekspresi emosional (seperti "menggembirakan", "sayangnya")
- ❌ Jangan melakukan spekulasi (seperti "mungkin", "barangkali", "kira-kira")
- ❌ Jangan gunakan kata-kata penilaian subjektif (seperti "hebat", "buruk", "menarik")
- ❌ Jangan menilai baik buruk atau keunggulan
- ❌ Jangan gunakan kata ganti orang pertama

## Struktur Bab yang Diperlukan

### Ringkasan

- Pengenalan pemilik repositori (nama/ID, identitas, bidang utama)
- Rentang waktu konten repositori
- Daftar proyek utama (enumerasi singkat)

### Pengenalan Proyek

Untuk setiap proyek utama, gunakan struktur berikut:

```markdown
### [Nama Proyek]

- **Asal Usul**: Sumber dan latar belakang proyek
- **Fungsi Inti**:
  - Poin fungsi 1
  - Poin fungsi 2
- **Iterasi Versi**: Jika ada riwayat versi, jelaskan secara singkat
- **File Terkait**: [Judul Artikel](../path/to/file.md)
```

### Topik Utama

Kelompokkan konten berdasarkan topik:

```markdown
### 1. [Nama Topik]

- [Judul Artikel1](../path/to/file1.md): Ringkasan sudut pandang inti
- [Judul Artikel2](../path/to/file2.md): Ringkasan sudut pandang inti
```

### Garis Waktu

Tampilkan peristiwa kunci dalam format tabel:

```markdown
| Tanggal     | Peristiwa Kunci         |
| ----------- | ----------------------- |
| YYYY-MM-DD  | Deskripsi peristiwa (pernyataan objektif) |
```

### Individu Utama

Gunakan format tabel:

```markdown
| Orang     | Peran       | Catatan           |
| --------- | ----------- | ----------------- |
| Nama/ID   | Posisi/Hubungan | Informasi objektif terkait |
```

### Ringkasan Kerangka Teori

Untuk teori/kerangka yang diajukan dalam repositori:

```markdown
### [Nama Kerangka]

- **Ide Inti**: Ringkasan dalam satu kalimat
- **Elemen Kunci**: Sebutkan komponen inti
- **Ekspresi Matematis**: Jika ada rumus, cantumkan
```

## File Keluaran

`SUMMARY/1-objective.md`

## Daftar Periksa Kualitas

- [ ] Tidak ada kata-kata penilaian subjektif
- [ ] Tidak ada ekspresi emosional
- [ ] Semua tautan mengarah ke file spesifik
- [ ] Teks tautan adalah judul artikel
- [ ] Memuat semua bab yang diperlukan
- [ ] Format tabel garis waktu dan orang sudah benar