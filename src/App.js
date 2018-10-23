import React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import SimplePage from './components/SimplePage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar /> 
        <div style={{
          position: 'absolute', 
          left: '50%', 
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <SimplePage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;