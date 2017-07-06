
import React, {Component} from 'react';

class Error extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match);
        console.log(this.props.location);

        return(
            <div>
                <p style={{color: "red"}}>this is Error page!</p>
            </div>
        );
    }

}
export default Error;