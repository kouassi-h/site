# Kouassi H. — site éditorial

Cette branche de travail prépare le site à la publication d’articles via Pages CMS et à la génération des pages HTML avec Eleventy.

## Important
Ce dépôt n'est pas encore connecté au projet Netlify en production. Ne changez pas les paramètres Netlify du site actuellement en ligne avant d'avoir testé la prévisualisation.

## Développement
- `npm install`
- `npm run build`
- Le site généré se trouve dans `_site/`.

## Pages CMS
Le fichier `.pages.yml` définit la collection d'articles. Connectez-vous à Pages CMS avec GitHub et autorisez l'accès à ce dépôt.

## Publication
Le fichier `netlify.toml` configure la commande `npm run build` et le dossier de sortie `_site`. Après tests, le dépôt pourra être connecté à une prévisualisation Netlify ou au projet existant.
