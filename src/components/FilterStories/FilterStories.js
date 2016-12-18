import React, {Component} from 'react';
import Icon from '../Icon';

import search from 'icons/search.svg';

import './_filterStories.css';

class FilterStories extends Component{
	
	onInputChange = (e) => {
		this.props.onChange(e.target.value);
	};

	render(){
		return <div className="search-container">
		  <input type="text" className="search-input" placeholder='Search' onChange={this.onInputChange} value={this.props.value}/>
		  <Icon name={search} className="search-icon"/>
		</div>
	}
}
export default FilterStories;