/**
 * Created by Administrator on 2017/7/12.
 */

import React from 'react'

class Light extends React.Component{

	render(){
		const {stopColor,cautionColor,goColor} = this.props;
		console.log("light");
		return(
			<div>
				<svg height='170'>
					<circle cx='145' cy='60' r='15'
					        fill={stopColor}
					        stroke='black'/>

					<circle cx='145' cy='100' r='15'
					        fill={cautionColor}
					        stroke='black'/>

					<circle cx='145' cy='140' r='15'
					        fill={goColor}
					        stroke='black'/>
				</svg>
			</div>
		);
	}
}

export default Light;