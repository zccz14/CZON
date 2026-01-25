---
"title": "CZON - AI-Native Markdown İçerik Motoru"
"summary": "CZON, içerik üreticilerinin yazma sürecini basitleştirmesine yardımcı olmak için tasarlanmış, AI-native bir Markdown içerik motorudur. Sıfır yapılandırmalı yazmayı vurgular; başlık oluşturma, özet çıkarma, etiket sınıflandırma, çok dilli çeviri ve site navigasyonu gibi görevleri derinlemesine entegre AI teknolojisi ile otomatik olarak işleyerek kullanıcı müdahalesini azaltır. CZON, statik site oluşturma işlevselliği içerir, ancak esas olarak içerik oluşturma ve yönetime odaklanır, karmaşık tema özelleştirmelerine değil. Ana dilinde yazıp otomatik olarak çok dilli sürümler oluşturmak isteyen, özellikle karmaşık yapılandırmalardan nefret eden web sitesi içerik üreticileri için uygundur."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "İçerik Motoru"
  - "Çok Dilli Çeviri"
  - "Statik Site Oluşturma"
  - "Sıfır Yapılandırma"
  - "İçerik Oluşturma"
---

![CZON Logosu](logo.png)

# CZON - AI-Native Markdown İçerik Motoru

- **C**: **C**ontent oriented | İçerik Kraldır, İçeriğe Odaklan
- **Z**: **Z**ero Configuration | Sıfır Yapılandırmalı Yazma, Rahatsızlığı Azalt
- **O**: **O**rganic AI-Native | Organik AI-Native, AI'ı Derinlemesine Entegre Et
- **N**: **N**-shaped Energy Curve | N Şekilli Enerji Eğrisi, Oluşturma-Dağıtım-Geri Bildirim Süreçlerinin Her Aşamasına Dahil Ol

