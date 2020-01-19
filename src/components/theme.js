import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#689f38',
        },
        secondary: {
          main: '#a5d6a7',
        },
    },
  status: {
    danger: 'orange',
  },
});

export default theme;