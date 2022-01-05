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
import User from '../../assets/images/user.png';
import Logo from '../../assets/images/logo.png';
import UserIcon from '../../assets/images/userIcon.png';
import EmailIcon from '../../assets/images/emailIcon.png';
import MobileIcon from '../../assets/images/mobileIcon.png';
import JobIcon from '../../assets/images/jobIcon.png';
import OrganizationIcon from '../../assets/images/buildingIcon.png';
import CountryIcon from '../../assets/images/flagIcon.png';
import CityIcon from '../../assets/images/cityIcon.png';

import CustomButton from '../../components/CustomButton';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.userImageContainer}>
          <Image source={User} resizeMode="cover" style={styles.userImage} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <View style={styles.signUpForm}>
          <View style={styles.formField}>
            <TextInput placeholder="Name" style={styles.textInput} />
            <Image source={UserIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="Your Email" style={styles.textInput} />
            <Image source={EmailIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="Mobile No." style={styles.textInput} />
            <Image source={MobileIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="Job Title" style={styles.textInput} />
            <Image source={JobIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="Organisations" style={styles.textInput} />
            <Image source={OrganizationIcon} style={styles.icon} />
          </View>
          {/* <View style={styles.formField}>
            <TextInput placeholder="Country" style={styles.textInput} />
            <Image source={CountryIcon} style={styles.icon} />
          </View>
          <View style={styles.formField}>
            <TextInput placeholder="City" style={styles.textInput} />
            <Image source={CityIcon} style={styles.icon} />
          </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('VerificationScreen')}>
            <CustomButton
              title="Continue"
              color="#F17400"
              paddingHorizontal={12}
              marginVertical={30}
              paddingVertical={15}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
