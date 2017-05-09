import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';

export function getTopics () {
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        axios
            .get(`${ROOT}/topics`)
            .then(response => {
                dispatch(fetchTopicsSuccess(response));
            })
            .catch(error => {
                dispatch(fetchTopicsError(error));
            });
    };
}

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}

export function fetchTopicsSuccess (topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        data: topics.data
    };
}

export function fetchTopicsError (error) {
    return {
        type: types.FETCH_TOPICS_ERROR,
        data: error
    };
}