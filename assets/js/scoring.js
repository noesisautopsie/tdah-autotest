/**
 * Scoring Module
 * Gère le calcul du score et l'interprétation des résultats
 */

/**
 * Calcule le score total du test
 */
function calculateScore() {
    const form = document.getElementById('tdah-test-form');
    
    // Validation HTML5 native
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = getQuestionsData();
    if (!data) {
        console.error('Données non disponibles pour le calcul');
        return;
    }

    let totalScore = 0;
    let allQuestionsAnswered = true;

    // Compter le nombre total de questions
    const totalQuestions = data.sections.reduce((sum, section) => sum + section.questions.length, 0);

    // Parcourir toutes les questions
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = `q${i}`;
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        
        if (selected) {
            totalScore += parseInt(selected.value, 10);
        } else {
            allQuestionsAnswered = false;
        }
    }

    if (!allQuestionsAnswered) {
        alert('Veuillez répondre à toutes les questions avant de calculer votre score.');
        return;
    }

    displayResults(totalScore);
}

/**
 * Affiche les résultats du test
 */
function displayResults(score) {
    const data = getQuestionsData();
    const interpretation = getInterpretation(score, data);

    // Mise à jour du score
    const scoreElement = document.getElementById('final-score');
    scoreElement.textContent = score;

    // Mise à jour de l'interprétation
    document.getElementById('interpretation-text').innerHTML = interpretation.html;

    // Mise à jour de la couleur du score
    scoreElement.classList.remove('text-green-400', 'text-yellow-400', 'text-orange-400', 'text-red-400');
    scoreElement.classList.add(`text-${interpretation.color}-400`);

    // Affichage de la section résultats
    const resultSection = document.getElementById('result-section');
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Retourne l'interprétation basée sur le score
 */
function getInterpretation(score, data) {
    const interpretation = data.interpretations.find(interp => 
        score >= interp.range[0] && score <= interp.range[1]
    );

    if (!interpretation) {
        return {
            html: 'Score hors limites. Veuillez vérifier vos réponses.',
            color: 'gray'
        };
    }

    return {
        html: `<span class="text-${interpretation.color}-400 font-bold">${interpretation.title}</span> ${interpretation.description}`,
        color: interpretation.color
    };
}

/**
 * Réinitialise le formulaire
 */
function resetTest() {
    const form = document.getElementById('tdah-test-form');
    form.reset();
    
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
