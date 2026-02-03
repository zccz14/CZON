---
"title": "Guía para el Análisis de Estilo Objetivo y Neutral"
"summary": "Este documento es una guía sobre cómo crear informes de análisis de estilo objetivo y neutral. Detalla los puntos de atención al analizar documentos (como ruta del archivo, fecha, nombre del proyecto, roles de personas, hechos objetivos, etc.) y define la estructura de la base de conocimiento (incluyendo índices de archivos, proyectos, personas, línea de tiempo y marcos teóricos). También proporciona estrategias de compresión, guiando sobre cómo simplificar el contenido cuando sea necesario, mientras enfatiza la necesidad de conservar los índices clave. El posicionamiento de estilo requiere presentar el contenido desde una perspectiva objetiva y neutral, evitando evaluaciones subjetivas y matices emocionales. Los lectores objetivo incluyen nuevos lectores, colaboradores potenciales e inversores. El documento enumera prohibiciones (como no añadir expresiones emocionales o especulaciones) y la estructura de capítulos obligatoria (como Resumen, Introducción del Proyecto, Temas Clave, Línea de Tiempo, Personas Principales y Resumen del Marco Teórico), y especifica el archivo de salida y la lista de verificación de calidad."
"tags":
  - "Análisis de Documentos"
  - "Objetivo Neutral"
  - "Estructura de Base de Conocimiento"
  - "Extracción de Información"
  - "Guía de Estilo"
  - "Redacción de Informes"
  - "Datos Estructurados"
---

# Informe de Análisis de Estilo Objetivo y Neutral

## Puntos de Atención en la Lectura

Al leer cada archivo, enfócate en extraer:

- Ruta y título del archivo
- Información de fecha
- Nombres de proyectos involucrados y descripciones de funcionalidad
- Personas mencionadas y sus roles
- Hechos objetivos y datos
- Información específica como números de versión, hitos, etc.

**Ignorar**: Evaluaciones subjetivas, expresiones emocionales, contenido especulativo.

## Estructura de la Base de Conocimiento

```
### Índice de Archivos
| Ruta del Archivo | Título | Fecha |
|------------------|--------|-------|

### Índice de Proyectos
| Nombre del Proyecto | Descripción | Archivos Relacionados |
|---------------------|-------------|-----------------------|

### Índice de Personas
| Persona | Rol | Archivos Relacionados |
|---------|-----|-----------------------|

### Línea de Tiempo
| Fecha | Evento | Archivo Fuente |
|-------|--------|----------------|

### Índice de Teorías/Marcos
| Nombre | Idea Central | Archivo Fuente |
|--------|--------------|----------------|
```

## Estrategia de Compresión

Cuando sea necesario comprimir la base de conocimiento:

1. **Se debe conservar**: Índice de archivos (ruta + título), índice de proyectos, índice de personas.
2. **Se puede simplificar**: Línea de tiempo (conservar nodos clave), índice teórico (conservar nombre y fuente).
3. **Se puede descartar**: Descripciones detalladas, eventos secundarios.

---

## Posicionamiento de Estilo

Presentar el contenido desde una perspectiva objetiva y neutral, evitando evaluaciones subjetivas y matices emocionales. Enfatizar hechos y datos, asegurando la precisión y fiabilidad de la información.

**Público objetivo**: Nuevos lectores que necesitan comprender rápidamente el panorama general del repositorio, colaboradores potenciales, inversores.
**Tono de escritura**: Profesional, comedido, neutral, como al redactar un currículum o historial profesional.
**Propósito**: Ayudar al lector a comprender integralmente la información básica y los puntos de vista centrales del contenido, formando su propio juicio.

## Prohibiciones

- ❌ No añadir expresiones emocionales (ej. "emocionante", "lamentablemente").
- ❌ No realizar especulaciones (ej. "posiblemente", "quizás", "probablemente").
- ❌ No usar vocabulario de evaluación subjetiva (ej. "excelente", "pésimo", "interesante").
- ❌ No evaluar lo bueno o malo, lo mejor o peor.
- ❌ No usar la primera persona.

## Estructura Obligatoria de Capítulos

### Resumen

- Introducción del propietario del repositorio (nombre/ID, identidad, áreas principales).
- Intervalo de tiempo del contenido del repositorio.
- Lista de proyectos principales (enumeración breve).

### Introducción del Proyecto

Para cada proyecto principal, usar la siguiente estructura:

```markdown
### [Nombre del Proyecto]

- **Origen**: Fuente y contexto del proyecto.
- **Funcionalidad Central**:
  - Punto de funcionalidad 1
  - Punto de funcionalidad 2
- **Iteración de Versiones**: Si hay historial de versiones, explicar brevemente.
- **Archivos Relacionados**: [Título del Artículo](../ruta/al/archivo.md)
```

### Temas Clave

Organizar el contenido por categorías temáticas:

```markdown
### 1. [Nombre del Tema]

- [Título del Artículo 1](../ruta/al/archivo1.md): Resumen del punto de vista central.
- [Título del Artículo 2](../ruta/al/archivo2.md): Resumen del punto de vista central.
```

### Línea de Tiempo

Usar formato de tabla para mostrar eventos clave:

```markdown
| Fecha       | Evento Clave             |
| ----------- | ------------------------ |
| AAAA-MM-DD | Descripción del evento (declaración objetiva) |
```

### Personas Principales

Usar formato de tabla:

```markdown
| Persona    | Rol       | Notas         |
| ---------- | --------- | ------------- |
| Nombre/ID | Cargo/Relación | Información objetiva relevante |
```

### Resumen del Marco Teórico

Para las teorías/marcos propuestos en el repositorio:

```markdown
### [Nombre del Marco]

- **Idea Central**: Resumir en una frase.
- **Elementos Clave**: Enumerar los componentes centrales.
- **Expresión Matemática**: Si hay fórmulas, listarlas.
```

## Archivo de Salida

`SUMMARY/1-objective.md`

## Lista de Verificación de Calidad

- [ ] Sin vocabulario de evaluación subjetiva.
- [ ] Sin expresiones emocionales.
- [ ] Todos los enlaces apuntan a archivos específicos.
- [ ] El texto del enlace es el título del artículo.
- [ ] Incluye todos los capítulos obligatorios.
- [ ] Los formatos de las tablas de línea de tiempo y personas son correctos.