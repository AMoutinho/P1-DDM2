import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

import {styles} from './styles'

const JogoNumeroAleatorio = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    gerarNumeroAleatorio();
  }, []);

  const gerarNumeroAleatorio = () => {
    const novoNumero = Math.floor(Math.random() * 11);
    setNumeroAleatorio(novoNumero);
    setMensagem('');
  };

  const verificarNumero = () => {
    if (numeroUsuario === '') {      
      setMensagem('Por favor, digite um número antes de clicar em Descobrir.');
      return;
    }

    const numeroDigitado = parseInt(numeroUsuario);

    if (isNaN(numeroDigitado) || numeroDigitado < 0 || numeroDigitado > 10) {
      setMensagem('Digite um número válido de 0 a 10.');
      return;
    }

    if (numeroDigitado === numeroAleatorio) {
           
      setMensagem(`Parabéns, você adivinhou o número aleatório que é: ${numeroAleatorio}`)         
    } else {
      
      setMensagem('Que pena, você não adivinhou o número aleatório');      
    }
  };

  const tentarNovamente = () => {
    setNumeroUsuario('');
    setMensagem('');
    gerarNumeroAleatorio();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instrucoesText}>
        Pense em um número de 0 a 10
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setNumeroUsuario(text)}
        value={numeroUsuario}
      />

      <Pressable style={styles.btnDescobrir} onPress={verificarNumero}>
        <Text style={styles.buttonText}>Descobrir</Text>
      </Pressable>

      {mensagem !== '' && (
        <View>
          <Text style={styles.mensagem}>{mensagem}</Text>
          {mensagem.includes('Que pena') && (
            <Pressable style={styles.btnNovamente} onPress={tentarNovamente}>
              <Text style={styles.buttonText}>Tentar novamente</Text>
            </Pressable>
          )}   
        </View>
      )}
      {mensagem !== 'Parabéns' && (
        <View>
         
          {mensagem.includes('Parabéns') && (
            <Pressable style={styles.btnRecomecar} onPress={tentarNovamente}>
              <Text style={styles.buttonText}>Recomeçar</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default JogoNumeroAleatorio;
