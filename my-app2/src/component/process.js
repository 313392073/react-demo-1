
import React, {Component} from 'react';

class Process extends Component{
    constructor(props){
        super(props);
    }



   render(){
    	//路由会向组件传入match作为prop
    	console.log(this.props.match);
        return(
            <div>
                <p>this is process page!</p>
            </div>
        );
   }

}

export default Process;