[> Web Sitesi Demosu](https://czon.zccz14.com/)

AI çağında, web sitesi içerik üreticileri olarak daha akıllı bir içerik oluşturma motoruna sahip olabiliriz.

**İçeriğe Dönüş: Rahatsızlığı En Aza İndir, Yazmaya Odaklan**

Belgeleri özüne döndür, yazmayı huzura kavuştur.

Birincisi, kütüphaneci olmak istemiyorum. Bazen bir şeyler yazmak istiyorum ama henüz başlığını düşünmemiş, özel bir organizasyon oluşturmamış olabilirim. LLM'nin başlık oluşturma, özet çıkarma, sınıflandırma, navigasyon gibi düzenleme işlerini otomatik olarak yapmasını umuyorum.

İkincisi, çalışma odam temiz olmalı. Karmaşık yapılandırmalı derleme araçları, karmaşık belge ayarlarıyla uğraşmak, karmaşık yapıları istemiyorum. Docusaurus, VuePress, Astro gibi araçların yapılandırma dosyalarını ve proje yapılarını her gördüğümde başım ağrıyor. Şimdi, CZON tüm yapılandırmaları `.czon` dizini altına gizlemeyi, köşeye süpürmeyi seçiyor; kullanıcı sadece yazma içeriğine odaklanıyor, gerisini CZON hallediyor. Diğer tüm dizinler sizin yazma alanınız, Markdown dosyalarınızı istediğiniz gibi düzenleyebilirsiniz.

**Ana Dile Dönüş: Ana Dilinde Yaz, Akıcı Çok Dilli Sürümler Oluştur**

Hayat kısa, çeviri yapmaya üşeniyorum. İnsan ana dilini kullanırken düşünme derinliğini en iyi şekilde ortaya koyar. Ancak aynı zamanda dünyayla bağlantıda kalmak da gereklidir, çok dilli iletişimi bırakmak istemiyorum. Bu yüzden, ana dilimde yazmama izin veren, aynı zamanda içeriğimi daha fazla kişinin görmesini sağlayan bir araç istiyorum. Mevcut i18n sadece kendi çevirinizi yapmanızı gerektirmekle kalmıyor, aynı zamanda içerik güncellemelerini de kendiniz yönetmek zorunda kalıyorsunuz, bu çok zahmetli. Çevirilerimi yapması için LLM kullanmayı seçiyorum, bu bana çok zaman kazandırıyor ve tek tıkla birden fazla dilde çeviri yapılabiliyor.

## Temel Özellikler

1. 🌍 **Otomatik Çok Dilli Çeviri**: Kullanıcıların ana dilinde Markdown yazmasına izin verirken, kullanıcıların çok dilli olmasını sağlamak için AI kullanarak artımlı çeviri yapar.
2. 💭 **Otomatik Özet Çıkarma**: Orijinal metni analiz etmek ve özet çıkarmak için AI kullanır.
3. 🏷️ **Otomatik Etiket Sınıflandırma**: İçeriğin etiketlenmesi ve sınıflandırılması için AI kullanarak çıkarma ve yönetim sağlar.
4. 🧭 **Akıllı Sınıflandırma Navigasyonu**: Site haritası ve navigasyon oluşturmak için AI kullanır, kaynak dosyaların konumu önemli değildir.

## Statik Site Oluşturma (SSG)

CZON, Markdown içeren herhangi bir git klasörünü statik bir HTML sitesine dönüştürebilen dahili bir SSG çözümüne sahiptir.

⚠️ Lütfen dikkat: CZON profesyonel bir statik site oluşturucu (SSG) değildir; AI destekli, içerik oluşturma ve yönetime odaklanan bir Markdown içerik motorudur.

✅ CZON, içerik oluşturma ve yayınlama sürecini basitleştirmeyi, kullanıcıların karmaşık yapılandırma ve araçlarla boğuşmak yerine yazmanın kendisine odaklanabilmesini amaçlar.

❌ CZON, karmaşık tema özelleştirmeleri veya eklenti ekosistemi sunmaz; bunun yerine AI aracılığıyla içeriğin kalitesini ve erişilebilirliğini artırmaya odaklanır.

🔔 Ancak, gerekirse CZON yine de statik bir site oluşturabilir. CZON'u bir ön işlemci olarak kullanıp diğer SSG çözümleriyle entegre ederek kişiselleştirilmiş, güzel siteler oluşturabilirsiniz.

## Hızlı Başlangıç

Ön Koşullar:

- [Node.js](https://nodejs.org/) kurulu olmalı (önerilen sürüm 18 ve üzeri, npx komutu gereklidir)
- [OpenAI API Anahtarı](https://platform.openai.com/account/api-keys) veya OPENAI uyumlu bir API Anahtarı edinilmiş olmalı
- Git kurulu olmalı (Git'ten Markdown dosyalarını listelemek ve .gitignore kurallarıyla filtrelenen dosyaları yok saymak için)

İlk olarak, zaten git ile yönetilen bir klasörde çalışın:

Ortam değişkenlerini yapılandırın

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Zorunlu: Lütfen kendi OpenAI API Anahtarınızla değiştirin
export OPENAI_BASE_URL="https://api.openai.com/v1"  # İsteğe bağlı, varsayılan olarak OpenAI resmi API'sini kullanır
export OPENAI_MODEL="gpt-3.5-turbo"  # İsteğe bağlı, varsayılan olarak gpt-3.5-turbo modelini kullanır
export OPENAI_MAX_TOKENS="4096"  # İsteğe bağlı, maksimum token sınırını ayarlar (yok sayılırsa modelin varsayılan değeri kullanılır, uzun metin çevirileri için daha yüksek bir değer, örn. 8192, ayarlanması önerilir; bu, kullanılan modelin desteklediği maksimum token sayısına bağlıdır)
```

Siteyi oluşturun, çok dilli çeviriyi destekler. Kaynak dizin olarak geçerli dizini kullanır, çıktıyı `.czon/dist` dizinine yazar.

- Oluşturulacak dil sürümlerini belirtmek için `--lang` parametresi birden fazla kez kullanılabilir (örneğin `--lang zh-Hans --lang en-US`).
- Kaynak dili yapılandırmaya gerek yoktur, CZON otomatik olarak algılar.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Daha fazla parametre veya yardım için**:

```bash
npx czon@latest
```