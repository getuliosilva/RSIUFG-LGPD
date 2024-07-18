import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('Administrador');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Redireciona para o componente App
        navigate('/painel');
    };

    return (
        <div className="login-container">
            <h1>Protótipo SIA</h1>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder='Insira qualquer valor para o usuario'
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Insira qualquer valor para a senha'

                    />
                </div>
                <div>
                    <h4>Tipo de usuario:</h4>
                </div>
                <div className="user-type">
                    <label>
                        <input
                            type="radio"
                            value="Administrador"
                            checked={userType === 'Administrador'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Administrador
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Responsável pela adequação"
                            checked={userType === 'Responsável pela adequação'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Responsável pela adequação
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Colaborador"
                            checked={userType === 'Colaborador'}
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Colaborador
                    </label>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
