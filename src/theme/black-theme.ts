import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
        default: grey[900]
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;