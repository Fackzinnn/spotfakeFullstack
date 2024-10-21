import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegação

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa a navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuário:', username, 'Senha:', password);
    // Aqui você pode adicionar a lógica de autenticação
  };

  const goToRegister = () => {
    navigate('/registro'); // Navega para a página de registro
  };

  return (
    <div style={styles.loginContainer}>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <h2 style={styles.heading}>Login</h2>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Entrar</button>
        <button type="button" onClick={goToRegister} style={styles.registerButton}>
          Criar Conta
        </button>
      </form>
    </div>
  );
}

const styles = {
  loginContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0 auto',
    marginTop: '100px',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  registerButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default LoginForm;
