---
"title": "CZON Site Configuration Guide"
"summary": "This document details the methods and options for configuring a CZON site. Configuration is located in the `options.site` field of the `.czon/meta.json` file, including `site.baseUrl` (used to generate sitemap.xml and robots.txt), `site.title` (site title, default value is 'CZON'), `site.gaID` (Google Analytics Measurement ID), and `site.clarityID` (Microsoft Clarity Project ID). All configuration items are optional; changes require re-running `czon build` to take effect. If `baseUrl` is not configured, sitemap.xml generation will be skipped. Analytics tools only load when their corresponding IDs are configured, without affecting page performance. The document provides configuration location, available options, a complete example, and important notes to help users easily set up their site."
"tags":
  - "CZON"
  - "Site Configuration"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Site Configuration

CZON supports configuring site options via the `.czon/meta.json` file. These configurations are optional and will not block initial usage.

## Configuration Location

Configuration items are located in the `options.site` field of the `.czon/meta.json` file:

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
        { "title": "Home", "href": "index.html" },
        { "title": "About", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Available Configuration Items

### `site.baseUrl`

The base URL of the site, used to generate sitemap.xml and robots.txt.

- **Type**: `string`
- **Format**: Full URL, e.g., `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Once configured, the following will be automatically generated:
- `sitemap.xml` - A sitemap containing all pages
- Sitemap declaration in `robots.txt`

### `site.title`

The site title, displayed in the page header.

- **Type**: `string`
- **Default**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "My Documentation Site"
    }
  }
}
```

### `site.gaID`

Google Analytics Measurement ID, used to integrate Google Analytics tracking.

- **Type**: `string`
- **Format**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

How to obtain: Go to [Google Analytics](https://analytics.google.com/), create a property, and find the Measurement ID under "Data Streams".

### `site.clarityID`

Microsoft Clarity Project ID, used to integrate Clarity user behavior analytics.

- **Type**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

How to obtain: Go to [Microsoft Clarity](https://clarity.microsoft.com/), create a project, and find the Project ID in the project settings.

### `site.navLinks`

Quick navigation link configuration, displaying navigation links in the page header.

- **Type**: `Array<{ title: string, href: string }>`
- **Default**: `undefined` (no navigation displayed)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Home", "href": "index.html" },
        { "title": "Docs", "href": "docs.html" },
        { "title": "About", "href": "about.html" }
      ]
    }
  }
}
```

**Responsive Behavior**:
- **Mobile**: Displays a hamburger menu icon; clicking expands all navigation links.
- **Desktop**: Navigation links are displayed directly in the Header, but limited to 40% of the screen width; any overflow is displayed via a "More" dropdown menu.

## Complete Example

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Tech Blog",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Home", "href": "index.html" },
        { "title": "Docs", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Important Notes

- After modifying the configuration, you must re-run `czon build` for changes to take effect.
- All `site` configuration items are optional; you can configure only the parts you need.
- Analytics tools (GA, Clarity) only load when their corresponding IDs are configured, without affecting page performance.
- If `baseUrl` is not configured, sitemap.xml generation will be skipped.