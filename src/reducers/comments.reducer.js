import * as types from '../types/types';

// TODO: NEED TO ADD IN THE VOTE COMMENTS REDUCER, PERHAPS TO HERE

const initialState = {
    byID: {},
    fetching: false,
    error: null,
    commentText: ''
};

function commentsReducer(prevState = initialState, action) {
    switch (action.type) {
        case types.VOTE_COMMENTS_SUCCESS: {
            let newState = Object.assign({}, prevState);
            let myState = Object.assign({}, newState.byID);
            if (action.vote === 'up') {
                myState[action.comment_id].votes++;
            }
            if (action.vote === 'down') {
                myState[action.comment_id].votes--;   
            }
            return newState;
        }
        case types.FETCH_COMMENTS_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        // TODO: using the same state update as FETCH COMMENTS (because the POST will now be on the server)
        case types.POST_COMMENT_SUCCESS:
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

function normaliseData(arr) {
    return arr.reduce(function (acc, elem) {
        acc[elem._id] = elem;
        return acc;
    }, {});
}

export function getTopComments(state, num) {
    return Object.keys(state.comments.byID).reduce(function (acc, id) {
        return acc.concat(state.comments.byID[id]);
    }, []).sort(function (a, b) {
        return b.comments - a.comments;
    }).slice(0, num);
}

export default commentsReducer;