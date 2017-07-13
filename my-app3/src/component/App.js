import React, { Component } from 'react';
import CtrBtn from './btn'
import Light from './light';

//定义组件
class App extends Component{
	render() {
		return (
			<div>
				<Light store={this.props.store}/>
				<CtrBtn store={this.props.store}/>
			</div>
		);
	}
}

export default App;
