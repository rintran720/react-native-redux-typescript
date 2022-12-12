import { ThemeOptions } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const styles = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default styles;
