/**
 * Created by Administrator on 2017/7/25.
 */

import {combineReducers} from 'redux'
import {currentPageReducer} from './app/reducerApp';
import {page1TopicReducer} from './page1/reducerPage1';

export default combineReducers({
	currentPage: currentPageReducer,
    page1Topic: page1TopicReducer
});