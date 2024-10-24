import React from 'react';
import { useNavigate } from 'react-router-dom';

function Capa() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/login'); // Navega diretamente para a tela de login ao clicar no botão
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Vem na Onda</h1>
      <button onClick={goToRegister} style={styles.button}>Começar</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #00bcd4, #000)', // Degradê ciano para preto
    color: '#fff',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Capa;
