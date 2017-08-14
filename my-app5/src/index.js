import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Page1con from './page1/containerPage1';
import Page2con from './page2/containerPage2';
import Home from './home/home';
import './main.css';
import Page1Child from './page1Children/page1Child'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/page1" component={Page1con} >
					<Route path="page1Child(/:name)" component={Page1Child} />
				</Route>
				<Route path="/page2" component={Page2con} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));
