import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

import Logo from '../../assets/images/logoBW.png';
import UserIcon2 from '../../assets/images/userIcon2.png';
import BurgerButton from '../../assets/images/icon/burgerIcon.png';

import SearchBar from '../../components/SearchBar';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <SearchBar />
        <Image source={BurgerButton} style={styles.burgerButtonStyle}/>
      </View>
    </View>
  );
};

export default HomeScreen;
