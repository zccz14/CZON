---
"title": "คู่มือการตั้งค่าสำหรับไซต์ CZON"
"summary": "เอกสารนี้อธิบายวิธีการและตัวเลือกในการตั้งค่าไซต์ CZON โดยละเอียด การตั้งค่าอยู่ในฟิลด์ `options.site` ของไฟล์ `.czon/meta.json` ซึ่งรวมถึง `site.baseUrl` (ใช้สำหรับสร้าง `sitemap.xml` และ `robots.txt`), `site.title` (ชื่อไซต์ ค่าเริ่มต้นคือ 'CZON'), `site.gaID` (Google Analytics Measurement ID) และ `site.clarityID` (Microsoft Clarity Project ID) การตั้งค่าทั้งหมดเป็นตัวเลือก และหลังจากแก้ไขแล้วต้องรันคำสั่ง `czon build` อีกครั้งจึงจะมีผล หากไม่ได้กำหนดค่า `baseUrl` จะข้ามการสร้าง `sitemap.xml` เครื่องมือวิเคราะห์จะโหลดก็ต่อเมื่อกำหนดค่า ID ที่เกี่ยวข้องแล้วเท่านั้น ซึ่งจะไม่ส่งผลกระทบต่อประสิทธิภาพของหน้าเว็บ เอกสารนี้ให้ข้อมูลเกี่ยวกับตำแหน่งการตั้งค่า ตัวเลือกการตั้งค่าที่ใช้ได้ ตัวอย่างแบบสมบูรณ์ และข้อควรระวัง เพื่อช่วยให้ผู้ใช้สามารถตั้งค่าไซต์ได้อย่างง่ายดาย"
"tags":
  - "CZON"
  - "การตั้งค่าไซต์"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# การตั้งค่าไซต์

CZON รองรับการตั้งค่าตัวเลือกไซต์ผ่านไฟล์ `.czon/meta.json` การตั้งค่าเหล่านี้เป็นตัวเลือกและจะไม่ขัดขวางการใช้งานครั้งแรก

## ตำแหน่งการตั้งค่า

ตัวเลือกการตั้งค่าอยู่ในฟิลด์ `options.site` ของไฟล์ `.czon/meta.json`:

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "หน้าแรก", "href": "index.html" },
        { "title": "เกี่ยวกับ", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## ตัวเลือกการตั้งค่าที่ใช้ได้

### `site.baseUrl`

URL ฐานของไซต์ ใช้สำหรับสร้าง `sitemap.xml` และ `robots.txt`

- **ประเภท**: `string`
- **รูปแบบ**: URL แบบสมบูรณ์ เช่น `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

หลังจากตั้งค่าแล้วจะสร้างไฟล์ต่อไปนี้โดยอัตโนมัติ:

- `sitemap.xml` - แผนที่ไซต์ที่รวมหน้าทั้งหมด
- คำประกาศ Sitemap ในไฟล์ `robots.txt`

### `site.title`

ชื่อไซต์ แสดงที่ส่วนหัวของหน้า

- **ประเภท**: `string`
- **ค่าเริ่มต้น**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "เว็บไซต์เอกสารของฉัน"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID ใช้สำหรับรวม Google Analytics เพื่อการวิเคราะห์สถิติ

- **ประเภท**: `string`
- **รูปแบบ**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

วิธีรับ: ไปที่ [Google Analytics](https://analytics.google.com/) เพื่อสร้างทรัพย์สินสื่อ และรับ Measurement ID ในส่วน "สตรีมข้อมูล"

### `site.clarityID`

Microsoft Clarity Project ID ใช้สำหรับรวม Clarity เพื่อวิเคราะห์พฤติกรรมผู้ใช้

- **ประเภท**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

วิธีรับ: ไปที่ [Microsoft Clarity](https://clarity.microsoft.com/) เพื่อสร้างโปรเจกต์ และรับ Project ID ในการตั้งค่าโปรเจกต์

### `site.navLinks`

การตั้งค่าลิงก์นำทางด่วน แสดงลิงก์นำทางที่ส่วนหัวของหน้า

- **ประเภท**: `Array<{ title: string, href: string }>`
- **ค่าเริ่มต้น**: `undefined` (ไม่แสดงการนำทาง)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "หน้าแรก", "href": "index.html" },
        { "title": "เอกสาร", "href": "docs.html" },
        { "title": "เกี่ยวกับ", "href": "about.html" }
      ]
    }
  }
}
```

**พฤติกรรมตอบสนอง**:

- **อุปกรณ์เคลื่อนที่**: แสดงไอคอนเมนูแฮมเบอร์เกอร์ คลิกเพื่อขยายลิงก์นำทางทั้งหมด
- **เดสก์ท็อป**: แสดงลิงก์นำทางโดยตรงในส่วน Header แต่ไม่เกิน 40% ของความกว้างหน้าจอ ส่วนที่เกินจะแสดงผ่านเมนูแบบเลื่อนลง "เพิ่มเติม"

## ตัวอย่างแบบสมบูรณ์

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "บล็อกเทคนิค",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "หน้าแรก", "href": "index.html" },
        { "title": "เอกสาร", "href": "docs.html" },
        { "title": "บล็อก", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## ข้อควรระวัง

- หลังจากแก้ไขการตั้งค่าแล้ว ต้องรันคำสั่ง `czon build` อีกครั้งจึงจะมีผล
- ตัวเลือกการตั้งค่าทั้งหมดใน `site` เป็นตัวเลือก สามารถกำหนดค่าเฉพาะส่วนที่ต้องการได้
- เครื่องมือวิเคราะห์ (GA, Clarity) จะโหลดก็ต่อเมื่อกำหนดค่า ID ที่เกี่ยวข้องแล้วเท่านั้น ซึ่งจะไม่ส่งผลกระทบต่อประสิทธิภาพของหน้าเว็บ
- หากไม่ได้กำหนดค่า `baseUrl` จะข้ามการสร้าง `sitemap.xml`