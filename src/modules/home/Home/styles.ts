import { ThemeOptions } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import fonts from '~/constants/fonts.const';

const styles = (theme: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    applyFont: {
      fontFamily: fonts.fontFamily,
    },
  });

export default styles;
