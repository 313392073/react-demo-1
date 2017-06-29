import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import App2 from './App2';

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
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<div>opened seconds: {this.state.time}</div>
				<App2 from={this.state.time}/>
			</div>
		);
	}
}

export default App;
