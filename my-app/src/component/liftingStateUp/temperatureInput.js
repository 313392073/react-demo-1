/**
 * Created by Administrator on 2017/7/4.
 */

import React,{Component} from "react";

const scaleNames = {
	c: 'Celsius',//摄氏
	f: 'Fahrenheit'//华氏
};

//此组件显示用户输入的温度，但是并没有自己的state。输入触发的change事件调用父组件的handle回调，改变父组件的state。
//子组件显示的温度依赖父组件传递的props(父组件将state作为props传递到子组件)
class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onTemperatureChange(e.target.value);
	}

	render(){
		const temperature = this.props.temperature;
		const scale = this.props.scale;

		return(
			<fieldset>
				<legend>输入{scaleNames[scale]}温度：</legend>
				<input type="text" value={temperature} onChange={this.handleChange}/>
			</fieldset>
		);
	}
}
export default TemperatureInput;