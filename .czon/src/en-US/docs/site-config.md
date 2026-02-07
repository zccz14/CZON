# Site Configuration

CZON supports configuring site options through the `.czon/meta.json` file. These configurations are optional and will not block initial usage.

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
      "home": "guide.html",
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

The site's base URL, used for generating sitemap.xml and robots.txt.

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

Site title, displayed in the page header.

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

Google Analytics Measurement ID, used for integrating Google Analytics tracking.

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

How to obtain: Go to [Google Analytics](https://analytics.google.com/), create a property, and get the Measurement ID from the "Data Streams" section.

### `site.clarityID`

Microsoft Clarity Project ID, used for integrating Clarity user behavior analytics.

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

How to obtain: Go to [Microsoft Clarity](https://clarity.microsoft.com/), create a project, and get the Project ID from the project settings.

### `site.home`

Homepage path configuration, used to customize the redirect target for the homepage.

- **Type**: `string`
- **Default**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Behavior Description**:

- **When accessing the root homepage**: When a user visits `/index.html`, they will be automatically redirected to `/{detected-language}/{home}` based on their browser language.
- **When clicking the Header title**: Redirects to the `home` path within the current language directory.

**Use Cases**:
- Want users to land directly on a specific page (e.g., getting started guide, product introduction) on their first visit.
- The site homepage is not an article list but a specific documentation page.

### `site.navLinks`

Quick navigation link configuration, displaying navigation links in the page header.

- **Type**: `Array<{ title: string, href: string }>`
- **Default**: `undefined` (navigation not displayed)

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
      "home": "getting-started.html",
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

## Notes

- After modifying the configuration, you need to run `czon build` again for the changes to take effect.
- All `site` configuration items are optional; you can configure only the parts you need.
- Analytics tools (GA, Clarity) will only load if their corresponding IDs are configured, and they do not affect page performance.
- If `baseUrl` is not configured, sitemap.xml generation will be skipped.