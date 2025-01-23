import {darkTheme, lightTheme} from './theme';

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

import {UnistylesRegistry} from 'react-native-unistyles';

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
  // register other themes with unique names
}).addConfig({
  // you can pass here optional config described below
  adaptiveThemes: true,
  initialTheme: 'light',
});
