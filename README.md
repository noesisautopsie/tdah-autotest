# AUTO-TEST NOESIS – DÉPISTAGE COGNITIF TDAH ADULTE

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/votre-username/tdah-autotest)
[![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-production-brightgreen.svg)]()

## Description

Auto-questionnaire exploratoire interactif pour adultes souhaitant évaluer la présence potentielle de symptômes compatibles avec un Trouble Déficitaire de l'Attention avec ou sans Hyperactivité (TDAH).

Cet outil est conçu selon les critères diagnostiques du **DSM-5** et s'inspire des échelles cliniques validées : **ASRS v1.1**, **Conners Adult ADHD Scale**, et **DIVA 2.0**.

### ⚠️ **Ce que cet outil N'EST PAS**

- **Ce n'est PAS un diagnostic médical**
- **Ce n'est PAS un substitut à une évaluation clinique**
- **Ce n'est PAS un test neuropsychologique validé**
- **Ce n'est PAS destiné à l'auto-diagnostic**

###  **Ce que cet outil EST**

- Un **outil de sensibilisation** pour identifier des difficultés attentionnelles et exécutives
- Un **point de départ** pour une discussion avec un professionnel de santé
- Une **aide à l'auto-observation** structurée selon des critères scientifiques
- Un **support pédagogique** pour comprendre les dimensions du TDAH adulte

---

## Caractéristiques

- **30 questions** réparties en 5 sections cliniques
- **Scoring automatique** avec interprétation graduée (0-90 points)
- **Tableau différentiel** pour contextualiser les symptômes
- **Interface responsive** adaptée mobile/tablette/desktop
- **Design accessible** conforme aux bonnes pratiques WCAG
- **Approche transgenre** et non-suggestive
- **Sans collecte de données** : tout reste dans votre navigateur

---

##  Installation et Utilisation

### Option 1 : Utilisation Locale (Recommandée)

1. **Télécharger le projet** :
   ```bash
   git clone https://github.com/noesisautopsie/tdah-autotest.git
   cd tdah-autotest
   ```

2. **Ouvrir le fichier** :
   - Double-cliquez sur `index.html` dans votre explorateur de fichiers
   - Ou utilisez un serveur local :
     ```bash
     # Avec Python 3
     python -m http.server 8000
     
     # Avec Node.js (si http-server est installé)
     npx http-server
     ```
   - Ouvrez ensuite `http://localhost:8000` dans votre navigateur

### Option 2 : Hébergement Web

Uploadez les fichiers sur n'importe quel hébergeur statique :
- **GitHub Pages** (gratuit)
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- Votre propre serveur web

**Note** : Aucune configuration serveur n'est requise, c'est une application 100% client-side.

---

## 📂 Structure du Projet

```
tdah-autotest/
├── index.html                  # Page principale
├── assets/
│   ├── css/
│   │   └── styles.css          # Styles personnalisés
│   └── js/
│       ├── app.js              # Orchestration de l'application
│       ├── questions.js        # Gestion du chargement des questions
│       └── scoring.js          # Calcul du score et interprétation
├── data/
│   └── questions.json          # Base de données des questions
├── docs/
│   ├── clinical-references.md  # Références scientifiques
│   └── methodology.md          # Méthodologie de construction
├── README.md                   # Ce fichier
├── LICENSE                     # Licence d'utilisation
└── .gitignore                  # Fichiers à ignorer par Git
```

---

## 🔬 Méthodologie Clinique

### Sections du Questionnaire

1. **Attention, Concentration, Distractibilité** (6 questions)  
   → Critères DSM-5 d'inattention + ASRS v1.1

2. **Impulsivité, Régulation Émotionnelle, Hyperactivité** (6 questions)  
   → Critères DSM-5 hyperactivité/impulsivité + DIVA affect

3. **Motivation, Récompense, Gestion du Temps** (6 questions)  
   → Modèle de l'aversion au délai & dysrégulation dopaminergique

4. **Relations, Communication, Adaptation Sociale** (6 questions)  
   → Conners Adult Scale + DIVA impact fonctionnel

5. **Impact Global et Histoire de Vie** (6 questions)  
   → Critères DSM-5 d'impact fonctionnel persistant

### Système de Scoring

| Score | Interprétation | Action Recommandée |
|-------|----------------|-------------------|
| 0-25  | Fonction exécutive intacte | Aucune inquiétude majeure |
| 26-45 | Variabilité attentionnelle légère | Auto-observation sur 30 jours |
| 46-65 | Profil compatible avec TDAH | **Consultation clinique conseillée** |
| 66-90 | Profil hautement évocateur | **Bilan neuropsychologique recommandé** |

