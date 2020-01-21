<<<<<<< HEAD
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const theme = createMuiTheme({
  palette: {
      primary: {
        main: '#689f38',
      },
      secondary: {
        main: '#a5d6a7',
      },
  },
  typography: { 
    useNextVariants: true
 }
});


ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
     <App />
  </MuiThemeProvider>, 
  document.getElementById('root')
);

// export default theme;
=======
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
>>>>>>> 901b18a4670f6aab179548c9896e9888e6aa9757
