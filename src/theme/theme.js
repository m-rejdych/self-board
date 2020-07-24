import { createMuiTheme } from '@material-ui/core';
import { deepPurple, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
    type: 'dark',
  },
  typography: {
    fontFamily: 'Roboto Slab, Roboto, Helvetica, sans-serif',
  },
});

export default theme;
