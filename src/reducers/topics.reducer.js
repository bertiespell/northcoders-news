import * as types from '../types/types';

const initialState = {
    fetching: false,
    byID: [],
    error: null
};

function topicsReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_TOPICS_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        case types.FETCH_TOPICS_SUCCESS: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                byID: action.data
            });
            return newState;
        }
        case types.FETCH_TOPICS_ERROR: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                error: action.data
            });
            return newState;
        }
        default: {
            return prevState;
        }
    }
}

export default topicsReducer;