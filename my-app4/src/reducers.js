/**
 * Created by Administrator on 2017/7/20.
 */

import { combineReducers } from 'redux';

const defaults = {
	TOPIC: "javaScript",
	DISPLAY_MODE: 'THUMBNAIL'
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


//combineReducers以对象形式接收reducers方法，key值为reducer对应的state
export default combineReducers({
	topic: topicReducer,
	displayModel: bookDisplayReducer
});















