import React, { Component } from 'react';
<<<<<<< HEAD
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Home, Auth, Main} from "pages";
import { keyframes } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
// import {theme} from '../components'

=======
// import "./App.css";
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from "react-redux";
import store from "store"
import {Home, Auth, Main} from "pages";
import { keyframes } from 'styled-components';
import Info from "pages/Info";//pages안에 추가하는 방법?
>>>>>>> 901b18a4670f6aab179548c9896e9888e6aa9757

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <MuiThemeProvider >
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/main" component={Main}></Route>
      </MuiThemeProvider>
=======

      <Provider store = {store}>
         <MuiThemeProvider>
        <Route exact path="/" component={Home}></Route>
        <Route path="/auth" component={Auth}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/info" component={Info}></Route>
        </MuiThemeProvider>
      </Provider>
>>>>>>> 901b18a4670f6aab179548c9896e9888e6aa9757
      
    );
  }
}

export default App;