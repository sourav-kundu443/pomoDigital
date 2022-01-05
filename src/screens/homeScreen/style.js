import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    marginTop: '2%',
  },
  burgerButtonStyle: {
    height: '40%',
  },
  bannerStyle: {
    position: 'relative',
    alignItems: 'center',
    top: '5%'
  },
  hgfs: {
    position: 'absolute',
    height: '100%',
    top: '10%',
    left: '51%'
  },
  shadow: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    elevation: 8,
  },
  bannerImage: {
    top: '30%'
  },
  explore: {
    position: 'absolute'
  },
  exploreText: {
    color: '#000',
  },
  footer: {
    width: '100%',
    top: '10%',
    backgroundColor: '#fff',
    height: '100%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: '5%'

  },
  footerTopPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  projectText: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8C8C8C',
    fontWeight: 'bold'
  },
  projects: {
    height: '100%'
  },
  project: {
    flex: 1,
    height: 100,
    marginVertical: '5%'
  },
  projectImage: {
    width: 75,
    height: 75,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: '5%',
    
  },
  projectNum: {
    fontSize: 14,
    color: '#565656',
    fontWeight: '600'
  }
});

export default styles;
