import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';

export function voteArticle(id, vote) {
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios.put(`${ROOT}/articles/${id}?vote=${vote}`)
            .then((res) => {
                dispatch(voteArticleSuccess(res.data));
            })
            .catch((error) => {
                dispatch(voteArticleError(error.message));
            });
    };
}

export function voteArticleRequest() {
    return {
        type: types.VOTE_ARTICLE_REQUEST
    };
}

export function voteArticleSuccess(data) {
    return {
        type: types.VOTE_ARTICLE_SUCCESS,
        data
    };
}

export function voteArticleError(data) {
    return {
        type: types.VOTE_ARTICLE_ERROR,
        data
    };
}