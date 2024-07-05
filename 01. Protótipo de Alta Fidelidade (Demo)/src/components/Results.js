import React, { useState, useEffect } from 'react';
import maturidadeImage from '../utils/maturidade.png';
import '../App.css';

const Results = ({ totalScore, categoryScores, maturityLevel, responses, onBack }) => {
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [currentQuestionId, setCurrentQuestionId] = useState(null);

    const calculatePosition = (score) => {
        if (score <= 53) return (score / 53) * 20;
        if (score <= 94) return 20 + ((score - 54) / (94 - 54)) * 20;
        if (score <= 130) return 40 + ((score - 95) / (130 - 95)) * 20;
        if (score <= 160) return 60 + ((score - 131) / (160 - 131)) * 20;
        if (score <= 171) return 80 + ((score - 161) / (171 - 161)) * 20;
        return 0;
    };

    const formatQuestion = (question) => {
        const match = question.match(/Seção \d+ - (.+)\?/);
        return match ? match[1] + '.' : question;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sortedPendingQuestions = responses.no.slice().sort((a, b) => {
        return b.weight - a.weight;
    });

    const onlyCompleted = responses.yes.length > 0 && sortedPendingQuestions.length === 0;
    const onlyPending = responses.yes.length === 0 && sortedPendingQuestions.length > 0;

    const handleSuggestionClick = (id) => {
        setCurrentQuestionId(id);
        setShowSuggestion(true);
    };

    const closeSuggestion = () => {
        setShowSuggestion(false);
        setCurrentQuestionId(null);
    };

    const renderSuggestionContent = () => {
        switch (currentQuestionId) {
            case 11:
                return (
                    <div>
                        <h2>Controle de acesso</h2>
                        <p>Os dados coletados por sua instituição devem estar protegidos e só podem ser acessados pelas pessoas e para as finalidades informadas aos/
                            às titulares no momento da coleta. Ou seja, não podem vazar.
                        </p>
                        <p>
                            Em muitos casos, como quando a empresa trabalha com grupos socialmente
                            vulnerabilizados, vazamentos de dados podem implicar em discriminação
                            e perseguição, tanto online quanto offline. É importante criar níveis diferenciados de proteção para esses casos específicos, limitando as pessoas
                            que têm acesso a essas informações. Lembre-se que muitos incidentes de
                            vazamento de dados têm causas internas, então é fundamental que sua
                            equipe tenha um treinamento adequado sobre Segurança da Informação.
                        </p>
                        <p style={{ textAlign: 'left', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)', fontSize: 13 }}>
                            Instituto Brasileiro de Defesa do Consumidor (IDEC 2021)
                        </p>
                    </div>
                );
            case 22:
                return (
                    <div>
                        <h2>Encarregado de dados</h2>
                        <p>
                            O encarregado será responsável
                            pelas atividades de tratamento de dados pessoais e pelo contato com a
                            Autoridade Nacional de Proteção de Dados (ANPD) e com os/as titulares.
                            Você também pode optar por contratar uma empresa para essa função.
                        </p>
                        <p>
                            O/a encarregado/a não precisa ser advogado/a ou profissional da área
                            da tecnologia, mas precisa entender bem os conceitos da Lei e os fluxos
                            de dados da instituição, sendo capaz de operar seus mecanismos de
                            proteção de dados. É interessante que seja alguém que participou do processo de adequação e tenha bastante jogo de cintura para se relacionar
                            com o público, atendendo suas demandas e trazendo, para a instituição,
                            sugestões de melhorias, quando necessário.
                        </p>
                        <h3>As principais funções desse/a profissional ou empresa são:</h3>
                        <li>Aceitar reclamações e comunicações dos/as titulares de dados e encaminhar suas demandas.</li>
                        <li>Receber comunicações da ANPD e adotar as providências cabíveis.</li>
                        <li>Orientar colaboradores/as e parceiros/as da instituição sobre conceitos e práticas que garantem a proteção de dados pessoais.</li>
                        <h3>Conheça, a seguir, as tarefas que o/a encarregado/a de proteção de dados deve estar apto/a a realizar:</h3>
                        <li>Monitorar o funcionamento da estrutura de proteção de dados
                            criada a partir da adequação à LGPD, por meio da identificação e
                            análise das atividades de coleta e tratamento de dados, para garantir que o que foi estabelecido está sendo cumprido, informar
                            eventuais questões e fazer recomendações para o/a controlador/a;</li>
                        <li>Manter atualizado o mapeamento dos fluxos de dados dentro da
                            instituição e comunicar internamente, à ANPD e aos/às titulares de
                            dados, eventuais mudanças na captação e tratamento de dados,
                            sempre com base nas justificativas previstas na Lei;</li>
                        <li>Produzir Relatórios de Impacto à Proteção de Dados Pessoais
                            (RIPD). Esse documento deve ser solicitado pela empresa ao/à
                            encarregado/a sempre que houver dúvida se uma determinada
                            atividade pode colocar em risco direitos fundamentais e liberdades civis dos/as titulares de dados. Ele deve conter uma análise
                            da situação à luz da LGPD e, caso o/a controlador/a não siga suas
                            recomendações, deverá justificar essa decisão por escrito;</li>
                        <li>Ser um ponto de contato da sua empresa com a ANPD, atendendo suas demandas ou esclarecendo eventuais dúvidas quanto à
                            aplicação da LGPD;</li>
                        <li>Responder às solicitações de informação e questionamentos feitos
                            por titulares a respeito dos mecanismos de proteção dos dados
                            pessoais confiados à sua empresa;</li>
                        <li> Identificar pontos críticos dos processos que envolvem dados e
                            trabalhar para repará-los;</li>
                        <li>Realizar acordos de processamento de dados com terceiros/as com
                            os/as quais os bancos de dados da instituição sejam compartilhados total ou parcialmente.</li>

                        <p style={{ textAlign: 'left', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)', fontSize: 13 }}>
                            Instituto Brasileiro de Defesa do Consumidor (IDEC 2021)
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Bases legais para o tratamento de dados</h2>
                        <p>
                            O que chamamos de “bases legais de tratamento
                            de dados pessoais” são as justificativas previstas na
                            Lei que permitem que você faça a captação e o tratamento de informações pessoais de quem interage
                            com a sua instituição. Você deve informar essas razões ao/à titular no
                            momento da coleta de seus dados.
                        </p>
                        <p>
                            A LGPD traz 10 possibilidades legítimas de tratamento de dados pessoais. São elas:
                        </p>
                        <h4>CONSENTIMENTO</h4>
                        <h4>OBRIGAÇÃO LEGAL</h4>
                        <h4>EXECUÇÃO DE POLÍTICAS PÚBLICAS</h4>
                        <h4>REALIZAÇÃO DE ESTUDOS POR ÓRGÃO DE PESQUISA</h4>
                        <h4>EXECUÇÃO DE UM CONTRATO ASSINADO PELO/A TITULAR DE DADOS</h4>
                        <h4>EXERCÍCIO REGULAR DO DIREITO EM PROCESSOS</h4>
                        <h4>PARA A PROTEÇÃO DA VIDA OU INCOLUMIDADE DO/A TITULAR OU DE TERCEIRO/A</h4>
                        <h4>PARA A TUTELA DE SAÚDE</h4>
                        <h4>PARA A PROTEÇÃO DO CRÉDITO</h4>
                        <h4>EM RAZÃO DO LEGÍTIMO INTERESSE DO/A CONTROLADOR/A</h4>
                        <p style={{ textAlign: 'left', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)', fontSize: 13 }}>
                            Instituto Brasileiro de Defesa do Consumidor (IDEC 2021)
                        </p>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h2>Consentimento</h2>
                        <p>
                            Essa é a mais conhecida base legal de tratamento
                            de dados que a Lei traz. O consentimento é quando
                            o/a titular de dados autoriza o uso de seus dados.
                        </p>
                        <p>
                            A solicitação de consentimento não é só um pedido
                            de “tique” em uma caixinha que diz “Li e aceito”. É
                            preciso usar a criatividade e as tecnologias para garantir e documentar que a pessoa entendeu perfeitamente
                            a finalidade do uso dos seus dados e o autorizou livremente.
                        </p>
                        <p>
                            A LGPD diz que o consentimento deve ser exposto em CLÁUSULA DESTACADA, ou seja, em uma parte separada e impossível de não ser vista no
                            aviso sobre a finalidade do uso dos dados. De modo geral, a opção pelo
                            consentimento como base legal deve ser priorizada em relação às outras
                            justificativas de tratamento que a Lei traz.
                        </p>
                        <p>
                            Para dados manifestamente públicos, ou seja, que estão disponíveis em
                            bases do governo, como salários de funcionários/as do setor público, o
                            consentimento é dispensado, porém continua sendo necessário justificar
                            o tratamento com uma das outras bases legais. Ainda há discussão sobre
                            se perfis e posts de redes sociais são considerados dados públicos. O
                            tratamento desses dados deve ser feito, então, mediante a informação
                            quanto à finalidade do uso e o consentimento do/a titular.
                        </p>
                        <p>
                            No caso de dados sensíveis, o consentimento só será dispensado se houver
                            outra base legal imprescindível, como a proteção da vida do/a titular. Por
                            exemplo: apesar de informações de saúde serem consideradas dados
                            sensíveis, se a empresa precisar coletá-las para evitar que uma pessoa
                            assuma funções que possam agravar doenças preexistentes, o consentimento poderá ser dispensado.
                        </p>
                        <h2>Finalidade</h2>
                        <p>
                            Propósito legítimo, baseado na lei e informado ao/à titular, que assegura a legalidade do tratamento de seus dados. É o PARA QUE do tratamento de dados que sua empresa realiza. Isso quer dizer que é preciso
                            ter uma justificativa razoável para captar e utilizar dados pessoais. Essa
                            finalidade da coleta e do uso dos dados deve ser informada ao/à titular
                            no momento da captação de suas informações e, se for alterada, deve
                            ser comunicada novamente. Cada tipo de dado deve ter uma finalidade
                            específica que justifique seu tratamento, senão será considerado um
                            tratamento inadequado.
                        </p>
                        <p>
                            Por exemplo, se você coleta nome e endereço eletrônico de visitantes
                            do seu site para continuar a comunicação por e-mail, sua finalidade é o
                            envio de conteúdo, mas lembre-se de pedir o consentimento para isso.
                        </p>
                        <p style={{ textAlign: 'left', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)', fontSize: 13 }}>
                            Instituto Brasileiro de Defesa do Consumidor (IDEC 2021)
                        </p>
                    </div>
                );
            case 24:
                return (
                    <div>
                        <h2>Conscientização e Treinamento</h2>
                        <p>
                            Os recursos humanos de uma organização são o fator preponderante para o
                            sucesso das medidas que se referem à segurança da informação e à proteção de dados
                            pessoais, já que efetivamente são as pessoas que trabalham para os agentes de tratamento
                            de pequeno porte que realizarão o tratamento dos dados pessoais.
                        </p>
                        <p>
                            Assim, sugere-se que os agentes de tratamento de pequeno porte conscientizem os
                            seus funcionários por meio de treinamentos e campanhas de conscientização sobre suas
                            obrigações e responsabilidades relacionadas ao tratamento de dados pessoais.                        </p>
                        <p>
                            Essa conscientização implica informar e sensibilizar todos os funcionários da
                            organização, especialmente aqueles diretamente envolvidos na atividade de tratamento de
                            dados, sobre as obrigações legais existentes na LGPD e em normas e orientações editadas
                            pela ANPD.
                        </p>
                        <h3>
                            Algumas informações úteis que podem ser passadas aos funcionários são:
                        </h3>
                        <li>Como utilizar controles de segurança dos sistemas de TI relacionados ao trabalho diário;</li>
                        <li>Como evitar de se tornarem vítimas de incidentes de segurança corriqueiros, tais
                            como contaminação por vírus ou ataques de phishing, que podem ocorrer, por
                            exemplo, ao clicar em links recebidos na forma de pop-up de ofertas promocionais
                            ou em links desconhecidos que chegam por e-mail;</li>
                        <li>Manter documentos físicos que contenham dados pessoais dentro de gavetas, e não
                            sobre as mesas;</li>
                        <li>Não compartilhar logins e senhas de acesso das estações de trabalho;</li>
                        <li>Bloquear os computadores quando se afastar das estações de trabalho, para evitar
                            o acesso indevido de terceiros;</li>
                        <li>Seguir as orientações da política de segurança da informação.</li>
                        <p style={{ textAlign: 'left', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.6)', fontSize: 13 }}>
                            GUIA ORIENTATIVO SOBRE SEGURANÇA DA INFORMAÇÃO PARA
                            AGENTES DE TRATAMENTO DE PEQUENO PORTE (ANPD 2021)
                        </p>
                    </div>
                );
            default:
                return <p>Sem sugestões disponíveis para esta etapa.</p>;
        }
    };

    return (
        <div className='result-section'>
            <h2>Resultados</h2>
            <p className={`nivel-maturidade nivel-maturidade-${maturityLevel}`}>
                Nível de maturidade da organização: <strong>{maturityLevel}</strong>
            </p>
            <p>Pontuação total: <strong>{totalScore}</strong></p>

            <h3>Pontuação por categoria:</h3>
            <ul>
                {Object.entries(categoryScores).map(([category, score]) => (
                    <li key={category}>{category}: {score}</li>
                ))}
            </ul>

            <h3>Requisitos esperados em cada nível (por atributo):</h3>
            <img
                src={maturidadeImage}
                alt="regua-maturidade"
                style={{ maxWidth: '100%', height: 'auto' }}
            />

            <h3>Regua de referência pontuação / nível de maturidade:</h3>
            <div className="ruler-container">
                <div className="ruler-titles">
                    <div className="ruler-title">Inadequado</div>
                    <div className="ruler-title">Ajustes Iniciais</div>
                    <div className="ruler-title">Adequação Parcial</div>
                    <div className="ruler-title">Adequação Satisfatória</div>
                    <div className="ruler-title">Totalmente Adequado</div>
                </div>
                <div className="ruler">
                    <div className="ruler-level level-1">0 - 53 (Nível 1)</div>
                    <div className="ruler-level level-2">54 - 94 (Nível 2)</div>
                    <div className="ruler-level level-3">95 - 130 (Nível 3)</div>
                    <div className="ruler-level level-4">131 - 160 (Nível 4)</div>
                    <div className="ruler-level level-5">161 - 171 (Nível 5)</div>
                    <div className="ruler-indicator" style={{ left: `${calculatePosition(totalScore)}%` }}></div>
                </div>
            </div>

            <div className={`timeline ${onlyCompleted || onlyPending ? 'row-layout' : ''}`}>
                {onlyCompleted && (
                    <div className="timeline-item completed full-width">
                        <div className="timeline-content">
                            <h3>Etapas realizadas: {responses.yes.length}</h3>
                            <ul>
                                {responses.yes.map(({ id, question }, index) => (
                                    <li
                                        className='etapas-realizadas'
                                        key={index}
                                        onClick={() => handleSuggestionClick(id)}
                                    >
                                        {formatQuestion(question)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {onlyPending && (
                    <div className="timeline-item pending full-width">
                        <div className="timeline-content">
                            <h3>Etapas pendentes: {sortedPendingQuestions.length}</h3>
                            <ul>
                                {sortedPendingQuestions.map(({ id, question }, index) => (
                                    <li
                                        className='etapas-pendentes'
                                        key={index}
                                        onClick={() => handleSuggestionClick(id)}
                                    >
                                        {formatQuestion(question)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {!onlyCompleted && !onlyPending && (
                    <>
                        <div className="timeline-item completed">
                            <div className="timeline-content">
                                <h3>Etapas realizadas: {responses.yes.length}</h3>
                                <ul>
                                    {responses.yes.map(({ id, question }, index) => (
                                        <li
                                            className='etapas-realizadas'
                                            key={index}
                                            onClick={() => handleSuggestionClick(id)}
                                        >{formatQuestion(question)}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-separator"></div>

                        <div className="timeline-item pending">
                            <div className="timeline-content">
                                <h3>Etapas pendentes: {sortedPendingQuestions.length}</h3>
                                <ul>
                                    {sortedPendingQuestions.map(({ id, question }, index) => (
                                        <li
                                            className='etapas-pendentes'
                                            key={index}
                                            onClick={() => handleSuggestionClick(id)}
                                        >
                                            {formatQuestion(question)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {showSuggestion && (
                <div className="suggestion-popup">
                    <div className="suggestion-popup-content">
                        {renderSuggestionContent()}
                        <button className="close-btn" onClick={closeSuggestion}>Voltar</button>
                    </div>
                </div>
            )}

            <button onClick={onBack}>Responder novamente</button>
        </div>
    );
};

export default Results;
