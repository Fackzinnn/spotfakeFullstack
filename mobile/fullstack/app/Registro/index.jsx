import React from 'react';
import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/login'); // Navega para a tela de login
  };

  return (
    <div style={styles.container}>
      <button onClick={goBack} style={styles.backButton}>Voltar</button>
      <h2 style={styles.title}>Criar Conta</h2>
      <input type="text" placeholder="Nome" style={styles.input} />
      <input type="text" placeholder="Sobrenome" style={styles.input} />
      <input type="text" placeholder="CPF" style={styles.input} />
      <input type="email" placeholder="Email" style={styles.input} />
      <input type="tel" placeholder="Número de Telefone" style={styles.input} />
      <input type="password" placeholder="Senha" style={styles.input} />
      <button style={styles.button}>Registrar</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #0d1b2a, #000)', // Azul escuro para preto
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    borderRadius: '20px',
    backgroundColor: '#1e3a56',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '30px',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: '#1e3a56',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
  button: {
    width: '80%',
    padding: '15px',
    margin: '20px 0',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#1d3557',
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default Registro;
