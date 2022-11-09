import { TextProps } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const MapFont = {
	normal: 'Regular',
	bold: 'Bold',
	'100': 'Light',
	'200': 'Light',
	'300': 'Thin',
	'400': 'Regular',
	'500': 'Regular',
	'600': 'SemiBold',
	'700': 'Bold',
	'800': 'ExtraBold',
	'900': 'Black',
};

export function Text({ style, ...props }: TextProps) {
	const { fontWeight = '400', fontStyle } = StyleSheet.flatten(style || {});

	const fontFamily = `NotoSans-${MapFont[fontWeight]}${fontStyle === 'italic' ? 'Italic' : ''}`;

	return <RNText {...props} style={[{ fontFamily }, style]} />;
}
