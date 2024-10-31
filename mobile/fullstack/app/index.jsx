import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Capa from './Capa';                
import LoginForm from './Login';          
import RegistrationForm from './Registro'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Capa />} />          
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Registro" element={<RegistrationForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
