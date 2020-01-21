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