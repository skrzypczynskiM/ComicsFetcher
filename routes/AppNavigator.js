import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen
      name="Home"
      component={Home}
      options={{
        title: 'XKCD',
      }}
    />
    <Screen
      name="Details"
      component={Details}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Navigator>
);

export default AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
