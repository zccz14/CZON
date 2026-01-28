---
"title": "CZON - Moteur de contenu Markdown AI-Natif"
"summary": "CZON est un moteur de contenu Markdown AI-Natif conçu pour aider les créateurs de contenu à simplifier leur flux de travail d'écriture. Il met l'accent sur l'écriture sans configuration, en intégrant profondément la technologie d'IA pour traiter automatiquement des tâches telles que la génération de titres, l'extraction de résumés, la classification par étiquettes, la traduction multilingue et la navigation du site, réduisant ainsi les interruptions pour l'utilisateur. CZON intègre une fonctionnalité de génération de site statique, mais se concentre principalement sur la création et la gestion de contenu, plutôt que sur la personnalisation complexe de thèmes. Il convient aux utilisateurs qui souhaitent écrire dans leur langue maternelle et générer automatiquement des versions multilingues, en particulier aux créateurs de contenu web qui détestent les configurations complexes."
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

<div style="text-align: center; margin-bottom: 20px; font-size: 2em; font-weight: bold;">
    <a href="https://czon.zccz14.com/">
      🌐 Voir le site web de CZON 🚀
    </a>
</div>

# CZON - Moteur de contenu Markdown AI-Natif

- **C**: **C**ontent oriented | Le contenu est roi, concentré sur le contenu
- **Z**: **Z**ero Configuration | Écriture sans configuration, moins d'interruptions
- **O**: **O**rganic AI-Native | AI-Natif organique, intégration profonde de l'IA
- **N**: **N**-shaped Energy Curve | Courbe d'énergie en forme de N, intervenant à chaque étape de la création, distribution et rétroaction

À l'ère de l'IA, en tant que créateur de contenu web, nous pouvons avoir un moteur de création de contenu plus intelligent.

**Retour au contenu : Minimiser les interruptions, se concentrer sur l'écriture**

Rendre la documentation à son essence, rendre l'écriture paisible.

Premièrement, je ne veux pas être un bibliothécaire. Parfois, je veux écrire du contenu, mais je n'ai peut-être pas encore pensé à son titre, ni formé une organisation particulière. J'aimerais que les LLM génèrent automatiquement des titres, fassent des résumés, classifient, créent une navigation, etc., pour organiser le travail.

Deuxièmement, mon espace de travail doit être propre. Je ne veux pas d'outils de construction complexes à configurer, je ne veux pas me battre avec des configurations de documents compliquées, je n'aime pas les structures complexes. Chaque fois que je vois les fichiers de configuration et la structure de projet d'outils comme Docusaurus, VuePress, Astro, j'ai mal à la tête. Maintenant, CZON choisit de cacher toute la configuration dans le répertoire `.czon`, de la balayer dans un coin, l'utilisateur n'a qu'à se concentrer sur l'écriture du contenu, et CZON s'occupe du reste. Les autres répertoires sont votre espace d'écriture, vous pouvez organiser vos fichiers Markdown comme bon vous semble.

**Retour à la langue maternelle : Écrire dans sa langue maternelle, construire en douceur des versions multilingues**

La vie est courte, je suis trop paresseux pour traduire. On est le plus à même d'exprimer la profondeur de sa pensée lorsqu'on utilise sa langue maternelle. Mais en même temps, il est nécessaire de rester connecté au monde, je ne veux pas renoncer à la communication multilingue. J'espère donc avoir un outil qui me permette d'écrire dans ma langue maternelle tout en permettant à plus de gens de voir mon contenu. Actuellement, l'i18n nécessite non seulement de traduire soi-même, mais aussi de maintenir les mises à jour du contenu, c'est trop fastidieux. Je choisis d'utiliser les LLM pour m'aider à traduire, ce qui me fait gagner beaucoup de temps et permet de réaliser des traductions multilingues en un clic.

## ✨ Fonctionnalités principales

1. 🌍 **Traduction multilingue par IA** : Utilise l'IA pour des traductions incrémentielles, permettant à l'utilisateur d'écrire en Markdown dans sa langue maternelle, tout en ayant un contenu multilingue.
2. 📊 **Extraction de métadonnées par IA** : Extraction automatique du titre, de la description, du résumé, des mots-clés, du public cible, des alias conviviaux pour les URL, etc.
3. 🏷️ **Classification par étiquettes par IA** : Utilise l'IA pour extraire et gérer les étiquettes et catégories du contenu.
4. 🧭 **Navigation par catégories par IA** : Utilise l'IA pour générer un plan du site et une navigation, indépendamment de l'emplacement des fichiers sources.
5. 🤖 **Résumé de site complet par IA** : Permet de générer un résumé de l'ensemble du site dans différents styles.

Ainsi que quelques fonctionnalités non liées à l'IA :

