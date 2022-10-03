import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './MainStack';
import { navigationRef } from './navigation';

function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default RootNavigation;
