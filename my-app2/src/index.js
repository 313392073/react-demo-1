import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
//import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

//console.log(Link);
//console.log(hashHistory);


ReactDOM.render((
	<BrowserRouter>
		<App/>
	</BrowserRouter>
), document.getElementById('root'));
