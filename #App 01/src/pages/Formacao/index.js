import { View, Text } from 'react-native'

import {styles} from './estilo'

function Projetos(){

  return(       
      <View style={styles.area}>
      
      
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Formação</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Técnico em Programação de Computadores</Text>    

    </View>
  )
}
export default Projetos;
    