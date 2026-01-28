---
"title": "CZON - Motor de Contenido Markdown Nativo de IA"
"summary": "CZON es un motor de contenido Markdown nativo de IA diseñado para ayudar a los creadores de contenido a simplificar su flujo de trabajo de escritura. Enfatiza la escritura con configuración cero, integrando profundamente la tecnología de IA para manejar automáticamente tareas como la generación de títulos, extracción de resúmenes, clasificación por etiquetas, traducción multilingüe y navegación del sitio, reduciendo las interrupciones para el usuario. CZON incluye generación de sitios estáticos, pero se enfoca principalmente en la creación y gestión de contenido, no en la personalización compleja de temas. Es ideal para usuarios que desean escribir en su idioma nativo y generar automáticamente versiones multilingües, especialmente para creadores de contenido web que odian las configuraciones complejas."
"tags":
  - "CZON"
  - "Nativo de IA"
  - "Markdown"
  - "Motor de Contenido"
  - "Traducción Multilingüe"
  - "Generación de Sitios Estáticos"
  - "Configuración Cero"
  - "Creación de Contenido"
---

![Logo de CZON](logo.png)

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Ver Sitio Web de CZON 🚀
    </a>
</div>

# CZON - Motor de Contenido Markdown Nativo de IA

- **C**: Orientado al **C**ontenido | El contenido es el rey, enfocado en el contenido
- **Z**: **Z**ero Configuración | Escritura sin configuración, menos interrupciones
- **O**: **O**rgánico Nativo de IA | Nativo de IA orgánico, integración profunda de IA
- **N**: Curva de Energía en Forma de **N** | Curva de energía en forma de N, interviene en todas las etapas de creación-distribución-retroalimentación

En la era de la IA, como creadores de contenido web, podemos tener un motor de creación de contenido más inteligente.

**Regresar al contenido: Minimizar interrupciones, enfocarse en escribir**

Devolver los documentos a su esencia, devolver la tranquilidad a la escritura.

Primero, no quiero ser un bibliotecario. A veces quiero escribir algo, pero quizás aún no he pensado en su título, no he formado una organización particular. Quiero que un LLM me ayude automáticamente a generar títulos, hacer resúmenes, clasificar, navegar y otras tareas de organización.

Segundo, mi estudio debe estar limpio. No quiero herramientas de construcción con configuraciones complejas, lidiar con configuraciones de documentos complicadas, no me gustan las estructuras complejas. Cada vez que veo los archivos de configuración y la estructura de proyectos de herramientas como Docusaurus, VuePress, Astro, me duele la cabeza. Ahora, CZON elige ocultar toda la configuración en el directorio `.czon`, barrerla a un rincón, el usuario solo necesita enfocarse en escribir el contenido, CZON se encarga del resto. Los demás directorios son su espacio de escritura, puede organizar sus archivos Markdown como desee.

**Regresar al idioma nativo: Escribir en el idioma materno, construir versiones multilingües sin problemas**

La vida es corta, soy demasiado perezoso para traducir. Cuando una persona usa su idioma materno, es cuando puede aprovechar al máximo la profundidad de su pensamiento. Pero al mismo tiempo, mantener la conexión con el mundo es necesario, no quiero renunciar a la comunicación multilingüe. Por eso deseo una herramienta que me permita escribir en mi idioma materno y al mismo tiempo permitir que más personas vean mi contenido. La i18n actual no solo requiere que uno traduzca, sino que también mantenga las actualizaciones del contenido, es demasiado complicado. Elijo usar LLM para ayudarme con la traducción, me ahorra mucho tiempo y puedo completar la traducción a múltiples idiomas con un solo clic.

## ✨ Funciones Principales

1. 🌍 **Traducción Multilingüe con IA**: Usa IA para traducción incremental, permite a los usuarios escribir Markdown en su idioma nativo, pero los usuarios pueden ser multilingües.
2. 📊 **Extracción de Metadatos con IA**: Extrae automáticamente título, descripción, resumen, palabras clave, audiencia objetivo, alias amigables para URL, etc.
3. 🏷️ **Clasificación por Etiquetas con IA**: Usa IA para extraer y gestionar etiquetas y categorías del contenido.
4. 🧭 **Navegación por Categorías con IA**: Usa IA para generar mapas del sitio y navegación, la ubicación de los archivos fuente no es sensible.
5. 🤖 **Resumen de Todo el Sitio con IA**: Puede generar resúmenes de todo el sitio en varios estilos.

