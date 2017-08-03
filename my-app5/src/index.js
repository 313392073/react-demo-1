import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, browserHistory} from 'react-router';
import Page1 from './page1/page1';
import Page2 from './page2/page2';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));
