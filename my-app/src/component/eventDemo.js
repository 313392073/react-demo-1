/**
 * Created by Administrator on 2017/6/30.
 */

import React, {Component} from 'react';
import '../css/App2.css';

//class 首字母大写
class EventDemo1 extends Component{
	constructor(props){
		super(props);
		this.state = {
			onOrOff: false
		};
		//保证在事件中能拿到this对象(不是事件的this)
		this.handleClick = this.handleClick.bind(this);
	}

	//事件回调中必须显示调用e.preventDefault()才能阻止默认事件发生。（return false并不能达到效果）
	handleClick(e){
		console.log(e);
		//prevSate是个好东西
		this.setState(prevSate =>({
			onOrOff: !prevSate.onOrOff
		}));
	}

	render(){
		return(
			<div className="app3">
				<p>app3</p>
				<button className="click-btn" onClick={this.handleClick}>
					{this.state.onOrOff ? "ON" : "OFF"}
				</button>
			</div>
		)
	}
}

export default EventDemo1;
