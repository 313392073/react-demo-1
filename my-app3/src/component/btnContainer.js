/**
 * Created by Administrator on 2017/7/13.
 */

import {connect} from 'react-redux';
import {cautionAction, stopAction, goAction} from './action';
import CtrBtn from './btn';

const mapStateToProps = state => {
	return {
		lightState: state
	}
};

const mapDispatchToProps = dispatch => {
	return {
		go: () => {dispatch(goAction)},
		stop: () => {dispatch(stopAction)},
		caution: () => {dispatch(cautionAction)}
	}
};

export const BtnContainer = connect(mapStateToProps,mapDispatchToProps)(CtrBtn);
