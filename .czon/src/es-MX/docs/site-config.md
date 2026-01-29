---
"title": "Guía de Configuración del Sitio CZON"
"summary": "Este documento detalla los métodos y opciones para configurar un sitio CZON. La configuración se encuentra en el campo `options.site` del archivo `.czon/meta.json` e incluye `site.baseUrl` (para generar `sitemap.xml` y `robots.txt`), `site.title` (título del sitio, valor predeterminado 'CZON'), `site.gaID` (ID de medición de Google Analytics) y `site.clarityID` (ID del proyecto de Microsoft Clarity). Todas las configuraciones son opcionales; los cambios requieren ejecutar nuevamente `czon build` para surtir efecto. Si no se configura `baseUrl`, se omitirá la generación de `sitemap.xml`. Las herramientas de análisis solo se cargarán si se configuran sus respectivos ID, sin afectar el rendimiento de la página. El documento proporciona la ubicación de la configuración, las opciones disponibles, un ejemplo completo y consideraciones para ayudar a configurar el sitio fácilmente."
"tags":
  - "CZON"
  - "Configuración del Sitio"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configuración del Sitio

CZON permite configurar las opciones del sitio a través del archivo `.czon/meta.json`. Estas configuraciones son opcionales y no bloquean el uso inicial.

## Ubicación de la Configuración

Las opciones de configuración se encuentran en el campo `options.site` del archivo `.czon/meta.json`:

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

## Opciones de Configuración Disponibles

### `site.baseUrl`

URL base del sitio, utilizada para generar `sitemap.xml` y `robots.txt`.

- **Tipo**: `string`
- **Formato**: URL completa, como `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Una vez configurado, se generarán automáticamente:

- `sitemap.xml` - Mapa del sitio que incluye todas las páginas
- La declaración de Sitemap en `robots.txt`

### `site.title`

Título del sitio, que se muestra en el encabezado de la página.

- **Tipo**: `string`
- **Valor predeterminado**: `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Mi sitio de documentación"
    }
  }
}
```

### `site.gaID`

ID de medición de Google Analytics, utilizado para integrar las estadísticas de Google Analytics.

- **Tipo**: `string`
- **Formato**: `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Cómo obtenerlo: Ve a [Google Analytics](https://analytics.google.com/), crea una propiedad y obtén el Measurement ID en "Flujos de datos".

### `site.clarityID`

ID del proyecto de Microsoft Clarity, utilizado para integrar el análisis de comportamiento del usuario de Clarity.

- **Tipo**: `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Cómo obtenerlo: Ve a [Microsoft Clarity](https://clarity.microsoft.com/), crea un proyecto y obtén el Project ID en la configuración del proyecto.

## Ejemplo Completo

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog Técnico",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Consideraciones

- Después de modificar la configuración, es necesario ejecutar nuevamente `czon build` para que los cambios surtan efecto.
- Todas las configuraciones en `site` son opcionales; puedes configurar solo las partes que necesites.
- Las herramientas de análisis (GA, Clarity) solo se cargarán si se configuran sus respectivos ID, sin afectar el rendimiento de la página.
- Si no se configura `baseUrl`, se omitirá la generación de `sitemap.xml`.