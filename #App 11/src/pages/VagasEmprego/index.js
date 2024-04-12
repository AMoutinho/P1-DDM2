import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import Vaga from '../../components/Vagas';

const Dados = [
  {
    titulo: 'Desenvolvedor React Native',
    linha1: 'Salário:',
    linha2: 'R$ 15.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em SP',
    linha5: 'Contato:',
    linha6: '(13) 3248-6322'
  },
  {
    titulo: 'Desenvolvedor Kotlin Júnior',
    linha1: 'Salário:',
    linha2: 'R$ 35.000,00',
    linha3: 'Descrição:',
    linha4: 'Vaga 100% remota',
    linha5: 'Contato:',
    linha6: '(13) 3222-6555'
  },
  {
    titulo: 'Desenvolvedor Hack Júnior',
    linha1: 'Salário:',
    linha2: 'R$ 45.000,00',
    linha3: 'Descrição:',
    linha4: 'Presencial em MG',
    linha5: 'Contato:',
    linha6: '(13) 3985-3782'
  },
  {
    titulo: 'Desenvolvedor Cobol Sênior',
    linha1: 'Salário:',
    linha2: 'R$ 85.000,00',
    linha3: 'Descrição:',
    linha4: 'Vaga 100% remota',
    linha5: 'Contato:',
    linha6: '(11) 4081-3082'
  },
  {
    titulo: 'Desenvolvedor Java Sênior',
    linha1: 'Salário:',
    linha2: 'R$ 95.000,00',
    linha3: 'Descrição:',
    linha4: 'Vaga 100% remota',
    linha5: 'Contato:',
    linha6: '(11) 4081-3082'
  },
  {
    titulo: 'Desenvolvedor Swift Sênior',
    linha1: 'Salário:',
    linha2: 'R$ 100.000,00',
    linha3: 'Descrição:',
    linha4: 'Vaga 100% remota',
    linha5: 'Contato:',
    linha6: '(11) 4081-3082'
  }
];

function Vagas() {
  const renderizaItem = ({ item }) => (
    <Vaga
      foto={item.foto}
      titulo={item.titulo}
      linha1={item.linha1}
      linha2={item.linha2}
      linha3={item.linha3}
      linha4={item.linha4}
      linha5={item.linha5}
      linha6={item.linha6}
    />
  );

  return (
    <View>
      <Text style={styles.titulo}>Vagas TI Moutinho</Text>
      <View style={styles.tela}>
        <FlatList
          data={Dados}
          renderItem={renderizaItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Vagas;
