---
"title": "Nesnel ve Tarafsız Stil Analiz Raporu Kılavuzu"
"summary": "Bu belge, nesnel ve tarafsız bir stil analiz raporu oluşturma konusunda bir kılavuzdur. Belge analizi sırasında odaklanılması gereken okuma noktalarını (dosya yolu, tarih, proje adı, kişi rolleri, nesnel gerçekler vb.) ayrıntılı olarak açıklar ve bilgi bankasının yapısını (dosya dizini, proje dizini, kişi dizini, zaman çizelgesi ve teori/çerçeve dizini dahil) tanımlar. Belge ayrıca, içeriği gerektiğinde nasıl sadeleştireceğinize dair sıkıştırma stratejileri sağlar ve aynı zamanda temel dizinlerin korunması gerektiğini vurgular. Stil konumlandırması, içeriği nesnel ve tarafsız bir açıdan tanıtmayı, öznel değerlendirmelerden ve duygusal tonlardan kaçınmayı gerektirir. Hedef kitle yeni okuyucular, potansiyel işbirlikçiler ve yatırımcıları içerir. Belge, yasaklı uygulamaları (duygusal ifadeler veya spekülasyonlar eklememek gibi) ve gerekli bölüm yapısını (genel bakış, proje tanıtımı, ana temalar, zaman çizelgesi, ana kişiler ve teori/çerçeve özeti gibi) listeler ve çıktı dosyasını ile kalite kontrol listesini belirtir."
"tags":
  - "Belge Analizi"
  - "Nesnel ve Tarafsız"
  - "Bilgi Bankası Yapısı"
  - "Bilgi Çıkarımı"
  - "Stil Kılavuzu"
  - "Rapor Yazımı"
  - "Yapılandırılmış Veri"
---

# Nesnel ve Tarafsız Stil Analiz Raporu

## Okuma Odak Noktaları

Her dosyayı okurken, aşağıdakileri çıkarmaya odaklanın:

- Dosya yolu ve başlığı
- Tarih bilgileri
- İlgili proje adları ve işlev açıklamaları
- Bahsedilen kişiler ve rolleri
- Nesnel gerçekler ve veriler
- Sürüm numaraları, kilometre taşları gibi spesifik bilgiler

**Göz ardı edin**: Öznel değerlendirmeler, duygusal ifadeler, spekülatif içerik

## Bilgi Bankası Yapısı

```
### Dosya Dizini
| Dosya Yolu | Başlık | Tarih |
|------------|--------|-------|

### Proje Dizini
| Proje Adı | Açıklama | İlgili Dosyalar |
|-----------|----------|-----------------|

### Kişi Dizini
| Kişi | Rol | İlgili Dosyalar |
|------|-----|-----------------|

### Zaman Çizelgesi
| Tarih | Olay | Kaynak Dosya |
|-------|------|--------------|

### Teori/Çerçeve Dizini
| İsim | Temel Fikir | Kaynak Dosya |
|------|-------------|--------------|
```

## Sıkıştırma Stratejisi

Bilgi bankasını sıkıştırmanız gerektiğinde:

1.  **Korunmalıdır**: Dosya dizini (yol+başlık), Proje dizini, Kişi dizini
2.  **Sadeleştirilebilir**: Zaman çizelgesi (ana düğüm noktaları korunur), Teori dizini (isim ve kaynak korunur)
3.  **Atılabilir**: Detaylı açıklamalar, ikincil olaylar

---

## Stil Konumlandırması

İçeriği nesnel ve tarafsız bir açıdan tanıtın, öznel değerlendirmelerden ve duygusal tonlardan kaçının. Gerçeklere ve verilere vurgu yapın, bilgilerin doğruluğunu ve güvenilirliğini sağlayın.

**Hedef Kitle**: Deponun tamamını hızlıca anlaması gereken yeni okuyucular, potansiyel işbirlikçiler, yatırımcılar
**Yazım Tonu**: Profesyonel, ölçülü, nötr; özgeçmiş veya CV yazıyormuş gibi
**Amaç**: Okuyucunun içeriğin temel bilgilerini ve ana fikirlerini kapsamlı bir şekilde anlamasına ve kendi yargısını oluşturmasına yardımcı olmak

## Yasaklı Uygulamalar

- ❌ Duygusal ifadeler eklemeyin (ör. "heyecan verici", "ne yazık ki")
- ❌ Spekülasyon yapmayın (ör. "muhtemelen", "belki", "yaklaşık olarak")
- ❌ Öznel değerlendirme kelimeleri kullanmayın (ör. "mükemmel", "kötü", "ilginç")
- ❌ İyi/kötü veya üstünlük/değersizlik değerlendirmesi yapmayın
- ❌ Birinci tekil şahıs kullanmayın

## Gerekli Bölüm Yapısı

### Genel Bakış

- Depo sahibi tanıtımı (İsim/Kullanıcı Adı, kimlik, ana alanlar)
- Depo içeriğinin zaman aralığı
- Ana proje listesi (kısaca sıralayın)

### Proje Tanıtımı

Her ana proje için aşağıdaki yapıyı kullanın:

```markdown
### [Proje Adı]

- **Köken**: Projenin kaynağı ve arka planı
- **Temel İşlevler**:
  - İşlev noktası 1
  - İşlev noktası 2
- **Sürüm Yinelemeleri**: Sürüm geçmişi varsa, kısaca açıklayın
- **İlgili Dosyalar**: [Makale Başlığı](../path/to/file.md)
```

### Ana Temalar

İçeriği temaya göre sınıflandırın ve düzenleyin:

```markdown
### 1. [Tema Adı]

- [Makale Başlığı1](../path/to/file1.md): Temel fikir özeti
- [Makale Başlığı2](../path/to/file2.md): Temel fikir özeti
```

### Zaman Çizelgesi

Anahtar olayları göstermek için tablo formatını kullanın:

```markdown
| Tarih       | Anahtar Olay             |
| ----------- | ------------------------ |
| YYYY-AA-GG | Olay açıklaması (nesnel ifade) |
```

### Ana Kişiler

Tablo formatını kullanın:

```markdown
| Kişi      | Rol        | Notlar             |
| --------- | ---------- | ------------------ |
| İsim/Kullanıcı Adı | Pozisyon/İlişki | İlgili nesnel bilgiler |
```

### Teori/Çerçeve Özeti

Depoda önerilen teori/çerçeveler için:

```markdown
### [Çerçeve Adı]

- **Temel Fikir**: Tek cümleyle özetleyin
- **Anahtar Unsurlar**: Temel bileşenleri listeleyin
- **Matematiksel İfade**: Formül varsa, listeyin
```

## Çıktı Dosyası

`SUMMARY/1-objective.md`

## Kalite Kontrol Listesi

- [ ] Öznel değerlendirme kelimeleri yok
- [ ] Duygusal ifadeler yok
- [ ] Tüm bağlantılar belirli dosyalara yönlendiriyor
- [ ] Bağlantı metinleri makale başlığı
- [ ] Tüm gerekli bölümler mevcut
- [ ] Zaman çizelgesi ve kişi tablolarının formatı doğru