---
"title": "CZON Site Yapılandırma Kılavuzu"
"summary": "Bu belge, CZON site yapılandırma yöntemlerini ve seçeneklerini ayrıntılı olarak açıklar. Yapılandırma, .czon/meta.json dosyasının options.site alanında bulunur ve site.baseUrl (sitemap.xml ve robots.txt oluşturmak için), site.title (site başlığı, varsayılan değer 'CZON'), site.gaID (Google Analytics Measurement ID) ve site.clarityID (Microsoft Clarity Project ID) içerir. Tüm yapılandırma öğeleri isteğe bağlıdır ve değişikliklerin etkili olması için czon build komutunun yeniden çalıştırılması gerekir. baseUrl yapılandırılmadığında sitemap.xml oluşturma atlanır; analiz araçları yalnızca ilgili ID yapılandırıldığında yüklenir ve sayfa performansını etkilemez. Belge, kullanıcıların siteyi kolayca ayarlamasına yardımcı olmak için yapılandırma konumu, kullanılabilir yapılandırma öğeleri, tam örnek ve dikkat edilmesi gereken noktaları sağlar."
"tags":
  - "CZON"
  - "Site Yapılandırma"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Site Yapılandırması

CZON, `.czon/meta.json` dosyası aracılığıyla site seçeneklerini yapılandırmayı destekler. Bu yapılandırmalar isteğe bağlıdır ve ilk kullanımı engellemez.

## Yapılandırma Konumu

Yapılandırma öğeleri, `.czon/meta.json` dosyasının `options.site` alanında bulunur:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id"
    }
  },
  "files": []
}
```

## Kullanılabilir Yapılandırma Öğeleri

### `site.baseUrl`

Site temel URL'si, sitemap.xml ve robots.txt oluşturmak için kullanılır.

- **Tür**: `string`
- **Biçim**: Tam URL, örn. `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Yapılandırıldığında otomatik olarak oluşturulur:

- `sitemap.xml` - Tüm sayfaları içeren site haritası
- `robots.txt` içindeki Sitemap bildirimi

### `site.title`

Site başlığı, sayfa başlığında görüntülenir.

- **Tür**: `string`
- **Varsayılan Değer**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Belge Sitem"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, Google Analytics istatistiklerini entegre etmek için kullanılır.

- **Tür**: `string`
- **Biçim**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Nasıl Alınır: [Google Analytics](https://analytics.google.com/) adresine gidin, bir özellik oluşturun ve "Veri Akışları" bölümünden Measurement ID'yi alın.

### `site.clarityID`

Microsoft Clarity Project ID, Clarity kullanıcı davranış analizini entegre etmek için kullanılır.

- **Tür**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Nasıl Alınır: [Microsoft Clarity](https://clarity.microsoft.com/) adresine gidin, bir proje oluşturun ve proje ayarlarından Project ID'yi alın.

## Tam Örnek

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Teknik Blog",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Dikkat Edilmesi Gerekenler

- Yapılandırmada yapılan değişikliklerin etkili olması için `czon build` komutunun yeniden çalıştırılması gerekir.
- Tüm `site` yapılandırma öğeleri isteğe bağlıdır, yalnızca ihtiyaç duyulan kısımlar yapılandırılabilir.
- Analiz araçları (GA, Clarity) yalnızca ilgili ID yapılandırıldığında yüklenir ve sayfa performansını etkilemez.
- `baseUrl` yapılandırılmadığında, sitemap.xml oluşturma işlemi atlanır.