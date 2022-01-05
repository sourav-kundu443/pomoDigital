import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
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
    paddingHorizontal: '7%',
    marginTop: '8%'
  },
  content: {
    paddingHorizontal: '5%',
    top: '10%',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: 63,
    height: 63,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.20)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  timeResend: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '2%'
  },
  resend: {
      color: '#36A9E1',
      fontWeight: '600',
      fontSize: 16
  }
});

export default styles;
