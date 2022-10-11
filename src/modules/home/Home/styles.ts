import { ThemeOptions } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const styles = ({ colors, fontSizes, spacing }: ThemeOptions) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: spacing.lg,
    },
    applyFont: {
      // fontFamily: fontFamilies.body,
      fontStyle: 'italic',
      fontWeight: '700',
      fontSize: fontSizes.xl,
    },
  });

export default styles;
