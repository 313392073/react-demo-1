/**
 * Created by Administrator on 2017/7/12.
 */

import React from 'react';


function stopColor(store) {
	return store === "STOP" ? "red" : "white";
}
function cautionColor(store) {
	return store === "CAUTION" ? "yellow" : "white";
}
function goColor(store) {
	return store === "GO" ? "green" : "white";
}


class Light extends React.Component{
	constructor(props){
		super(props);
	}

	//redux的
	componentWillMount() {
		this.props.store.subscribe(() => {
			this.forceUpdate();
		});
	}

	render(){
		console.log("light");
		return(
			<div>
				<svg height='170'>
					<circle cx='145' cy='60' r='15'
					        fill={stopColor(this.props.store.getState())}
					        stroke='black'/>

					<circle cx='145' cy='100' r='15'
					        fill={cautionColor(this.props.store.getState())}
					        stroke='black'/>

					<circle cx='145' cy='140' r='15'
					        fill={goColor(this.props.store.getState())}
					        stroke='black'/>
				</svg>
			</div>
		);
	}
}

export default Light;