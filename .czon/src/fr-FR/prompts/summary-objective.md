---
"title": "Guide pour l'analyse de style objectif et neutre"
"summary": "Ce document est un guide sur la création d'un rapport d'analyse de style objectif et neutre. Il détaille les points de lecture à surveiller lors de l'analyse de documents (tels que le chemin du fichier, la date, le nom du projet, les rôles des personnes, les faits objectifs, etc.) et définit la structure de la base de connaissances (incluant l'index des fichiers, l'index des projets, l'index des personnes, la chronologie et l'index des cadres théoriques). Le document fournit également des stratégies de compression pour réduire le contenu si nécessaire, tout en insistant sur la nécessité de conserver les index clés. Le style doit présenter le contenu sous un angle objectif et neutre, en évitant les évaluations subjectives et les connotations émotionnelles. Le public cible comprend les nouveaux lecteurs, les collaborateurs potentiels et les investisseurs. Le document énumère les interdictions (comme ne pas ajouter d'expressions émotionnelles ou de spéculations) et la structure obligatoire des sections (telles que l'aperçu, la présentation du projet, les thèmes clés, la chronologie, les personnes principales et le résumé du cadre théorique), et spécifie le fichier de sortie ainsi qu'une liste de contrôle de la qualité."
"tags":
  - "Analyse de documents"
  - "Objectivité et neutralité"
  - "Structure de base de connaissances"
  - "Extraction d'informations"
  - "Guide de style"
  - "Rédaction de rapports"
  - "Données structurées"
---

# Rapport d'analyse de style objectif et neutre

## Points d'attention lors de la lecture

Lors de la lecture de chaque fichier, concentrez-vous sur l'extraction des éléments suivants :

- Chemin et titre du fichier
- Informations de date
- Noms des projets concernés et descriptions de leurs fonctionnalités
- Personnes mentionnées et leurs rôles
- Faits objectifs et données
- Informations spécifiques telles que les numéros de version, les jalons, etc.

**À ignorer** : Évaluations subjectives, expressions émotionnelles, contenu spéculatif

## Structure de la base de connaissances

```
### Index des fichiers
| Chemin du fichier | Titre | Date |
|-------------------|-------|------|

### Index des projets
| Nom du projet | Description | Fichiers associés |
|---------------|-------------|-------------------|

### Index des personnes
| Personne | Rôle | Fichiers associés |
|----------|------|-------------------|

### Chronologie
| Date | Événement | Fichier source |
|------|-----------|----------------|

### Index des théories/cadres
| Nom | Idée centrale | Fichier source |
|-----|---------------|----------------|
```

## Stratégie de compression

Lorsqu'il est nécessaire de compresser la base de connaissances :

1. **Doivent être conservés** : L'index des fichiers (chemin + titre), l'index des projets, l'index des personnes
2. **Peuvent être simplifiés** : La chronologie (conserver les nœuds clés), l'index théorique (conserver les noms et sources)
3. **Peuvent être supprimés** : Les descriptions détaillées, les événements secondaires

---

## Positionnement stylistique

Présenter le contenu sous un angle objectif et neutre, en évitant les évaluations subjectives et les connotations émotionnelles. Mettre l'accent sur les faits et les données, en garantissant l'exactitude et la fiabilité des informations.

**Public cible** : Nouveaux lecteurs ayant besoin de comprendre rapidement l'ensemble du dépôt, collaborateurs potentiels, investisseurs
**Ton d'écriture** : Professionnel, mesuré, neutre, comme pour la rédaction d'un CV ou d'un curriculum vitae
**Objectif** : Aider le lecteur à comprendre globalement les informations de base et les points de vue centraux du contenu, afin qu'il puisse se forger son propre jugement

## Interdictions

- ❌ Ne pas ajouter d'expressions émotionnelles (par exemple, "enthousiasmant", "malheureusement")
- ❌ Ne pas faire de spéculations (par exemple, "peut-être", "probablement", "sans doute")
- ❌ Ne pas utiliser de vocabulaire d'évaluation subjective (par exemple, "excellent", "mauvais", "intéressant")
- ❌ Ne pas évaluer le bon ou le mauvais, les avantages ou les inconvénients
- ❌ Ne pas utiliser la première personne

## Structure obligatoire des sections

### Aperçu

- Présentation du propriétaire du dépôt (nom/ID, identité, domaines principaux)
- Période couverte par le contenu du dépôt
- Liste des principaux projets (énumération succincte)

### Présentation du projet

Pour chaque projet principal, utiliser la structure suivante :

```markdown
### [Nom du projet]

- **Origine** : Source et contexte du projet
- **Fonctionnalités principales** :
  - Point de fonctionnalité 1
  - Point de fonctionnalité 2
- **Itérations de version** : Si applicable, expliquer brièvement l'historique des versions
- **Fichiers associés** : [Titre de l'article](../chemin/vers/fichier.md)
```

### Thèmes clés

Organiser le contenu par catégories thématiques :

```markdown
### 1. [Nom du thème]

- [Titre de l'article 1](../chemin/vers/fichier1.md) : Résumé du point de vue central
- [Titre de l'article 2](../chemin/vers/fichier2.md) : Résumé du point de vue central
```

### Chronologie

Utiliser un format de tableau pour présenter les événements clés :

```markdown
| Date       | Événement clé             |
| ---------- | ------------------------- |
| AAAA-MM-JJ | Description de l'événement (énoncé objectif) |
```

### Personnes principales

Utiliser un format de tableau :

```markdown
| Personne | Rôle      | Remarques         |
| -------- | --------- | ----------------- |
| Nom/ID   | Poste/Relation | Informations objectives pertinentes |
```

### Résumé des cadres théoriques

Pour les théories/cadres proposés dans le dépôt :

```markdown
### [Nom du cadre]

- **Idée centrale** : Résumé en une phrase
- **Éléments clés** : Énumération des composants centraux
- **Expression mathématique** : Si des formules existent, les lister
```

## Fichier de sortie

`SUMMARY/1-objective.md`

## Liste de contrôle de la qualité

- [ ] Absence de vocabulaire d'évaluation subjective
- [ ] Absence d'expressions émotionnelles
- [ ] Tous les liens pointent vers des fichiers spécifiques
- [ ] Le texte des liens correspond au titre de l'article
- [ ] Toutes les sections obligatoires sont incluses
- [ ] Les formats des tableaux de chronologie et de personnes sont corrects