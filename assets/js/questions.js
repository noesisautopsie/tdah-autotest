/**
 * Questions Module
 * Gère le chargement et le rendu des questions depuis le fichier JSON
 */

let questionsData = null;

/**
 * Charge les données des questions depuis le fichier JSON
 */
async function loadQuestionsData() {
    try {
        const response = await fetch('./data/questions.json');
        if (!response.ok) {
            throw new Error('Impossible de charger les données des questions');
        }
        questionsData = await response.json();
        return questionsData;
    } catch (error) {
        console.error('Erreur lors du chargement des questions:', error);
        showError('Erreur technique : impossible de charger le questionnaire. Veuillez rafraîchir la page.');
        throw error;
    }
}

/**
 * Rend les questions dans le DOM
 */
function renderQuestions() {
    if (!questionsData) {
        console.error('Les données ne sont pas chargées');
        return;
    }

    const container = document.getElementById('questions-container');
    if (!container) {
        console.error('Conteneur des questions introuvable');
        return;
    }

    let questionNumber = 1;
    let html = '';

    questionsData.sections.forEach(section => {
        // Titre de section
        html += `
            <h2 class="section-title">
                ${section.title}
                <span class="block text-sm font-normal text-gray-400 mt-1">${section.subtitle}</span>
            </h2>
        `;

        // Questions de la section
        section.questions.forEach(questionText => {
            html += `
                <div class="question-item">
                    <p class="font-semibold text-gray-200 mb-3">
                        ${questionNumber}. ${questionText}
                    </p>
                    <div class="flex flex-wrap gap-3 justify-between">
                        ${questionsData.scoringGuide.map(option => `
                            <div>
                                <input 
                                    type="radio" 
                                    id="q${questionNumber}-score${option.value}" 
                                    name="q${questionNumber}" 
                                    value="${option.value}" 
                                    class="hidden" 
                                    required
                                >
                                <label for="q${questionNumber}-score${option.value}" class="score-button">
                                    ${option.value}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            questionNumber++;
        });
    });

    container.innerHTML = html;
}

/**
 * Affiche un message d'erreur à l'utilisateur
 */
function showError(message) {
    const container = document.getElementById('questions-container');
    if (container) {
        container.innerHTML = `
            <div class="bg-red-900 border-l-4 border-red-500 text-red-100 p-4 rounded-lg">
                <p class="font-bold">⚠️ Erreur</p>
                <p>${message}</p>
            </div>
        `;
    }
}

/**
 * Obtient les données chargées
 */
function getQuestionsData() {
    return questionsData;
}
