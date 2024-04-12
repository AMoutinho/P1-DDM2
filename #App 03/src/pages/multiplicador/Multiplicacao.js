import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

import {styles} from './styles'

const MultiplicacaoApp = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    const resultadoMultiplicacao =
      parseFloat(numero1) * parseFloat(numero2);
    setResultado(resultadoMultiplicacao.toString());
  };

  const limparCampos = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.rotuloApp}>MULTIPLICADOR DE 2 NÚMEROS</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={(text) => setNumero1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={(text) => setNumero2(text)}
      />

      <TouchableOpacity style={styles.btnMultiplicar} onPress={calcularResultado}>
        <Text style={styles.buttonText}>Multiplicar</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.btnRefazer} onPress={limparCampos}>
        <Text style={styles.buttonText}>Resetar Input</Text>
      </TouchableOpacity>  

      {resultado ? (
        <Text style={styles.resultadoText}>
          O Resultado é: {resultado}
        </Text>
      ) : null}

    </View>
  );
};
export default MultiplicacaoApp;