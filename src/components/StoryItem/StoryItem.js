import React, {
	Component,
	PropTypes
} from 'react';
import Icon from '../Icon';
import cx from 'classnames';

import constants from 'constants/constants';

import './_storyItem.css';
import editIcon from 'icons/edit.svg';
import deleteIcon from 'icons/delete.svg';

const ActionComponent = ({className, deleteItem, editItem}) => (<div className={cx("action-container", className)}>
				<Icon name={editIcon} className="scp action-icon" onClick={editItem}/>
				<Icon name={deleteIcon} className="scp action-icon" onClick={deleteItem}/>
			</div>),

	ListItem = ({item, deleteItem, editItem, updateItem}) => (<div className = "item list-item clearfix full-width" >
			<img src = {item.imgUrl} className="list-image lfloat"/>
			<ActionComponent className="rfloat" deleteItem={deleteItem} editItem={editItem}/>
			<div className="list-details-container"><DetailComponent item={item} className="list-details" onSubmit={updateItem}/>
			<a href="#" className="see-more-link">SEE MORE &gt;&gt;</a></div>
			</div >), 

	GridItem = ({item, deleteItem, editItem, updateItem}) => (<div className = "item grid-item" >
			<img src = {item.imgUrl} className="grid-image"/>
			<DetailComponent item={item} className="grid-details" onSubmit={updateItem}/>
			<ActionComponent className="rfloat" deleteItem={deleteItem} editItem={editItem}/>
			</div>),

	viewTypeToComponentMap = {
		[constants.GRID]: GridItem,
		[constants.LIST]: ListItem,
	};

class DetailComponent extends Component{

	constructor(props){
		super(props);
		this.state = {title : props.item.title, description : props.item.description};
	}

	onSubmit = () => {
		this.props.onSubmit(Object.assign({}, this.state, {isEdit : false, isNew : false}));
	}

	onChangeDetail = (key, e) =>{
		this.setState({[key] : e.target.value});
	}

	render(){
		const that = this,
		{className, item} = that.props,
		isNew = item.isNew,
		isEdit = item.isEdit,
		state = that.state;

		return (<div className={className}>
				{item.isEdit ? (<div>
						<input placeholder="title" value={state.title} onChange={that.onChangeDetail.bind(that, 'title')}/>
						{item.isNew ?  <input placeholder="description" value={state.description} onChange={that.onChangeDetail.bind(that, 'description')}/> : null}
						<input type="button" onClick={that.onSubmit} value="Submit" />
					</div>) : (<div>
						<h2 className="title">{item.title}</h2>
						<p className="description">{item.description}</p>
						</div>)}
			</div>);
	}
};

class StoryItem extends Component {

	static propTypes = {
		viewType: PropTypes.string
	};

	render() {
		const props = this.props,
			viewType = props.viewType;

		return viewTypeToComponentMap[viewType](props);
	}
}
export default StoryItem;