import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      margin: 10
    },

    titulo:{
      fontSize: 20,
      marginTop: 10,
      textAlign: "center",
      color: 'blue',
      fontWeight: 'bold'
    },

    rotuloDadosInf:{
      fontSize: 20,
      marginTop: -190,
      textAlign: "center",
      fontWeight: 'bold',
      marginLeft: 75,
      color: 'blue',

    },

    label:{
      marginTop: 10,
      marginLeft: 5,
      color: 'blue',
      fontSize: 15,
      fontWeight: 'bold'      
    },

    inputs: {
      float: "right",      
      border: "solid thin blue",
      borderRadius: 10,
      padding: 10,
      margin: 5,
      color: 'blue',
    },

    legend: {
      textAlign: "center",
      fontSize: 18,
      color: 'blue',
      fontWeight: 'bold'
    },

    switchs:{
      margin: 5,
      width: 60,
      height: 30,
    },

    btnConfirmar:{
      marginTop: 10,
      marginBottom: 30,
      width:200,
      height:35,
      marginLeft:60,
      backgroundColor: 'blue',
      borderRadius: 10,
    },  

    buttonText:{
      color: 'white',
      fontSize: 22,
      textAlign: 'center',
    },  

    textoSwitch: {
      color: 'blue',
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 6,
    },

    textoResultado: {
      margin: 10,
      padding: 5,
      color: 'blue'
    }
  })


export {styles};