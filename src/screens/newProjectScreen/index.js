import React from 'react';
import {Image, Text, View, TextInput, ScrollView} from 'react-native';

import Header from '../../components/Header';
import styles from './style';

import CImage from '../../assets/images/construction_img.png';
import PNameIcon from '../../assets/images/icon/p_icon_1.png';
import PAddIcon from '../../assets/images/icon/p_icon_2.png';
import PValueIcon from '../../assets/images/icon/p_icon_3.png';
import PImageIcon from '../../assets/images/icon/p_icon_4.png';
import PTimeIcon from '../../assets/images/icon/p_icon_5.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

const NewProject = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={CImage}
        resizeMode="contain"
        style={styles.constructionImage}
      />
      <ScrollView style={styles.footer}>
        <Text style={styles.heading}>Create new project</Text>
        <View>
          <View style={styles.formField}>
            <Image source={PNameIcon} style={styles.icon} />
            <TextInput placeholder="Project name" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={PAddIcon} style={styles.icon} />
            <TextInput placeholder="Project address" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={PValueIcon} style={styles.icon} />
            <TextInput placeholder="Project value" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={PImageIcon} style={styles.icon} />
            <TextInput placeholder="Project image" style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Image source={PTimeIcon} style={styles.icon} />
            <TextInput
              placeholder="Project start date"
              style={styles.textInput}
            />
          </View>
          <View style={styles.formField}>
            <Image source={PTimeIcon} style={styles.icon} />
            <TextInput
              placeholder="Project end date"
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('HomeDashboard')}
            >
            <CustomButton
              title="Continue"
              color="#F17400"
              paddingHorizontal={12}
              marginVertical={30}
              paddingVertical={15}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewProject;
