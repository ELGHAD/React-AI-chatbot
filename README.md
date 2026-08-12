# 🤖 React AI Chatbot — Interface de Chat propulsée par OpenAI

> Une interface de chat moderne, rapide et élégante, connectée directement à l'API OpenAI — sans backend.

<p align="center">
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/AI-OpenAI%20API-412991?logo=openai&logoColor=white" alt="OpenAI API">
  <img src="https://img.shields.io/badge/Model-gpt--4o--mini-10A37F" alt="gpt-4o-mini">
  <img src="https://img.shields.io/badge/Status-Demo-yellow" alt="Status">
  <img src="https://img.shields.io/badge/License-Not%20specified-lightgrey" alt="License">
</p>

---

## 📌 Aperçu du projet

**React AI Chatbot** est une démo **frontend-only** d'un chatbot conversationnel, construite avec **React (Vite)** et connectée directement au modèle `gpt-4o-mini` via l'**API OpenAI**. Le projet met l'accent sur une expérience utilisateur soignée : bulles de messages, mode sombre/clair, historique de conversation et interactions fluides — sans nécessiter de serveur backend.

Ce projet s'adresse aux **développeurs front-end souhaitant démontrer leur capacité à intégrer une API IA moderne** dans une interface React réactive et bien structurée.

---

## ✨ Fonctionnalités clés

- 🗨️ Interface de chat moderne avec bulles de messages
- 🌗 Bascule **mode sombre / clair**
- ⌨️ Raccourcis clavier : `Enter` pour envoyer, `Shift + Enter` pour un saut de ligne
- 🔄 Défilement automatique vers le dernier message
- 🧹 Bouton pour réinitialiser la conversation
- ⚙️ UI et prompt système facilement personnalisables
- ⚡ Build ultra-rapide grâce à **Vite**

---

## 🏗️ Architecture & Stack Technique

| Composant | Technologie | Rôle |
|---|---|---|
| **Frontend** | React (Vite) | Interface utilisateur réactive |
| **Styling** | CSS personnalisé | Mise en forme du chat, thèmes clair/sombre |
| **IA / Modèle** | OpenAI API (`gpt-4o-mini`) | Génération des réponses conversationnelles |
| **Gestion d'état** | React Hooks (`useState`, `useEffect`) | Historique des messages, thème, statut de chargement |
| **Architecture logicielle** | Application frontend-only (SPA), appel direct à l'API OpenAI depuis le navigateur | Aucun backend requis |

> ⚠️ **Note d'architecture** : l'appel direct à l'API OpenAI depuis le navigateur expose la clé API côté client. Pour un usage en production, il est recommandé de faire transiter les requêtes par un backend proxy afin de protéger la clé API.

---

## 🚀 Guide d'installation & Démarrage rapide

### Prérequis
- Node.js (v18+ recommandé)
- Une clé API [OpenAI](https://platform.openai.com/api-keys)

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/ELGHAD/React-AI-chatbot.git
cd React-AI-chatbot
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Configurer les variables d'environnement
Créez (ou éditez) un fichier `.env` à la racine du projet :
```bash
VITE_OPENAI_API_KEY=votre_clé_api_openai
```

### 4️⃣ Lancer le serveur de développement
```bash
npm run dev
```
➡️ L'application est accessible sur `http://localhost:5173` (port par défaut de Vite)

### 5️⃣ Build de production (optionnel)
```bash
npm run build
```

---

## 📁 Structure du projet

```
React-AI-chatbot/
├── public/               # Assets statiques
├── src/                  # Composants React, logique de chat, styles
├── .env                  # Clé API OpenAI (à ne pas versionner)
├── eslint.config.js      # Configuration ESLint
├── index.html            # Point d'entrée HTML
├── package.json          # Dépendances et scripts npm
├── vite.config.js        # Configuration Vite
└── README.md
```

---

## 🔒 Sécurité & Bonnes pratiques

- **Variables d'environnement** (`.env`) pour isoler la clé API du code source.
- ⚠️ Projet conçu comme **démo frontend** : à ne pas déployer publiquement sans backend proxy, sous peine d'exposer la clé API OpenAI dans le bundle client.
- **ESLint** intégré pour maintenir la qualité et la cohérence du code.
- Architecture par **composants React** favorisant la lisibilité et la réutilisabilité.

---

## 👤 Auteur & Contact

**ELGHAD**
- GitHub : [@ELGHAD](https://github.com/ELGHAD)
- Projet : [React-AI-chatbot](https://github.com/ELGHAD/React-AI-chatbot)

⭐ Si ce projet vous inspire, laissez une étoile ou proposez vos idées via une *pull request* !
