import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({  
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instrucoesText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'blue'
  },
  btnDescobrir: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },  
  btnNovamente: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: '21%',
    width: 200
  }, 
  btnRecomecar: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    marginLeft: '5%',
    width: 200
  }, 
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  mensagem: {    
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },  
});

export {styles}