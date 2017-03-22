import * as types from '../types/types';

const initialState = {
    byID: {},
    fetching: false,
    error: null
};

function articlesReducer (prevState = initialState, action) {
    switch (action.type) {
        case types.FETCH_ARTICLES_REQUEST: {
            const newState = Object.assign({}, prevState, {
                fetching: true
            });
            return newState;
        }
        case types.FETCH_ARTICLES_SUCCESS: {
            const newState = Object.assign({}, prevState, {
                fetching: false,
                byID: normaliseData(action.data)
            });
            return newState;
        }
        case types.FETCH_ARTICLES_ERROR: {
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

export function getTopArticles (state, num) {
    return Object.keys(state.articles.byID).reduce(function (acc, id) {
        return acc.concat(state.articles.byID[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

function normaliseData (arr) {
    return arr.reduce(function (acc, elem) {
        acc[elem._id] = elem;
        return acc;
    }, {});
}

export function getArticleData (state, id) {
  return state.articles.byID[id];
}

export default articlesReducer;