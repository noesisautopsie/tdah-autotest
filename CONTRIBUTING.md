# Guide de Contribution

Merci de votre intérêt pour améliorer l'AUTO-TEST NOESIS ! Ce document explique comment contribuer efficacement au projet.

---

## 🎯 Types de Contributions Bienvenues

### 1. Corrections et Améliorations du Contenu

- Amélioration de la clarté des questions
- Corrections typographiques ou grammaticales
- Amélioration des formulations pour l'inclusivité
- Suggestions de nouvelles questions (avec justification scientifique)

### 2. Améliorations Techniques

- Optimisation du code JavaScript
- Amélioration de l'accessibilité (ARIA, navigation clavier)
- Optimisation des performances
- Corrections de bugs
- Tests automatisés

### 3. Design et UX

- Amélioration de l'ergonomie
- Optimisation responsive
- Thèmes alternatifs (mode clair, contraste élevé)
- Animations et transitions

### 4. Documentation

- Traductions
- Guides d'utilisation
- Documentation technique
- Tutoriels vidéo

### 5. Recherche et Validation

- Études de validation psychométrique
- Analyses statistiques
- Revues de littérature
- Études utilisateurs

---

## 📋 Processus de Contribution

### Étape 1 : Identifier le Type de Contribution

Avant de commencer, ouvrez une **Issue** sur GitHub pour discuter de votre proposition, sauf pour :
- Corrections typographiques mineures
- Corrections de bugs évidents
- Mises à jour de documentation mineure

### Étape 2 : Forker et Cloner

```bash
# Forker le projet sur GitHub (bouton "Fork")

# Cloner votre fork
git clone https://github.com/VOTRE-USERNAME/tdah-autotest.git
cd tdah-autotest

# Ajouter le dépôt original comme remote
git remote add upstream https://github.com/ORIGINAL-USERNAME/tdah-autotest.git
```

### Étape 3 : Créer une Branche

```bash
# Mettre à jour depuis l'original
git fetch upstream
git checkout main
git merge upstream/main

# Créer une branche pour votre contribution
git checkout -b type/description-courte

# Exemples :
# git checkout -b fix/typo-question-12
# git checkout -b feature/english-translation
# git checkout -b improve/accessibility-keyboard-nav
```

**Convention de nommage des branches** :
- `fix/` : Correction de bug
- `feature/` : Nouvelle fonctionnalité
- `improve/` : Amélioration existante
- `docs/` : Documentation
- `refactor/` : Refactoring sans changement fonctionnel

### Étape 4 : Faire vos Modifications

Suivez les standards du projet (voir section Standards de Code).

### Étape 5 : Tester

Avant de commit, vérifiez que :
- [ ] Le questionnaire se charge correctement
- [ ] Toutes les questions s'affichent
- [ ] Le calcul du score fonctionne
- [ ] L'interprétation s'affiche correctement
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le site est responsive (mobile/tablette/desktop)

### Étape 6 : Commit et Push

```bash
# Ajouter vos changements
git add .

# Commit avec un message descriptif
git commit -m "Type: Description courte

Description plus détaillée si nécessaire.
- Point 1
- Point 2

Refs #numero-issue"

# Push vers votre fork
git push origin type/description-courte
```

**Convention de messages de commit** :
```
Type: Description courte en impératif (max 50 caractères)

Corps du message expliquant le "pourquoi" et le "comment"
(limité à 72 caractères par ligne)

- Changement 1
- Changement 2

Refs #123 (numéro de l'issue associée)
```

**Types de commit** :
- `Fix:` Correction de bug
- `Feat:` Nouvelle fonctionnalité
- `Improve:` Amélioration existante
- `Docs:` Documentation
- `Style:` Formatage, pas de changement fonctionnel
- `Refactor:` Refactoring
- `Test:` Ajout/modification de tests
- `Chore:` Tâches de maintenance

### Étape 7 : Créer une Pull Request