1. ⚙️ **Zéro configuration** : Toute la configuration et le cache sont cachés dans le répertoire `.czon`, la structure du projet reste propre.
2. 🔄 **Construction incrémentielle** : Détection des modifications basée sur le hachage du contenu, ne traite que les fichiers modifiés.
3. 📚 **Prise en charge des extensions Markdown** : Prise en charge native des formules mathématiques KaTeX, des diagrammes Mermaid, des carrousels Embla, des notes de bas de page, etc.
4. 🚀 **Génération de site statique** : SSG basé sur React intégré, génère un site statique multilingue.
5. 🌐 **Routage automatique selon la langue du visiteur** : Route automatiquement vers la version linguistique correspondante en fonction de la langue du visiteur.

## 📦 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) installé (version LTS 24 recommandée, ou version 18 et supérieure, nécessite la commande npx)
- [Clé API OpenAI](https://platform.openai.com/account/api-keys) obtenue, ou une clé API compatible avec OPENAI
- Git installé (pour lister les fichiers Markdown depuis Git, en ignorant les fichiers filtrés par les règles .gitignore)

### Configuration des variables d'environnement

```bash
export OPENAI_API_KEY="sk-xxxxxx"  # Requis : Remplacez par votre clé API OpenAI
export OPENAI_BASE_URL="https://api.openai.com/v1"  # Optionnel, utilise par défaut l'API officielle d'OpenAI
export OPENAI_MODEL="gpt-3.5-turbo"  # Optionnel, utilise par défaut le modèle gpt-3.5-turbo
export OPENAI_MAX_TOKENS="4096"  # Optionnel, définit la limite maximale de tokens (si ignoré, utilise la valeur par défaut du modèle ; pour les traductions de textes longs, il est recommandé de définir une valeur plus élevée, par exemple 8192, en fonction du nombre maximum de tokens pris en charge par le modèle utilisé)

# Si vous avez besoin d'un proxy HTTP pour accéder à l'API OpenAI, vous pouvez définir les variables suivantes
export HTTPS_PROXY="http://votre-proxy.com:8080"  # Optionnel, définit le proxy HTTPS
export HTTP_PROXY="http://votre-proxy.com:8080"   # Optionnel, définit le proxy HTTP
```

### Construire un site multilingue

Exécutez dans n'importe quel dossier géré par Git :

```bash
npx czon@latest build --lang zh-Hans --lang en-US
```

Étant donné que les codes de langue seront utilisés ultérieurement dans de nombreuses fonctionnalités de la génération de site statique, assurez-vous d'utiliser des codes de langue standard BCP 47. Par exemple, `zh-Hans` représente le chinois simplifié, `en-US` représente l'anglais américain. Vous pouvez ajouter plus de langues selon vos besoins, par exemple `es-ES` (espagnol), `ja-JP` (japonais), `ko-KR` (coréen), etc.
Pour une liste des codes de langue standard, veuillez consulter [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags).

Répertoire de sortie : `.czon/dist`, vous devrez déployer le contenu de ce répertoire sur une plateforme d'hébergement de site statique.

Pour une utilisation détaillée, exécutez `npx czon@latest --help`.

## 🔗 Comparaison avec d'autres outils

| Fonctionnalité     | CZON                     | Docusaurus      | VuePress        | Astro           |
| ------------------ | ------------------------ | --------------- | --------------- | --------------- |
| **AI-Natif**       | ✅ Intégration profonde  | ❌              | ❌              | ❌              |
| **Zéro config**    | ✅ Configuration cachée  | ❌ Fichier config requis | ❌ Fichier config requis | ❌ Fichier config requis |
| **Traduction multilingue par IA** | ✅ Traduction incrémentielle automatique | ❌ Traduction manuelle | ❌ Traduction manuelle | ❌ Traduction manuelle |
| **Classif./Étiquettes auto.** | ✅ Extraction par IA | ❌ Configuration manuelle | ❌ Configuration manuelle | ❌ Configuration manuelle |
| **Extensions Markdown** | ✅ KaTeX, Mermaid, Embla | ✅ Via plugins | ✅ Via plugins | ✅ Via plugins |
| **Personnalisation de thème** | ❌ Limitée | ✅ Richesse | ✅ Richesse | ✅ Richesse |

CZON se positionne comme un **moteur de contenu amélioré par l'IA**, et non comme un SSG complet. Il se concentre sur l'amélioration de l'efficacité de la création de contenu grâce à l'IA, et convient aux créateurs qui accordent de l'importance à la qualité du contenu et souhaitent réduire la charge de configuration. En réalité, CZON peut être utilisé conjointement avec des outils SSG comme Docusaurus, VuePress, Astro, en tant que moteur frontal pour la génération et la gestion de contenu.

## 📞 Support

- Page du projet : [https://github.com/zccz14/CZON](https://github.com/zccz14/CZON)
- Issues GitHub : [https://github.com/zccz14/CZON/issues](https://github.com/zccz14/CZON/issues)
- Discord : [https://discord.gg/h3QrCmz24n](https://discord.gg/h3QrCmz24n)

---

_Que l'écriture retrouve sa sérénité, que le contenu croisse naturellement._