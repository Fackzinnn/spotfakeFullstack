import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Capa from './Capa';                // Importa a tela de entrada (capa)
import LoginForm from './Login';          // Importa a tela de login
import RegistrationForm from './Registro'; // Importa a tela de registro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Capa />} />           {/* Página inicial: Capa */}
        <Route path="/login" element={<LoginForm />} /> {/* Página de Login */}
        <Route path="/registro" element={<RegistrationForm />} /> {/* Página de Registro */}
      </Routes>
    </Router>
  );
}

export default App;
