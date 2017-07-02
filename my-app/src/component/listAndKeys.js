
import React, {Component} from 'react';

class ListAndKey extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    getList(){
        let _tl = [];
        setTimeout(() => {
            for(let i=0;i<10;i++){
                //key是非常重要的，用于react重排序，dom是否删除，移动等
                //key必须在for循环中唯一，但是不用全局唯一
                _tl.push(<li key={i}>list item : {Math.random().toFixed(1) * 10}</li>);
            }
            //这是一个数组，在render函数中可以直接解析数组渲染？
            this.setState({list: _tl});
        },1000);

    }

    componentDidMount(){
        this.getList()
    }

    //JSX允许内嵌任何表达式
    render(){
        return(
            <div classID="list-wrap">
                <ul>{this.state.list}</ul>
            </div>
        );
    }

}

export default ListAndKey;