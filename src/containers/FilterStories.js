import FilterStories from 'components/FilterStories';
import {
	connect
} from 'react-redux';

import actions from '../actions/';

const mapDispatchToProps = (dispatch) => ({
	onChange: function (text){
		dispatch(actions.setFilterText(text));
	},
});
export default connect((state) => ({value : state.common.searchText || ''}), mapDispatchToProps)(FilterStories);