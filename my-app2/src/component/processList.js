
import React, {Component} from 'react';

class ProcessList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match);
        console.log(this.props.location);

        return(
            <div>
                <p>this is ProcessList page!</p>
            </div>
        );
    }

}
export default ProcessList;