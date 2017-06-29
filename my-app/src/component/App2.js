/**
 * Created by Administrator on 2017/6/29.
 */

import React, {Component} from 'react';
import '../css/App2.css';

class App2 extends Component{

	constructor(props){
		super(props);
		this.state = {
			nowTime: new Date()
		};
	}

	//props由react自动创建，state有特殊的意义。用户可以在classs上创建自己的属性（如：this.timeOut。这个属性在当前组件有效）
	//state中的属性理论上都要用到render()函数中。也就是render中不使用的属性不应该出现在state中，而可以创建成class上的属性
	//

	tick(){
		//setState 会告诉react 界面上的要显示的属性有变化，react就回去执行render函数重新渲染DOM
		//不要直接访问state
		//setState可能是异步的，所以不能依赖上一次的state去计算state。fix的办法是使用setState的第二种形式传入一个函数，
		// 函数第一个参数是上一次的state
		//每个组件的state是独立的，在其他组件无法访问
		//props是单向流动的，只能从父组件传递到子组件。state可以作为props从父组件传递到子组件（props是瀑布，只能向下流，state是中途加入的水流）
		this.setState({nowTime: new Date()});
	}

	//组件输出渲染到DOM后调用（渲染完成后，像jquery的DOM ready）
	componentDidMount(){
		this.timer = setInterval(() => this.tick(),1000);
	}

	//if component is removed,this method will be called
	componentWillUnmount(){
		clearInterval(this.timer);
	}
	//componentDidMount等方法叫做lifecycle hooks

	//组件必须显式的以props参数调用constructor
	//props 由父组件以属性的方式传入，子组件以props参数的方式接受，props不可改变
	//每个组件必须保证是一个纯函数。（组件实际上就是一个函数）

	render() {
		return (
			<div className="App2">
				<div className="App2-header">
					<h2>App2 header</h2>
				</div>
				<div className="App2-content">
					i`m passed from App1 as a props:{this.props.from}
				</div>
				<div className="clock-text">this is a local clock: {this.state.nowTime.toLocaleTimeString()}</div>
			</div>
		);
	}
}

export default App2;