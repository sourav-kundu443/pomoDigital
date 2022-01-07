import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';

import SplashScreen from '../screens/splashScreen';
import SignUpScreen from '../screens/signupScreen';
import VerificationScreen from '../screens/verificationScreen';
import HomeScreen from '../screens/homeScreen';
import OTPScreen from '../screens/otpScreen';
import NewPassword from '../screens/passwordScreen';
import NewProject from '../screens/newProjectScreen';
import HomeDashboard from '../screens/homeDashboard';
import ProjectInformation from '../screens/projectInformation';
import ProjectTimeline from '../screens/timeline';
import Contacts from '../screens/contacts';
import Models from '../screens/dModels';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NewProject"
        component={NewProject}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDashboard"
        component={HomeDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectInformation"
        component={ProjectInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Timeline"
        component={ProjectTimeline}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Models"
        component={Models}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProjectStackScreen = () => {
  return (
    <View>
      <Text>Projects</Text>
    </View>
  );
};
const BillingStackScreen = () => {
  return (
    <View>
      <Text>Billing</Text>
    </View>
  );
};
const NotificationStackScreen = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};
const ProfileStackScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export {
  HomeStackScreen,
  ProjectStackScreen,
  BillingStackScreen,
  NotificationStackScreen,
  ProfileStackScreen,
};
