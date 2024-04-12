import { View, Text, Image } from 'react-native'
import {styles} from './style';
import MinhaImagem from './Icone.jpg';
function Foto(){

  return(       
      <View style={styles.area}>
      
       <Image style={[styles.iconeAlcoolGasolina]} source={MinhaImagem}/>

    </View>
  )
}
export default Foto;
    

