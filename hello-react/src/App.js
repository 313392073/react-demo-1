import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
    }
    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        var newValue = this.state.value + 1;
        this.setState({value: newValue});
        console.log(e.target);
    }

  render() {
    return (
      <div>
          <h2 className="pointer-sty" onClick={this.handleClick.bind(this)}>Welcome to React(try to click me!)</h2>
          <span>count:</span><span>{this.state.value}</span>
      </div>
    );
  }
}

export default App;
