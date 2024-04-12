import { View, Text } from 'react-native'
import IMCApp from './src/pages/Imc'
import Foto from './src/components/Foto'

function App(){
  return(
    <View>
      <Foto />
      <IMCApp />
    </View>
  )
}
export default App