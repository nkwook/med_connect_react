import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Home, Auth, Main} from "pages";
import { keyframes } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
// import {theme} from '../components'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/main" component={Main}></Route>
      </MuiThemeProvider>
      
    );
  }
}

export default App;