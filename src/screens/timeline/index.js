import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

import Header from '../../components/Header';

import Imageg from '../../assets/images/aba.png';
const ProjectInfo = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image source={Imageg} style={styles.image} resizeMode="contain" />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Projects Timeline</Text>
        <View>
          
        </View>
      </View>
    </View>
  );
};

export default ProjectInfo;
