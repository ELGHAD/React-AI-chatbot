# AI Chatbot — Interface de Chat IA avec React et l'API OpenAI

> Une interface de chat moderne construite avec React (Vite) et l'API OpenAI, illustrant une maîtrise des hooks React, de la gestion d'état côté client et de la conception d'interfaces utilisateur soignées.

<p align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=flat&logo=openai&logoColor=white" alt="OpenAI API" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/status-demo-yellow" alt="Status" />
</p>

---

## Aperçu du projet

Ce projet est une démonstration frontend d'une interface de chat conversationnel, construite avec React et connectée à l'API OpenAI (`gpt-4o-mini`). L'objectif est de démontrer une maîtrise de la construction d'interfaces réactives et fluides en React — gestion d'état, interactions clavier, expérience utilisateur soignée — sans dépendre d'un framework UI tiers.

Ce projet s'adresse aux recruteurs souhaitant évaluer des compétences frontend React modernes (hooks, Vite, intégration d'API tierce), dans le contexte d'une **démo technique** plutôt que d'une application de production.

---

## Aperçu visuel

<!--
  Ajoute tes captures d'écran dans un dossier docs/screenshots/ à la racine du projet,
  puis remplace les chemins ci-dessous par les noms de tes fichiers.
  Exemple : docs/screenshots/chat-light.png
-->

<p align="center">
  <img src="docs/screenshots/chat-light.png" alt="Interface en mode clair" width="45%" />
  <img src="docs/screenshots/chat-dark.png" alt="Interface en mode sombre" width="45%" />
</p>

---

## Point d'attention important — à corriger avant publication

> Ce projet appelle l'API OpenAI **directement depuis le navigateur**, ce qui signifie que la clé API doit être exposée côté client pour fonctionner. C'est une pratique courante pour un prototype rapide, mais **jamais acceptable en production** : n'importe qui peut inspecter le code source de la page et récupérer la clé, avec un risque direct de facturation frauduleuse sur ton compte OpenAI.
>
> Le dépôt contient également un fichier `.env` versionné sur GitHub. Si une vraie clé API s'y trouve (même expirée ou de test), il faut la révoquer immédiatement sur le tableau de bord OpenAI, puis retirer `.env` du suivi Git (`git rm --cached .env`) et l'ajouter à `.gitignore`.
>
> Pour un recruteur technique — en particulier dans le secteur bancaire ou une ESN sensible à la sécurité — un `.env` versionné sur un repo public est le genre de détail qui saute immédiatement aux yeux. Corriger ce point avant de partager le lien renforce directement ta crédibilité.

Une architecture de production recommandée consisterait à faire transiter les appels OpenAI par un petit backend (proxy API) qui garde la clé secrète côté serveur — un ajout qui, en plus de corriger le problème, donnerait au projet une dimension fullstack supplémentaire à mettre en avant.

---

## Fonctionnalités clés

- Interface de chat moderne avec bulles de messages
- Bascule mode clair / mode sombre
- Envoi avec `Entrée`, saut de ligne avec `Shift + Entrée`
- Défilement automatique vers le dernier message
- Bouton de réinitialisation de la conversation
- Interface et prompt système facilement personnalisables
- Base React + Vite pour un développement rapide

---

## Architecture & Stack technique

| Catégorie | Technologies |
|---|---|
| **Frontend** | React (Vite) |
| **Style** | CSS personnalisé |
| **Modèle IA** | API OpenAI (`gpt-4o-mini`) |
| **Gestion d'état** | React Hooks |
| **Qualité de code** | ESLint |

---

## Guide d'installation & Démarrage rapide

### Prérequis

- Node.js et npm
- Une clé API OpenAI valide

### 1. Cloner le projet

```bash
git clone https://github.com/ELGHAD/React-AI-chatbot.git
cd React-AI-chatbot
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer la clé API

Créer un fichier `.env` local (non versionné) à la racine du projet :

```
VITE_OPENAI_API_KEY=ta_clé_api_ici
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

L'application est accessible à l'adresse indiquée dans le terminal (généralement **http://localhost:5173**).

---

## Bonnes pratiques mises en œuvre

- **Architecture par hooks React** pour une gestion d'état claire et prévisible
- **Linting via ESLint** pour maintenir une qualité de code homogène
- **Séparation UI / logique métier** au sein des composants

---

## Auteur & Contact

**Elrhadiouini Hamza**
[GitHub](https://github.com/ELGHAD) · [Portfolio](https://elghad.github.io/hamza-elrhadiouini-portfolio) · hamelrhadiouini@gmail.com

---

## Références

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation API OpenAI](https://platform.openai.com/docs/)

---

<p align="center">N'hésitez pas à mettre une étoile si ce projet vous a été utile !</p>
