---
"title": "Guide de déploiement d'un site statique CZON sur GitHub Pages"
"summary": "Cet article explique en détail comment déployer un site statique multilingue généré par CZON sur GitHub Pages via GitHub CLI. Il faut d'abord installer et se connecter à GitHub CLI, en s'assurant d'avoir les permissions 'repo'. Ensuite, exécutez la commande `npx czon@latest config github`, qui guide l'utilisateur à travers une série d'étapes : vérification des permissions, initialisation du dépôt Git, configuration du dépôt distant, activation de GitHub Pages en mode workflow, création ou mise à jour du fichier de workflow, commit et push des modifications, et enfin récupération de l'URL de Pages. Le processus est automatisé et simplifie le déploiement."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Site statique"
  - "Guide de déploiement"
  - "GitHub CLI"
  - "Multilingue"
  - "Déploiement automatisé"
---

# Déployer sur GitHub Pages

Ce guide explique comment déployer un site statique multilingue généré par CZON sur GitHub Pages via GitHub CLI.

Commencez par installer l'outil [GitHub CLI](https://cli.github.com/) (s'il n'est pas déjà installé) et assurez-vous d'être connecté (si ce n'est pas déjà le cas) :

```bash
$ gh --version # Vérifiez la version pour confirmer l'installation
```

Assurez-vous d'être connecté et d'avoir la permission `repo` sur le dépôt cible :

```bash
$ gh auth login -s repo # Connectez-vous à votre compte GitHub, vous serez invité à vous connecter via le navigateur ou avec un token
$ gh auth status # Vérifiez l'état de la connexion, assurez-vous d'être connecté avec la permission 'repo' sur le dépôt cible
```

Ensuite, il suffit d'exécuter la commande suivante et de suivre les instructions :

```bash
$ npx czon@latest config github
```

Cette commande vous guidera à travers les étapes suivantes :

1.  Vérifier si la permission `repo` est incluse pour `gh`. Si ce n'est pas le cas, vous serez invité à vous reconnecter et à ajouter la permission `repo`.
2.  Si le répertoire local n'est pas un dépôt Git, vous serez invité à initialiser un nouveau dépôt Git.
3.  Vérifier la configuration du dépôt Git distant pour le répertoire local. S'il n'y a pas de dépôt distant GitHub, vous serez invité à en créer un nouveau et à l'ajouter comme `origin`. Si `origin` existe déjà mais n'est pas un dépôt GitHub, vous serez invité à ajouter un nouveau dépôt GitHub distant comme `upstream`.
4.  Vérifier si GitHub Pages est activé et configuré en mode `workflow`. Sinon, l'activer et le corriger pour qu'il se déploie depuis Actions via l'API `gh api`. Configurer également le CNAME (si vous avez un domaine personnalisé).
5.  Vérifier le fichier de workflow GitHub. S'il n'existe pas, créer un fichier de workflow pour Pages. S'il existe mais n'est pas à jour, vous serez invité à le mettre à jour.
6.  Commiter le fichier de workflow et pousser les modifications vers le dépôt distant.
7.  Afficher l'URL du site GitHub Pages, récupérée via `gh api`.