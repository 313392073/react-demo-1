/**
 * Created by Administrator on 2017/7/25.
 */

const defaults = {
	currentPage: "page1"
};

export const currentPageReducer = (state = defaults.currentPage, action) => {
	switch (action.type){
		case 'page1':
			return action.pageName;
		default:
			return "home";
	}
};