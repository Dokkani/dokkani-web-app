import React from 'react';
import ButtonAppBar from './components';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ButtonAppBar />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;