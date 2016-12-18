import constants from '../constants/constants';
import update from 'react-addons-update';
/**
 * returns updated list
 * @param list
 * @param item
 * @param index
 */
function getReplacedItemInList(list, item, index) {
    return update(list, {
        $splice: [
            [index, 1, item]
        ]
    });
}
/**
 * perform updates on that index of array
 * @param list
 * @param updates
 * @param index
 * @returns {*}
 */
function getUpdatedList(list, updates, index) {
    return getReplacedItemInList(list, Object.assign({}, list[index], updates), index);
}

function stories(state = [], action) {
    let {
        id
    } = action,
    index = state.findIndex(item => item.id===id);
    switch (action.type) {
        case constants.CREATE:
            return update(state, {
                $unshift: [{
                    id : action.id,
                    isNew : true,
                    isEdit : true,
                    title: '',
                    //hardcoded
                    imgUrl: 'http://www.w3schools.com/css/img_fjords.jpg',
                    description: ''
                }]
            });
            break;
        case constants.EDIT:
            return getUpdatedList(state, {
                isEdit: true
            }, index);
        case constants.UPDATE:
            return getUpdatedList(state, action.updates, index);
        case constants.DELETE:
            return update(state, {
                $splice: [
                    [index, 1]
                ]
            });
        default:
            return state;
    }
}
export default stories;