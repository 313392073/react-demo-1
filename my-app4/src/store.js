/**
 * Created by Administrator on 2017/7/20.
 */

import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';
import {thunk} from './middleWare';


export default createStore(Reducer,applyMiddleware(thunk));
