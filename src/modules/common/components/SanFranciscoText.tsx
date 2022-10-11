import { TextProps } from '@rneui/themed';
import * as React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const MapFont = {
  normal: 'Regular',
  bold: 'Bold',
  '100': 'Ultralight',
  '200': 'Light',
  '300': 'Thin',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semibold',
  '700': 'Bold',
  '800': 'Heavy',
  '900': 'Black',
};

export function Text({ style, ...props }: TextProps) {
  const { fontWeight = '400', fontStyle } = StyleSheet.flatten(style || {});

  const fontFamily = `SFProDisplay-${MapFont[fontWeight]}${
    fontStyle === 'italic' ? 'Italic' : ''
  }`;
  const fontSize = 14;
  return <RNText {...props} style={[{ fontFamily, fontSize }, style]} />;
}
