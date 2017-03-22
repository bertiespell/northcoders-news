import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';


export function fetchComments (id) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios.get(`${ROOT}/articles/${id}/comments`)
        .then((res) => {
            dispatch(fetchCommentsSuccess(res.data.comments));
        })
        .catch((error) => {
            dispatch(fetchCommentsError(error.message));
        });        
    };
}

export function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}

export function fetchCommentsSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        data: comments
    };
}

export function fetchCommentsError (error) {
    return {
        type: types.FETCH_COMMENTS_ERROR,
        error
    };
}