/**
 * Created by Administrator on 2017/7/13.
 */

import {connect} from 'react-redux';
import Light from './light';

const mapStateToProps = state => {
	return {
		goColor:        state ==='GO' ? "green" : "white",
		stopColor:      state === 'STOP' ? "red" : "white",
		cautionColor:   state === 'CAUTION' ? 'yellow' : "white"
	};
};

const mapDispatchToProps = null;

export const LightContainer = connect(mapStateToProps,mapDispatchToProps)(Light);

