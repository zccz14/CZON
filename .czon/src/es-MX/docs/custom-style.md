---
"title": "Guía de Estilos Personalizados de CZON"
"summary": "Este documento detalla los métodos para personalizar estilos en el proyecto CZON. Al crear un archivo style.css en el directorio .czony del proyecto y escribir código CSS, se pueden sobrescribir los estilos predeterminados o agregar apariencias personalizadas. El documento explica que CZON detectará y copiará este archivo al directorio de salida durante la construcción, y agregará un enlace de estilo en cada página HTML para garantizar que los estilos personalizados se carguen después de los estilos integrados, logrando así el efecto de sobrescritura. Se proporciona una lista de variables CSS disponibles, incluyendo colores de fondo, colores de texto, colores de enlaces, etc., y se muestran múltiples ejemplos prácticos, como personalizar colores de marca, ajustar el ancho del área de contenido, personalizar estilos de bloques de código y ocultar elementos específicos. Finalmente, se enfatizan las precauciones, como que el nombre del archivo debe ser style.css, que se requiere una reconstrucción después de realizar modificaciones, que se recomienda usar variables CSS para la sobrescritura y que puede ser necesario usar !important cuando CZON utiliza Tailwind CSS."
"tags":
  - "CZON"
  - "Estilos Personalizados"
  - "CSS"
  - "Desarrollo Frontend"
  - "Construcción de Sitios Web"
  - "Sobrescritura de Estilos"
  - "Variables CSS"
  - "Tailwind CSS"
---

# Estilos Personalizados

CZON admite la personalización de estilos del sitio a través del archivo `.czon/style.css`, permitiéndote sobrescribir los estilos predeterminados o agregar una apariencia personalizada.

## Cómo Usar

1. Crea el archivo `style.css` en el directorio `.czon` de tu proyecto:

```
tu-proyecto/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Crea este archivo
├── README.md
└── docs/
```

2. Escribe tu CSS personalizado en `style.css`:

```css
/* Ejemplo: Cambiar el color de los enlaces */
:root {
  --link-color: #0066cc;
}

/* Ejemplo: Cambiar el fondo en modo oscuro */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Vuelve a ejecutar `czon build`. Los estilos personalizados se aplicarán automáticamente a todas las páginas.

## Cómo Funciona

- Durante la construcción, CZON detecta si existe `.czon/style.css`.
- Si existe, lo copia al directorio de salida como `.czon/dist/style.css`.
- En cada página HTML generada, se agrega un enlace de estilo dentro de `<head>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Los estilos personalizados se cargan después de los estilos integrados, por lo que pueden sobrescribir los estilos predeterminados.

## Variables CSS Disponibles

CZON utiliza variables CSS para definir los colores del tema. Puedes ajustar rápidamente la paleta de colores sobrescribiendo estas variables:

```css
:root {
  /* Colores de fondo */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Colores de texto */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Colores de enlace y énfasis */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Colores de borde */
  --border-color: #dee2e6;
}

/* Variables para modo oscuro */
html.dark {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-tertiary: #404040;

  --text-primary: #e5e5e5;
  --text-secondary: #a0a0a0;
  --text-muted: #6c6c6c;

  --link-color: #58a6ff;
  --link-hover-color: #79b8ff;

  --border-color: #404040;
}
```

## Ejemplos

### Personalizar Colores de Marca

```css
:root {
  --link-color: #e91e63;
  --link-hover-color: #c2185b;
}

html.dark {
  --link-color: #f48fb1;
  --link-hover-color: #f8bbd9;
}
```

### Ajustar el Ancho del Área de Contenido

```css
.content {
  max-width: 60rem;
}
```

### Personalizar Estilos de Bloques de Código

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Ocultar Elementos Específicos

```css
/* Ocultar la barra lateral derecha de la tabla de contenidos */
.sidebar-right {
  display: none;
}
```

## Consideraciones

- El nombre del archivo de estilos personalizados debe ser `style.css` y debe ubicarse en el directorio `.czon/`.
- Después de modificar los estilos, es necesario volver a ejecutar `czon build` para que los cambios surtan efecto.
- Se recomienda personalizar los estilos sobrescribiendo las variables CSS, ya que esto garantiza compatibilidad con los modos claro y oscuro.
- CZON utiliza Tailwind CSS. Si necesitas sobrescribir estilos generados por Tailwind, es posible que debas usar `!important`.