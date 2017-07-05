import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';

//react-router 4.0后与前边改动较大
import { BrowserRouter, Route } from 'react-router-dom';
import Process from './component/process';
import SQLEditor from './component/SQLEditor';
import Home from './component/home';

ReactDOM.render((
	<BrowserRouter>
        <div>
            <App/>
            <hr/>
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/sqlEditor" component={SQLEditor} />
                <Route path="/process" component={Process} />
            </div>
        </div>
	</BrowserRouter>
), document.getElementById('root'));
