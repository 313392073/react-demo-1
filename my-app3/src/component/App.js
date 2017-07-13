import React, { Component } from 'react';
import { BtnContainer } from './btnContainer';
import { LightContainer } from './lightContainer';

//定义组件
class App extends Component{

	render() {
		return (
			<div>
				<LightContainer></LightContainer>
				<BtnContainer></BtnContainer>
			</div>
		);
	}
}

export default App;
