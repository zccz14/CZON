---
"title": "دليل تكوين موقع CZON"
"summary": "يشرح هذا المستند بالتفصيل طرق وخيارات تكوين موقع CZON. يقع التكوين في حقل `options.site` بملف `.czon/meta.json`، ويتضمن `site.baseUrl` (لإنشاء `sitemap.xml` و `robots.txt`)، و `site.title` (عنوان الموقع، القيمة الافتراضية هي 'CZON')، و `site.gaID` (معرف قياس Google Analytics) و `site.clarityID` (معرف مشروع Microsoft Clarity). جميع عناصر التكوين اختيارية، ويجب إعادة تشغيل `czon build` بعد التعديلات لتصبح سارية المفعول. سيتم تخطي إنشاء `sitemap.xml` إذا لم يتم تكوين `baseUrl`، ولن يتم تحميل أدوات التحليل إلا بعد تكوين المعرف المقابل، دون التأثير على أداء الصفحة. يقدم المستند موقع التكوين، وعناصر التكوين المتاحة، ومثالاً كاملاً، وملاحظات مهمة لمساعدة المستخدمين على إعداد موقعهم بسهولة."
"tags":
  - "CZON"
  - "تكوين الموقع"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# تكوين الموقع

يدعم CZON تكوين خيارات الموقع عبر ملف `.czon/meta.json`. هذه الإعدادات اختيارية ولا تعيق الاستخدام الأولي.

## موقع التكوين

توجد عناصر التكوين في حقل `options.site` بملف `.czon/meta.json`:

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

## عناصر التكوين المتاحة

### `site.baseUrl`

عنوان URL الأساسي للموقع، يُستخدم لإنشاء `sitemap.xml` و `robots.txt`.

- **النوع**: `string`
- **التنسيق**: عنوان URL كامل، مثل `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

سيتم إنشاء ما يلي تلقائيًا بعد التكوين:

- `sitemap.xml` - خريطة الموقع التي تحتوي على جميع الصفحات
- إعلان Sitemap داخل ملف `robots.txt`

### `site.title`

عنوان الموقع، يظهر في رأس الصفحة.

- **النوع**: `string`
- **القيمة الافتراضية**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "موقع وثائقي"
    }
  }
}
```

### `site.gaID`

معرف قياس Google Analytics، لدمج إحصائيات Google Analytics.

- **النوع**: `string`
- **التنسيق**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

طريقة الحصول عليه: انتقل إلى [Google Analytics](https://analytics.google.com/) وأنشئ موردًا، ثم احصل على Measurement ID من قسم "تدفقات البيانات".

### `site.clarityID`

معرف مشروع Microsoft Clarity، لدمج تحليل سلوك المستخدم عبر Clarity.

- **النوع**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

طريقة الحصول عليه: انتقل إلى [Microsoft Clarity](https://clarity.microsoft.com/) وأنشئ مشروعًا، ثم احصل على Project ID من إعدادات المشروع.

## مثال كامل

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "مدونة تقنية",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## ملاحظات مهمة

- يجب إعادة تشغيل `czon build` بعد تعديل التكوين لتصبح التغييرات سارية المفعول.
- جميع عناصر تكوين `site` اختيارية، يمكنك تكوين الأجزاء التي تحتاجها فقط.
- لن يتم تحميل أدوات التحليل (GA، Clarity) إلا بعد تكوين المعرف المقابل، دون التأثير على أداء الصفحة.
- سيتم تخطي إنشاء `sitemap.xml` إذا لم يتم تكوين `baseUrl`.