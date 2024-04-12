import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Vaga(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>       
         

          <Text style={styles.tituloVaga}>{props.titulo}</Text>
          <Text style={styles.rotuloSalarioVaga}>{props.linha1}</Text>
          <Text style={styles.salarioVaga}>{props.linha2}</Text>
          <Text style={styles.rotuloDescricaoVaga}>{props.linha3}</Text>
          <Text style={styles.descricaoVaga}>{props.linha4}</Text>
          <Text style={styles.rotuloContatoVaga}>{props.linha5}</Text>
          <Text style={styles.contatoVaga}>{props.linha6}</Text>


        </View>
    </View>
  )
}

export default Vaga