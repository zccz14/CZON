---
"title": "CZON - Moteur de contenu Markdown AI-Natif"
"summary": "CZON est un moteur de contenu Markdown AI-Natif conçu pour aider les créateurs de contenu à simplifier leur flux de rédaction. Il met l'accent sur l'écriture sans configuration, en intégrant profondément la technologie d'IA pour traiter automatiquement des tâches telles que la génération de titres, l'extraction de résumés, la classification par étiquettes, la traduction multilingue et la navigation sur le site, réduisant ainsi les interruptions pour l'utilisateur. CZON intègre des fonctionnalités de génération de site statique, mais se concentre principalement sur la création et la gestion de contenu, plutôt que sur la personnalisation complexe de thèmes. Il convient aux utilisateurs qui souhaitent écrire dans leur langue maternelle et générer automatiquement des versions multilingues, en particulier aux créateurs de contenu web qui détestent les configurations complexes."
"tags":
  - "CZON"
  - "AI-Natif"
  - "Markdown"
  - "Moteur de contenu"
  - "Traduction multilingue"
  - "Génération de site statique"
  - "Zéro configuration"
  - "Création de contenu"
---

![Logo de CZON](logo.png)

# CZON - Moteur de contenu Markdown AI-Natif

- **C**: **C**ontent oriented | Le contenu est roi, concentré sur le contenu
- **Z**: **Z**ero Configuration | Écriture sans configuration, moins d'interruptions
- **O**: **O**rganic AI-Native | AI-Natif organique, intégration profonde de l'IA
- **N**: **N**-shaped Energy Curve | Courbe d'énergie en forme de N, intervenant à chaque étape de la création, distribution et rétroaction

[> Démo du site web](https://czon.zccz14.com/)

À l'ère de l'IA, en tant que créateur de contenu web, nous pouvons avoir un moteur de création de contenu plus intelligent.

**Retour au contenu : Minimiser les interruptions, se concentrer sur l'écriture**

Rendre la documentation à son essence, rendre l'écriture paisible.

Premièrement, je ne veux pas être un bibliothécaire. Parfois, je veux écrire du contenu, mais je n'ai peut-être pas encore pensé à son titre, ni formé une organisation particulière. J'espère que le LLM générera automatiquement le titre, fera un résumé, classera, naviguera et organisera pour moi.

Deuxièmement, mon bureau doit être rangé. Je ne veux pas d'outils de construction complexes à configurer, je ne veux pas me battre avec des configurations de documents compliquées, je n'aime pas les structures complexes. Chaque fois que je vois les fichiers de configuration et les structures de projet d'outils comme Docusaurus, VuePress, Astro, j'ai mal à la tête. Maintenant, CZON choisit de cacher toute la configuration dans le répertoire `.czon`, de la balayer dans un coin, l'utilisateur n'a qu'à se concentrer sur l'écriture du contenu, et CZON s'occupe du reste. Tous les autres répertoires sont votre espace d'écriture, vous pouvez organiser vos fichiers Markdown comme bon vous semble.

**Retour à la langue maternelle : Écrire dans sa langue maternelle, construire des versions multilingues en douceur**

La vie est courte, je suis trop paresseux pour traduire. C'est dans sa langue maternelle qu'une personne peut exploiter au mieux la profondeur de sa réflexion. Mais en même temps, il est nécessaire de rester connecté au monde, je ne veux pas abandonner la communication multilingue. J'espère donc avoir un outil qui me permette d'écrire dans ma langue maternelle tout en permettant à plus de gens de voir mon contenu. Actuellement, l'i18n nécessite non seulement de traduire soi-même, mais aussi de maintenir les mises à jour du contenu, c'est trop fastidieux. Je choisis d'utiliser le LLM pour m'aider à traduire, ce qui me fait gagner beaucoup de temps et permet de réaliser des traductions multilingues en un clic.

## Fonctionnalités de base

1. 🌍 **Traduction multilingue automatique** : Utilise l'IA pour une traduction incrémentielle, permettant à l'utilisateur d'écrire en Markdown dans sa langue maternelle, tout en étant multilingue.
2. 💭 **Extraction de résumé automatique** : Utilise l'IA pour analyser et extraire le contenu du texte original.
3. 🏷️ **Classification par étiquettes automatique** : Utilise l'IA pour extraire et gérer les étiquettes et la classification du contenu.
4. 🧭 **Navigation par catégories intelligente** : Utilise l'IA pour générer un plan du site et une navigation, indépendamment de l'emplacement des fichiers sources.

## Génération de site statique (SSG)

CZON intègre une solution SSG qui peut transformer n'importe quel dossier git contenant des fichiers Markdown en un site HTML statique.

⚠️ Veuillez noter que CZON n'est pas un générateur de site statique (SSG) professionnel, mais un moteur de contenu Markdown piloté par l'IA, axé sur la création et la gestion de contenu.

✅ CZON vise à simplifier le processus de création et de publication de contenu, permettant aux utilisateurs de se concentrer sur l'écriture elle-même, sans être gênés par des configurations et des outils complexes.

❌ CZON ne fournira pas de personnalisation de thèmes complexes ni d'écosystème de plugins, mais se concentrera sur l'amélioration de la qualité et de l'accessibilité du contenu grâce à l'IA.

🔔 Cependant, CZON peut toujours générer un site statique. Si nécessaire, CZON peut être utilisé comme prétraitement et intégré à d'autres solutions SSG pour générer des sites personnalisés et esthétiques.

## Démarrage rapide

Prérequis :

- [Node.js](https://nodejs.org/) installé (version 18 ou supérieure recommandée, nécessite la commande npx)
- Clé API [OpenAI](https://platform.openai.com/account/api-keys) obtenue, ou clé API compatible avec OPENAI
- Git installé (pour lister les fichiers Markdown à partir de Git, en ignorant les fichiers filtrés par les règles .gitignore)

Tout d'abord, travaillez dans un dossier déjà géré par git :

Configurez les variables d'environnement

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Obligatoire : remplacez par votre clé API OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optionnel, utilise par défaut l'API officielle d'OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Optionnel, utilise par défaut le modèle gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Optionnel, définit la limite maximale de tokens (si ignoré, utilise la valeur par défaut du modèle ; pour les traductions de textes longs, il est recommandé de définir une valeur plus élevée, par exemple 8192, en fonction du nombre maximum de tokens pris en charge par le modèle utilisé)
```

Construisez le site, avec prise en charge de la traduction multilingue. Utilisez le répertoire courant comme répertoire source, sortie dans le répertoire `.czon/dist`.

- Vous pouvez spécifier les versions linguistiques à générer en utilisant plusieurs fois le paramètre `--lang` (par exemple `--lang zh-Hans --lang en-US`).
- Aucune configuration de la langue source n'est nécessaire, CZON la détectera automatiquement.

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

**Voir plus de paramètres ou obtenir de l'aide** :

```bash
npx czon@latest
```