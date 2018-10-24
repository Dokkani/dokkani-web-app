import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import HomePage from './components/HomePage/';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
import SignUpPage from './components/SignUpPage';

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <ButtonAppBar/>
      <div>
        <Route exact path="/" render={props => (
          <div style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <HomePage />
          </div>
        )}/>
        <Route exact path="/signup" component={SignUpPage}/>
      </div>
    </MuiThemeProvider>
  </Router>
)

     


export default App;