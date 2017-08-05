
import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import NewProcess from './newProcess';
import ProcessList from './processList';

class Process extends Component{
    constructor(props){
        super(props);
    }



   render(){


        //exact:当路由严格匹配时渲染
        //strict:当结尾斜杠严格匹配时渲染
    	//路由会向组件传入match作为prop
    	console.log(this.props.match);
    	console.log(this.props.location);
    	const match = this.props.match;
        return(
            <div>
                <p>this is process page!</p>
                <ul>
                    <li><Link to={`${match.url}`}>newProcess</Link></li>
                    <li><Link to={`${match.url}/processList`}>processList</Link></li>
                    <li><Link to={`${match.url}/config`}>config</Link></li>

                </ul>
                <hr/>
                <Route exact path={`${match.path}`} component={NewProcess}></Route>
                <Route path={`${match.path}/processList`} component={ProcessList}></Route>
            </div>
        );
   }

}

export default Process;