import { createTheme, TextProps } from '@rneui/themed';
import { colors } from '~/constants/color.const';
import { fontFamilies, fontSizes } from '../constants/font.const';
import './config.d';

const theme = createTheme({
  lightColors: { ...colors },
  darkColors: { ...colors },
  fontFamilies,
  fontSizes,
  components: {
    Text: ({ style }: TextProps) => ({
      style: { fontFamily: fontFamilies.body, ...(style as object) },
    }),
  },
});

export default theme;
