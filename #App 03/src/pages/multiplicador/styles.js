import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({  
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,    
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'blue'
  },
  resultadoText: {
    margin:30,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red', 
  },
  rotuloApp: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  btnMultiplicar: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginTop: 8, 
    marginLeft: '-56%'
  },  
  btnRefazer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginTop: '-17%', 
    marginRight: '-50%'
    
  },  
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },




});
export {styles}