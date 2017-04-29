import * as types from '../types/types';

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
            console.log('myState', myState);
            console.log("*************", myState[action.comment_id]); // TODO: this is undefined
            if (action.vote === 'up') {
                myState[action.comment_id].votes++;
            }
            if (action.vote === 'down') {
                myState[action.comment_id].votes--;
            }
            newState.byID = myState;
            return newState;
        }
        case types.FETCH_COMMENTS_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        case types.POST_COMMENT_SUCCESS: {
            const newState = Object.assign({}, prevState);
            const newbyID = Object.assign({}, newState.byID);
            newbyID[action.response.data.comment._id] = action.response.data.comment;
            newState.byID = newbyID;
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
        case types.DELETE_COMMENT_REQUEST: {
            const newState = Object.assign({}, prevState);
            newState.loading = true;
            return newState;
        }
        case types.DELETE_COMMENT_SUCCESS: {
            const newState = Object.assign({}, prevState);
            const newComments = Object.assign({}, newState.byID);
            delete newComments[action.comment_id];
            newState.byID = newComments;
            newState.fetching = false;
            return newState;
        }
        case types.DELETE_COMMENT_ERROR: {
            const newState = Object.assign({}, prevState);
            newState.error = action.err;
            newState.loading = false;
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
        return b.votes - a.votes;
    }).slice(0, num);
}

export default commentsReducer;