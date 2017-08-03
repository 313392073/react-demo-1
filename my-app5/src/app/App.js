import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
	      <div>
		      <ul>
			      <li><Link to="/page1" activeClassName="activeMenu">page1</Link></li>
			      <li><Link to="/page2" activeClassName="activeMenu">page2</Link></li>
		      </ul>
	      </div>
	      {this.props.children}
      </div>
    );
  }
}

export default App;
