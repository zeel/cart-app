import constants from 'constants/constants';
import update from 'react-addons-update';

function common(state = {
    viewType: constants.GRID
}, action) {
    switch (action.type) {
        case constants.SET_VIEWTYPE:
            return update(state, {
                 $merge : {viewType: action.viewType}
            });
            break;
        case constants.SET_FILTER_TEXT:
            return update(state, { $merge : 
                {searchText : action.text}
            });
            break;
        default:
            return state;
    }
}
export default common;