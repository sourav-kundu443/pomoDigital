import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

import Background from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';
import Rectangle from '../../assets/images/rectangle.png';
import ArrowIcon from '../../assets/images/arrowIcon.png';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.SplashContainer}>
      <View>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <ImageBackground
            source={Rectangle}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <Image source={Logo} />
            <Text style={styles.title}>Pomo Digital</Text>
            <Text style={styles.details}>
              For managing and sharing Constriction Drawings, Documents and 3D
              models during construction and operation
            </Text>
          </ImageBackground>
        </ImageBackground>
      </View>
      <View style={styles.splashLowerPart}>
        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
            <Image source={ArrowIcon} style={styles.arrowIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;
