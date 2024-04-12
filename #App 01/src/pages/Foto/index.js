import { View, Text, Image } from 'react-native'

import {styles} from './estilo';
import MinhaImagem from './AnnonymousKeyboard.jpg';
function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={[styles.minhaFoto]} source={MinhaImagem}/>

    </View>
  )
}
export default Foto;
    

