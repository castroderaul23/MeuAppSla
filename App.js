import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');

  const handleVerify = () => {
    const userNumber = parseInt(number);
    const randomNumber = Math.floor(Math.random() * 11);
    if (userNumber === randomNumber) {
      Alert.alert('Resultado', 'Você acertou!');
    } else {
      Alert.alert('Resultado', `Você errou! O número era ${randomNumber}`);
    }
  };
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Números</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        placeholder="Digite um número de 0 a 10"
      />
      <Button title="Verificar" onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
