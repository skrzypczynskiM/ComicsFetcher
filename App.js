import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './routes/AppNavigator';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
