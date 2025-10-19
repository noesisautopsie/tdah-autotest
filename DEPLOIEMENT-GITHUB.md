# 🚀 GUIDE DE PUBLICATION SUR GITHUB

## 📦 Votre Projet Est Prêt !

Le projet **AUTO-TEST NOESIS – TDAH ADULTE** a été restructuré selon les standards professionnels GitHub.

---

## 📂 Structure Livrée

```
tdah-autotest/
├── index.html                    # Page principale (restructurée)
├── assets/
│   ├── css/
│   │   └── styles.css            # Styles modulaires
│   └── js/
│       ├── app.js                # Orchestration
│       ├── questions.js          # Gestion des questions
│       └── scoring.js            # Calcul et interprétation
├── data/
│   └── questions.json            # Base de données des questions
├── docs/
│   ├── clinical-references.md    # 📚 Références scientifiques
│   └── methodology.md            # 🔬 Méthodologie de construction
├── README.md                     # 📖 Documentation principale
├── LICENSE                       # ⚖️ CC BY-NC-SA 4.0
├── CONTRIBUTING.md               # 🤝 Guide de contribution
└── .gitignore                    # Fichiers à ignorer
```

---

## 🎯 Étapes de Publication sur GitHub

### 1️⃣ Créer un Nouveau Repository

**Sur GitHub.com** :
1. Cliquez sur **"+"** → **"New repository"**
2. Remplissez :
   - **Repository name** : `tdah-autotest` (ou autre nom)
   - **Description** : "Auto-questionnaire exploratoire TDAH adulte basé sur les critères DSM-5"
   - **Visibilité** : Public (ou Private si vous préférez)
   - ⚠️ **NE PAS** initialiser avec README (vous en avez déjà un)
3. Cliquez **"Create repository"**

### 2️⃣ Initialiser Git Localement

Ouvrez un terminal dans le dossier `tdah-autotest` :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit: Restructuration professionnelle du projet TDAH autotest

- Architecture modulaire (HTML/CSS/JS séparés)
- Données JSON externalisées
- Documentation complète (README, CONTRIBUTING, LICENSE)
- Références cliniques et méthodologie
- Standards d'accessibilité WCAG"

# Renommer la branche principale en 'main'
git branch -M main
```

### 3️⃣ Connecter au Repository GitHub

Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/tdah-autotest.git
git push -u origin main
```

### 4️⃣ Activer GitHub Pages (Hébergement Gratuit)

**Sur GitHub.com** :
1. Allez dans **Settings** de votre repository
2. Section **"Pages"** (menu gauche)
3. **Source** : Sélectionnez `main` branch
4. **Folder** : `/ (root)`
5. Cliquez **"Save"**

Votre site sera accessible à : `https://VOTRE-USERNAME.github.io/tdah-autotest/`

---

## ✅ Actions Post-Publication Recommandées

### Personnalisation Immédiate

1. **Modifier le README** :
   - Remplacer `votre-username` par votre vrai username
   - Ajouter votre email de contact
   - Mettre à jour le lien GitHub Pages

2. **Ajouter un fichier `SECURITY.md`** (optionnel) :
   ```markdown
   # Politique de Sécurité
   
   ## Signaler une Vulnérabilité
   
   Si vous découvrez une vulnérabilité de sécurité, merci de nous contacter 
   directement à [votre-email] plutôt que d'ouvrir une issue publique.
   ```

3. **Créer des Issues Labels** :
   - `bug` (rouge)
   - `enhancement` (bleu)
   - `documentation` (vert)
   - `question` (violet)
   - `good first issue` (jaune)

### Communication

1. **Tweeter/LinkedIn** pour partager le projet
2. **Reddit** : r/ADHD, r/TDAH (avec précautions éthiques)
3. **Forums spécialisés** : HyperSupers, TDAH France

### Amélioration Continue

1. **Créer un Project Board** pour organiser les tâches
2. **Activer les Discussions** GitHub pour questions communautaires
3. **Ajouter des tests automatisés** (CI/CD avec GitHub Actions)

