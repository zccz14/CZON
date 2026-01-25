---
"title": "Mermaid Diyagram Test Dokümanı"
"summary": "Bu doküman, CZON platformunun Mermaid diyagramları için oluşturma desteğini doğrulamayı amaçlayan bir test dosyasıdır. Dokümanda, akış şeması, sıralı diyagram, Gantt şeması, sınıf diyagramı, durum diyagramı ve pasta grafiği gibi çeşitli Mermaid diyagram türlerinin örnekleri sunulmakta, temel yapılardan karmaşık uygulamalara kadar diyagram tanımlarını göstermektedir. Ayrıca, doküman sistemin hatalı diyagramları işleme yeteneğini doğrulamak için bir hatalı sözdizimi testi içermektedir. Bu örnekler aracılığıyla doküman, CZON platformundaki Mermaid entegrasyonunun işlevselliğini ve sağlamlığını kapsamlı bir şekilde test ederek, diyagramların doğru şekilde oluşturulduğundan ve istisnai durumların işlendiğinden emin olur."
"tags":
  - "Mermaid"
  - "Diyagram Testi"
  - "CZON"
  - "Akış Şeması"
  - "Sıralı Diyagram"
  - "Gantt Şeması"
  - "Sınıf Diyagramı"
  - "Durum Diyagramı"
"date": "2024-01-01"
---

# Mermaid Diyagram Testi

Bu, CZON'daki Mermaid diyagram oluşturma işlevini doğrulamak için kullanılan bir test dosyasıdır.

## Akış Şeması Örneği

```mermaid
graph TD
    A[Başla] --> B{Devam edilsin mi?}
    B -->|Evet| C[İşlemi Gerçekleştir]
    B -->|Hayır| D[Son]
    C --> E[Sonucu Kontrol Et]
    E --> F{Başarılı mı?}
    F -->|Evet| G[Tamamlandı]
    F -->|Hayır| H[Yeniden Dene]
    H --> C
    G --> D
```

## Sıralı Diyagram Örneği

```mermaid
sequenceDiagram
    participant Kullanıcı
    participant Sistem
    participant Veritabanı

    Kullanıcı->>Sistem: İstek Gönder
    Sistem->>Veritabanı: Veri Sorgula
    Veritabanı-->>Sistem: Sonuçları Döndür
    Sistem-->>Kullanıcı: Sonuçları Göster
```

## Gantt Şeması Örneği

```mermaid
gantt
    title Proje Zaman Çizelgesi
    dateFormat  YYYY-MM-DD
    section Tasarım
    Gereksinim Analizi     :done,    des1, 2024-01-01, 7d
    Prototip Tasarımı      :active,  des2, 2024-01-08, 5d
    Detaylı Tasarım        :         des3, after des2, 5d
    section Geliştirme
    Önyüz Geliştirme       :         dev1, after des3, 10d
    Arka Uç Geliştirme     :         dev2, after des3, 15d
    section Test
    Birim Testleri         :         test1, after dev1, 5d
    Entegrasyon Testleri   :         test2, after dev2, 5d
```

## Sınıf Diyagramı Örneği

```mermaid
classDiagram
    class Hayvan {
        +String isim
        +int yaş
        +void ye()
        +void uyu()
    }
    class Köpek {
        +void havla()
    }
    class Kedi {
        +void miyavla()
    }

    Hayvan <|-- Köpek
    Hayvan <|-- Kedi
```

## Durum Diyagramı Örneği

```mermaid
stateDiagram-v2
    [*] --> Boşta
    Boşta --> İşleniyor : İşlemi Başlat
    İşleniyor --> Başarılı : İşlem Başarılı
    İşleniyor --> Hata : İşlem Başarısız
    Başarılı --> [*]
    Hata --> [*]
```

## Pasta Grafiği Örneği

```mermaid
pie title Tarayıcı Kullanım Oranları
    "Chrome" : 65.2
    "Firefox" : 15.3
    "Safari" : 12.5
    "Edge" : 5.2
    "Diğer" : 1.8
```

## Hatalı Sözdizimi Testi (Hata mesajı göstermeli)

```mermaid
graph TD
    A --> B
    // Burada ok tanımı eksik
    C --> D
```

Bu test dosyası, CZON'un Mermaid entegrasyonunun düzgün çalışıp çalışmadığını doğrulamak için çeşitli Mermaid diyagram türlerini içermektedir.