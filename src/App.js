import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import HomePage from './components/HomePage/';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import FileUpload from './components/FileUpload';

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <ButtonAppBar/>
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
        <Route exact path="/login" render={props => (
          <div style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <LoginPage />
          </div>
        )}/>
        <Route exact path="/search" render={props => (
          <div style={{
            position: 'absolute', 
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <SearchPage/>
          </div>
        )}/>
        <Route exact path="/file" component={FileUpload}/>
    </MuiThemeProvider>
  </Router>
)

     


export default App;