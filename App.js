import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import BottomNavigator from './src/navigation/BottomTabNavigator';
// import StackNavigator from './src/navigation/StackNavigator';
import NewStack from './src/navigation/NewStack'

const App = () => {
  return (
    <NavigationContainer>
      <NewStack />
    </NavigationContainer>
  );
};

export default App;
