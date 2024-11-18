import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/musica.png')}
        />
        <Text style={styles.name}>BETTERMELODY</Text>
        <Link style={styles.button} href='/Login'>Melodias para seu Ouvido!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5e3c8b', // Cor roxa suave para o fundo
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  logo: {
    width: 450,
    height: 300,
    marginBottom: '5%',
  },
  name: {
    fontSize: 55,
    color: 'white',
    fontWeight: '900', // Fonte mais forte para dar destaque
    marginBottom: '3%',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3d2870', // Roxo escuro para o botão
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    width: '50%',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
