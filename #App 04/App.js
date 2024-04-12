import { View, Text } from 'react-native'
import AlcoolOuGasolinaApp from './src/pages/GasolinaOuAlcool'
import Foto from './src/components/Foto'

function App(){
  return(
    <View>
      <Foto />
      <AlcoolOuGasolinaApp />
    </View>
  )
}
export default App

