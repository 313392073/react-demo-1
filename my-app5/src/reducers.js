/**
 * Created by Administrator on 2017/7/25.
 */

import {combineReducers} from 'redux'
import {currentPageReducer} from './app/reducerApp';

export default combineReducers({
	currentPage: currentPageReducer
});