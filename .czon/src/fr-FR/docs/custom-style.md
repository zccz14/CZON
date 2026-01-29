---
"title": "Guide de style personnalisé CZON"
"summary": "Ce document détaille les méthodes de personnalisation des styles dans le projet CZON. En créant un fichier style.css dans le répertoire .czon du projet et en y écrivant du code CSS, vous pouvez remplacer les styles par défaut ou ajouter une apparence personnalisée. Le document explique que CZON détecte et copie ce fichier dans le répertoire de sortie lors de la construction, et ajoute un lien vers la feuille de style dans chaque page HTML, garantissant ainsi que les styles personnalisés sont chargés après les styles intégrés pour permettre leur remplacement. Une liste de variables CSS disponibles est fournie, incluant les couleurs de fond, de texte, de liens, etc. Plusieurs exemples pratiques sont présentés, tels que la personnalisation des couleurs de la marque, l'ajustement de la largeur de la zone de contenu, la personnalisation des styles des blocs de code et le masquage d'éléments spécifiques. Enfin, des points d'attention sont soulignés : le nom du fichier doit être style.css, une reconstruction est nécessaire après modification, il est recommandé d'utiliser les variables CSS pour le remplacement, et l'utilisation de !important peut être nécessaire car CZON utilise Tailwind CSS."
"tags":
  - "CZON"
  - "Style personnalisé"
  - "CSS"
  - "Développement frontend"
  - "Construction de site web"
  - "Remplacement de style"
  - "Variables CSS"
  - "Tailwind CSS"
---

# Style personnalisé

CZON prend en charge la personnalisation des styles du site via le fichier `.czon/style.css`, vous permettant de remplacer les styles par défaut ou d'ajouter une apparence personnalisée.

## Mode d'emploi

1. Créez le fichier `style.css` dans le répertoire `.czon` de votre projet :

```
votre-projet/
├── .czon/
│   ├── meta.json
│   └── style.css    <-- Créez ce fichier
├── README.md
└── docs/
```

2. Écrivez votre CSS personnalisé dans `style.css` :

```css
/* Exemple : modifier la couleur des liens */
:root {
  --link-color: #0066cc;
}

/* Exemple : modifier l'arrière-plan en mode sombre */
html.dark {
  --bg-primary: #0d1117;
}
```

3. Relancez `czon build`, les styles personnalisés seront automatiquement appliqués à toutes les pages.

## Fonctionnement

- Lors de la construction, CZON détecte si `.czon/style.css` existe
- S'il existe, il est copié dans le répertoire de sortie `.czon/dist/style.css`
- Dans chaque page HTML générée, un lien vers la feuille de style est ajouté dans `<head>` :
  ```html
  <link rel="stylesheet" href="style.css" />
  ```
- Les styles personnalisés sont chargés après les styles intégrés, ils peuvent donc les remplacer

## Variables CSS disponibles

CZON utilise des variables CSS pour définir les couleurs du thème. Vous pouvez ajuster rapidement la palette en remplaçant ces variables :

```css
:root {
  /* Couleurs d'arrière-plan */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;

  /* Couleurs de texte */
  --text-primary: #333333;
  --text-secondary: #6c757d;
  --text-muted: #adb5bd;

  /* Couleurs des liens et d'accentuation */
  --link-color: #007bff;
  --link-hover-color: #0056b3;

  /* Couleurs des bordures */
  --border-color: #dee2e6;
}

/* Variables pour le mode sombre */
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

## Exemples

### Personnaliser les couleurs de la marque

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

### Ajuster la largeur de la zone de contenu

```css
.content {
  max-width: 60rem;
}
```

### Personnaliser le style des blocs de code

```css
pre code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.875rem;
}
```

### Masquer des éléments spécifiques

```css
/* Masquer la barre latérale droite de la table des matières */
.sidebar-right {
  display: none;
}
```

## Points d'attention

- Le nom du fichier de style personnalisé doit être `style.css`, placé dans le répertoire `.czon/`
- Après modification des styles, vous devez relancer `czon build` pour qu'ils prennent effet
- Il est recommandé d'utiliser le remplacement par variables CSS pour personnaliser les styles, ce qui assure la compatibilité avec les modes clair et sombre
- CZON utilise Tailwind CSS. Si vous devez remplacer des styles générés par Tailwind, l'utilisation de `!important` peut être nécessaire