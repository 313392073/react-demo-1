/**
 * Created by Administrator on 2017/7/20.
 */

import { connect } from 'react-redux';
import { fetchBooks, setTopic } from '../actions';
import TopicSelect from '../components/topicSelect';

const mapStateToProps = state => ({
	topic: state.topic
});

const mapDispatchToProps = dispatch => ({
	setTopic: topic =>{
		dispatch(setTopic(topic));
	},
	fetchTopic: topic => {
		dispatch(setTopic(topic));
		dispatch(fetchBooks());
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(TopicSelect);