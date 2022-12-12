import React from 'react';
import { Text, View } from 'react-native';
import useTheme from '~/theme/useTheme';
import styles from './styles';

function NotificationsComponent() {
  const { theme } = useTheme();
  const themedStyles = styles(theme);
  return (
    <View style={themedStyles.container}>
      <Text>Notifications</Text>
    </View>
  );
}

export default NotificationsComponent;
