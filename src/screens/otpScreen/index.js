import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';

import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';

import BackButton from '../../assets/images/icon/backIcon.png';
import Logo from '../../assets/images/logoBW.png';

const OTPScreen = ({navigation}) => {
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
        Please enter the OTP sent to your registered mobile number
      </Text>
      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.timeResend}>
          <Text style={styles.time}>Expires in 00:15</Text>
          <TouchableOpacity>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
          <CustomButton
            color="#F17400"
            title="Continue"
            paddingHorizontal={12}
            marginVertical={30}
            paddingVertical={15}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;
