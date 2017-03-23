import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';

export function postComment (comment, articleID) {
    return function (dispatch) {
        dispatch(postCommentRequest(comment));
        axios
        .post(`${ROOT}/articles/${articleID}/comments`, {
            'comment': comment
        })
        .then(() => {
            dispatch(postCommentSuccess(comment, articleID));
        })
        .catch((error) => {
            dispatch(postCommentError(error.message));
        });
    };
}

export function postCommentRequest () {
    return {
        type: types.POST_COMMENT_REQUEST
    };
}

export function postCommentSuccess (comment, articleID) {
    return {
        type: types.POST_COMMENT_SUCCESS,
        comment,
        articleID
    };
}

export function postCommentError (error) {
    return {
        type: types.POST_COMMENT_ERROR,
        error
    };
}