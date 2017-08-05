
import Page1 from './page1';
import {connect} from 'react-redux';
import {setTopic} from "./actionPage1"

const mapStateToProps = state => {
    return{
        page1Topic: state.page1Topic
    }
};

const mapDispatchToProps = dispatch => {
    return{
        setTopic: topic => {
            dispatch(setTopic(topic));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Page1);