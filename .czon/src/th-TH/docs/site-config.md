---
"title": "คู่มือการตั้งค่าสถานี CZON"
"summary": "เอกสารนี้อธิบายวิธีการและตัวเลือกในการตั้งค่าสถานี CZON โดยละเอียด การตั้งค่าอยู่ในฟิลด์ options.site ของไฟล์ .czon/meta.json ซึ่งรวมถึง site.baseUrl (ใช้สำหรับสร้าง sitemap.xml และ robots.txt), site.title (ชื่อสถานี ค่าเริ่มต้นคือ 'CZON'), site.gaID (Google Analytics Measurement ID) และ site.clarityID (Microsoft Clarity Project ID) ตัวเลือกการตั้งค่าทั้งหมดเป็นตัวเลือก ไม่บังคับ หลังแก้ไขต้องรัน czon build อีกครั้งจึงจะมีผล หากไม่ได้ตั้งค่า baseUrl จะข้ามการสร้าง sitemap.xml เครื่องมือวิเคราะห์จะโหลดก็ต่อเมื่อมีการตั้งค่า ID ที่เกี่ยวข้องเท่านั้น ซึ่งไม่ส่งผลต่อประสิทธิภาพของหน้าเว็บ เอกสารให้ข้อมูลเกี่ยวกับตำแหน่งการตั้งค่า ตัวเลือกการตั้งค่าที่ใช้ได้ ตัวอย่างสมบูรณ์ และข้อควรระวัง เพื่อช่วยให้ผู้ใช้ตั้งค่าสถานีได้อย่างง่ายดาย"
"tags":
  - "CZON"
  - "การตั้งค่าสถานี"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# การตั้งค่าสถานี

CZON รองรับการตั้งค่าตัวเลือกสถานีผ่านไฟล์ `.czon/meta.json` การตั้งค่าเหล่านี้เป็นตัวเลือก ไม่ได้ขัดขวางการใช้งานครั้งแรก

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
      "home": "guide.html",
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

URL ฐานของสถานี ใช้สำหรับสร้าง sitemap.xml และ robots.txt

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

หลังตั้งค่าแล้วจะสร้างอัตโนมัติ:

- `sitemap.xml` - แผนที่เว็บไซต์ที่รวมทุกหน้า
- คำประกาศ Sitemap ใน `robots.txt`

### `site.title`

ชื่อสถานี แสดงที่ส่วนหัวของหน้า

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

Google Analytics Measurement ID ใช้สำหรับรวมสถิติ Google Analytics

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

วิธีรับ: ไปที่ [Google Analytics](https://analytics.google.com/) เพื่อสร้างทรัพย์สินสื่อ ใน "สตรีมข้อมูล" จะได้รับ Measurement ID

### `site.clarityID`

Microsoft Clarity Project ID ใช้สำหรับรวมการวิเคราะห์พฤติกรรมผู้ใช้ Clarity

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

วิธีรับ: ไปที่ [Microsoft Clarity](https://clarity.microsoft.com/) เพื่อสร้างโครงการ ในการตั้งค่าโครงการจะได้รับ Project ID

### `site.home`

การตั้งค่าเส้นทางหน้าแรก ใช้สำหรับกำหนดเป้าหมายการเปลี่ยนเส้นทางหน้าแรกเอง

- **ประเภท**: `string`
- **ค่าเริ่มต้น**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**คำอธิบายพฤติกรรม**:

- **เมื่อเข้าถึงหน้าแรกหลัก**: เมื่อผู้ใช้เข้าถึง `/index.html` จะเปลี่ยนเส้นทางไปยัง `/{ภาษาที่ตรวจพบ}/{home}` โดยอัตโนมัติตามภาษาของเบราว์เซอร์
- **เมื่อคลิกที่ชื่อในส่วนหัว**: เปลี่ยนเส้นทางไปยังเส้นทาง `home` ในไดเรกทอรีภาษาปัจจุบัน

**สถานการณ์การใช้งาน**:

- ต้องการให้ผู้ใช้เข้าถึงหน้าใดหน้าหนึ่งโดยเฉพาะ (เช่น คู่มือเริ่มต้นใช้งาน, การแนะนำผลิตภัณฑ์ เป็นต้น) ในครั้งแรกที่เยี่ยมชม
- หน้าแรกของสถานีไม่ใช่รายการบทความ แต่เป็นหน้าเอกสารเฉพาะเจาะจง

### `site.navLinks`

การตั้งค่าลิงก์นำทางด่วน แสดงลิงก์นำทางในส่วนหัวของหน้า

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
- **เดสก์ท็อป**: แสดงลิงก์นำทางโดยตรงในส่วนหัว แต่ไม่เกิน 40% ของความกว้างหน้าจอ ส่วนที่เกินจะแสดงผ่านเมนูแบบเลื่อนลง "เพิ่มเติม"

## ตัวอย่างสมบูรณ์

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "บล็อกเทคนิค",
      "home": "getting-started.html",
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

- หลังแก้ไขการตั้งค่า ต้องรัน `czon build` อีกครั้งจึงจะมีผล
- ตัวเลือกการตั้งค่า `site` ทั้งหมดเป็นตัวเลือก สามารถตั้งค่าเฉพาะส่วนที่ต้องการได้
- เครื่องมือวิเคราะห์ (GA, Clarity) จะโหลดก็ต่อเมื่อมีการตั้งค่า ID ที่เกี่ยวข้องเท่านั้น ซึ่งไม่ส่งผลต่อประสิทธิภาพของหน้าเว็บ
- เมื่อไม่ได้ตั้งค่า `baseUrl` จะข้ามการสร้าง sitemap.xml