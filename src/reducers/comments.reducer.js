import * as types from '../types/types';

// TODO: NEED TO ADD IN THE VOTE COMMENTS REDUCER, PERHAPS TO HERE

const initialState = {
    byID: {},
    fetching: false,
    error: null
};

function commentsReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        case types.FETCH_COMMENTS_SUCCESS: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                byID: normaliseData(action.data)
            });
            return newState;
        }
        case types.FETCH_COMMENTS_ERROR: {
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

function normaliseData (arr) {
    return arr.reduce(function (acc, elem) {
        acc[elem._id] = elem;
        return acc;
    }, {});
}

export function getTopComments (state, num) {
    return Object.keys(state.comments.byID).reduce(function (acc, id) {
        return acc.concat(state.comments.byID[id]);
    }, []).sort(function (a, b) {
        return b.comments - a.comments;
    }).slice(0, num);
}

export default commentsReducer;