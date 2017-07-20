/**
 * Created by Administrator on 2017/7/20.
 */


//中间件让reducer能处理非对象的action
export const thunk = store => next => action => {
	if (action.fn && typeof action.fn === 'function') {
		action.fn(store.dispatch, store.getState()); // invoke the action
	} else {
		return next(action); // dispatch normally
	}
};