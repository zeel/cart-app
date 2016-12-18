 import React, {Component} from 'react';
import Icon from '../Icon';

import grid from 'icons/grid.svg';
import add from 'icons/add.svg';
import hamburger from 'icons/hamburger.svg';
import Constants from 'constants/constants';

import './_header.css';

class Header extends Component{

	render(){
		const props = this.props;

		return <div className="full-width clearfix header">
			<div className="lfloat header-title">ROPOSO</div>	
			<div className="rfloat">
				<Icon onClick={props.onAddStory} name={add} className="scp header-icon"/>
				<Icon onClick={props.onChangeViewType.bind(null, Constants.LIST)} name={hamburger} className="scp header-icon"/>
				<Icon onClick={props.onChangeViewType.bind(null, Constants.GRID)} name={grid} className="scp header-icon"/>
			</div>
		</div>
	}
}
export default Header;