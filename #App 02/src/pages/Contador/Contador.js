import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Incrementar from '../Incremento/Incrementar';
import Decrementar from '../Decremento/Decrementar';

import {styles} from './estilo'

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleIncrementar = () => {
    setContador(contador + 1);
  };

  const handleDecrementar = () => {
   /* setContador(contador - 1);*/

    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{contador}</Text>
      <Incrementar onPress={handleIncrementar} />
      <Decrementar onPress={handleDecrementar} />
    </View>
  );
};

export default Contador;
