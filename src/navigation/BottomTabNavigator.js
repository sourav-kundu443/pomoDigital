import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeStackScreen,
  ProjectStackScreen,
  BillingStackScreen,
  NotificationStackScreen,
  ProfileStackScreen,
} from './StackNavigators';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Project"
        component={ProjectStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Billing"
        component={BillingStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
