---
"title": "Règles de base pour la génération de rapports d'analyse par IA"
"summary": "Ce document fournit les règles de base pour la génération de rapports d'analyse par IA, en insistant sur la nécessité de suivre strictement le processus de lecture des documents. Ce processus comprend cinq étapes : l'obtention de la liste des fichiers, la lecture et le résumé par lots, la gestion du contexte, la vérification de l'exhaustivité et la génération du rapport. Les principes fondamentaux incluent la lecture de tous les fichiers un par un, le fait de s'appuyer sur des faits, la normalisation des liens de référence et la prise en compte du poids temporel. Les règles générales exigent que le rapport commence par un format spécifique, soit généré dans un répertoire désigné, et interdisent la génération du rapport avant la lecture de tous les fichiers ou le saut de tout fichier."
"tags":
  - "Analyse IA"
  - "Génération de rapports"
  - "Lecture de documents"
  - "Règles"
  - "Markdown"
  - "Base factuelle"
  - "Normes de citation"
  - "Gestion des processus"
---

# Génération de rapports d'analyse par IA - Règles de base

## Processus de lecture des documents (à suivre strictement)

### Principes fondamentaux

Ce dépôt peut contenir des centaines, voire des milliers de fichiers Markdown. Vous devez **lire chaque fichier un par un**, sans en sauter aucun.
Pour traiter un grand nombre de fichiers, une stratégie de **lecture et de résumé progressifs** est adoptée.

### Étape 1 : Obtention de la liste complète des fichiers

1.  Exécutez `npx czon@latest ls-files` pour obtenir tous les fichiers Markdown
2.  Enregistrez le nombre total de fichiers N
3.  Sauvegardez la liste des fichiers comme une file d'attente à lire

### Étape 2 : Lecture et résumé par lots

Traitez les fichiers par lots. Il est recommandé de traiter 10 à 20 fichiers par lot, mais vous pouvez ajuster en fonction de la taille et de la complexité des fichiers.

**Pour chaque lot :**

1.  **Lecture** : Utilisez l'outil Read pour lire le contenu complet de chaque fichier du lot, un par un
2.  **Extraction** : Extrayez les informations pertinentes en fonction des **points d'intérêt du style actuel** (voir le guide de style ci-dessous)
3.  **Résumé du lot** : Organisez les informations extraites du lot en un résumé structuré
4.  **Cumul** : Fusionnez le résumé du lot dans la « base de connaissances » (la structure de la base de connaissances est décrite dans le guide de style ci-dessous)

### Étape 3 : Gestion du contexte

Lorsque le contexte approche de sa limite :

1.  **Compression de la base de connaissances** : Compressez la base de connaissances selon la **stratégie de compression du style actuel** (voir le guide de style ci-dessous)
2.  **Conservation de l'index** : Quelle que soit la compression, vous devez conserver l'index des chemins et des titres de tous les fichiers
3.  **Poursuite de la lecture** : Utilisez la base de connaissances compressée pour continuer à traiter les fichiers restants

### Étape 4 : Vérification de l'exhaustivité

Avant de générer le rapport, vous devez confirmer :

1.  Que les N fichiers de la liste ont tous été traités
2.  Que la base de connaissances contient les informations de base de chaque fichier (au moins le chemin et le titre)

**Si des omissions sont détectées** : Retournez à l'étape 2 pour traiter les fichiers manquants.

### Étape 5 : Génération du rapport

Ce n'est qu'après avoir terminé toutes les étapes ci-dessus que vous pouvez commencer à générer le rapport.

### Comportements interdits

-   ❌ Ne commencez pas à générer le rapport avant d'avoir lu tous les fichiers
-   ❌ Ne sautez aucun fichier, quel que soit leur nombre
-   ❌ Ne prétendez pas "avoir une vue d'ensemble" après avoir lu seulement une partie des fichiers
-   ❌ N'inventez pas de fichiers ou de contenus inexistants dans la base de connaissances

---

## Règles générales

### 1. Principe de base factuelle

-   N'oubliez pas de vous baser sur des faits, ne vous éloignez pas de la réalité
-   Tous les points de vue doivent être étayés par le texte original
-   N'inventez pas de contenu inexistant

### 2. Normes pour les liens de référence

-   Lorsque vous citez un lien vers le texte original, assurez-vous que le lien est valide
-   **Toujours créer un lien vers un fichier Markdown spécifique**, pas vers un répertoire
-   **Le texte du lien doit être le titre correspondant**, pas le nom du fichier
-   Étant donné que la génération se fait dans le répertoire SUMMARY, utilisez des chemins relatifs commençant par `../` pour les références

**Exemple correct** :

```markdown
[La guerre d'usure du capital : Stratégie pour les investisseurs individuels pour franchir les classes sociales](../INSIGHTS/6.md)
[De la création à la distribution – Construire un moteur de contenu natif IA](../INSIGHTS/4.md)
```

**Exemple incorrect** :

```markdown
[INSIGHTS/6.md](../INSIGHTS/6.md) ← Utilisation du nom de fichier au lieu du titre
[La guerre d'usure du capital](../INSIGHTS/) ← Lien vers un répertoire
```

### 3. Format de l'en-tête

Chaque rapport doit commencer par le format suivant :

```markdown
# [Titre du rapport]

**Date de l'analyse par IA** : AAAA-MM-JJ
**Note** : Ce rapport est généré par IA, son contenu est fourni à titre indicatif uniquement.

---
```

### 4. Poids temporel

-   Prenez en compte l'intervalle de temps, accordez un poids plus important aux articles les plus récents
-   Mais ne négligez pas les contenus importants plus anciens

### 5. Emplacement de sortie

-   Tous les rapports sont générés dans le répertoire `SUMMARY/`
-   Les noms de fichiers suivent le format spécifié