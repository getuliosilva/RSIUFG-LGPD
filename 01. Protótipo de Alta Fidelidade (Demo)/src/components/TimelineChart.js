import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineChart = () => (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Política de Eliminação de Dados</h3>
            <p>A empresa definiu uma política de eliminação de dados pessoais.</p>
            <p>A empresa agora obtem o consentimento dos titulares por escrito, esclarecendo ponto a ponto as finalidades dos dados utilizados.</p>
            <p>A empresa incluiu o cadastro de mais 4 usuários colaboradores.</p>
            <p>A empresa disponibilizou 4 cursos para 10 usuarios colaboradores.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Canal de Atendimento e Controle de Acesso</h3>
            <p>A empresa definiu um canal de atendimento para atender às solicitações dos titulares.</p>
            <p>A empresa agora garante ao titular de dados pessoais o direito de retirar o consentimento para tratamento de dados a qualquer momento.</p>
            <p>A empresa definiu controles de acesso aos dados, com permissões e controle de usuários.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Política de Privacidade</h3>
            <p>A empresa criou uma política de privacidade interna com medidas de boas práticas em relação a proteção de dados pessoais.</p>
            <p>A empresa agora é capaz de categorizar os dados pessoais de acordo com os respectivos titulares.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Set 2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Normas e Diretrizes para Terceiros</h3>
            <p>A empresa criou uma política de normas e diretrizes para terceiros acerca do tema de privacidade e proteção de dados.</p>
            <p>A empresa agora promove treinamentos obrigatórios para funcionários, conscientizando-os sobre as suas responsabilidades em relação à privacidade e proteção de dados pessoais.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dez 2024"
            iconStyle={{ background: '#007bff', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Encarregado de Dados</h3>
            <p>A empresa contratou um Encarregado de dados.</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
);

export default TimelineChart;
