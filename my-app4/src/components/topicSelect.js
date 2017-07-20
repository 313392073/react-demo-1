/**
 * Created by Administrator on 2017/7/20.
 */


import React, { Component } from 'react';

class TopicSelect extends Component{
	constructor(props){
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleKeyPress(e){
		this.props.fetchTopic(e.target.value);
	}

	handleChange(e){
		this.props.setTopic(e.target.value);
	}

	render(){

		const {topic} = this.props;

		return(
			<div>
				<label>Topic</label>
				<input
					type="text"
					ref={el => this.input = el}
					value={topic}
					onChange={this.handleChange}
				    onKeyPress={this.handleKeyPress}
				/>
			</div>
		);
	}
}

export default TopicSelect;