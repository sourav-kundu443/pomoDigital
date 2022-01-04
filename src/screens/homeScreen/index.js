import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

import Logo from '../../assets/images/logo.png';
import UserIcon2 from '../../assets/images/userIcon2.png';

import CustomButton from '../../components/CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

export default HomeScreen;
