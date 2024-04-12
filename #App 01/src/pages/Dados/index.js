import { View, Text } from 'react-native'

import {styles} from './estilo'

function Dados(){

  return(       
      <View style={styles.area}>
      
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Dados Pessoais</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>André Moutinho</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>30 anos</Text>   

    </View>
  )
}
export default Dados;
    