import React from 'react';
import { SafeAreaView } from 'react-native';

import Contador from './src/pages/Contador/Contador';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Contador />
    </SafeAreaView>
  );
};

export default App;
