---
"title": "CZON Özel Stil Kılavuzu"
"summary": "Bu belge, CZON projesinde özel stillerin nasıl oluşturulacağını detaylandırır. Projenin .czony dizini altında style.css dosyası oluşturarak ve CSS kodu yazarak, varsayılan stilleri geçersiz kılabilir veya kişiselleştirilmiş bir görünüm ekleyebilirsiniz. Belge, CZON'un derleme sırasında bu dosyayı tespit edip çıktı dizinine kopyaladığını ve her HTML sayfasına stil bağlantısı ekleyerek özel stillerin yerleşik stillerden sonra yüklenmesini sağladığını açıklar. Belgede, arka plan rengi, metin rengi, bağlantı rengi gibi kullanılabilir CSS değişkenlerinin bir listesi sunulur ve özel marka rengi, içerik alanı genişliğini ayarlama, kod blokları stilini özelleştirme ve belirli öğeleri gizleme gibi birden fazla pratik örnek gösterilir. Son olarak, dosya adının style.css olması gerektiği, değişikliklerden sonra yeniden derleme yapılması gerektiği, CSS değişkenlerini geçersiz kılmanın önerildiği ve CZON'un Tailwind CSS kullanırken !important kullanmanın gerekebileceği gibi dikkat edilmesi gereken noktalar vurgulanır."
"tags":
  - "CZON"
  - "Özel Stil"
  - "CSS"
  - "Frontend Geliştirme"
  - "Web Sitesi Oluşturma"
  - "Stil Geçersiz Kılma"
  - "CSS Değişkenleri"
  - "Tailwind CSS"
---

# Özel Stil

CZON, `.czon/style.css` dosyası aracılığıyla site stilini özelleştirmeyi destekler, böylece varsayılan stilleri geçersiz kılabilir veya kişiselleştirilmiş bir görünüm ekleyebilirsiniz.

## Kullanım Yöntemi

1. Projenizin `.czon` dizini altında `style.css` dosyasını oluşturun:

```
projeniz/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Bu dosyayı oluşturun
├── README.md
└── docs/
```

2. `style.css` dosyasında özel CSS kodunuzu yazın:

```css
/* Örnek: Bağlantı rengini değiştirme */
:root {
  --link-color: #0066cc;
}

/* Örnek: Karanlık modda arka planı değiştirme */
html.dark {
  --bg-primary: #0d1117;
}
```

3. `czon build` komutunu yeniden çalıştırın, özel stiller otomatik olarak tüm sayfalara uygulanacaktır.

## Çalışma Prensibi

- Derleme sırasında, CZON `.czon/style.css` dosyasının var olup olmadığını tespit eder.
- Eğer varsa, onu çıktı dizinine `.czon/dist/style.css` olarak kopyalar.
- Oluşturulan her HTML sayfasında, `<head>` içine bir stil bağlantısı eklenir:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Özel stiller, yerleşik stillerden sonra yüklendiği için varsayılan stilleri geçersiz kılabilir.

## Kullanılabilir CSS Değişkenleri

CZON, tema renklerini tanımlamak için CSS değişkenlerini kullanır. Bu değişkenleri geçersiz kılarak renk düzenini hızlıca ayarlayabilirsiniz:

```css
:root {
  /* Arka plan renkleri */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Metin renkleri */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Bağlantı ve vurgu renkleri */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Kenarlık rengi */
  --border-color: #dee2e6;
}

/* Karanlık mod değişkenleri */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## Örnekler

### Özel Marka Rengi

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### İçerik Alanı Genişliğini Ayarlama

```css
.content {
  max-width: 60rem;
}
```

### Kod Blokları Stilini Özelleştirme

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Belirli Öğeleri Gizleme

```css
/* Sağ taraftaki içindekiler çubuğunu gizleme */
.sidebar-right {
  display: none;
}
```

## Dikkat Edilmesi Gerekenler

- Özel stil dosyasının adı `style.css` olmalıdır ve `.czon/` dizini altında bulunmalıdır.
- Stil değişikliklerinin etkili olması için `czon build` komutunu yeniden çalıştırmanız gerekir.
- Hem açık hem de karanlık modla uyumlu olması için stil özelleştirmesinde CSS değişkenlerini geçersiz kılma yöntemi önerilir.
- CZON, Tailwind CSS kullanır. Eğer Tailwind tarafından oluşturulan stilleri geçersiz kılmanız gerekiyorsa, `!important` kullanmanız gerekebilir.