1. Allez sur GitHub vers votre fork
2. Cliquez sur "Compare & pull request"
3. Remplissez le template de PR :
   - Titre clair et descriptif
   - Description détaillée des changements
   - Screenshots si changements visuels
   - Checklist de vérification
   - Références aux issues liées

---

## 📐 Standards de Code

### JavaScript

```javascript
// ✅ BON : Commentaires clairs, nommage explicite
/**
 * Calcule le score total du questionnaire
 * @returns {number} Score entre 0 et 90
 */
function calculateTotalScore() {
    let total = 0;
    // ...
    return total;
}

// ❌ MAUVAIS : Pas de commentaires, nommage vague
function calc() {
    let t = 0;
    // ...
    return t;
}
```

**Règles** :
- Utiliser `const` par défaut, `let` si réassignation nécessaire
- Éviter `var`
- Nommer les fonctions et variables de manière explicite
- Commenter les sections complexes
- Préférer les fonctions pures (sans effets de bord)

### HTML

```html
<!-- ✅ BON : Sémantique, accessible -->
<button 
    type="button" 
    onclick="calculateScore()" 
    aria-label="Calculer mon score TDAH"
    class="btn-primary"
>
    🧮 Calculer mon Score
</button>

<!-- ❌ MAUVAIS : Non sémantique, non accessible -->
<div onclick="calc()">Calculer</div>
```

**Règles** :
- Utiliser des balises sémantiques (`<section>`, `<article>`, `<nav>`)
- Toujours inclure les attributs `alt` pour images
- Utiliser `aria-label` quand le texte seul n'est pas explicite
- Garantir le contraste des couleurs (WCAG AA minimum)

### CSS

```css
/* ✅ BON : Organisation, nommage clair */
/* ========== COMPOSANTS UI ========== */
.score-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    /* ... */
}

/* ❌ MAUVAIS : Désorganisé, nommage vague */
.btn { padding: 5px; }
```

**Règles** :
- Organiser par sections commentées
- Utiliser des unités relatives (`rem`, `em`, `%`)
- Éviter `!important` sauf nécessité absolue
- Préférer les variables CSS pour les couleurs récurrentes

---

## 🌍 Traductions

### Ajouter une Nouvelle Langue

1. Créer `data/questions-{lang}.json` (ex: `questions-en.json`)
2. Traduire tout le contenu JSON
3. Créer `index-{lang}.html` avec `lang="{lang}"` dans `<html>`
4. Mettre à jour le README avec la nouvelle langue
5. Ajouter un sélecteur de langue dans l'interface

**Critères de qualité pour traductions** :
- Respect du sens clinique original
- Adaptation culturelle appropriée
- Relecture par locuteur natif
- Validation par professionnel de santé si possible

---

## 🔬 Modifications du Contenu Clinique

### Proposer une Nouvelle Question

Toute proposition doit inclure :

1. **Texte de la question** en français
2. **Justification clinique** :
   - Référence scientifique (article, DSM-5, échelle validée)
   - Explication du concept mesuré
   - Différenciation avec questions existantes
3. **Section d'appartenance**
4. **Tests utilisateurs** (optionnel mais apprécié)

**Exemple** :
```markdown
**Nouvelle question proposée** :
"Je change fréquemment de sujet de conversation sans m'en rendre compte."

**Justification** :
Cette question évalue la distractibilité conversationnelle, un symptôme 
d'inattention du TDAH adulte documenté dans le CAARS (Conners Adult ADHD 
Rating Scale, item 15). Elle se différencie de la question existante sur 
l'interruption de parole (impulsivité) en ciblant la désorganisation cognitive.

**Section** : Section 1 (Attention & Concentration)

**Référence** : Conners, C. K., et al. (1999). CAARS, item 15.
```

### Modifier une Question Existante

Les modifications doivent être justifiées par :
- Amélioration de la clarté
- Réduction du biais de genre
- Meilleure inclusivité
- Correction d'erreur clinique

**Process** :
1. Ouvrir une Issue "Amélioration Question X"
2. Proposer la version modifiée
3. Justifier le changement
4. Attendre validation avant PR

