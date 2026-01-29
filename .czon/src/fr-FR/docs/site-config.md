---
"title": "Guide de configuration du site CZON"
"summary": "Ce document détaille les méthodes et options de configuration du site CZON. La configuration se trouve dans le champ `options.site` du fichier `.czon/meta.json` et inclut `site.baseUrl` (pour générer `sitemap.xml` et `robots.txt`), `site.title` (titre du site, valeur par défaut 'CZON'), `site.gaID` (ID de mesure Google Analytics) et `site.clarityID` (ID de projet Microsoft Clarity). Tous les paramètres sont optionnels ; après modification, il faut relancer `czon build` pour qu'ils prennent effet. Sans `baseUrl` configuré, la génération de `sitemap.xml` est ignorée. Les outils d'analyse ne sont chargés que si leur ID correspondant est configuré, sans impact sur les performances de la page. Le document fournit l'emplacement de configuration, les paramètres disponibles, un exemple complet et des points d'attention pour aider les utilisateurs à configurer facilement leur site."
"tags":
  - "CZON"
  - "Configuration de site"
  - "meta.json"
  - "Google Analytics"
  - "Microsoft Clarity"
  - "sitemap"
  - "robots.txt"
---

# Configuration du site

CZON permet de configurer les options du site via le fichier `.czon/meta.json`. Ces configurations sont optionnelles et ne bloquent pas la première utilisation.

## Emplacement de la configuration

Les paramètres de configuration se trouvent dans le champ `options.site` du fichier `.czon/meta.json` :

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "My Docs",
      "gaID": "G-XXXXXXXXXX",
      "clarityID": "your-clarity-id",
      "navLinks": [
        { "title": "Accueil", "href": "index.html" },
        { "title": "À propos", "href": "about.html" }
      ]
    }
  },
  "files": []
}
```

## Paramètres disponibles

### `site.baseUrl`

URL de base du site, utilisée pour générer `sitemap.xml` et `robots.txt`.

- **Type** : `string`
- **Format** : URL complète, par exemple `https://example.com`

```json
{
  "options": {
    "site": {
      "baseUrl": "https://example.com"
    }
  }
}
```

Une fois configuré, les fichiers suivants sont générés automatiquement :

- `sitemap.xml` - Plan du site contenant toutes les pages
- Déclaration Sitemap dans `robots.txt`

### `site.title`

Titre du site, affiché dans l'en-tête de la page.

- **Type** : `string`
- **Valeur par défaut** : `"CZON"`

```json
{
  "options": {
    "site": {
      "title": "Mon site de documentation"
    }
  }
}
```

### `site.gaID`

ID de mesure Google Analytics, utilisé pour intégrer les statistiques Google Analytics.

- **Type** : `string`
- **Format** : `G-XXXXXXXXXX`

```json
{
  "options": {
    "site": {
      "gaID": "G-XXXXXXXXXX"
    }
  }
}
```

Comment l'obtenir : Rendez-vous sur [Google Analytics](https://analytics.google.com/), créez une propriété et récupérez l'ID de mesure dans « Flux de données ».

### `site.clarityID`

ID de projet Microsoft Clarity, utilisé pour intégrer l'analyse du comportement utilisateur Clarity.

- **Type** : `string`

```json
{
  "options": {
    "site": {
      "clarityID": "your-project-id"
    }
  }
}
```

Comment l'obtenir : Rendez-vous sur [Microsoft Clarity](https://clarity.microsoft.com/), créez un projet et récupérez l'ID de projet dans les paramètres du projet.

### `site.navLinks`

Configuration des liens de navigation rapide, affichés dans l'en-tête de la page.

- **Type** : `Array<{ title: string, href: string }>`
- **Valeur par défaut** : `undefined` (aucune navigation affichée)

```json
{
  "options": {
    "site": {
      "navLinks": [
        { "title": "Accueil", "href": "index.html" },
        { "title": "Documentation", "href": "docs.html" },
        { "title": "À propos", "href": "about.html" }
      ]
    }
  }
}
```

**Comportement réactif** :

- **Mobile** : Affiche une icône de menu hamburger ; cliquer dessus déploie tous les liens de navigation.
- **Bureau** : Affiche directement les liens de navigation dans l'en-tête, mais pas au-delà de 40 % de la largeur de l'écran ; les liens excédentaires sont affichés via un menu déroulant « Plus ».

## Exemple complet

```json
{
  "version": "1.0.0",
  "options": {
    "langs": ["zh-Hans", "en-US", "ja-JP"],
    "site": {
      "baseUrl": "https://example.com",
      "title": "Blog technique",
      "gaID": "G-ABC123DEF4",
      "clarityID": "abc123xyz",
      "navLinks": [
        { "title": "Accueil", "href": "index.html" },
        { "title": "Documentation", "href": "docs.html" },
        { "title": "Blog", "href": "blog.html" }
      ]
    }
  },
  "files": []
}
```

## Points d'attention

- Après modification de la configuration, il est nécessaire de relancer `czon build` pour que les changements prennent effet.
- Tous les paramètres `site` sont optionnels ; vous ne pouvez configurer que les parties nécessaires.
- Les outils d'analyse (GA, Clarity) ne sont chargés que si leur ID correspondant est configuré, sans impact sur les performances de la page.
- Si `baseUrl` n'est pas configuré, la génération de `sitemap.xml` est ignorée.