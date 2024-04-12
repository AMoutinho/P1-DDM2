import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Pressable } from 'react-native';

import {styles} from './styles'

const ConversorMoedas = () => {
  const [quantia, setQuantia] = useState('');
  const [deMoeda, definirDaMoeda] = useState('USD');
  const [paraMoeda, definirMoeda] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const converterMoeda = () => {
    // Lógica de Conversão    
    const conversaoTaxa = {
      USD: { BRL: 5.0031, EUR: 0.9238 },
      BRL: { USD: 0.1999, EUR: 0.1846 },
      EUR: { USD: 1.0825, BRL: 5.4148 }
    };

    const valorConvertido = parseFloat(quantia) * conversaoTaxa[deMoeda][paraMoeda];
    setResultado(valorConvertido.toFixed(2));
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}>Conversor de Moedas</Text>
      <Text style={styles.subtituloApp}>Dólar | Real | Euro</Text>

      <TextInput
        placeholder=" Valor para conversão"
        keyboardType="numeric"
        value={quantia}
        onChangeText={text => setQuantia(text)}
        style={styles.TextInput}  
      />
      <View style={styles.coluna}>
        <Picker
          selectedValue={deMoeda}
          style={styles.Picker}  
          onValueChange={(itemValue) => definirDaMoeda(itemValue)}>
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Real" value="BRL" />
          <Picker.Item label="Euro" value="EUR" />
        </Picker>
        <Picker
          selectedValue={paraMoeda}
          style={styles.Picker}  
          onValueChange={(itemValue) => definirMoeda(itemValue)}>
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Real" value="BRL" />
          <Picker.Item label="Euro" value="EUR" />
        </Picker>
      </View>
      
      <Pressable style={styles.button} onPress={converterMoeda}>
        <Text style={styles.buttonText}>Converter</Text>
      </Pressable>

      <TextInput
        placeholder="Aguardando conversão..."
        editable={false}
        value={resultado.toString()}
        style={styles.resultado}         
      />
    </View>
  );
};

export default ConversorMoedas;