---

## 🧪 Tests et Validation

### Tests Manuels Requis

Avant toute PR, vérifier :

**Fonctionnels** :
- [ ] Chargement des 30 questions
- [ ] Sélection de toutes les réponses possible
- [ ] Calcul du score correct
- [ ] Affichage de l'interprétation appropriée
- [ ] Tableau différentiel visible
- [ ] Bouton de réinitialisation fonctionnel

**Compatibilité Navigateurs** :
- [ ] Chrome/Edge (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (si possible)
- [ ] Mobile (iOS/Android)

**Accessibilité** :
- [ ] Navigation complète au clavier (Tab, Enter, Espace)
- [ ] Lecteur d'écran (NVDA, VoiceOver)
- [ ] Zoom à 200% sans perte de fonctionnalité
- [ ] Contraste suffisant (vérifier avec outil WCAG)

### Tests Automatisés (Futur)

Nous prévoyons d'intégrer :
- Tests unitaires JavaScript (Jest)
- Tests d'intégration (Cypress)
- Tests d'accessibilité automatisés (axe-core)
- Validation HTML/CSS (W3C)

---

## ⚖️ Considérations Éthiques

### Modifications du Scoring ou Interprétations

Les seuils de scoring et interprétations ont été définis avec soin. Toute modification doit :
- Être justifiée par littérature scientifique
- Ne pas induire de faux positifs anxiogènes
- Ne pas minimiser des symptômes cliniquement significatifs
- Maintenir l'incitation à consulter un professionnel

### Ajout de Fonctionnalités de Collecte de Données

**Principe absolu** : Aucune collecte de données personnelles sans consentement explicite.

Si vous proposez une fonctionnalité nécessitant stockage :
- Justifier la nécessité
- Utiliser uniquement `localStorage` (pas de serveur)
- Implémenter un système de consentement RGPD
- Permettre l'effacement total des données
- Documenter clairement ce qui est stocké

---

## 📞 Communication

### Où Discuter ?

- **Issues GitHub** : Bugs, propositions de fonctionnalités, questions techniques
- **Pull Requests** : Discussions sur code spécifique
- **Email** : Questions confidentielles ou sensibles (voir README)

### Code de Conduite

Nous attendons de tous les contributeurs :
- **Respect** : Langage professionnel et courtois
- **Constructivité** : Critiques formulées de manière constructive
- **Bienveillance** : Accueil des contributeurs débutants
- **Honnêteté intellectuelle** : Reconnaissance des limites de nos compétences
- **Éthique** : Priorité au bien-être des utilisateurs

Les comportements inacceptables incluent :
- Harcèlement sous toute forme
- Langage offensant ou discriminatoire
- Trolling ou attaques personnelles
- Publication d'informations privées sans consentement

---

## 🏆 Reconnaissance des Contributeurs

Les contributeurs significatifs seront mentionnés dans :
- Fichier `CONTRIBUTORS.md`
- Section remerciements du README
- Commentaires du code pour contributions majeures

---

## ❓ Questions Fréquentes

**Q : Puis-je contribuer sans connaissances en code ?**  
R : Oui ! Traductions, relecture, tests utilisateurs, feedback sont précieux.

**Q : Dois-je être professionnel de santé pour proposer des questions ?**  
R : Non, mais les modifications cliniques doivent être justifiées par littérature scientifique.

**Q : Combien de temps avant que ma PR soit examinée ?**  
R : Nous visons 7 jours maximum. Les PRs mineures peuvent être plus rapides.

**Q : Ma PR a été refusée, pourquoi ?**  
R : Nous expliquerons toujours les raisons. Vous pouvez la réviser et la resoumettre.

---

## 📚 Ressources Utiles

- [Guide Git pour débutants](https://git-scm.com/book/fr/v2)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/fr/)
- [JavaScript Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)

---

**Merci de contribuer à rendre cet outil meilleur et plus accessible ! 🙏**
