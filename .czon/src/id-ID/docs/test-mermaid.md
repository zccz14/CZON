---
"title": "Dokumen Pengujian Diagram Mermaid"
"summary": "Dokumen ini adalah file pengujian yang bertujuan untuk memverifikasi dukungan render diagram Mermaid pada platform CZON. Dokumen menyediakan contoh berbagai tipe diagram Mermaid seperti diagram alir, diagram urutan, diagram Gantt, diagram kelas, diagram keadaan, dan diagram pai, yang menunjukkan definisi diagram dari struktur dasar hingga aplikasi kompleks. Selain itu, dokumen juga berisi pengujian sintaksis yang salah untuk memverifikasi kemampuan sistem dalam menangani diagram yang salah. Melalui contoh-contoh ini, dokumen secara komprehensif menguji fungsionalitas dan ketangguhan integrasi Mermaid di platform CZON, memastikan diagram dapat dirender dengan benar dan menangani situasi pengecualian."
"tags":
  - "Mermaid"
  - "Pengujian Diagram"
  - "CZON"
  - "Diagram Alir"
  - "Diagram Urutan"
  - "Diagram Gantt"
  - "Diagram Kelas"
  - "Diagram Keadaan"
"date": "2024-01-01"
---

# Pengujian Diagram Mermaid

Ini adalah file pengujian untuk memverifikasi fungsi render diagram Mermaid di CZON.

## Contoh Diagram Alir

```mermaid
graph TD
    A[Mulai] --> B{Apakah melanjutkan?}
    B -->|Ya| C[Eksekusi Operasi]
    B -->|Tidak| D[Selesai]
    C --> E[Periksa Hasil]
    E --> F{Apakah berhasil?}
    F -->|Ya| G[Sukses]
    F -->|Tidak| H[Ulangi]
    H --> C
    G --> D
```

## Contoh Diagram Urutan

```mermaid
sequenceDiagram
    participant Pengguna
    participant Sistem
    participant BasisData

    Pengguna->>Sistem: Kirim Permintaan
    Sistem->>BasisData: Kueri Data
    BasisData-->>Sistem: Kembalikan Hasil
    Sistem-->>Pengguna: Tampilkan Hasil
```

## Contoh Diagram Gantt

```mermaid
gantt
    title Jadwal Proyek
    dateFormat  YYYY-MM-DD
    section Desain
    Analisis Kebutuhan     :done,    des1, 2024-01-01, 7d
    Desain Prototipe       :active,  des2, 2024-01-08, 5d
    Desain Detail          :         des3, after des2, 5d
    section Pengembangan
    Pengembangan Frontend  :         dev1, after des3, 10d
    Pengembangan Backend   :         dev2, after des3, 15d
    section Pengujian
    Pengujian Unit         :         test1, after dev1, 5d
    Pengujian Integrasi    :         test2, after dev2, 5d
```

## Contoh Diagram Kelas

```mermaid
classDiagram
    class Hewan {
        +String nama
        +int umur
        +void makan()
        +void tidur()
    }
    class Anjing {
        +void gonggong()
    }
    class Kucing {
        +void mengeong()
    }

    Hewan <|-- Anjing
    Hewan <|-- Kucing
```

## Contoh Diagram Keadaan

```mermaid
stateDiagram-v2
    [*] --> Diam
    Diam --> Memproses : Mulai Proses
    Memproses --> Sukses : Proses Berhasil
    Memproses --> Gagal : Proses Gagal
    Sukses --> [*]
    Gagal --> [*]
```

## Contoh Diagram Pai

```mermaid
pie title Penggunaan Browser
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Lainnya" : 1.8
```

## Pengujian Sintaksis Salah (Seharusnya Menampilkan Pesan Kesalahan)

```mermaid
graph TD
    A --> B
    // Definisi panah di sini hilang
    C --> D
```

File pengujian ini berisi berbagai tipe diagram Mermaid untuk memverifikasi apakah integrasi Mermaid di CZON berfungsi dengan normal.