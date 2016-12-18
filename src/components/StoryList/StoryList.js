import React, {Component} from 'react';
import StoryItem from 'components/StoryItem';
import cx from 'classnames';
import constants from 'constants/constants';
import './_storyList.css';

class StoryList extends Component{

	render(){
		const props = this.props,
		viewType = props.viewType,
		isGrid = (viewType === constants.GRID);

		return (<div className={cx({"grid-container" : isGrid, "list-container" : !isGrid})}>
					{props.stories.map((item) => {
						const index = item.id;
						return <StoryItem key={index} item={item} viewType={viewType} deleteItem={props.deleteStory.bind(null, index)} editItem={props.editStory.bind(null, index)} updateItem={props.updateStory.bind(null, index)}/>
					})}
				</div>);
	}
}
export default StoryList;