import React, { Component } from 'react';
import './App.css';
import {Link, Route} from 'react-router';
import Page1 from '../page1/page1';
import Page2 from '../page2/page2';


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
	      <div>
		      <Route path="/page1" component={Page1} />
		      <Route path="/page1" component={Page2} />
	      </div>
      </div>
    );
  }
}

export default App;
