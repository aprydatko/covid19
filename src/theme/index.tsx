import { createTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

export const outerTheme = createTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

export const innerTheme = createTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});
