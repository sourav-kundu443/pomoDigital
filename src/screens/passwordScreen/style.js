import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '10%',
    marginTop: '8%'
  },
  logo: {
    width: '12%',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  message: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: '5%',
    marginVertical: '8%'
  },
  loginForm: {
    paddingHorizontal: '5%'
  },
  formField: {
    marginVertical: '5%',
    
  },
  formLabel: {
    color: "#8C8C8C",
    fontSize: 16,
    letterSpacing: 1
  },
  textInput: {
      height: 70,
      borderRadius: 4,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 3,
      marginVertical: '4%',
  },
});

export default styles;
