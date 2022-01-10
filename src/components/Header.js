import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SmallLogo } from '../assets/images';

const Header = ({navigation, screenName, color}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
        <Icon name="chevron-left" color={color} size={15} />
      </TouchableOpacity>
      <Image source={SmallLogo} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: '10%',
    marginTop: '2%',
    paddingHorizontal: '6%',
  },
  logo: {
    width: '12%',
  },
});

export default Header;
