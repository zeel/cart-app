import {combineReducers} from 'redux';
import common from './common';
import stories from './stories';


export default combineReducers({
    stories,
    common
});