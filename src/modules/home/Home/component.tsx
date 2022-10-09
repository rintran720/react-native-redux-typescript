import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigate } from '~/navigation/navigation';
import styles from './styles';

function HomeComponent() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => navigate('Profile', null)} />
      <Button
        title="Go to Settings"
        onPress={() => navigate('Settings', null)}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigate('Notifications', null)}
      />
    </View>
  );
}

export default HomeComponent;
