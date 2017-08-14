/**
 * Created by Administrator on 2017/8/14.
 */

import React, {Component} from 'react';
import {browserHistory} from 'react-router'

class Page1Child extends Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		browserHistory.push("/");
	}

	render(){
		console.log(this.props);
		console.log(this.props.params.name);
		console.log(this.props.location.query.aa);
		return(
			<div>
				<p style={{color:'red'}}>this is a child of page1.</p>
				<button onClick={this.handleClick}>到首页</button>
			</div>
		);
	}
}

export default Page1Child;