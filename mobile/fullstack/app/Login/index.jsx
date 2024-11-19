import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';
import { router } from 'expo-router';
import { AppContext } from '../../scripts/AppContext';
import { jwtDecode } from 'jwt-decode';

const LoginScreen = () => {
  const { setToken, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const EntrarUsuário = async () => {
    if (!email || !senha) return;

    try {
      const res = await axios.post(
        'http://localhost:8000/login',
        { "email": email, "senha": senha }
      );
      setToken(res.data.token);
      const user = jwtDecode(res.data.token);
      setUser(user);
      router.push("./Home");
    }
    catch (e) {
      Alert.alert("Um erro ocorreu, tente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEJA BEM-VINDO</Text>
      <Text style={styles.subtitle}>AO BETTERMELODY</Text>

      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholderTextColor="#888"
        />

        <View style={styles.buttonContainer}>
          <Button title="Login" color="#5f3b8f" onPress={EntrarUsuário} />
        </View>

        <Link style={styles.buttonLink} href='/Registro'>CADASTRAR-SE</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f1f0f6", // Fundo suave de roxo claro
  },
  section: {
    backgroundColor: "#ffffff", // Fundo branco para o formulário
    borderRadius: 15,
    width: 380, // Mais largo
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#5f3b8f", // Roxo claro para o título
    textAlign: "center",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 30,
    color: "#4e2a84", // Roxo mais escuro para o subtítulo
    textAlign: "center",
    letterSpacing: 1.5,
  },
  input: {
    width: "100%",
    height: 55, // Mais alto
    borderColor: "#5f3b8f", // Roxo claro na borda
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9", // Fundo claro para o input
    fontSize: 16,
    color: "#333333", // Texto mais escuro
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonLink: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: "#6a4b9c", // Roxo mais forte para o botão de cadastro
    borderRadius: 10,
    color: "#ffffff", // Texto branco
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    textTransform: "uppercase",
  },
  loginButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#dc3545", // Vermelho para o botão de login
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default LoginScreen;


