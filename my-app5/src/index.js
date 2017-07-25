import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App} />
		</Router>
	</Provider>
	, document.getElementById('root'));
