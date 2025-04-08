# Mon-Portfolio

## Description

Ce projet est un portfolio personnel développé avec Next.js. Il a été réalisé dans le cadre du cours de conception de portfolio donné par Dr Bakary Diarra. L'objectif principal est de présenter mes compétences, projets, et permettre aux visiteurs de laisser des témoignages.

---

## Fonctionnalités principales

### 1. Page d’accueil
- Affichage d’une photo de profil
- Biographie claire et structurée
- Compétences techniques et personnelles

### 2. Entête et pied de page
- Navigation fluide entre les pages
- Liens vers GitHub et LinkedIn

### 3. Page Projets
- 2 projets minimum avec :
  - Nom du projet
  - Description
  - Technologies utilisées

### 4. Pages Authentification
- Connexion et inscription
- Formulaires gérés avec Redux
- Affichage des erreurs de formulaire (en rouge)

### 5. Pages Témoignages
- Affichage des témoignages
- Ajout et modification (sans photo requise)
- Succès affiché en vert, erreurs en rouge

### 6. Protection des routes
- Seules `login` et `signup` accessibles sans connexion
- Les autres pages sont protégées par Redux

### 7. Responsive Design
- Adapté à tous les écrans (mobile, tablette, desktop)

### 8. Design moderne
- Google Fonts
- Thème rouge/noir avec CSS personnalisé
- Animations fluides

---

## Aperçu du Portfolio (Captures d’écran)

#### Page de connexion
![Connexion](./Captures%20d%27ecran/Connexion.png)

#### Page d’inscription
![Inscription](./Captures%20d%27ecran/inscription.png)

#### Page d’accueil
![Accueil](./Captures%20d%27ecran/p1.png)

#### Section Projets
![Projets](./Captures%20d%27ecran/p2.png)

#### Page À propos
![A propos](./Captures%20d%27ecran/p3.png)

#### Témoignages
![Témoignages](./Captures%20d%27ecran/p4.png)

#### Pages Témoignages
![Succès](./Captures%20d%27ecran/p5.png)

#### formulaire d'ajout
![Erreur](./Captures%20d%27ecran/p6.png)

#### témoignage ajouté
![Ajout](./Captures%20d%27ecran/p7.png)

#### Liste des témoignages
![Liste](./Captures%20d%27ecran/p8.png)

#### Modification témoignage
![Modifier](./Captures%20d%27ecran/p9.png)

---

## Installation

```bash
git clone https://github.com/Yassinesf/Mon-Portfolio.git
cd Mon-Portfolio
npm install
npm run dev
```

---

## Structure du projet

```
Mon-Portfolio/
├── components/         # Composants réutilisables (Navbar, Footer, etc.)
├── features/           # Slices Redux (userSlice, testimonialSlice)
├── pages/
│   ├── login.js        # Connexion
│   ├── signup.js       # Inscription
│   └── protected/      # Pages protégées (about, resume, project, etc.)
├── public/
│   └── Captures d'ecran/  # Captures d'écran
├── styles/             # Fichiers CSS (global.css, temoignage.css)
├── store.js            # Store Redux
├── README.md
└── package.json
```

---

## Technologies utilisées
- Next.js
- Redux Toolkit
- React-Bootstrap
- Google Fonts

---

## Auteur
- Nom : **Yassine Sfaira**
- Étudiant au Collège La Cité
- Programme : Programmation informatique
