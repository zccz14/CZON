---
"title": "Guía para Desplegar un Sitio Estático CZON en GitHub Pages"
"summary": "Este artículo detalla cómo desplegar un sitio estático multilingüe generado por CZON en GitHub Pages utilizando GitHub CLI. Primero, es necesario instalar e iniciar sesión en GitHub CLI, asegurando tener permisos de repo. Luego, ejecutar el comando `npx czon@latest config github`, el cual guiará al usuario a través de una serie de pasos: verificar permisos, inicializar un repositorio Git, configurar el repositorio remoto, habilitar GitHub Pages configurándolo como tipo workflow, crear o actualizar el archivo de Workflow, confirmar y enviar los cambios, y finalmente obtener la URL de Pages. Todo el proceso está automatizado, simplificando el flujo de despliegue."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Sitio Estático"
  - "Guía de Despliegue"
  - "GitHub CLI"
  - "Multilingüe"
  - "Despliegue Automatizado"
---

# Desplegar en GitHub Pages

Esta guía explica cómo desplegar un sitio estático multilingüe generado por CZON en GitHub Pages utilizando GitHub CLI.

Primero, instala la herramienta [GitHub CLI](https://cli.github.com/) (si aún no está instalada) y asegúrate de haber iniciado sesión (si aún no lo has hecho):

```bash
$ gh --version # Verifica la versión para confirmar la instalación exitosa
```

Asegúrate de haber iniciado sesión y de tener permisos de `repo` para acceder al repositorio objetivo:

```bash
$ gh auth login -s repo # Inicia sesión en tu cuenta de GitHub; te pedirá iniciar sesión desde el navegador o usar un token
$ gh auth status # Verifica el estado de la sesión; asegúrate de haber iniciado sesión correctamente y tener permisos de repo para el repositorio objetivo
```

El resto del proceso solo requiere ejecutar el siguiente comando y seguir las indicaciones:

```bash
$ npx czon@latest config github
```

Este comando te guiará a través de los siguientes pasos:

1.  Verificar si los permisos de `gh` incluyen `repo`. Si no, te pedirá que inicies sesión nuevamente y agregues el permiso `repo`.
2.  Si el directorio local no es un repositorio Git, te pedirá que inicialices un nuevo repositorio Git.
3.  Verificar la configuración del repositorio Git remoto en el directorio local. Comprobará si existe un repositorio remoto de GitHub. Si no hay un repositorio remoto de GitHub, te pedirá que crees uno nuevo y lo agregues como `origin`. Si `origin` ya existe pero no es un repositorio de GitHub, te pedirá que agregues un nuevo repositorio remoto de GitHub como `upstream`.
4.  Verificar si GitHub Pages está habilitado y configurado como tipo `workflow`. Si no es así, lo habilitará y corregirá mediante la API `gh api` para que se despliegue desde Actions. También configurará el CNAME (si tienes un dominio personalizado).
5.  Verificar el archivo de GitHub Workflow. Si no existe, creará el archivo de Workflow para Pages; si ya existe pero no es la versión más reciente, te preguntará si deseas actualizarlo.
6.  Confirmar el archivo de Workflow y enviar los cambios al repositorio remoto.
7.  Proporcionar la URL del sitio de GitHub Pages, obteniendo la URL más reciente de Pages mediante `gh api`.