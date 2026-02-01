---
"title": "دليل إعداد موقع CZON"
"summary": "يشرح هذا المستند بالتفصيل طرق وخيارات إعداد موقع CZON. يقع الإعداد في حقل `options.site` في ملف `.czon/meta.json`، ويتضمن `site.baseUrl` (لإنشاء `sitemap.xml` و `robots.txt`)، و `site.title` (عنوان الموقع، القيمة الافتراضية هي 'CZON')، و `site.gaID` (معرف قياس Google Analytics)، و `site.clarityID` (معرف مشروع Microsoft Clarity). جميع عناصر الإعداد اختيارية، ويجب إعادة تشغيل `czon build` بعد التعديلات لتصبح سارية المفعول. سيتم تخطي إنشاء `sitemap.xml` إذا لم يتم تكوين `baseUrl`، ولن يتم تحميل أدوات التحليل إلا بعد تكوين المعرف المقابل، دون التأثير على أداء الصفحة. يقدم المستند موقع الإعداد، وعناصر الإعداد المتاحة، ومثالاً كاملاً، وملاحظات مهمة لمساعدة المستخدمين على إعداد موقعهم بسهولة."
"tags":
  - "CZON"
  - "إعداد الموقع"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# إعداد الموقع

يدعم CZON تكوين خيارات الموقع من خلال ملف `.czon/meta.json`. هذه الإعدادات اختيارية ولا تعيق الاستخدام الأولي.

## موقع الإعداد

توجد عناصر الإعداد في حقل `options.site` في ملف `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "home": "guide.html",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "الرئيسية", "href": "index.html" },
        { "title": "حول", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## عناصر الإعداد المتاحة

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
- إعلان Sitemap في `robots.txt`

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

طريقة الحصول عليه: انتقل إلى [Google Analytics](https://analytics.google.com/) وأنشئ ملكية، ثم احصل على Measurement ID من قسم "تدفقات البيانات".

### `site.clarityID`

معرف مشروع Microsoft Clarity، لدمج تحليل سلوك المستخدم في Clarity.

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

### `site.home`

إعداد مسار الصفحة الرئيسية، لتخصيص هدف التوجيه للصفحة الرئيسية.

- **النوع**: `string`
- **القيمة الافتراضية**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**شرح السلوك**:

- **عند زيارة الصفحة الرئيسية الجذرية**: عندما يزور المستخدم `/index.html`، سيتم توجيهه تلقائيًا إلى `/{اللغة المكتشفة}/{home}` بناءً على لغة المتصفح.
- **عند النقر على عنوان Header**: سيتم التوجيه إلى مسار `home` ضمن دليل اللغة الحالية.

**حالات الاستخدام**:

- الرغبة في أن يدخل المستخدم مباشرة إلى صفحة معينة عند زيارته الأولى (مثل دليل البدء، أو مقدمة المنتج، إلخ).
- أن تكون الصفحة الرئيسية للموقع ليست قائمة مقالات، بل صفحة وثائق محددة.

### `site.navLinks`

إعداد روابط التنقل السريع، لعرض روابط التنقل في رأس الصفحة.

- **النوع**: `Array<{ title: string, href: string }>`
- **القيمة الافتراضية**: `undefined` (لا يتم عرض التنقل)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "الرئيسية", "href": "index.html" },
        { "title": "الوثائق", "href": "docs.html" },
        { "title": "حول", "href": "about.html" }
      ]
    }
  }
}
```

**السلوك المتجاوب**:

- **الأجهزة المحمولة**: عرض أيقونة قائمة همبرغر، والنقر عليها لتوسيع جميع روابط التنقل.
- **أجهزة سطح المكتب**: عرض روابط التنقل مباشرة في Header، ولكن لا تتجاوز 40% من عرض الشاشة؛ يتم عرض الأجزاء الزائدة من خلال قائمة منسدلة "المزيد".

## مثال كامل

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "مدونة تقنية",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "الرئيسية", "href": "index.html" },
        { "title": "الوثائق", "href": "docs.html" },
        { "title": "المدونة", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## ملاحظات مهمة

- يجب إعادة تشغيل `czon build` بعد تعديل الإعدادات لتصبح سارية المفعول.
- جميع عناصر إعداد `site` اختيارية، يمكنك تكوين الأجزاء التي تحتاجها فقط.
- لن يتم تحميل أدوات التحليل (GA، Clarity) إلا بعد تكوين المعرف المقابل، ولا تؤثر على أداء الصفحة.
- سيتم تخطي إنشاء `sitemap.xml` إذا لم يتم تكوين `baseUrl`.