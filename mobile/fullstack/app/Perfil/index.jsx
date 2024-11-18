import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UserProfile() {
  const [profile, setProfile] = useState({});
  const [editingMode, setEditingMode] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const updateProfile = async () => {
    if (senha && senha !== confirmPass) {
      Alert.alert("As senhas não correspondem.");
      return;
    }

    try {
      const formData = new FormData();

      if (profile.profileImage) {
        formData.append("profileImage", {
          uri: profile.profileImage,
          type: "image/jpeg",
          name: "profilePhoto.jpg",
        });
      }

      formData.append("name", profile.name);
      formData.append("username", profile.username);
      formData.append("description", profile.description);

      if (senha) {
        formData.append("senha", senha);
      }

      Alert.alert("Perfil atualizado com sucesso!");
      setEditingMode(false);
      setSenha("");
      setConfirmPass("");
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
      Alert.alert("Erro ao atualizar o perfil.");
    }
  };

  const selectImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("A permissão para acessar a galeria é necessária.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile({ ...profile, profileImage: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require('../../assets/seta.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ImageContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Image
            source={
              profile.profileImage
                ? { uri: profile.profileImage }
                : require("../../assets/gon.png")
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.InfoContainer}>
        {editingMode ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              value={profile.username}
              onChangeText={(text) => setProfile({ ...profile, username: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={profile.description}
              onChangeText={(text) => setProfile({ ...profile, description: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Nova Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry
              value={confirmPass}
              onChangeText={setConfirmPass}
            />
          </>
        ) : (
          <>
            <Text style={styles.info}>{profile.username}</Text>
            <Text style={styles.info}>{profile.email}</Text>
            <Text style={styles.info}>{profile.name}</Text>
            <Text style={styles.info}>{profile.description}</Text>
          </>
        )}
      </View>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => (editingMode ? updateProfile() : setEditingMode(true))}
      >
        <Text style={styles.pressText}>
          {editingMode ? "Salvar Alterações" : "Editar Perfil"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a2a8b", // Cor de fundo roxa
    padding: 20,
    alignItems: "center",
  },
  sectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  iconButton: {
    height: 40,
    width: 40,
    backgroundColor: "#6c3e9b", // Tom de roxo para o botão
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "80%",
    width: "80%",
  },
  ImageContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#fff", // Borda branca para destacar
  },
  InfoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  info: {
    color: "#f3e6fa", // Texto claro e suave
    fontSize: 22,
    marginVertical: 4,
    textAlign: "center",
  },
  input: {
    color: "#fff",
    fontSize: 16,
    backgroundColor: "#7a4f98", // Fundo mais claro para os inputs
    padding: 12,
    marginVertical: 6,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9b69b7", // Cor de borda roxa mais suave
  },
  mainButton: {
    width: "90%",
    height: 45,
    backgroundColor: "#7a4f98", // Cor de fundo roxa
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Sombra em dispositivos Android
  },
  pressText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
