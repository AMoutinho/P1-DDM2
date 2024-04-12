import { View, Text, Image } from 'react-native'

import {styles} from './styles';
import MinhaImagem from './IconeIMC.png';
function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={[styles.minhaFoto]} source={MinhaImagem}/>

    </View>
  )
}
export default Foto;
    

