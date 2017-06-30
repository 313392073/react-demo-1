import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Appp from './component/App';
//import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

$(function(){
	console.log($);
	ReactDOM.render(<Appp />, document.getElementById('root'));
});




//registerServiceWorker();
