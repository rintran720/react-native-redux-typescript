import { TextProps } from '@rneui/themed';

declare module '@rneui/themed' {
  export interface Theme {
    fontFamilies: {
      title: string;
      body: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      tiny: number;
      base: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
    };
    myCustomFunction: () => void;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
