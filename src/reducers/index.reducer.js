import { combineReducers } from 'redux';

import voteReducer from './vote.reducer';
import topicsReducer from './topics.reducer';
import articlesReducer from './articles.reducer';

export default combineReducers({
    topics: topicsReducer,
    articles: articlesReducer,
    vote: voteReducer
});
