import React, { Component } from 'react';
import Classes from './Keypad.module.css';

class Keypad extends Component {
  render() {
    return (
      <div className="button">
        <button
          name="("
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          (
        </button>
        <button
          name="CE"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.purple}
        >
          CE
        </button>
        <button
          name=")"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          )
        </button>
        <button
          name="C"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.purple}
        >
          C
        </button>
        <br />

        <button
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          1
        </button>
        <button
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          2
        </button>
        <button
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          3
        </button>
        <button
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          +
        </button>
        <br />

        <button
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          4
        </button>
        <button
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          5
        </button>
        <button
          name="6"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          6
        </button>
        <button
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          -
        </button>
        <br />

        <button
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          7
        </button>
        <button
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          8
        </button>
        <button
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          9
        </button>
        <button
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          *
        </button>
        <br />

        <button
          name="."
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          .
        </button>
        <button
          name="0"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.blue}
        >
          0
        </button>
        <button
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.red}
        >
          =
        </button>
        <button
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
          className={Classes.pink}
        >
          ÷
        </button>
      </div>
    );
  }
}

export default Keypad;
