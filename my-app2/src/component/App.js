

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
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/sqlEditor"}>SQLEditor</Link></li>
                    <li><Link to={"/process"}>Process</Link></li>
	                <li><Link to="/redirect">redirect</Link></li>
                </ul>
            </div>
        );
    }

}

export default App;