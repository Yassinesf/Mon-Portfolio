# Mon-Portfolio

## Description

Ce projet est un portfolio personnel développé avec Next.js. Il a été réalisé dans le cadre du cours de conception de portfolio donné par Dr Bakary Diarra. L'objectif principal est de mettre en avant mes compétences en développement web, mon parcours, mes projets et permettre aux visiteurs de laisser des témoignages.

---

## Fonctionnalités principales

1. **Page d’accueil :**
   - Affiche une photo de profil
   - Présente une biographie claire et bien structurée
   - Montre les compétences techniques et personnelles

2. **Entête et pied de page :**
   - Navigation fluide entre les pages
   - Liens vers GitHub, LinkedIn et autres réseaux sociaux

3. **Pages Projets :**
   - Deux projets minimum avec :
     - Nom du projet
     - Description détaillée
     - Technologies utilisées (ex : React, Node.js, etc.)

4. **Pages Authentification :**
   - Page de login
   - Page d’inscription
   - Validées avec Redux
   - Les formulaires affichent des erreurs en rouge

5. **Pages Témoignages :**
   - Liste de témoignages
   - Possibilité d’ajouter ou modifier un témoignage
   - Utilisation de Redux pour gérer les données
   - Les nouveaux témoignages n'ont pas besoin d'une photo

6. **Protection des routes :**
   - Seules les pages `login` et `inscription` sont accessibles aux utilisateurs non connectés
   - Les autres pages sont protégées et nécessitent une connexion

7. **Responsive design :**
   - Fonctionne correctement sur mobile, tablette et ordinateur

8. **Design moderne :**
   - Utilisation de Google Fonts
   - CSS personnalisé et animations
   - Structure claire et bien espacée

---

## Technologies utilisées

- Next.js
- React
- Redux Toolkit
- React-Bootstrap
- CSS3
- Google Fonts

---

## Structure du projet

```
/pages
  - index.js
  - about.js
  - projects.js
  - login.js
  - register.js
  - testimonials.js

/components
  - Header.js
  - Footer.js
  - ProjectCard.js
  - AboutCard.js
  - Testimonial.js
  - Modal.js

/features
  - authSlice.js
  - testimonialSlice.js

/styles
  - global.css
  - testimonial.css
```

---

## Installation et exécution

1. Cloner le projet :

```bash
git clone https://github.com/Yassinesf/Mon-Portfolio.git
cd Mon-Portfolio
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

---

## Auteur

- Nom : **Yassine Sfaira**
- Étudiant au Collège La Cité
- Programme : Programmation informatique
