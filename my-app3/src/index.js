import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './component/reducer'

ReactDOM.render(
	<Provider store={createStore(reducer)}>
		<App/>
	</Provider>,
	document.getElementById('root'));