---

## 📊 Métriques de Succès à Suivre

- ⭐ Nombre d'étoiles GitHub
- 🍴 Nombre de forks
- 📈 Traffic GitHub Pages (insights)
- 🐛 Issues ouvertes/fermées
- 🔄 Pull Requests reçues
- 🌍 Traductions communautaires

---

## ⚠️ Points d'Attention Légaux

### Avant de Publier Publiquement

1. **Vérifier les droits d'auteur** : Aucun contenu protégé n'est reproduit
2. **Avertissement médical visible** : Présent dans README et interface
3. **Licence claire** : CC BY-NC-SA 4.0 explicite
4. **Clause de non-responsabilité** : Présente et non ambiguë

### Si Sollicitation Commerciale

Si une entreprise veut utiliser votre outil commercialement :
- Référez-vous à la licence (usage non-commercial uniquement)
- Proposez une licence commerciale séparée (contact privé)
- Consultez un avocat si montants importants

---

## 🛠️ Maintenance Future

### Mises à Jour Recommandées

**Mensuelles** :
- Vérifier les issues ouvertes
- Répondre aux questions
- Merger les PRs validées

**Trimestrielles** :
- Réviser les références scientifiques
- Mettre à jour la documentation
- Améliorer l'accessibilité

**Annuelles** :
- Validation psychométrique (si ressources disponibles)
- Ajout de nouvelles langues
- Refonte design majeure

### Sauvegardes

GitHub conserve tout l'historique, mais pensez à :
- Faire des releases versionnées (v1.0.0, v1.1.0, etc.)
- Archiver régulièrement en local
- Dupliquer sur GitLab ou Bitbucket (optionnel)

---

## 🎓 Ressources Complémentaires

### Git & GitHub
- [GitHub Docs](https://docs.github.com/fr)
- [Git Cheat Sheet](https://training.github.com/downloads/fr/github-git-cheat-sheet/)
- [Cours OpenClassrooms Git](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github)

### Open Source Best Practices
- [Open Source Guide](https://opensource.guide/fr/)
- [Choose a License](https://choosealicense.com/)
- [Semantic Versioning](https://semver.org/lang/fr/)

### Accessibilité Web
- [WCAG 2.1 en français](https://www.w3.org/Translations/WCAG21-fr/)
- [Opquast Checklist](https://checklists.opquast.com/fr/)

---

## ✨ Améliorations Techniques Futures

### Court Terme (Facile)
- [ ] Ajouter un favicon personnalisé
- [ ] Créer un logo SVG pour le projet
- [ ] Ajouter meta tags Open Graph (partage réseaux sociaux)
- [ ] Implémenter un mode sombre

### Moyen Terme (Intermédiaire)
- [ ] Créer une Progressive Web App (PWA)
- [ ] Ajouter Google Analytics (avec consentement RGPD)
- [ ] Export PDF des résultats
- [ ] Graphiques de visualisation (Chart.js)

### Long Terme (Avancé)
- [ ] Backend optionnel (anonyme) pour statistiques agrégées
- [ ] Application mobile native (React Native)
- [ ] Version adaptée pour adolescents
- [ ] Intégration avec dossier médical personnel

---

## 📞 Support

Si vous rencontrez des difficultés :

1. **Issues GitHub** : Pour questions techniques
2. **Stack Overflow** : Tag `github` pour problèmes Git
3. **Discord/Slack** : Communautés de développeurs

---

## 🎉 Félicitations !

Votre projet est maintenant **prêt pour GitHub** avec :

✅ Architecture professionnelle modulaire  
✅ Documentation exhaustive  
✅ Licence claire et appropriée  
✅ Standards d'accessibilité  
✅ Guide de contribution  
✅ Méthodologie scientifique documentée  

**Prochaine étape** : Faites `git push` et partagez votre travail avec la communauté ! 🚀

---

*Document généré le 19 octobre 2025*
