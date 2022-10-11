import { createTheme, TextProps } from '@rneui/themed';
import { colors } from '~/constants/color.const';
import { fontFamilies, fontSizes } from '../constants/font.const';
import './config.d';

const theme = createTheme({
  lightColors: { ...colors },
  darkColors: { ...colors },
  fontFamilies,
  fontSizes,
  Text: ({ style }: TextProps) => ({
    style: { fontFamily: fontFamilies.body, ...style },
  }),
});

export default theme;
