import { View, Text, Image } from 'react-native'

import {styles} from './styles';

import MinhaImagem from './NumberRandom.png';
function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={[styles.iconeImagem]} source={MinhaImagem}/>

    </View>
  )
}
export default Foto;
    

