/**
 * Application Module
 * Initialise et orchestre l'application
 */

/**
 * Initialisation de l'application au chargement de la page
 */
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('🧠 Initialisation du test TDAH NOESIS...');
        
        // Charger les données des questions
        await loadQuestionsData();
        console.log('✅ Données chargées');
        
        // Rendre les questions
        renderQuestions();
        console.log('✅ Questions affichées');
        
        // Rendre le tableau différentiel
        renderDifferentialTable();
        console.log('✅ Tableau différentiel généré');
        
        console.log('🎉 Test interactif TDAH prêt');
        
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation:', error);
    }
});

/**
 * Rend le tableau de diagnostic différentiel
 */
function renderDifferentialTable() {
    const data = getQuestionsData();
    if (!data || !data.differentialDiagnosis) return;

    const tbody = document.getElementById('differential-tbody');
    if (!tbody) return;

    let html = '';
    data.differentialDiagnosis.forEach(item => {
        html += `
            <tr>
                <td class="py-3 px-4 font-semibold">${item.symptom}</td>
                <td class="py-3 px-4">${item.alternatives}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

/**
 * Gestion du bouton de calcul
 */
function setupCalculateButton() {
    const button = document.querySelector('[onclick="calculateScore()"]');
    if (button) {
        button.addEventListener('click', calculateScore);
    }
}

/**
 * Ajoute un bouton de réinitialisation dans la section résultats
 */
function addResetButton() {
    const resultSection = document.getElementById('result-section');
    if (resultSection) {
        const resetButtonHtml = `
            <div class="text-center mt-6">
                <button 
                    onclick="resetTest()" 
                    class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                >
                    🔄 Recommencer le test
                </button>
            </div>
        `;
        resultSection.insertAdjacentHTML('beforeend', resetButtonHtml);
    }
}

// Ajouter le bouton de réinitialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    addResetButton();
});
