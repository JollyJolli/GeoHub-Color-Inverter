# GeoHub Color Inverter

Une extension Chrome qui inverse automatiquement les couleurs pendant les parties de GeoHub pour améliorer la visibilité et réduire la fatigue oculaire.

## Origine du Projet

Ce projet est né d'un problème courant rencontré par les joueurs de GeoHub : le schéma de couleurs par défaut peut être difficile à voir clairement pendant le jeu. Les couleurs inversées dans le jeu rendent souvent difficile la distinction des détails importants, ce qui a conduit à la création de cette extension pour gérer automatiquement l'inversion des couleurs et améliorer l'expérience de jeu.

## Fonctionnalités

- Inversion automatique des couleurs sur les pages de jeu GeoHub
- Correction d'image pour éviter la double inversion
- Mises à jour dynamiques pour les changements en temps réel

## Installation

1. Téléchargez ou clonez ce dépôt
2. Ouvrez Chrome et accédez à `chrome://extensions/`
3. Activez le "Mode développeur" dans le coin supérieur droit
4. Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le dossier de l'extension

## Structure du Projet

```
├── manifest.json     # Configuration de l'extension
├── content.js       # Script principal de l'extension
├── icon48.svg       # Icône de l'extension (48x48)
└── icon128.svg      # Icône de l'extension (128x128)
```

## Détails Techniques

L'extension utilise les technologies et fonctionnalités suivantes :

- **Manifest V3** : La dernière version du système de manifestes de Chrome
- **MutationObserver** : Pour détecter les changements dynamiques sur la page
- **CSS Filters** : Pour appliquer l'inversion des couleurs

Le script principal (`content.js`) est automatiquement injecté dans les pages de jeu GeoHub et applique l'inversion des couleurs à la fois lors du chargement de la page et lorsque des changements dynamiques de contenu sont détectés.

## Permissions

L'extension ne nécessite que la permission `activeTab` pour fonctionner, ce qui signifie qu'elle ne peut accéder à la page actuelle que lorsque l'utilisateur interagit activement avec elle.

## Contribuer

Si vous souhaitez contribuer au projet, n'hésitez pas à créer une pull request ou à ouvrir une issue pour discuter de nouvelles fonctionnalités ou améliorations.