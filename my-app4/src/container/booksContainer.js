/**
 * Created by Administrator on 2017/7/21.
 */

import {connect} from 'react-redux';
import Books from '../components/books'

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps,null)(Books);