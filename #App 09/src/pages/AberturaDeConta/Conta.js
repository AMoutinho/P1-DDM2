import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Switch, Button, TouchableOpacity} from 'react-native';

import {styles} from './styles.js';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App(){

  const [isEnabled, setIsEnabled] = useState(false);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);

  function enviar(){
    setNome(nome);
    setIdade(idade);
    setSexo(sexo);
    setEscolaridade(escolaridade);
    setLimite(limite);
    setBrasileiro(brasileiro);

    let elemento = document.getElementById("resultado");
    elemento.style.display = "block";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.inputs} placeholder="Digite seu nome"  onChangeText={(value) => setNome(value)} value={nome}></TextInput>

      <Text style={styles.label}>Idade:</Text>
      <TextInput style={styles.inputs} placeholder="Digite sua idade: " onChangeText={(value) =>setIdade(value)}></TextInput>

      <Text style={styles.label}>Sexo:</Text>
      <Picker selectedValue={sexo} style={styles.inputs} onValueChange={(value, index) => setSexo(value)}>
        <Picker.Item key={1} value={""} label="Selecione: " />
        <Picker.Item key={2} value={"Feminino"} label="Feminino"/>
        <Picker.Item key={3} value={"Masculino"} label="Masculino"/>
        <Picker.Item key={4} value={"Outro"} label="Outro" />
      </Picker>

      <Text style={styles.label}>Escolaridade:</Text>
      <Picker style={styles.inputs} onValueChange={(value, index) => setEscolaridade(value)}>
        <Picker.Item key={1} value={""} label="Selecione: " />
        <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" />
        <Picker.Item key={3} value={"Graduação"} label="Graduação" />
        <Picker.Item key={4} value={"Pós-Graduação"} label="Pós-Graduação" />
        <Picker.Item key={5} value={"Doutorado"} label="Doutorado" />
        <Picker.Item key={6} value={"Mestrado"} label="Mestrado" />
      </Picker>

      <Text style={styles.label}>Limite:</Text>
      <Slider style={styles.inputs}       
      minimumValue={0} 
      maximumValue={10} 
      value={limite !== undefined ? limite : 0} 
      onValueChange={setLimite}/>
      <Text style={styles.legend}>{limite.toFixed(2)}</Text>

      <Text style={styles.label}>Brasileiro:</Text>
      <Switch
      trackColor={{ false: '#dcdcdc', true: 'blue' }}
      thumbColor={brasileiro ? 'blue' : '#ffffff'}      
      value={brasileiro}
      style={styles.switchs} onValueChange={ (value) => setBrasileiro(value)}/>
      <Text style={styles.textoSwitch}>{(brasileiro) ? "Sim" : "Não"}</Text>

      <TouchableOpacity style={styles.btnConfirmar} onPress={enviar}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity> 

      <div id="resultado" style={{display: "none"}}>
          <Text style={styles.rotuloDadosInf}>Dados informados</Text>
          <br></br>
          <Text style={styles.textoResultado}>Nome: {nome}</Text>
          <br></br>
          <Text style={styles.textoResultado}>Idade: {idade}</Text>
          <br></br>
          <Text style={styles.textoResultado}>Sexo: {sexo}</Text>
          <br></br>
          <Text style={styles.textoResultado}>Escolaridade: {escolaridade}</Text>
          <br></br>
          <Text style={styles.textoResultado}>Limite: {limite.toFixed(2)}</Text>
          <br></br>
          <Text style={styles.textoResultado}>É brasileiro: {(brasileiro) ? "Sim" : "Não"}</Text>
      </div>
    </View>
  );
}