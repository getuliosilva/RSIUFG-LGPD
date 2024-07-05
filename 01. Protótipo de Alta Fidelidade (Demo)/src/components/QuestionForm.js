import React, { useState, useEffect } from 'react';
import { questions } from './questionsData';
import '../App.css';

// Função para obter a descrição da categoria
const getCategoryDescription = (category) => {
    switch (category) {
        case 'Tratamento de dados pessoais dos titulares':
            return 'O tratamento de dados pessoais dos titulares refere-se a qualquer operação realizada com dados pessoais, tais como coleta, armazenamento, uso, compartilhamento, processamento, entre outros, com a finalidade de atingir um determinado objetivo, seja ele comercial, operacional, legal ou administrativo.';
        case 'Transparência e direitos do titular':
            return 'Transparência no contexto do tratamento de dados pessoais refere-se à obrigação das organizações de fornecer informações claras, precisas e facilmente acessíveis aos titulares dos dados sobre como seus dados pessoais são coletados, utilizados, armazenados, compartilhados e protegidos. Isso inclui informar sobre as finalidades do tratamento, a base legal para o tratamento, os direitos dos titulares, e como os titulares podem exercer esses direitos.';
        case 'Fornecedores e terceiros':
            return 'A LGPD não se aplica apenas às empresas que coletam diretamente dados pessoais, mas também aos fornecedores e terceiros que tratam dados pessoais em nome dessas empresas. Isso inclui prestadores de serviços, parceiros comerciais, consultorias, e qualquer outra entidade que processe dados pessoais em nome de outra organização.';
        case 'Segurança da informação':
            return 'A segurança da informação na LGPD (Lei Geral de Proteção de Dados Pessoais) refere-se ao conjunto de práticas, políticas e medidas técnicas e organizacionais que visam proteger os dados pessoais contra acessos não autorizados, perdas, destruição, alteração, comunicação e qualquer forma de tratamento inadequado ou ilícito. A segurança da informação é essencial para garantir a privacidade dos titulares dos dados e a conformidade com a legislação.';
        case 'Violação de dados':
            return 'Violação de dados refere-se a qualquer incidente de segurança que resulte, de forma acidental ou ilícita, no acesso não autorizado, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito de dados pessoais. Esse conceito abrange uma ampla gama de situações, desde ataques cibernéticos até falhas operacionais ou descuidos que comprometam a segurança dos dados pessoais.';
        case 'Rastreabilidade':
            return 'A rastreabilidade refere-se à habilidade de monitorar e registrar o ciclo de vida dos dados pessoais, desde a coleta até a eliminação, garantindo que todas as etapas do tratamento dos dados sejam documentadas e possam ser auditadas.';
        case 'Governança':
            return 'Governança de dados refere-se ao conjunto de políticas, procedimentos, responsabilidades e tecnologias implementadas por uma organização para garantir que os dados pessoais sejam gerenciados de forma eficaz, segura e em conformidade com a legislação vigente. No contexto da LGPD (Lei Geral de Proteção de Dados Pessoais), a governança de dados é essencial para assegurar a proteção dos direitos dos titulares e a conformidade com os requisitos legais.';
        default:
            return '';
    }
};

