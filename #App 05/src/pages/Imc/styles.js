import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'blue'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  rotuloApp: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  btnVerificar: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginTop: 8, 
    marginLeft: '-50%'
  },  
  btnRefazer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginTop: '-15%', 
    marginRight: '-53%'
    
  },  

    
   
});
export {styles}