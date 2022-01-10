import React from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';

import Icon from  'react-native-vector-icons/FontAwesome';

import Logo from '../../assets/images/logoBW.png';
import BurgerButton from '../../assets/images/icon/burgerIcon.png';
import BannerImage from '../../assets/images/aaa.png';
import ReactOne from '../../assets/images/Rectangle3.png';
import ReactTwo from '../../assets/images/Rectangle4.png';

import SearchBar from '../../components/SearchBar';
import CustomButton from '../../components/CustomButton';

import DATA from './DATA';

const HomeScreen = ({navigation}) => {
  const _renderItem = ({item}) => {
    return (
      <View style={styles.project}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={styles.projectImage}
            resizeMode="cover"
          />
          <Text style={styles.projectNum}>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <SearchBar />
        <Icon name='navicon' color='#fff' size={40} />
      </View>
      <View style={styles.bannerStyle}>
        <Image source={ReactOne} style={styles.ReactOne} resizeMode="contain" />
        <View style={styles.hgfs}>
          <Image
            source={ReactTwo}
            style={styles.ReactTwo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.shadow}>
          <Image source={BannerImage} style={styles.bannerImage} />
        </View>
        <TouchableOpacity style={styles.explore}>
          <Text style={styles.exploreText}>Explore Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerTopPart}>
          <Text style={styles.projectText}>Projects</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewProject')}>
            <CustomButton
              title="+ New Project"
              color="#4141FD"
              paddingHorizontal={25}
              marginVertical={20}
              paddingVertical={10}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.projects}>
          <FlatList
            data={DATA}
            renderItem={_renderItem}
            numColumns={3}
            keyExtractor={(item, index) => index}
            
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
