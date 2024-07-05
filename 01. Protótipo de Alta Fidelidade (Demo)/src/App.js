import React, { useState, useEffect } from 'react';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';
import { questions, maturityLevels } from './components/questionsData';

const App = () => {
    const [results, setResults] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // Carregar resultados salvos do localStorage, se existirem
    useEffect(() => {
        const savedResults = JSON.parse(localStorage.getItem('savedResults'));
        if (savedResults) {
            setResults(savedResults);
            setShowResults(true);
        }
    }, []);

    // Salvar resultados no localStorage sempre que houver mudança em results
    useEffect(() => {
        if (results) {
            localStorage.setItem('savedResults', JSON.stringify(results));
        }
    }, [results]);

    const calculateResults = (answers) => {
        let totalScore = 0;
        let categoryScores = {};
        let responses = { yes: [], no: [] }; // Para armazenar as respostas "Sim" e "Não"

        Object.keys(answers).forEach((question) => {
            const { id, weight, category } = questions[question];
            if (answers[question] === 'SIM') {
                totalScore += weight;
                if (!categoryScores[category]) {
                    categoryScores[category] = 0;
                }
                categoryScores[category] += weight;
                responses.yes.push({ id: id, question: question, weight: weight });
            } else {
                responses.no.push({ id: id, question: question, weight: weight });
            }
        });

        let maturityLevel = 1;
        for (const [level, { min_score, max_score }] of Object.entries(maturityLevels)) {
            if (totalScore >= min_score && totalScore <= max_score) {
                maturityLevel = level;
                break;
            }
        }

        const calculatedResults = { totalScore, categoryScores, maturityLevel, responses };
        setResults(calculatedResults);
        setShowResults(true); // Mostrar os resultados após o cálculo

        // Salvar os resultados no localStorage
        localStorage.setItem('savedResults', JSON.stringify(calculatedResults));
    };

    const handleBackToForm = () => {
        setShowResults(false); // Voltar para o formulário
    };

    return (
        <div>
            <h1>Protótipo SIA</h1>
            {!showResults ? (
                <QuestionForm onSubmit={calculateResults} />
            ) : (
                <Results
                    totalScore={results.totalScore}
                    categoryScores={results.categoryScores}
                    maturityLevel={results.maturityLevel}
                    responses={results.responses} // Passe as respostas para o componente Results
                    onBack={handleBackToForm}
                />
            )}
        </div>
    );
};

export default App;