Y algunos puntos de función no relacionados con IA:

1. ⚙️ **Configuración Cero**: Toda la configuración y caché está oculta en el directorio `.czon`, la estructura del proyecto se mantiene ordenada.
2. 🔄 **Construcción Incremental**: Detecta cambios basados en hash del contenido, solo procesa archivos modificados.
3. 📚 **Soporte para Extensiones Markdown**: Soporte nativo para fórmulas matemáticas KaTeX, diagramas Mermaid, carruseles Embla, notas al pie, etc.
4. 🚀 **Generación de Sitios Estáticos**: SSG basado en React integrado, genera sitios estáticos multilingües.
5. 🌐 **Enrutamiento Automático según Idioma del Visitante**: Enruta automáticamente a la versión de idioma correspondiente según el idioma del visitante.

## 📦 Comenzar Rápidamente

### Prerrequisitos

- Tener instalado [Node.js](https://nodejs.org/) (se recomienda usar la versión LTS 24, o versión 18 o superior, necesita el comando npx)
- Tener una [Clave API de OpenAI](https://platform.openai.com/account/api-keys), o una Clave API compatible con OPENAI
- Tener instalado Git (para listar archivos Markdown desde Git, ignorando archivos filtrados por reglas .gitignore)

### Configuración de Variables de Entorno

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obligatorio: reemplazar con su Clave API de OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Opcional, por defecto usa la API oficial de OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Opcional, por defecto usa el modelo gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Opcional, establece el límite máximo de tokens (si se omite, usa el valor por defecto del modelo; para traducciones de texto largo se sugiere un valor más alto, como 8192, dependiendo del máximo de tokens que soporte el modelo usado)

# Si necesita usar un proxy HTTP para acceder a la API de OpenAI, puede configurar las siguientes variables
export HTTPS_PROXY="http://su-proxy.com:8080"  # Opcional, configura proxy HTTPS
export HTTP_PROXY="http://su-proxy.com:8080"   # Opcional, configura proxy HTTP
```

### Construir un Sitio Multilingüe

Ejecutar en cualquier carpeta gestionada por Git:

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Dado que los códigos de idioma se usarán posteriormente en muchas funciones de la generación del sitio estático, asegúrese de usar códigos de idioma estándar BCP 47. Por ejemplo, `zh-Hans` representa chino simplificado, `en-US` representa inglés estadounidense. Puede agregar más idiomas según sea necesario, por ejemplo `es-ES` (español), `ja-JP` (japonés), `ko-KR` (coreano), etc.
Para una lista de códigos de idioma estándar, consulte [Etiqueta de idioma IETF - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Directorio de salida: `.czon/dist`, posteriormente será necesario desplegar el contenido de este directorio en una plataforma de alojamiento de sitios estáticos.

Para un uso detallado, ejecute `npx czon@latest --help`.

## 🔗 Comparación con Otras Herramientas

| Característica          | CZON                     | Docusaurus      | VuePress        | Astro           |
| ----------------------- | ------------------------ | --------------- | --------------- | --------------- |
| **Nativo de IA**        | ✅ Integración profunda  | ❌              | ❌              | ❌              |
| **Configuración Cero**  | ✅ Configuración oculta  | ❌ Necesita archivo de configuración | ❌ Necesita archivo de configuración | ❌ Necesita archivo de configuración |
| **Traducción Multilingüe con IA** | ✅ Traducción incremental automática | ❌ Traducción manual | ❌ Traducción manual | ❌ Traducción manual |
| **Clasificación/Etiquetas Automática** | ✅ Extracción con IA | ❌ Configuración manual | ❌ Configuración manual | ❌ Configuración manual |
| **Extensiones Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Mediante plugins | ✅ Mediante plugins | ✅ Mediante plugins |
| **Personalización de Temas** | ❌ Limitada | ✅ Amplia | ✅ Amplia | ✅ Amplia |

CZON se posiciona como un **motor de contenido potenciado por IA**, no como un SSG de funciones completas. Se enfoca en mejorar la eficiencia de la creación de contenido mediante IA, ideal para creadores que valoran la calidad del contenido y desean reducir la carga de configuración. De hecho, CZON puede usarse en combinación con herramientas SSG como Docusaurus, VuePress, Astro, como un motor frontal para la generación y gestión de contenido.

## 📞 Soporte

- Página del proyecto: [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- Problemas en GitHub: [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Foro de Discusión en Discord: [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Devolver la tranquilidad a la escritura, dejar que el contenido crezca naturalmente._