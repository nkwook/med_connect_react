import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Home, Auth, Main} from "pages";

import { createMuiTheme } from '@material-ui/core/styles';
// import {theme} from '../components'

// import "./App.css";


import {Provider} from "react-redux";
import store from "store"

import { keyframes } from 'styled-components';
import Info from "pages/Info";//pages안에 추가하는 방법?

class App extends Component {
  render() {
    return (

      <Provider store = {store}>
         <MuiThemeProvider>
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/info" component={Info}></Route>
        </MuiThemeProvider>
      </Provider>
      
    );
  }
}

export default App;