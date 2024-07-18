import React, { useState, useRef, useEffect } from 'react';
import './Suporte.css'; // Estilos para o componente de suporte
import suporteImage from '../utils/suporte-de-ti.jpeg';

const Suporte = () => {
    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem digitada
    const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens enviadas
    const inputRef = useRef(null); // Ref para o input
    const [inputFocused, setInputFocused] = useState(false); // Estado para rastrear se o input está focado
    const chatBoxRef = useRef(null); // Ref para o chat box

    const handleMessageChange = (e) => {
        setMessage(e.target.value); // Atualiza a mensagem conforme o usuário digita
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = {
                text: message,
                timestamp: new Date().toLocaleTimeString(['pt-br'], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages([...messages, newMessage]);
            setMessage('');
            inputRef.current.focus(); // Mantém o foco no input após enviar a mensagem
        }
    };

    const handleInputFocus = () => {
        setInputFocused(true); // Marca o input como focado
    };

    const handleInputBlur = () => {
        setInputFocused(false); // Remove o foco do input
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);
    return (
        <div className="suporte-container">
            <div className='suporte-container-header'>
                <h3>Suporte</h3>
            </div>
            <div className="suporte-container-chat-box" ref={chatBoxRef}>

                {/* Renderiza todas as mensagens */}
                {messages.map((msg, index) => (
                    <div key={index} className={`suporte-container-chat-message chat-message ${index === messages.length - 1 ? 'align-right' : ''}`}>
                        <p style={{marginRight:'10px'}}>{msg.text}</p>
                        <span className="suporte-container-chat-message-timestamp">{msg.timestamp}</span>
                    </div>
                ))}
                {/* Renderiza imagem apenas se não houver mensagens */}
                {messages.length === 0 && (
                    <div className="suporte-container-empty-chat empty-chat">
                        <img src={suporteImage} alt="Imagem do chat vazio" />
                    </div>
                )}
                {/* Renderiza o footer com o input de texto */}
                <div className="suporte-container-message-input message-input">
                    <input
                        type="text"
                        placeholder="Descreva sua dúvida..."
                        value={message}
                        onChange={handleMessageChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        ref={inputRef} // Adiciona a ref ao input
                        onKeyPress={handleKeyPress} // Adiciona o evento onKeyPress
                    />
                    <button onClick={handleSendMessage}>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default Suporte;
