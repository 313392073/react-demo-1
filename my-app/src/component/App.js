import React, {Component} from 'react';
import '../css/App.css';
import Event from './eventDemo';
import App22 from './App2';
import ConRender from './conditionalRender';
import List from './listAndKeys';
import FormDemo from './formDemo';
import LiftingState from './liftingStateUp/liftingStateUp';
import RefsDemo from './refsDemo';

import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			time: 0
		}
	}

	tick(){
		let newTime = this.state.time + 1;
		this.setState({time: newTime});
	}

	componentDidMount(){
		setInterval(() => this.tick(),1000);
	}


	render() {
		return (
			<div className="App">
				<div>opened seconds: {this.state.time}</div>
				<App22 from={this.state.time}/>
				<Event></Event>
				<ConRender/>
                <List/>
				<FormDemo sel="op22"/>
				<LiftingState/>
                <RefsDemo/>
			</div>
		);
	}
}

export default App;
