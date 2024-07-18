import React from "react";
import '../components/Tabela.css'; // Importa o arquivo CSS

const Tabela = ({ nivelDesejado }) => {
    const niveis = [
        {
            numero: 5,
            culturaProtecao: "Esse treinamento ocorre periodicamente com atualizações sobre novas práticas.",
            processos: "Deve-se definir indicadores para monitorar a melhoria contínua no fluxo dos processos.",
            ferramentas: "O Encarregado de dados deve revisar as ferramentas e aplicar as atualizações e modificações necessárias continuamente, de acordo com os requisitos da LGPD.",
            habilidades: "A equipe encarregada deve analisar e aprimorar continuamente o fluxo de dados, política de segurança e termos de uso.",
            responsabilidade: "Deve-se nomear a Pessoa Encarregada de Dados, ele será responsável pela segurança dos dados na organização e pela equipe de segurança."
        },
        {
            numero: 4,
            culturaProtecao: "Todos os colaboradores e gestores da empresa deverão ter passado por treinamento e já entender as boas práticas relacionadas à proteção de dados.",
            processos: "Deve-se monitorar e documentar todo acesso feito, com um histórico de logs do que foi acessado e o horário.",
            ferramentas: "A empresa deve possuir a documentação completa da política de segurança existente e dos termos de uso do negócio, bem como demonstrar que é aplicado diariamente.",
            habilidades: "Definir uma equipe para analisar e melhorar os fluxos de dados existentes e também para formular, atualizar e aplicar a política de segurança e termos de uso referente à manipulação de dados.",
            responsabilidade: "A partir da criação de controles de acesso e segmentação de permissões deve-se estabelecer os responsáveis pela segurança dos dados em cada momento do fluxo de operação."
        },
        {
            numero: 3,
            culturaProtecao: "Investir em materiais de conscientização e treinamentos sobre a proteção de dados.",
            processos: "Definir acessos controlados para cada operação/processo existente na empresa, identificando essa pessoa.",
            ferramentas: "Deve-se mapear o fluxo dos dados que a empresa controla e criar uma política e termo de uso para a manipulação desses dados.",
            habilidades: "Encarregar um ou mais colaboradores com a função de mapear/atualizar o fluxo de dados, bem como atualizar as políticas e termos de uso.",
            responsabilidade: "Deve estar definido que em último caso, os donos da empresa são responsáveis pela segurança dos dados manipulados."
        },
        {
            numero: 2,
            culturaProtecao: "Incentivar o diálogo entre funcionários para aumentar a discussão do assunto na empresa.",
            processos: "Defina ao menos um processo que controle o acesso e manipulação dos dados.",
            ferramentas: "A empresa deve fazer o controle de dados usando algum meio, mesmo que informal.",
            habilidades: "Todos os colaboradores devem ser capazes de usar algum mecanismo informal de controle de dados.",
            responsabilidade: "Informalmente, a pessoa responsável pela manipulação de um conjunto de dados é responsável pela sua segurança."
        },
        {
            numero: 1,
            culturaProtecao: "Pelo menos um funcionário na organização discute a proteção das informações que a empresa controla.",
            processos: "Nesta etapa não é exigido um processo formal que declare como é feita a manipulação dos dados.",
            ferramentas: "Nesta etapa não é exigido que a empresa controle os dados com alguma ferramenta.",
            habilidades: "Nesta etapa não é exigido que os colaboradores possuam um grau de habilidade mínima ou que exista um programa de treinamento para manipulação de dados.",
            responsabilidade: "Nesta etapa não é exigida a definição formal de responsabilidades."
        }
    ];

    // Filtra o array de níveis para encontrar o nível desejado
    const nivelFiltrado = niveis.find(nivel => nivel.numero === nivelDesejado);

    // Retorna null se o nível desejado não for encontrado
    if (!nivelFiltrado) {
        return null;
    }
    return (
        <div className="tabela-container">
            <div key={nivelFiltrado.numero} className="nivel">
                <div className={`numero-nivel numero-nivel-${nivelFiltrado.numero}`}>{nivelFiltrado.numero}</div>
                <div className="nivel-content">
                    <div className="coluna-header cultura-protecao">Cultura de Proteção de Dados</div>
                    <div className="coluna-descricao">{nivelFiltrado.culturaProtecao}</div>
                    <div className="coluna-header processos">Processos</div>
                    <div className="coluna-descricao">{nivelFiltrado.processos}</div>
                    <div className="coluna-header ferramentas">Ferramentas</div>
                    <div className="coluna-descricao">{nivelFiltrado.ferramentas}</div>
                    <div className="coluna-header habilidades">Habilidades</div>
                    <div className="coluna-descricao">{nivelFiltrado.habilidades}</div>
                    <div className="coluna-header responsabilidade">Responsabilidade</div>
                    <div className="coluna-descricao">{nivelFiltrado.responsabilidade}</div>
                </div>
            </div>
        </div>
    );
}

export default Tabela;
