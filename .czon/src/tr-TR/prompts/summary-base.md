---
"title": "Yapay Zeka Analiz Raporu Oluşturma Temel Kuralları"
"summary": "Bu belge, Yapay Zeka analiz raporu oluşturma için temel kuralları sağlar ve dosya listesi alımı, gruplar halinde okuma ve özetleme, bağlam yönetimi, bütünlük doğrulama ve rapor oluşturma olmak üzere beş aşamadan oluşan belge okuma sürecinin kesinlikle takip edilmesini vurgular. Temel ilkeler, tüm dosyaların teker teker okunması, gerçeklere dayanma, bağlantı referanslarının standartlaştırılması, zaman ağırlığının dikkate alınması gibi unsurları içerir. Genel kurallar, raporun belirli bir formatta başlamasını, belirlenen dizine çıktı verilmesini ve tüm dosyalar okunmadan rapor oluşturulmasını veya herhangi bir dosyanın atlanmasını yasaklar."
"tags":
  - "Yapay Zeka Analizi"
  - "Rapor Oluşturma"
  - "Belge Okuma"
  - "Kurallar"
  - "Markdown"
  - "Gerçeklere Dayalılık"
  - "Referans Standardı"
  - "Süreç Yönetimi"
---

# Yapay Zeka Analiz Raporu Oluşturma - Temel Kurallar

## Belge Okuma Süreci (Kesinlikle Takip Edilmelidir)

### Temel İlkeler

Bu depo yüzlerce, binlerce Markdown dosyası içerebilir. **Her dosyayı teker teker okumalısınız**, atlama yapmamalısınız.
Çok sayıda dosyayı işlemek için **aşamalı okuma ve özetleme** stratejisi kullanılır.

### Aşama 1: Tam Dosya Listesini Al

1. Tüm Markdown dosyalarını almak için `npx czon@latest ls-files` komutunu çalıştırın
2. Toplam dosya sayısını N olarak kaydedin
3. Dosya listesini okunacak kuyruk olarak kaydedin

### Aşama 2: Gruplar Halinde Okuma ve Özetleme

Dosyaları gruplar halinde işleyin. Her grup için 10-20 dosya önerilir, ancak dosya boyutuna ve karmaşıklığına göre ayarlama yapabilirsiniz.

**Her grup için:**

1.  **Oku**: Read aracını kullanarak grubun her dosyasının tam içeriğini teker teker okuyun
2.  **Çıkar**: **Mevcut tarzın odak noktalarına** (aşağıdaki tarz kılavuzuna bakın) göre ilgili bilgileri çıkarın
3.  **Grup Özeti**: Gruba ait çıkarılan bilgileri yapılandırılmış bir özet halinde düzenleyin
4.  **Biriktir**: Grup özetini "Bilgi Bankası"na ekleyin (bilgi bankası yapısı için aşağıdaki tarz kılavuzuna bakın)

### Aşama 3: Bağlam Yönetimi

Bağlam sınırına yaklaşıldığında:

1.  **Bilgi Bankasını Sıkıştır**: **Mevcut tarzın sıkıştırma stratejisine** (aşağıdaki tarz kılavuzuna bakın) göre bilgi bankasını sıkıştırın
2.  **Dizini Koru**: Ne kadar sıkıştırılırsa sıkıştırılsın, tüm dosyaların yol ve başlık dizini korunmalıdır
3.  **Okumaya Devam Et**: Sıkıştırılmış bilgi bankasını kullanarak kalan dosyaları işlemeye devam edin

### Aşama 4: Bütünlük Doğrulama

Rapor oluşturmadan önce şunları doğrulamalısınız:

1.  Dosya listesindeki tüm N dosya işlenmiş olmalı
2.  Bilgi bankası her dosya için temel bilgileri (en azından yol ve başlık) içermeli

**Eksik bulunursa**: Aşama 2'ye dönerek eksik dosyaları işleyin.

### Aşama 5: Rapor Oluşturma

Ancak yukarıdaki tüm aşamalar tamamlandıktan sonra rapor oluşturmaya başlayabilirsiniz.

### Yasaklanan Davranışlar

-   ❌ Tüm dosyalar okunmadan rapor oluşturmaya başlanmamalı
-   ❌ Dosya sayısı ne olursa olsun hiçbir dosya atlanmamalı
-   ❌ Sadece bazı dosyalar okunarak "tüm resim anlaşıldı" iddiasında bulunulmamalı
-   ❌ Bilgi bankasında var olmayan dosya veya içerik uydurulmamalı

---

## Genel Kurallar

### 1. Gerçeklere Dayalılık İlkesi

-   Gerçek içeriğe dayanın, gerçeklerden kopuk durumlar olmamalı
-   Tüm görüşler orijinal metinle desteklenmeli
-   Var olmayan içerik uydurulmamalı

### 2. Referans Bağlantı Standardı

-   Orijinal metin bağlantıları referans gösterilirken, bağlantıların geçerli olduğundan emin olun
-   **Her zaman belirli Markdown dosyalarına bağlantı verin**, dizinlere bağlantı vermeyin
-   **Bağlantı metni dosya adı değil, ilgili başlık olmalı**
-   SUMMARY dizinine oluşturulduğu için, referans verirken `../` ile başlayan göreli yollar kullanın

**Doğru Örnek**:

```markdown
[Sermaye Uzun Vadeli Savaşı: Bireysel Yatırımcının Sınıf Atlama Stratejisi](../INSIGHTS/6.md)
[Yaratımdan Dağıtıma – Yapay Zeka-Yerli İçerik Motoru İnşa Etmek](../INSIGHTS/4.md)
```

**Yanlış Örnek**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Dosya adı kullanıldı, başlık değil
[Sermaye Uzun Vadeli Savaşı](../INSIGHTS/) ← Dizine bağlantı verildi
```

### 3. Başlık Formatı

Her rapor aşağıdaki formatta başlamalıdır:

```markdown
# [Rapor Başlığı]

**Yapay Zeka Analiz Zamanı**: YYYYAAAGG
**Not**: Bu rapor Yapay Zeka tarafından oluşturulmuştur, içerik sadece referans amaçlıdır.

---
```

### 4. Zaman Ağırlığı

-   Zaman aralığını dikkate alın, daha yeni makalelere daha yüksek ağırlık verin
-   Ancak daha eski önemli içerikleri göz ardı etmeyin

### 5. Çıktı Konumu

-   Tüm raporlar `SUMMARY/` dizinine oluşturulmalıdır
-   Dosya adları belirtilen formata göre adlandırılmalıdır