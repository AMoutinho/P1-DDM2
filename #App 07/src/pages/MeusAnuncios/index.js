import { View, Text, ScrollView } from 'react-native'
import {styles} from './style'
import Anuncio from '../../components/Anuncio'

function Anuncios(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>Anúncios Moutinho</Text>

      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Anuncio foto='https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/08/06162802/f87ef106-ferrari-f50-for-sale-3-1160x653.jpg' titulo='Ferrari F50' linha1='Ferrari F50 um dos maiores clássicos' linha2='Único dono, em perfeito estado' linha3='Venha conferir!!!'/>

          <Anuncio foto='https://img.olx.com.br/images/25/258367447059205.jpg' titulo='Lamborghini Huracan Spyder LP-610' linha1='Modelo de 2022' linha2='Único dono e com documentação ok' linha3='Pra levar hoje!'/>

          <Anuncio foto='https://img.olx.com.br/images/76/763426004628394.jpg' titulo='BMW i8 Elétrica' linha1='Na cor azul lindíssima' linha2='Pouca quilometragem' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://media.gazetadopovo.com.br/2019/02/8f14d5e9828aab88ec96be58627e2b24-gpLarge.jpg' titulo='Tanque de Guerra' linha1='Bem conservado' linha2='Único dono' linha3='Aproveite, tá barato pra caramba'/>

          <Anuncio foto='https://viabella.com.br/image/resize?w=1300&h=1300&force=1&q=90&src=userfiles/veiculos/69fe65d5739cfc5d501df1f61e18dce5.jpg' titulo='CORVETTE Z06' linha1='Em bom estado de conservação' linha2='Pouco uso, apenas aos domingos' linha3='Vem ser o dono desse carrão'/>

          <Anuncio foto='https://ae01.alicdn.com/kf/H98e67173f0654047aabe3a4d92bd0704p.jpg_640x640Q90.jpg_.webp' titulo='Bumblebee Transformers' linha1='Excelente estado' linha2='Pra levar hoje' linha3='Vem correndo'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios