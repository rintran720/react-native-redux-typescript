import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import '~/languages/i18n';
import theme from '~/theme/config';
import ThemeProvider from '~/theme/ThemeProvider';
import MainStack from './MainStack';
import { navigationRef } from './navigation';
console.log(theme);
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
