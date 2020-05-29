import React, { Component } from 'react';
import Classes from './result.module.css';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let result = this.props.result;
    return (
      <div className={Classes.Result}>
        <p>{result}</p>
      </div>
    );
  }
}

export default Result;
