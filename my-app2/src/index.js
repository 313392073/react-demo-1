import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';

//react-router 4.0后与前边改动较大
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Process from './component/process';
import SQLEditor from './component/SQLEditor';
import Home from './component/home';
import Error from './component/error';
//{/*所有路由的基础url。必要的前斜杠，不能有后斜杠*/}
//exact 保证只有“/”能匹配到home，/XXX匹配不到
ReactDOM.render((
	<BrowserRouter
		basename="/lisw"
	>
        <div>
            <App/>
            <hr/>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sqlEditor" component={SQLEditor} />
                    <Route path="/process" component={Process} />
                    <Route component={Error} />
                </Switch>
            </div>
        </div>
	</BrowserRouter>
), document.getElementById('root'));
