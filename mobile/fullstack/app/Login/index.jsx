import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/registro'); // Navega para a tela de registro
  };

  const goBack = () => {
    navigate('/'); // Navega para a página de capa
  };

  return (
    <div style={styles.container}>
      <button onClick={goBack} style={styles.backButton}>Voltar</button>
      <h2 style={styles.title}>Login</h2>
      <input type="text" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Senha" style={styles.input} />
      <button style={styles.button}>Entrar</button>
      <p style={styles.registerLink} onClick={goToRegister}>Criar uma conta</p>
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
  registerLink: {
    fontSize: '1rem',
    color: '#a8dadc',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Login;
