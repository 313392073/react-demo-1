/**
 * Created by Administrator on 2017/7/25.
 */

import React, {Component} from 'react';

class Page2 extends Component{

	render(){

		const {page1Topic} = this.props;

		return(
			<div>
				<h3>this is page2</h3>
				<p>
					<span>Topic:</span>
					{page1Topic}
				</p>
			</div>
		);
	}
}

export default Page2;