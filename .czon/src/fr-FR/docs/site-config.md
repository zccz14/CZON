---
"title": "Guide de configuration du site CZON"
"summary": "Ce document détaille les méthodes et options de configuration du site CZON. La configuration se trouve dans le champ `options.site` du fichier `.czon/meta.json` et inclut `site.baseUrl` (utilisé pour générer `sitemap.xml` et `robots.txt`), `site.title` (titre du site, valeur par défaut 'CZON'), `site.gaID` (ID de mesure Google Analytics) et `site.clarityID` (ID de projet Microsoft Clarity). Tous les éléments de configuration sont optionnels ; après modification, il est nécessaire de relancer `czon build` pour qu'ils prennent effet. Si `baseUrl` n'est pas configuré, la génération de `sitemap.xml` est ignorée. Les outils d'analyse ne sont chargés qu'après configuration de l'ID correspondant, sans impact sur les performances de la page. Le document fournit l'emplacement de configuration, les éléments configurables, un exemple complet et des points d'attention pour aider les utilisateurs à configurer facilement leur site."
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

Les éléments de configuration se trouvent dans le champ `options.site` du fichier `.czon/meta.json` :

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

## Éléments configurables

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

Comment l'obtenir : Rendez-vous sur [Google Analytics](https://analytics.google.com/) pour créer une propriété, puis récupérez le Measurement ID dans « Flux de données ».

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

Comment l'obtenir : Rendez-vous sur [Microsoft Clarity](https://clarity.microsoft.com/) pour créer un projet, puis récupérez le Project ID dans les paramètres du projet.

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
      "clarityID": "abc123xyz"
    }
  },
  "files": []
}
```

## Points d'attention

- Après modification de la configuration, il est nécessaire de relancer `czon build` pour que les changements prennent effet.
- Tous les éléments de configuration `site` sont optionnels ; vous pouvez ne configurer que les parties nécessaires.
- Les outils d'analyse (GA, Clarity) ne sont chargés qu'après configuration de l'ID correspondant, sans impact sur les performances de la page.
- Si `baseUrl` n'est pas configuré, la génération de `sitemap.xml` est ignorée.