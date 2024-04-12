import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

import {styles} from './styles'

const IMCApp = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (peso === '' || altura === '') {
      alert('Por favor, preencha ambos os campos.');
      return;
    }

    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat === 0) {
      alert('Valores inválidos. Preencha corretamente.');
      return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);

    let classificacao = '';
    if (imc < 18.5) {
     
      classificacao = 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      
      classificacao = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
       
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
       
      classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
       
      classificacao = 'Obesidade Grau II';
    } else if (imc >= 40) {
      
      classificacao = 'Obesidade Grau III';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  const resetarCampos = () => {
    setPeso('');
    setAltura('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.rotuloApp}>Calculadora IMC</Text> 
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <Pressable style={styles.btnVerificar} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Verificar</Text>
      </Pressable>
      <Pressable style={styles.btnRefazer} onPress={resetarCampos}>
        <Text style={styles.buttonText}>Resetar</Text>
      </Pressable>

      {resultado !== '' && <Text style={styles.resultText}>{resultado}</Text>}

      
    </View>
  );
};

export default IMCApp;
