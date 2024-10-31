import React from 'react';
import { useNavigate } from 'react-router-dom';




function Capa() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); // Navega para a tela de login
  };

  return (
    <div style={styles.container}>
      <h1 onClick={goToLogin} style={styles.heading}>Vem na Onda</h1>
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
    cursor: 'pointer',
  },
  image: {
    width: '150px', // Ajuste o tamanho conforme necessário
    height: 'auto',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginTop: '20px',
    padding: '15px 30px',
    backgroundColor: '#00bcd4', // Cor do botão
    color: '#fff',
    borderRadius: '30px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Sombra do botão
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  headingHover: {
    backgroundColor: '#0097a7', // Cor de hover mais escura
    transform: 'scale(1.05)', // Leve aumento ao passar o mouse
  },
};

export default Capa;
