import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Vaga from '../../components/Vagas'

function Vagas(){
  return(
    <View>

      <Text style={styles.titulo}>Vagas TI Moutinho</Text>

      <View style={styles.tela}>      
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Vaga titulo='Desenvolvedor React Native' linha1='Salário:' linha2='R$ 15.000,00' linha3='Descrição:' linha4='Presencial em SP' linha5='Contato:' linha6='(13) 3248-6322'/>

          <Vaga titulo='Desenvolvedor Kotlin Júnior' linha1='Salário:' linha2='R$ 35.000,00' linha3='Descrição:' linha4=' Vaga 100% remota' linha5='Contato:' linha6='(13) 3222-6555'/>

          <Vaga titulo='Desenvolvedor Hack Júnior' linha1='Salário:' linha2='R$ 45.000,00' linha3='Descrição:' linha4=' Presencial em MG' linha5='Contato:' linha6='(13) 3985-3782'/>

          <Vaga titulo='Desenvolvedor Cobol Sênior' linha1='Salário:' linha2='R$ 85.000,00' linha3='Descrição:' linha4=' Vaga 100% remota' linha5='Contato:' linha6='(11) 4081-3082'/>

          <Vaga titulo='Desenvolvedor Java Sênior' linha1='Salário:' linha2='R$ 95.000,00' linha3='Descrição:' linha4=' Vaga 100% remota' linha5='Contato:' linha6='(11) 4081-3082'/>       

          <Vaga titulo='Desenvolvedor Swift Sênior' linha1='Salário:' linha2='R$ 100.000,00' linha3='Descrição:' linha4=' Vaga 100% remota' linha5='Contato:' linha6='(11) 4081-3082'/>      
        </ScrollView>
      </View>
    </View>
  )
}

export default Vagas