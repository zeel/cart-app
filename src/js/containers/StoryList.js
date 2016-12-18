import StoryList from '../components/StoryList';
import {
	connect
} from 'react-redux';
import actions from '../actions/';

const getFilteredStories = (stories, searchText = '') => {
		const processedSearchText = searchText.toLowerCase();
		return stories.filter((story) => story.title.toLowerCase().indexOf(processedSearchText) > -1 || story.description.toLowerCase().indexOf(processedSearchText) > -1);
	},
	mapStateToProps = (state) => ({
		stories: getFilteredStories(state.stories, state.common.searchText),
		viewType: state.common.viewType
	}),
	mapDispatchToProps = (dispatch) => ({
		deleteStory: (index) => {
			dispatch(actions.deleteStory(index));
		},
		editStory: (index) => {
			dispatch(actions.editStory(index));
		},
		updateStory:(index, updates) => {
			dispatch(actions.updateStory(index, updates));
		}
	});
export default connect(mapStateToProps, mapDispatchToProps)(StoryList);