import { createTheme, CreateThemeOptions, TextProps } from '@rneui/themed';
import { colors } from '~/constants/colors.const';
import { fontFamilies, fontSizes } from '../constants/font.const';
import './config.d';

const theme: CreateThemeOptions = createTheme({
	lightColors: { ...colors.light },
	darkColors: { ...colors.dark },
	fontFamilies,
	fontSizes,
	components: {
		Text: ({ style }: TextProps) => ({
			style: { fontFamily: fontFamilies.body, ...(style as object) },
		}),
	},
});

export default theme;
