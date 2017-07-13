/**
 * Created by Administrator on 2017/7/12.
 */

import React, {Component} from 'react';

class CtrBtn extends Component{

	render(){

		const {go,stop,caution,lightState} = this.props;
		console.log("btn");

		return(
			<div className="btn-wrap">
				<button className="stop"
					onClick={stop}
			        disabled={lightState === "STOP" || lightState === "GO"}>
				stop
				</button>

				<button className="go"
					onClick={go}
					disabled={lightState === "GO" || lightState === "CAUTION"}>
				go</button>

				<button className="caution"
					onClick={caution}
					disabled={lightState === "STOP" || lightState === "CAUTION"}>
				caution</button>
			</div>
		);
	}

}

export default CtrBtn;