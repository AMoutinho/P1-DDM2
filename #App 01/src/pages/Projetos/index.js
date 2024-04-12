import { View, Text } from 'react-native'

import {styles} from './estilo'

function Projetos(){

  return(       
      <View style={styles.area}>
      
      <Text style={[styles.rotulo, styles.alinhaRotulo]}>Projetos</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Sig-OS: Gestão de Ordem de Serviço</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>Nattus: Delivery de produtos agrícolas</Text>
      <Text style={[styles.descricao, styles.alinhaDescricao]}>SysOrder: ERP de Gestão Comercial</Text>

    </View>
  )
}
export default Projetos;
    