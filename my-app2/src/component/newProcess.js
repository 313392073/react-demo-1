
import React, {Component} from 'react';

class NewProcess extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match);
        console.log(this.props.location);

        return(
            <div>
                <p>this is NewProcess page!</p>
            </div>
        );
    }

}
export default NewProcess;