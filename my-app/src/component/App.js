import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Event from './eventDemo';
import App22 from './App2';
import ConRender from './conditionalRender';


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
			</div>
		);
	}
}

export default App;