### Diagnostic Différentiel Intégré

Le questionnaire inclut un tableau rappelant que les symptômes peuvent aussi être liés à :
- Troubles anxieux / stress chronique
- Dépression / burn-out
- Trauma complexe / trouble borderline
- Troubles bipolaires de type II
- Contextes situationnels (perfectionnisme, surcharge cognitive)

---

## 📚 Références Scientifiques

Consultez le fichier [`docs/clinical-references.md`](docs/clinical-references.md) pour :
- Liste complète des références DSM-5
- Publications scientifiques consultées
- Échelles cliniques utilisées comme modèles
- Limites méthodologiques reconnues

---

## 🛡️ Considérations Éthiques et Légales

### Avertissements Obligatoires

- Ce test ne remplace **en aucun cas** une évaluation clinique réalisée par un professionnel formé
- Les résultats sont **indicatifs** et ne constituent pas un diagnostic
- En cas de score élevé, **consultez un psychiatre, neurologue ou psychologue spécialisé en TDAH**
- Les informations restent **locales à votre navigateur** et ne sont jamais collectées

### Responsabilité

Les créateurs de cet outil déclinent toute responsabilité concernant :
- L'utilisation du questionnaire comme base d'auto-diagnostic
- Les décisions prises uniquement sur la base des résultats
- L'utilisation en contexte médical ou professionnel sans supervision

### Propriété Intellectuelle

Cet outil s'inspire d'instruments cliniques validés mais ne reproduit aucun test protégé. Les formulations sont originales et libres de droits.

---

## 🤝 Contribution

Les contributions sont bienvenues pour améliorer :
- Les formulations des questions (clarté, inclusivité)
- L'accessibilité numérique (ARIA, contrastes, navigation clavier)
- Les traductions (versions multilingues)
- La documentation scientifique

### Comment Contribuer

1. **Fork** le projet
2. Créer une branche (`git checkout -b amelioration/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout fonctionnalité X'`)
4. Push vers la branche (`git push origin amelioration/nouvelle-fonctionnalite`)
5. Ouvrir une **Pull Request**

**Note** : Les modifications substantielles du contenu clinique doivent être justifiées par des références scientifiques.

---

## 🔐 Confidentialité et Sécurité

- **Aucune donnée n'est collectée** : tout reste dans votre navigateur
- **Aucun cookie** n'est utilisé
- **Aucun tracking** ou analytics
- **Aucune connexion externe** sauf CDN Tailwind et Google Fonts (peut être localisé)
- Compatible avec les navigateurs en mode privé

---

## 🌍 Langues Disponibles

- 🇫🇷 Français (version actuelle)
- 🇬🇧 Anglais (planifié)
- 🇪🇸 Espagnol (planifié)

---

## 📄 Licence

Ce projet est sous licence **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** (CC BY-NC-SA 4.0).

**En résumé** :
- ✅ Vous pouvez partager et adapter ce projet
- ✅ Vous devez créditer l'auteur original
- ❌ Pas d'utilisation commerciale
- ✅ Les modifications doivent être partagées sous la même licence

Voir le fichier [`LICENSE`](LICENSE) pour le texte complet.

---

## 📞 Contact et Support

- **Issues GitHub** : Pour signaler des bugs ou proposer des améliorations
- **Email** : [votre-email@exemple.com] (pour questions sensibles)
- **Documentation** : Consultez le dossier `/docs` pour plus d'informations

---

## 🙏 Remerciements

Cet outil a été conçu avec le soutien de :
- La recherche clinique sur le TDAH adulte
- Les échelles ASRS, Conners, DIVA (inspiration méthodologique)
- La communauté open-source pour les outils techniques

---

## ⚖️ Clause de Non-Responsabilité Finale

**EN UTILISANT CET OUTIL, VOUS RECONNAISSEZ ET ACCEPTEZ QUE :**

1. Les résultats sont purement **indicatifs** et **non diagnostiques**
2. Seul un professionnel de santé qualifié peut poser un diagnostic de TDAH
3. Les créateurs ne sont **pas responsables** des décisions prises sur la base des résultats
4. Cet outil ne remplace **en aucun cas** une consultation médicale

**Si vous avez des préoccupations concernant votre santé mentale, veuillez consulter un professionnel qualifié.**

---

*Version 1.0.0 — Octobre 2025*
