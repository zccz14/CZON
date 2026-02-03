---
"title": "Reglas Básicas para la Generación de Informes de Análisis de IA"
"summary": "Este documento proporciona las reglas básicas para la generación de informes de análisis de IA, enfatizando la necesidad de seguir estrictamente el flujo de lectura de documentos, que incluye cinco etapas: obtención de la lista de archivos, lectura y resumen por lotes, gestión de contexto, verificación de integridad y generación del informe. Los principios fundamentales incluyen leer todos los archivos uno por uno, basarse en hechos, normalizar los enlaces de referencia y considerar el peso temporal. Las reglas generales requieren que el informe comience con un formato específico, se genere en un directorio designado y prohíben generar el informe o saltar cualquier archivo antes de haber leído todos los archivos."
"tags":
  - "Análisis de IA"
  - "Generación de Informes"
  - "Lectura de Documentos"
  - "Reglas"
  - "Markdown"
  - "Base en Hechos"
  - "Normalización de Referencias"
  - "Gestión de Procesos"
---

# Generación de Informes de Análisis de IA - Reglas Básicas

## Flujo de Lectura de Documentos (Debe seguirse estrictamente)

### Principios Fundamentales

Este repositorio puede contener cientos o miles de archivos Markdown. Debes **leer cada archivo uno por uno**, sin saltarte ninguno.
Para manejar una gran cantidad de archivos, se adopta una estrategia de **lectura y resumen progresivos**.

### Etapa 1: Obtener la lista completa de archivos

1.  Ejecuta `npx czon@latest ls-files` para obtener todos los archivos Markdown
2.  Registra el número total de archivos N
3.  Guarda la lista de archivos como una cola de lectura pendiente

### Etapa 2: Lectura y Resumen por Lotes

Procesa los archivos en lotes. Se sugiere procesar de 10 a 20 archivos por lote, pero puedes ajustarlo según el tamaño y complejidad de los archivos.

**Para cada lote:**

1.  **Leer**: Usa la herramienta Read para leer el contenido completo de cada archivo en el lote, uno por uno.
2.  **Extraer**: Extrae información relevante según los **puntos de interés del estilo actual** (ver la guía de estilo a continuación).
3.  **Resumen del Lote**: Organiza la información extraída del lote en un resumen estructurado.
4.  **Acumular**: Fusiona el resumen del lote en la "Base de Conocimiento" (la estructura de la base de conocimiento se describe en la guía de estilo a continuación).

### Etapa 3: Gestión del Contexto

Cuando el contexto se acerque al límite:

1.  **Comprimir la Base de Conocimiento**: Comprime la base de conocimiento según la **estrategia de compresión del estilo actual** (ver la guía de estilo a continuación).
2.  **Conservar el Índice**: Independientemente de la compresión, se debe conservar el índice de rutas y títulos de todos los archivos.
3.  **Continuar Leyendo**: Usa la base de conocimiento comprimida para continuar procesando los archivos restantes.

### Etapa 4: Verificación de Integridad

Antes de generar el informe, debes confirmar:

1.  Se han procesado todos los N archivos de la lista.
2.  La base de conocimiento contiene información básica de cada archivo (al menos la ruta y el título).

**Si se detectan omisiones**: Regresa a la Etapa 2 para procesar los archivos omitidos.

### Etapa 5: Generación del Informe

Solo después de completar todas las etapas anteriores, puedes comenzar a generar el informe.

### Comportamientos Prohibidos

-   ❌ No comenzar a generar el informe antes de haber leído todos los archivos.
-   ❌ No saltarse ningún archivo, sin importar cuántos sean.
-   ❌ No afirmar "haber comprendido el panorama general" después de leer solo algunos archivos.
-   ❌ No inventar archivos o contenido inexistente en la base de conocimiento.

---

## Reglas Generales

### 1. Principio de Base en Hechos

-   Recuerda siempre basarte en el contenido factual; no debe haber situaciones que se desvíen de los hechos.
-   Todos los puntos de vista deben estar respaldados por el texto original.
-   No inventar contenido que no exista.

### 2. Normalización de Enlaces de Referencia

-   Al hacer referencia a enlaces del texto original, asegúrate de que los enlaces sean válidos.
-   **Siempre enlaza al archivo Markdown específico**, no al directorio.
-   **El texto del enlace debe ser el título correspondiente**, no el nombre del archivo.
-   Dado que se genera en el directorio SUMMARY, usa rutas relativas que comiencen con `../` al hacer referencia.

**Ejemplo Correcto**:

```markdown
[Guerra de Desgaste del Capital: Estrategia para que los Inversores Individuales Superen las Clases](../INSIGHTS/6.md)
[De la Creación a la Distribución: Construyendo un Motor de Contenidos Nativo de IA](../INSIGHTS/4.md)
```

**Ejemplo Incorrecto**:

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Usa el nombre del archivo en lugar del título
[Guerra de Desgaste del Capital](../INSIGHTS/) ← Enlaza a un directorio
```

### 3. Formato de Encabezado

Cada informe debe comenzar con el siguiente formato:

```markdown
# [Título del Informe]

**Fecha del Análisis de IA**: AAAA/MM/DD
**Nota**: Este informe fue generado por IA, su contenido es solo para referencia.

---
```

### 4. Peso Temporal

-   Considera el lapso de tiempo, otorgando un mayor peso a los artículos más recientes.
-   Pero no ignores contenido importante más antiguo.

### 5. Ubicación de Salida

-   Todos los informes se generan en el directorio `SUMMARY/`
-   Los nombres de los archivos deben seguir el formato especificado.