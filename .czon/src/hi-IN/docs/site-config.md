---
"title": "CZON साइट कॉन्फ़िगरेशन गाइड"
"summary": "यह दस्तावेज़ CZON साइट कॉन्फ़िगरेशन की विधियों और विकल्पों का विस्तार से वर्णन करता है। कॉन्फ़िगरेशन .czon/meta.json फ़ाइल के options.site फ़ील्ड में स्थित है, जिसमें site.baseUrl (sitemap.xml और robots.txt जनरेट करने के लिए), site.title (साइट शीर्षक, डिफ़ॉल्ट मान 'CZON'), site.gaID (Google Analytics मापन ID) और site.clarityID (Microsoft Clarity प्रोजेक्ट ID) शामिल हैं। सभी कॉन्फ़िगरेशन आइटम वैकल्पिक हैं, संशोधन के बाद czon build को पुनः चलाने की आवश्यकता होती है। baseUrl कॉन्फ़िगर न किए जाने पर sitemap.xml जनरेशन छोड़ दी जाएगी, विश्लेषण उपकरण केवल संबंधित ID कॉन्फ़िगर होने पर ही लोड होंगे, जिससे पृष्ठ प्रदर्शन प्रभावित नहीं होता। दस्तावेज़ कॉन्फ़िगरेशन स्थान, उपलब्ध कॉन्फ़िगरेशन आइटम, पूर्ण उदाहरण और ध्यान देने योग्य बातें प्रदान करता है, जो उपयोगकर्ताओं को साइट सेट करने में सहायता करता है।"
"tags":
  - "CZON"
  - "साइट कॉन्फ़िगरेशन"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# साइट कॉन्फ़िगरेशन

CZON `.czon/meta.json` फ़ाइल के माध्यम से साइट विकल्पों को कॉन्फ़िगर करने का समर्थन करता है। ये कॉन्फ़िगरेशन वैकल्पिक हैं और प्रारंभिक उपयोग को ब्लॉक नहीं करेंगे।

## कॉन्फ़िगरेशन स्थान

कॉन्फ़िगरेशन आइटम `.czon/meta.json` फ़ाइल के `options.site` फ़ील्ड में स्थित हैं:

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

## उपलब्ध कॉन्फ़िगरेशन आइटम

### `site.baseUrl`

साइट बेस URL, sitemap.xml और robots.txt जनरेट करने के लिए उपयोग किया जाता है।

- **प्रकार**: `string`
- **प्रारूप**: पूर्ण URL, जैसे `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

कॉन्फ़िगर होने पर स्वचालित रूप से जनरेट होगा:

- `sitemap.xml` - सभी पृष्ठों वाली साइटमैप
- `robots.txt` में Sitemap घोषणा

### `site.title`

साइट शीर्षक, पृष्ठ हेडर में प्रदर्शित होता है।

- **प्रकार**: `string`
- **डिफ़ॉल्ट मान**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "मेरा डॉक्स स्टेशन"
    }
  }
}
```

### `site.gaID`

Google Analytics मापन ID, Google Analytics सांख्यिकी एकीकृत करने के लिए उपयोग किया जाता है।

- **प्रकार**: `string`
- **प्रारूप**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

प्राप्त करने का तरीका: [Google Analytics](https://analytics.google.com/) पर जाकर एक मीडिया संपत्ति बनाएं, "डेटा स्ट्रीम" में मापन ID प्राप्त करें।

### `site.clarityID`

Microsoft Clarity प्रोजेक्ट ID, Clarity उपयोगकर्ता व्यवहार विश्लेषण एकीकृत करने के लिए उपयोग किया जाता है।

- **प्रकार**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

प्राप्त करने का तरीका: [Microsoft Clarity](https://clarity.microsoft.com/) पर जाकर एक प्रोजेक्ट बनाएं, प्रोजेक्ट सेटिंग्स में प्रोजेक्ट ID प्राप्त करें।

## पूर्ण उदाहरण

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "तकनीकी ब्लॉग",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## ध्यान देने योग्य बातें

- कॉन्फ़िगरेशन संशोधित करने के बाद `czon build` को पुनः चलाने की आवश्यकता होती है ताकि यह प्रभावी हो सके
- सभी `site` कॉन्फ़िगरेशन आइटम वैकल्पिक हैं, आप केवल आवश्यक भागों को कॉन्फ़िगर कर सकते हैं
- विश्लेषण उपकरण (GA, Clarity) केवल संबंधित ID कॉन्फ़िगर होने पर ही लोड होंगे, पृष्ठ प्रदर्शन प्रभावित नहीं होता
- `baseUrl` कॉन्फ़िगर न किए जाने पर, sitemap.xml जनरेशन छोड़ दी जाएगी