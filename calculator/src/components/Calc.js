import React, { Component } from 'react';

import Keypad from './Keypad';
import Result from './Result';
import Aux from '../HOC/Auxillary';
import Classes from './calc.module.css';

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }

  onClick = (button) => {
    if (button === '=') {
      this.calculate();
    } else if (button === 'C') {
      this.reset();
    } else if (button === 'CE') {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  calculate = () => {
    try {
      let copy = { ...this.state };
      let oldRes = copy.result;
      const newRes = (eval(oldRes) || '') + '';
      this.setState({
        result: newRes,
      });
    } catch (e) {
      this.setState({ result: 'error' });
    }
  };

  reset = () => {
    this.setState({
      result: '',
    });
  };
  backspace = () => {
    let copy = { ...this.state };
    let old = copy.result;
    const newRes = old.slice(0, -1);
    this.setState({ result: newRes });
  };
  render() {
    return (
      <Aux>
        <div className={Classes.CalcBody}>
          <h1>Calculator</h1>
          <Result result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </Aux>
    );
  }
}

export default Calc;
