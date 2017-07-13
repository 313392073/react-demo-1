/**
 * Created by Administrator on 2017/7/12.
 */

import React, {Component} from 'react';
import {cautionAction, stopAction, goAction} from './action';

class CtrBtn extends Component{

	constructor(props){
		super(props);

	}

	componentWillMount() {
		this.props.store.subscribe(() => {
			this.forceUpdate();
		});
	}

	render(){
		console.log("btn");
		const store = this.props.store;
		const state = store.getState();
		return(
			<div className="btn-wrap">
				<button className="stop"
					onClick={() => {store.dispatch(stopAction)}}
			        disabled={state === "STOP" || state === "GO"}>
				stop
				</button>

				<button className="go"
					onClick={() => {store.dispatch(goAction)}}
					disabled={state === "GO" || state === "CAUTION"}>
				go</button>

				<button className="caution"
					onClick={() => {store.dispatch(cautionAction)}}
					disabled={state === "STOP" || state === "CAUTION"}>
				caution</button>
			</div>
		);
	}


}

export default CtrBtn;