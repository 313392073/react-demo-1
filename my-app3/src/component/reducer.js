/**
 * Created by Administrator on 2017/7/12.
 */


const reducer = (state = 'GO',action) =>{
	switch(action.type){
		case 'GO':
			state = 'GO';
			break;
		case 'STOP':
			state = 'STOP';
			break;
		case 'CAUTION':
			state = 'CAUTION';
			break;
		default:
			state = "GO";
	}
	return state;
};

export {reducer}