import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Theme {
    myCustomProperty: string;
    myCustomFunction: () => void;
  }

  export interface Colors {
    primaryLight: string;
    primaryDark: string;
    secondaryLight: string;
    secondaryDark: string;
  }
}
