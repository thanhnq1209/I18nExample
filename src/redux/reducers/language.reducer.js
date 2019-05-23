import * as types from './../constants/action-types';

var initialState = {
    language: 'vi'
};

var languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_LANGUAGE: {
            return { language: action.language };
        }
        default:
            return state;
    }
};

export default languageReducer;