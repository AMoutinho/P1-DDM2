import { View, Text } from 'react-native'

import {styles} from './estilo'

function Experiencia(){

  return(       
      <View style={styles.area}>
      
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Experiência</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Técnico em Informática e Desenvolvedor</Text>
       <Text style={[styles.descricao, styles.alinhaDescricao]}>Analista de Suporte Técnico</Text>
        <Text style={[styles.descricao, styles.alinhaDescricao]}>Designer de Mídias Digitais</Text>

    </View>
  )
}
export default Experiencia;