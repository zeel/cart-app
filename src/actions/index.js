import constants from 'constants/constants';
let id = -1;
export default {
    addStory: () => {
        return {
            type: constants.CREATE,
            id : ++id,
        };
    },
    editStory: (id) => {
        return {
            type: constants.EDIT,
            id
        };
    },
    UPDATE: (id, text) => {
        return {
            type: constants.UPDATE,
            id,
            text
        };
    },
    deleteStory: (id) => {
        return {
            type: constants.DELETE,
            id
        };
    },

    setViewType : (viewType) => {
        return {
            type: constants.SET_VIEWTYPE,
            viewType
        };
    },

    setFilterText: (text) => {
        return {
            type: constants.SET_FILTER_TEXT,
            text
        };
    },

    updateStory: (id, updates) => {
        return {
            type: constants.UPDATE,
            id,
            updates
        };
    },
};