const QuestionForm = ({ onSubmit }) => {
    const [answers, setAnswers] = useState({});
    const [companySize, setCompanySize] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        const initialAnswers = {};
        Object.keys(questions).forEach((question) => {
            const sectionIndex = parseInt(question.split(' - ')[0].replace('Seção ', ''), 10);
            if (sectionIndex !== 1 && sectionIndex !== 2 && sectionIndex !== 10) {
                initialAnswers[question] = 'NAO';
            }
        });
        setAnswers(initialAnswers);
    }, []);
    useEffect(() => {
        // Scroll para o topo da página quando o componente for montado
        window.scrollTo(0, 0);
    }, []);

    const handleCompanySizeChange = (value) => {
        setCompanySize(value);
        // Aqui você pode realizar outras ações conforme necessário
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(answers);
    };

    // Agrupar perguntas por seção e categoria
    const sections = {};
    Object.keys(questions).forEach((question) => {
        const [section, questionText] = question.split(' - ');
        const { category } = questions[question];
        if (!sections[section]) {
            sections[section] = {};
        }
        if (!sections[section][category]) {
            sections[section][category] = {
                description: getCategoryDescription(category),
                questions: []
            };
        }
        sections[section][category].questions.push({ questionText, question });
    });


    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        // Aqui você pode realizar outras ações conforme necessário
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(sections).map((section, index) => (
                <div className="section" key={index}>
                    <h2>{section}</h2>
                    {Object.keys(sections[section]).map((category, cIndex) => (
                        index === 0 ? (
                            // Renderização específica para o índice 0
                            <div key={cIndex}>
                                <h3>{'Autodiagnóstico da empresa em relação a LGPD'}</h3>
                                <p>{category}</p>
                                {sections[section][category].questions.map(({ questionText, question }, qIndex) => (
                                    <div className="question" key={qIndex}>
                                        <label>{'E-mail'}</label>
                                        <input placeholder='E-mail válido'></input>
                                    </div>
                                ))}
                            </div>
                        ) : index === 1 ? (
                            // Renderização específica para o índice 1
                            <div key={cIndex}>
                                <h3>{'Informações gerais'}</h3>
                                <p>{category}</p>
                                {sections[section][category].questions.map(({ questionText, question }, qIndex) => (
                                    <div className="questiongeral" key={qIndex}>
                                        <label>{'Qual o seu nome?'}</label>
                                        <input style={{width:'50%'}} placeholder='Texto de resposta curta'></input>
                                        <label>{'Qual o seu cargo?'}</label>
                                        <input style={{width:'50%'}} placeholder='Texto de resposta curta'></input>
                                        <label>{'Qual o nome da empresa?'}</label>
                                        <input style={{width:'50%'}} placeholder='Texto de resposta curta'></input>
                                        <div className='radiogeral'>
                                            <label>Qual o porte da empresa?</label>
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="micro"
                                                        checked={selectedOption === 'micro'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    Microempresa (até 9 empregados)
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="small"
                                                        checked={selectedOption === 'small'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    Empresa pequena (de 10 a 49 empregados)
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="medium"
                                                        checked={selectedOption === 'medium'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    Empresa de médio porte (de 50 a 249 empregados)
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="large"
                                                        checked={selectedOption === 'large'}
                                                        onChange={handleOptionChange}
                                                    />
                                                    Empresa grande (250 ou mais empregados)
                                                </label>
                                            </div>
                                        </div>
                                        <label>{'Qual seu principal tipo de cliente?'}</label>
                                        <input style={{width:'50%'}} placeholder='Texto de resposta curta'></input>
                                        <label>{'Qual é o setor da sua empresa?'}</label>
                                        <input style={{width:'50%'}} placeholder='Texto de resposta curta'></input>
                                    </div>
                                ))}
                            </div>
                        ) : index === 9 ? (
                            // Renderização específica para o índice 9
                            <div key={cIndex}>
                                <h3>{'Feedback'}</h3>
                                <p>{category}</p>
                                {sections[section][category].questions.map(({ id, label, type, options, placeholder, required }, qIndex) => (
                                    <div className="question" key={qIndex}>
                                        <label>{'As perguntas estavam claras e fáceis de entender?'}</label>
                                        <select name={id}>
                                            <option value="NAO">Não</option>
                                            <option value="SIM">Sim</option>
                                        </select>
                                        <label>{'As perguntas foram relevantes e apropriadas para o propósito do formulário?'}</label>
                                        <select name={id}>
                                            <option value="NAO">Não</option>
                                            <option value="SIM">Sim</option>
                                        </select>
                                        <label>{'Deixe suas sugestões para melhorar o formulário:'}</label>
                                        <textarea
                                            style={{ width: '100%', resize: 'none' }}
                                            placeholder='Texto de resposta longa'
                                            name={`feedback-${qIndex}`}
                                            rows={5} // Ajuste o número de linhas conforme necessário
                                        ></textarea>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Renderização padrão para outros índices
                            <div key={cIndex}>
                                <h3>{category}</h3>
                                <h4>{sections[section][category].description}</h4>
                                {sections[section][category].questions.map(({ questionText, question }, qIndex) => (
                                    <div className="question" key={qIndex}>
                                        <label>{questionText}</label>
                                        <select name={question} onChange={handleChange}>
                                            <option value="NAO">Não</option>
                                            <option value="SIM">Sim</option>
                                        </select>
                                    </div>
                                ))}
                            </div>
                        )
                    ))}
                </div>
            ))}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default QuestionForm;
