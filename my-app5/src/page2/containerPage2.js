import Page2 from './page2';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return{
        page1Topic: state.page1Topic
    }
};

export default connect(mapStateToProps,null)(Page2);