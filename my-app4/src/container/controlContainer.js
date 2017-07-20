/**
 * Created by Administrator on 2017/7/20.
 */

import { connect } from 'react-redux'
import Control from '../components/control';

const mapStatesToProps = state => ({
	topic: state.topic,
	displayMode: state.displayMode
});

export default connect(
	mapStatesToProps,
	null
)(Control);