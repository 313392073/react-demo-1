/**
 * Created by Administrator on 2017/7/20.
 */

import { combineReducers } from 'redux';

const defaults = {
	TOPIC: "fuck",
	DISPLAY_MODE: 'THUMBNAIL',
	STATE: []
};

const topicReducer = function (state = defaults.TOPIC, action) {
	switch (action.type){
		case 'SET_TOPIC':
			return action.topic;
		default:
			return state;
	}
};

const bookDisplayReducer = function (state = defaults.DISPLAY_MODE, action) {
	switch (action.type){
		case 'SET_DISPLAY_MODE':
			return action.dispayMode;
		default:
			return state;
	}
};

const fetchReducer = (state = defaults.STATE, action) => {

	switch(action.type){
		case 'FETCH_COMPAETE':
			return action.json.items;
		case 'FETCH_FAILED':
			alert('fetch failed.check your internet connect or change the query!');
			return [];
		case 'FETCH_STARTED':
			return [];
		default:
			return state;
	}
};





//combineReducers以对象形式接收reducers方法，key值为reducer对应的state
export default combineReducers({
	topic: topicReducer,
	displayModel: bookDisplayReducer,
	books: fetchReducer
});















