

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/sqlEditor"}>SQLEditor</Link></li>
                    <li><Link to={"/process"}>Process</Link></li>

                </ul>
            </div>
        );
    }

}

export default App;