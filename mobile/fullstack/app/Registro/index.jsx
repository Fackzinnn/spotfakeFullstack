import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

const registrarUsuario = async function () {
  if (!nome || !email || !senha) {
      console.log('Todos os campos devem ser preenchidos')
      return
  }
  const resposta = await fetch('http://localhost:8000/registro',{
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
  },
      body: JSON.stringify({ name: nome, email: email, senha: senha, sobrenome: sobrenome, dataNascimento: dataNascimento })
  })
    
if (!resposta) {
    console.log('erro')
} else if (resposta.status == 200) {
    console.log('Usuário criado com sucesso')
} else {
    console.log('ocorreu um erro')
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO</Text>
      <View style={styles.section}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#236bcb" onPress={registrarUsuario} />
      </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#e0d4f4", // Roxo suave com toque mais claro
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 35,
    color: "#9b4d96", // Roxo mais claro para o título
    textAlign: "center",
  },
  section: {
    backgroundColor: "#ffffff", // Fundo branco para o formulário
    borderRadius: 18,
    width: 370,
    height: 480,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#d1c4e9", // Cor de borda suave
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  input: {
    width: "85%",
    height: 55,
    borderColor: "#8a77c2", // Roxo suave para borda
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 17,
    color: "#333",
  },
  nameInput: {
    width: "85%",
    height: 55,
    borderColor: "#8a77c2", // Roxo para a borda
    borderWidth: 1,
    marginBottom: 18,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: "#1e1e1e", // Fundo preto
    fontSize: 17,
    color: "#fff", // Texto branco
  },
  buttonContainer: {
    width: "85%",
    marginVertical: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#7b61c4", // Roxo mais suave para o botão
  },
  buttonText: {
    color: "#ffffff", 
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 14,
    textTransform: "uppercase",
  },
  link: {
    marginTop: 25,
    color: "#7b61c4", 
    fontSize: 15,
    fontWeight: "600",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default RegisterScreen;

  
  
