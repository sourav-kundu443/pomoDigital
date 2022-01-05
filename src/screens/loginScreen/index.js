import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './style';
import Logo from '../../assets/images/logo.png';
import EmailIcon from '../../assets/images/emailIcon.png';

import CustomButton from '../../components/CustomButton';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.TtextContainer}>
          <Text style={styles.welcomeText}>Welcome to Demo!</Text>
          <Text style={styles.paraText}>
            Please enter your registered mobile number to login your app
            account.
          </Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.loginForm}>
          <View style={styles.formField}>
            <TextInput placeholder="Your Email" style={styles.textInput} />
            <Image source={EmailIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="Password" style={styles.textInput} />
            <Image source={EmailIcon} style={styles.icon} />
          </View>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('OTPScreen')}>
            <Text style={styles.linkableText}>Forgot Password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            color="#F17400"
            paddingHorizontal={12}
            marginVertical={30}
            paddingVertical={15}
          />
        </View>
        <View style={styles.bottomtext}>
          <Text style={styles.normalText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.linkableText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
