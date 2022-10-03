import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '~/pages/Home';
import Notifications from '~/pages/Notifications';
import Profile from '~/pages/Profile';
import Settings from '~/pages/Settings';
import { AppRootParamsList } from './types';

const Stack = createStackNavigator<AppRootParamsList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
