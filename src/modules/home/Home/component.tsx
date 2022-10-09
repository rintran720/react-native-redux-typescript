import { useTheme } from '@rneui/themed';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '~/components/Button';
import { navigate } from '~/navigation/navigation';
import styles from './styles';

function HomeComponent() {
  const { theme } = useTheme();
  const themedStyles = styles(theme);
  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.applyFont}>Click to navigation other page</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigate('Profile', null)}
        color={'primary'}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigate('Settings', null)}
        color={'success'}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigate('Notifications', null)}
        color="secondary"
      />
    </View>
  );
}

export default HomeComponent;
