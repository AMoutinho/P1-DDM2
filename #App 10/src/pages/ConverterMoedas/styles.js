import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },  

  tituloApp:{
    fontSize: 24,
    color: 'blue',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: -15, 
    fontWeight: 'bold'   
  },

  subtituloApp:{
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold', 
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,    
  },

  TextInput:{
    marginBottom: 15,     
    width: 200, 
    height: 40, 
    borderColor: 'blue', 
    borderWidth: 2,
    color: 'blue',
    fontWeight: 'bold',        
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },

  Picker:{
    height: 50, 
    width: 100,
    borderColor: 'blue', 
    borderWidth: 2,
    margin: 4,
    marginBottom: 15,
    color: 'blue',
    fontWeight: 'bold'
  },

  coluna:{
    flexDirection: 'row', 
    marginBottom: 10
  },

  resultado:{
    marginTop: 10, 
    width: 250, 
    textAlign: 'center',
    height: 40,  
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14
  }
})

export {styles}