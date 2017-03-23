import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'

import voteReducer from './vote.reducer';
import topicsReducer from './topics.reducer';
import articlesReducer from './articles.reducer';
import commentsReducer from './comments.reducer';

export default combineReducers({
    topics: topicsReducer,
    articles: articlesReducer,
    vote: voteReducer,
    comments: commentsReducer,
    form: formReducer
});
