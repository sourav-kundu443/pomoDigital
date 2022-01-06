import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import BackButton from '../assets/images/icon/backIconBW.png';
import Logo from '../assets/images/logoBW.png';

const Header = ({navigation, screenName}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate({screenName})}>
          <Image
            source={BackButton}
            resizeMode="contain"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
        width: 20,
        height: 20,
      },
})

export default Header;
