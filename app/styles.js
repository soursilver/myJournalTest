import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 4,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textInput: {
      width: 300,
      height: 600,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      alignItems: 'baseline',
    },
    entriesView: {
      width: '100%',
      height: '60%',
      paddingLeft: '5%',
      paddingRight: '5%',
      marginBottom: 20,
    },
});

export default styles;