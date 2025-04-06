# Mon-Portfolio

## Description

Ce projet est un portfolio personnel développé avec Next.js. Il a été réalisé dans le cadre du cours de conception de portfolio donné par Dr Bakary Diarra. L'objectif principal est de mettre en avant mes compétences en développement web, mon parcours, mes projets et permettre aux visiteurs de laisser des témoignages.

---

## ## Fonctionnalités principales

### 1. Page d’accueil
- Affiche une photo de profil
- Présente une biographie claire et structurée
- Met en avant les compétences techniques et personnelles

### 2. Entête et pied de page
- Navigation fluide entre les différentes sections
- Liens externes vers GitHub, LinkedIn, etc.

### 3. Page Projets
- Présente au moins deux projets avec :
  - Nom
  - Description
  - Technologies utilisées

### 4. Authentification
- Page de connexion
- Page d’inscription
- Gestion via Redux

### 5. Témoignages
- Liste des témoignages
- Ajout et modification possibles
- Données gérées avec Redux
- La photo est optionnelle

### 6. Protection des routes
- Seules les pages `login` et `signup` sont accessibles sans être connecté
- Les autres pages sont sécurisées (about, project, resume, testimonials)

### 7. Responsive Design
- Le site fonctionne parfaitement sur mobile, tablette et ordinateur

### 8. Design moderne
- Google Fonts
- Style CSS personnalisé (rouge/noir)
- Animations légères et interface épurée


## Installation

```bash
git clone https://github.com/Yassinesf/Mon-Portfolio.git
cd Mon-Portfolio
npm install
npm run dev

## Structure du projet

Mon-Portfolio/
├── components/         # Composants réutilisables (Navbar, Footer, etc.)
├── features/           # Slices Redux (userSlice, testimonialSlice)
├── pages/
│   ├── login.js        # Page de connexion
│   ├── signup.js       # Page d'inscription
│   └── protected/      # Pages sécurisées (about, resume, project, etc.)
├── public/             # Images, logos, etc.
├── styles/             # Fichiers CSS globaux
├── store.js            # Configuration Redux
├── README.md
└── package.json

---

## Technologies utilisées

- Next.js
- Redux Toolkit
- React-Bootstrap
- Google Fonts


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
