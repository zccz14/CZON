---
"title": "Guía de configuración del sitio CZON"
"summary": "Este documento detalla los métodos y opciones para configurar un sitio CZON. La configuración se encuentra en el campo `options.site` del archivo `.czon/meta.json` e incluye `site.baseUrl` (para generar sitemap.xml y robots.txt), `site.title` (título del sitio, valor por defecto 'CZON'), `site.gaID` (ID de medición de Google Analytics) y `site.clarityID` (ID del proyecto de Microsoft Clarity). Todas las opciones son opcionales; los cambios requieren ejecutar `czon build` nuevamente para surtir efecto. Si no se configura `baseUrl`, se omitirá la generación de sitemap.xml. Las herramientas de análisis solo se cargarán si se configuran sus respectivos ID, sin afectar el rendimiento de la página. El documento proporciona la ubicación de la configuración, opciones disponibles, ejemplos completos y consideraciones para ayudar a configurar el sitio fácilmente."
"tags":
  - "CZON"
  - "Configuración del sitio"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configuración del sitio

CZON permite configurar las opciones del sitio a través del archivo `.czon/meta.json`. Esta configuración es opcional y no bloquea el uso inicial.

## Ubicación de la configuración

Las opciones de configuración se encuentran en el campo `options.site` del archivo `.czon/meta.json`:

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
        { "title": "Inicio", "href": "index.html" },
        { "title": "Acerca de", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Opciones de configuración disponibles

### `site.baseUrl`

URL base del sitio, utilizada para generar sitemap.xml y robots.txt.

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

- `sitemap.xml` - Mapa del sitio que incluye todas las páginas.
- La declaración de Sitemap en `robots.txt`.

### `site.title`

Título del sitio, mostrado en el encabezado de la página.

- **Tipo**: `string`
- **Valor por defecto**: `"CZON"`

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

**Cómo obtenerlo**: Ve a [Google Analytics](https://analytics.google.com/), crea una propiedad y obtén el Measurement ID en la sección "Flujos de datos".

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

**Cómo obtenerlo**: Ve a [Microsoft Clarity](https://clarity.microsoft.com/), crea un proyecto y obtén el Project ID en la configuración del proyecto.

### `site.home`

Configuración de la ruta de la página de inicio, utilizada para personalizar el destino de redirección de la página principal.

- **Tipo**: `string`
- **Valor por defecto**: `"index.html"`

```json
{
  "options": {
    "site": {
      "home": "guide.html"
    }
  }
}
```

**Comportamiento**:

- **Al acceder a la página de inicio raíz**: Cuando un usuario visita `/index.html`, será redirigido automáticamente a `/{idioma detectado}/{home}` según el idioma de su navegador.
- **Al hacer clic en el título del encabezado (Header)**: Se redirige a la ruta `home` dentro del directorio del idioma actual.

**Casos de uso**:

- Desear que los usuarios accedan directamente a una página específica en su primera visita (por ejemplo, una guía de inicio, una introducción al producto, etc.).
- Que la página principal del sitio no sea una lista de artículos, sino una página de documentación concreta.

### `site.navLinks`

Configuración de enlaces de navegación rápida, que se muestran en el encabezado de la página.

- **Tipo**: `Array<{ title: string, href: string }>`
- **Valor por defecto**: `undefined` (no se muestran enlaces de navegación)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Inicio", "href": "index.html" },
        { "title": "Documentación", "href": "docs.html" },
        { "title": "Acerca de", "href": "about.html" }
      ]
    }
  }
}
```

**Comportamiento responsivo**:

- **Dispositivos móviles**: Muestra un icono de menú hamburguesa; al hacer clic, se expanden todos los enlaces de navegación.
- **Escritorio**: Muestra los enlaces de navegación directamente en el encabezado, pero no más del 40% del ancho de la pantalla; los enlaces que excedan este límite se mostrarán en un menú desplegable "Más".

## Ejemplo completo

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog técnico",
      "home": "getting-started.html",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Inicio", "href": "index.html" },
        { "title": "Documentación", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Consideraciones

- Después de modificar la configuración, es necesario ejecutar `czon build` nuevamente para que los cambios surtan efecto.
- Todas las opciones de configuración en `site` son opcionales; puedes configurar solo las partes que necesites.
- Las herramientas de análisis (GA, Clarity) solo se cargarán si se configuran sus respectivos ID, sin afectar el rendimiento de la página.
- Si no se configura `baseUrl`, se omitirá la generación de sitemap.xml.