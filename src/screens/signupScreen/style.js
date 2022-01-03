import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  topPart: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    width: '8%',
    height: '5%',
    top: '3%',
    left: '85%',
  },
  userImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18%',
  },
  formContainer: {
    position: 'absolute',
    flex: 2,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: '28%',
    alignItems: 'center',
  },
  signUpText: {
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 30,
    color: '#000000',
    letterSpacing: 1,
    marginBottom: '6%',
  },
  signUpForm: {
    paddingHorizontal: 30,
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  textInput: {
    width: '100%',
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 2,
    color: '#000',
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  icon: {
    position: 'absolute',
    left: '90%',
  },
});

export default styles;
