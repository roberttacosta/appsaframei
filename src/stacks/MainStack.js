import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InitialPage from '../screens/InitialPage';
import SafraMeiInformations from '../screens/SafraMeiInformations';
import SingUp from '../screens/SingUp';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="InitialPage"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="InitialPage" component={InitialPage} />
    <Stack.Screen name="SafraMeiInformations" component={SafraMeiInformations}/>
    <Stack.Screen name="SingUp" component={SingUp} />
  </Stack.Navigator>
);

