import { createTheme } from '@rneui/themed';

const colors = {
  primary: '#F39A9D',
  secondary: '#6DB1BF',
  background: '#F1E9DA',
  error: '#F21B3F',
  success: '#29BF12',
  warning: '#FF9914',
};

const theme = createTheme({
  lightColors: { ...colors },
  darkColors: { ...colors },
});

export default theme;
