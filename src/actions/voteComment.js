import * as types from '../types/types';
import axios from 'axios';
import { ROOT } from '../../config/config';

export function voteComment (id, vote) {
  return function (dispatch) {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${id}?vote=${vote}`)
      .then(() => {
        dispatch(voteCommentSuccess(id, vote));      })
      .catch((error) => {
        dispatch(voteCommentError(error.message));
      });
  };
}

export function voteCommentRequest () {
  return {type: types.VOTE_COMMENTS_REQUEST};
}

export function voteCommentSuccess (comment_id, vote) {
  return {
    type: types.VOTE_COMMENTS_SUCCESS,
    comment_id, 
    vote
  };  
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENTS_ERROR,
    error
  };
}