/**
 * Created by Administrator on 2017/6/30.
 */

//可以再render函数中使用if else等条件控制输出的JSX实现条件渲染
//可以使用内联的条件控制语句：在大括号内使用&&表达式，前边的条件为true则后边的JSX会被编译渲染，否则会跳过
//可以使用三目运算符 ? : 计算简短的块。（甚至可以计算较长的块）
//有一个说法，在条件判断变得复杂的时候就是新建一个组件的时候

//阻止组件被渲染：只要在render函数中返回null 就组件就不会渲染。
//组件render函数中返回null不会影响组件lifecycle methods 被调用

import React, {Component} from 'react';
import '../css/conditionStyle.css';

class ConRender extends Component{
	constructor(props){
		super(props);
		this.state = {
			showTop: true,
			showMiddle: true,
			showBottom: true
		}
		this.handleTop = this.handleTop.bind(this);
		this.handleMiddle = this.handleMiddle.bind(this);
		this.handleBottom = this.handleBottom.bind(this);

	}

	handleTop(){
		this.setState(prevState => ({
			showTop: !prevState.showTop
		}));
	}

	handleMiddle(){
		this.setState(prevState => ({
			showMiddle: !prevState.showMiddle
		}));
	}

	handleBottom(){
		this.setState(prevState => ({
			showBottom: !prevState.showBottom
		}));
	}

	render(){
		let bottom  = null;
		if(this.state.showBottom){
			bottom = <div className="c-block bottom">bottom</div>;
		}
		return (
			<div className="condition-wrap">
				<div>
				{this.state.showTop && (
					<div className="c-block top">top</div>
				)}
				{this.state.showMiddle ? (<div className="c-block middle">middle</div>) : null}
				{bottom}
				</div>
				<div className="btn-wrap">
					<button className="op-btn" onClick={this.handleTop}>show top : {this.state.showTop ? "true" : "false"}</button>
					<button className="op-btn" onClick={this.handleMiddle}>show middle : {this.state.showMiddle ? "true" : "false"}</button>
					<button className="op-btn" onClick={this.handleBottom}>show bottom : {this.state.showBottom ? "true" : "false"}</button>
				</div>
			</div>
		);
	}
}

export default ConRender;