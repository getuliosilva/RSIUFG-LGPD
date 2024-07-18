import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';
import { questions, maturityLevels } from './components/questionsData';
import UserCharts from './components/UserCharts';
import TimelineChart from './components/TimelineChart';
import Curso from './components/Curso';
import Suporte from './components/Suporte';

const App = () => {
    const [results, setResults] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [activeSection, setActiveSection] = useState('Formulário');
    const navigate = useNavigate();

    // Função para mover o scroll para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Opção para um scroll suave
        });
    };
    const handleSair = (e) => {
        // Redireciona para a página de login
        navigate('/');
    };
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
        let responses = { yes: [], no: [] };

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
        setShowResults(true);

        localStorage.setItem('savedResults', JSON.stringify(calculatedResults));
    };

    const handleBackToForm = () => {
        setShowResults(false);
    };

    return (
        <div className="app-container">
            <div className="sidebar">
                <ul>
                    <li
                        className={activeSection === 'Formulário' ? 'active' : ''}
                        onClick={() => {
                            setActiveSection('Formulário');
                            scrollToTop(); // Mover o scroll para o topo após calcular os resultados
                        }}
                    >
                        Formulário
                    </li>
                    <li
                        className={activeSection === 'Dashboard' ? 'active' : ''}
                        onClick={() => {
                            setActiveSection('Dashboard');
                            scrollToTop(); // Mover o scroll para o topo após calcular os resultados
                        }}
                    >
                        Dashboard
                    </li>
                    <li
                        className={activeSection === 'Cursos' ? 'active' : ''}
                        onClick={() => {
                            setActiveSection('Cursos');
                            scrollToTop(); // Mover o scroll para o topo após calcular os resultados
                        }}                    >
                        Cursos
                    </li>
                    <li
                        className={activeSection === 'Suporte' ? 'active' : ''}
                        onClick={() => {
                            setActiveSection('Suporte');
                            scrollToTop(); // Mover o scroll para o topo após calcular os resultados
                        }}                    >
                        Suporte
                    </li>
                    <li
                        className="sair-button"
                        onClick={handleSair}
                    >Sair
                    </li>
                </ul>
            </div>
            <div className="content">
                {activeSection === 'Formulário' && (
                    <>

                        {!showResults ? (
                            <div>
                                <div className='form-header'>
                                    <h3>Formulário</h3>
                                </div>
                                <QuestionForm onSubmit={calculateResults} />
                            </div>
                        ) : (
                            <div>
                                <div className='default-header'>
                                    <h3>Resultados</h3>
                                </div>
                                <Results
                                    totalScore={results.totalScore}
                                    categoryScores={results.categoryScores}
                                    maturityLevel={results.maturityLevel}
                                    responses={results.responses}
                                    onBack={handleBackToForm}
                                />

                            </div>
                        )}
                    </>
                )}
                {activeSection === 'Dashboard' && (
                    <>
                        <div className='default-header'>
                            <h3>Colaboradores que realizaram cursos</h3>
                        </div>
                        <div className='user-charts-container'>
                            <UserCharts />
                        </div>
                        <div className='default-header'>
                            <h3>Tarefas realizadas no período</h3>
                        </div>
                        <div className='timeline-container'>
                            <TimelineChart />
                        </div>
                    </>
                )}
                {activeSection === 'Cursos' && (
                    <>
                        <div className='default-header'>
                            <h3>Cursos disponíveis</h3>
                        </div>
                        <div className='cursos-container' >
                            <Curso
                                minutagem='30:00'
                                title="Introdução"
                                description="A Lei Geral de Proteção de Dados (LGPD) entrou em vigor para garantir a segurança e privacidade das informações pessoais dos cidadãos. Este curso de introdução oferece uma visão abrangente sobre os princípios, requisitos e implicações da LGPD, capacitando os participantes a entender e implementar adequadamente os procedimentos necessários para conformidade com a lei."
                                image="https://via.placeholder.com/300"
                            />
                            <Curso
                                minutagem='60:00'
                                title="Princípios Fundamentais"
                                description="Nosso curso 'Princípios Fundamentais da LGPD' oferece uma introdução abrangente aos conceitos essenciais estabelecidos pela Lei Geral de Proteção de Dados. Os participantes irão explorar os pilares da legislação, incluindo consentimento, finalidade, transparência, segurança e responsabilidade."
                                image="https://via.placeholder.com/300"
                            />
                            <Curso
                                minutagem='45:00'
                                title="Direitos dos Titulares de Dados"
                                description="No curso ‘Direitos dos Titulares de Dados’ oferecemos uma análise aprofundada dos direitos concedidos aos titulares de dados pela Lei Geral de Proteção de Dados (LGPD). Os participantes explorarão os direitos de acesso, correção, exclusão e portabilidade de dados, bem como as responsabilidades das organizações em garantir o cumprimento desses direitos."
                                image="https://via.placeholder.com/300"
                            />
                        </div>
                        {/* Adicione mais CourseCards conforme necessário */}
                    </>
                )}
                {activeSection === 'Suporte' && (
                    <Suporte />
                )}
            </div>
        </div>
    );
};

export default App;
