import { Button as RNEButton, ButtonProps } from '@rneui/themed';
import * as React from 'react';

export function Button({ titleStyle, ...props }: ButtonProps) {
  const fontFamily = 'SFProDisplay-Regular';
  return <RNEButton {...props} titleStyle={[{ fontFamily }, titleStyle]} />;
}
