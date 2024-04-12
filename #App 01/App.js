import { View, Image, Text } from 'react-native';

import Dados from './src/pages/Dados';
import Experiencia from './src/pages/Experiencia';
import Formcacao from './src/pages/Formacao';
import Projetos from './src/pages/Projetos';
import Foto from './src/pages/Foto';

function App() {

  return (

    <View>   

     <Foto />
     <Dados />
     <Formcacao />     
     <Experiencia />
     <Projetos />
     
    </View>
  );
}
export default App;