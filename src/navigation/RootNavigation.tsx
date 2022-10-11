import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import '~/languages/i18n';
import theme from '~/theme/config';
import MainStack from './MainStack';
import { navigationRef } from './navigation';

function RootNavigation() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RootNavigation;
