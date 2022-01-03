import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import Logo from '../../assets/images/logo.png';
import UserIcon2 from '../../assets/images/userIcon2.png';

const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.headerLogo} resizeMode="contain" />
        <Text style={styles.headerText}>
          You have successfully registered as a Customer!!
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.userContainer}>
          <Image source={UserIcon2} />
        </View>
        <Text>Your user verification is under process</Text>
      </View>
    </View>
  );
};

export default VerificationScreen;
