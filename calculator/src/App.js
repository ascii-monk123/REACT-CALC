import React, { Component } from 'react';
import Classes from './App.module.css';
import Aux from './HOC/Auxillary';
import Calc from './components/Calc';
class App extends Component {
  render() {
    return (
      <Aux>
        <Calc />
      </Aux>
    );
  }
}

export default App;
