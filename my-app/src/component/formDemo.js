/**
 * Created by Administrator on 2017/7/3.
 */

import React,{Component} from 'react';

class FormDemo extends Component{
	constructor(props){
		super(props);

		this.state = {
			value: "",
			selectVal: this.props.sel,
			checkVal: true,
			inputVal: ""
		};

		this.handelInput = this.handelInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleChangeInput = this.handleChangeInput.bind(this);

	}

	//每个state都有一个handle function,便于处理用户输入（输入验证，输入限制等）。这叫做controlled component
	handelInput(event){
		//toUpperCase导致input不能输入中文，只能输入大写字母
		this.setState({value: event.target.value.toUpperCase()});
	}

	handleSelect(event){
		this.setState({selectVal: event.target.value});
	}

	handleSubmit(e){
		//alert(this.state.value);
		//alert(this.state.selectVal);
		alert(this.state.checkVal);
		alert(this.state.inputVal);
		e.preventDefault();
	}

	//使用一个handler处理多个control component
	handleChangeInput(e){
		const target = e.target,
			value = target.type === "checkbox" ? target.checked : target.value,
			name = target.name;

		this.setState({
			[name]: value
		});

	}

	//回设的值是可以在handelInput中处理的，感觉像一个拦截
	//textarea的写法和input text的写法类似。而不是使用原生写法（内容是元素的子节点）
	//没有onchange处理函数的textarea会被渲染成一个readonly的textarea(console有提示)
	//select的写法也是用一个value值，value值和option中的value值对应上，这该option被选中
	render(){
		return (
			<div classID="form-wrap">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.value} onChange={this.handelInput}/>
					<textarea readOnly="readOnly" value={this.props.aa}></textarea>
					<select value={this.state.selectVal} onChange={this.handleSelect}>
						<option value="op11">op1</option>
						<option value="op22">op2</option>
						<option value="op33">op3</option>
						<option value="op44">op4</option>
					</select>
					<div>
						<p>-------------multiple input------------</p>
						<input type="text" name="inputVal" value={this.state.inputVal} onChange={this.handleChangeInput}/>
						<input type="checkbox" name="checkVal" checked={this.state.checkVal} onChange={this.handleChangeInput}/>

					</div>
					<input type="submit" value="submit"/>
				</form>
			</div>
		);
	}
}

//默认值在没有指定值时生效
FormDemo.defaultProps = {
	aa: "aa"
};

export default FormDemo;