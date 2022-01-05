import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';

import User from '../../assets/images/user.png';
import UserIcon from '../../assets/images/userIcon.png';
import EmailIcon from '../../assets/images/emailIcon.png';

import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

import BackButton from '../../assets/images/icon/backIcon.png';
import Logo from '../../assets/images/logoBW.png';

const NewPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} screenName='LoginScreen' /> */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={BackButton}
            resizeMode="contain"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
      </View>
      <Text style={styles.message}>
        Please enter your new password to continue
      </Text>

      <View style={styles.formContainer}>
        <View style={styles.loginForm}>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>New Password</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.formField}>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <CustomButton
            title="Login"
            color="#F17400"
            paddingHorizontal={12}
            marginVertical={30}
            paddingVertical={15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPassword;
