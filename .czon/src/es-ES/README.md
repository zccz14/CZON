---
"title": "CZON - Motor de Contenido Markdown Nativo de IA"
"summary": "CZON es un motor de contenido Markdown nativo de IA diseñado para ayudar a los creadores de contenido a simplificar su flujo de trabajo de escritura. Hace hincapié en la escritura con configuración cero, integrando profundamente la tecnología de IA para manejar automáticamente tareas como la generación de títulos, extracción de resúmenes, clasificación por etiquetas, traducción multilingüe y navegación del sitio, reduciendo así las interrupciones para el usuario. CZON incluye funcionalidad de generación de sitios estáticos, pero se centra principalmente en la creación y gestión de contenido, no en la personalización compleja de temas. Es ideal para usuarios que desean escribir en su idioma nativo y generar automáticamente versiones multilingües, especialmente para creadores de contenido web que odian las configuraciones complejas."
"tags":
  - "CZON"
  - "AI-Native"
  - "Markdown"
  - "Motor de Contenido"
  - "Traducción Multilingüe"
  - "Generación de Sitios Estáticos"
  - "Configuración Cero"
  - "Creación de Contenido"
---

![Logo de CZON](logo.png)

# CZON - Motor de Contenido Markdown Nativo de IA

- **C**: **C**ontent oriented | El contenido es el rey, enfocado en el contenido
- **Z**: **Z**ero Configuration | Escritura con configuración cero, menos interrupciones
- **O**: **O**rganic AI-Native | Nativo de IA orgánico, integración profunda de IA
- **N**: **N**-shaped Energy Curve | Curva de energía en forma de N, interviene en todas las etapas de creación-distribución-retroalimentación

[> Demostración del Sitio Web](https://czon.zccz14.com/)

En la era de la IA, como creadores de contenido web, podemos tener un motor de creación de contenido más inteligente.

**Regreso al contenido: Minimizar las interrupciones, enfocarse en escribir**

Devolvamos los documentos a su esencia, devolvamos la tranquilidad a la escritura.

Primero, no quiero ser un bibliotecario. A veces quiero escribir algo, pero puede que aún no haya pensado en su título o no tenga una organización particular. Me gustaría que un LLM me ayudara automáticamente generando títulos, haciendo resúmenes, clasificando, creando navegación y otras tareas de organización.

Segundo, mi estudio debe estar limpio. No quiero herramientas de construcción con configuraciones complejas, lidiar con configuraciones de documentos complicadas, ni estructuras complejas. Cada vez que veo los archivos de configuración y la estructura de proyectos de herramientas como Docusaurus, VuePress o Astro, me duele la cabeza. Ahora, CZON elige ocultar toda la configuración en el directorio `.czon`, barrerla a un rincón, para que el usuario solo se concentre en escribir el contenido, y CZON se encargue del resto. Todos los demás directorios son su espacio de escritura, puede organizar sus archivos Markdown como desee.

**Regreso al idioma nativo: Escribir en la lengua materna, construir versiones multilingües sin problemas**

La vida es corta, soy demasiado perezoso para traducir. Las personas alcanzan su máxima profundidad de pensamiento cuando usan su idioma nativo. Pero al mismo tiempo, es necesario mantenerse conectado con el mundo, y no quiero renunciar a la comunicación multilingüe. Por eso, deseo una herramienta que me permita escribir en mi idioma nativo y, a la vez, permita que más personas vean mi contenido. Los sistemas i18n actuales no solo requieren que uno traduzca por sí mismo, sino que también hay que mantener las actualizaciones del contenido, lo cual es muy engorroso. Elijo usar un LLM para que me ayude con la traducción, ahorrándome mucho tiempo y permitiéndome completar traducciones a múltiples idiomas con un solo clic.

## Funcionalidades Básicas

1. 🌍 **Traducción Multilingüe Automática**: Usa IA para traducción incremental, permitiendo a los usuarios escribir Markdown en su idioma nativo, pero el resultado puede ser multilingüe.
2. 💭 **Extracción Automática de Resúmenes**: Usa IA para analizar y extraer contenido del texto original.
3. 🏷️ **Clasificación Automática por Etiquetas**: Usa IA para extraer y gestionar etiquetas y categorías del contenido.
4. 🧭 **Navegación Inteligente por Categorías**: Usa IA para generar mapas del sitio y navegación, independientemente de la ubicación de los archivos fuente.

## Generación de Sitios Estáticos (SSG)

CZON incluye una solución SSG integrada que puede convertir cualquier carpeta git que contenga archivos Markdown en un sitio HTML estático.

⚠️ **Nota**: CZON no es un generador de sitios estáticos (SSG) profesional, sino un motor de contenido Markdown impulsado por IA, enfocado en la creación y gestión de contenido.

✅ CZON tiene como objetivo simplificar el flujo de creación y publicación de contenido, permitiendo a los usuarios concentrarse en la escritura misma, sin verse abrumados por configuraciones y herramientas complejas.

❌ CZON no ofrece personalización compleja de temas ni un ecosistema de plugins, sino que se centra en mejorar la calidad y accesibilidad del contenido a través de la IA.

🔔 Sin embargo, CZON aún puede generar sitios estáticos. Si es necesario, se puede usar CZON como preprocesador e integrarlo con otras soluciones SSG para generar sitios personalizados y atractivos.

## Comenzar Rápidamente

Requisitos previos:

- Tener instalado [Node.js](https://nodejs.org/) (se recomienda versión 18 o superior, debe incluir el comando `npx`)
- Haber obtenido una [Clave API de OpenAI](https://platform.openai.com/account/api-keys), o una clave API compatible con OpenAI
- Tener instalado Git (para listar archivos Markdown desde un repositorio Git, ignorando los filtrados por las reglas de `.gitignore`)

Primero, trabaje en una carpeta que ya esté gestionada por git:

Configure las variables de entorno

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obligatorio: Reemplace con su Clave API de OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, por defecto usa la API oficial de OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, por defecto usa el modelo gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opcional, establece el límite máximo de tokens (si se omite, se usa el valor por defecto del modelo; para traducciones de textos largos se recomienda un valor más alto, como 8192, dependiendo del máximo soportado por el modelo utilizado)
```

Construya el sitio, con soporte para traducción multilingüe. Usa el directorio actual como fuente y genera la salida en el directorio `.czon/dist`.

- Puede especificar los idiomas a generar usando múltiples veces el parámetro `--lang` (por ejemplo, `--lang zh-Hans --lang en-US`).
- No es necesario configurar el idioma fuente, CZON lo detectará automáticamente.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Ver más parámetros o ayuda**:

```bash
npx czon@latest
```