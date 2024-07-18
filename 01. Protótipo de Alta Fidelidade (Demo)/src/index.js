import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/painel" element={<App />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
