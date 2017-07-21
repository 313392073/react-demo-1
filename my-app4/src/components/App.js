import React, { Component } from 'react';
import ControlContainer from '../container/controlContainer';
import BooksContainer from '../container/booksContainer';

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
	        <BooksContainer />
        </div>
     );
  }
}

export default App;
