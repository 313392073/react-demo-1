import React, { Component } from 'react';
import ControlContainer from '../container/controlContainer';

class App extends Component {
  render() {
     return (
     	<div>
	        <div style={{
	        	fontFamily: 'tahoma',
		        fontSize: '24px',
		        textAlign: 'center'
	        }}>
		        Book Search
	        </div>
	        <hr />
			<ControlContainer />
        </div>
     );
  }
}

export default App;
