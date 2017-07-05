
import React,{Component} from 'react';
//ReactDOM
//import ReactDOM from 'react-dom';

class RefsDemo extends Component{

    constructor(props){
        super(props);
        this.state = {
            textVal: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({textVal:e.target.value});
    }

    handleClick(){
        //setState的回调函数处理设定state后的操作
        this.setState({textVal:""},function () {
            //此句获取DOM并调用focus方法让input获得焦点
	        //TODO ref设定为字符串的方式已经被反对使用，将来的版本可能移除
            //ReactDOM.findDOMNode(this.refs.theInput).focus();

	        //使用回调的形式将表单元素存储于this.input。
	        //ReactDOM.findDOMNode(this.input).focus();
	        this.input.focus();
	        console.log(this.input);
        });
    }

    render(){
        return(
            <div>
                <label>text:</label>
                <input
                    type="text"
                    value={this.state.textVal}
                    ref={(el) => this.input = el}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >empty input</button>
            </div>
        );
    }
}
export default RefsDemo;