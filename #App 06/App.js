import { View, Text } from 'react-native'
import JogoNumeroAleatorio from './src/pages/numeroAleatorio'
import Foto from './src/components/Foto'

function App(){
  return(
    <View>
      <Foto />
      <JogoNumeroAleatorio />
    </View>
  )
}
export default App