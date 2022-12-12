import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '~/components/core';
import { navigate } from '~/navigation/navigation';
import useTheme from '~/theme/useTheme';
import styles from './styles';

function HomeComponent() {
  const { theme } = useTheme();
  const themedStyles = styles(theme);
  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.applyFont}>Click below button to navigate to other screen</Text>
      <Button title='Go to Profile' onPress={() => navigate('Profile', null)} color={'primary'} />
      <Button title='Go to Settings' onPress={() => navigate('Settings', null)} color={'success'} />
      <Button title='Go to Notification' onPress={() => navigate('Notifications', null)} color='secondary' />
    </View>
  );
}

export default HomeComponent;
