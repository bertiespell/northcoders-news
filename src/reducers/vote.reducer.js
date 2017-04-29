import * as types from '../types/types';

const initialState = {
    byID: {},
    loading: false,
    error: ''
};

function voteReducer (prevState = initialState, action) {
    const newState = Object.assign({}, prevState);
    if (action.type === types.VOTE_ARTICLE_REQUEST) {
        newState.loading = true;

    }
    if (action.type === types.VOTE_ARTICLE_SUCCESS) {
        newState.byID = action.data;
        newState.loading = false;
    }
     if (action.type === types.VOTE_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }
  return newState;
}

export default voteReducer;