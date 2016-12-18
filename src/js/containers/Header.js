import Header from '../components/Header';
import {
	connect
} from 'react-redux';
import actions from '../actions/';

const mapStateToProps = (state) => ({
		viewType: state.common.viewType,
	}),
	mapDispatchToProps = (dispatch) => ({
		onChangeViewType: (viewType) => dispatch(actions.setViewType(viewType)),
		onAddStory: () => dispatch(actions.addStory()),
	});
export default connect(mapStateToProps, mapDispatchToProps)(Header);