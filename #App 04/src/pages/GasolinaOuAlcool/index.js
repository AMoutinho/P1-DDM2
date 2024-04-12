import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';

import {styles} from './styles'

const AlcoolOuGasolinaApp = () => {
  
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState(null);
  
  const verificarVantagem = () => {
    
    if (precoAlcool === '' || precoGasolina === '') {
      alert('Por favor, preencha ambos os campos.');      
      return;
    }  

    const resultadoCalculado = parseFloat(precoAlcool) / parseFloat(precoGasolina);

    setResultado(resultadoCalculado);
  };

  return (
    <View style={styles.container}>   
    <Text style={styles.rotuloApp}>Álcool ou Gasolina</Text>   
      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={(text) => setPrecoAlcool(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={(text) => setPrecoGasolina(text)}
      />
      
      <Pressable style={styles.button} onPress={verificarVantagem}>
        <Text style={styles.buttonText}>Verificar</Text>
      </Pressable>

      {resultado !== null && (
        <Text style={styles.resultText}>         
          {resultado < 0.7 ? 'Mais vantajoso abastecer com Álcool' : 'Mais vantajoso abastecer com Gasolina'}
        </Text>
      )}
    </View>
  );
};
export default AlcoolOuGasolinaApp;
