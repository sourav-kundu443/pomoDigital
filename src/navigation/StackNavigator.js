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


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
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
          name="HomeScreen"
          component={HomeScreen}
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
      </Stack.Navigator>
  );
};

export default StackNavigator;
