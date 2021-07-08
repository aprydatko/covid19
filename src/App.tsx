import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { innerTheme, outerTheme } from './theme';
import Main from './main';

const App = (): JSX.Element => (
  <ThemeProvider theme={innerTheme}>
    <Main />
  </ThemeProvider>
);

export default App;
