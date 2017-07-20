/**
 * Created by Administrator on 2017/7/20.
 */

import React, { Component } from 'react';
import TopicSelectCont from '../container/topicSelecterCont';

class Control extends Component{

	render() {

		const {topic} = this.props;
		return (
			<div>
				<TopicSelectCont topic={topic}/>
			</div>
		);
	}
}
export default Control;