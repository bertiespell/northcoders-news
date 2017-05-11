import * as fetchActions from '../src/actions/comments';
import * as deleteActions from '../src/actions/deleteComment';
import * as postActions from '../src/actions/postComment';
import * as voteActions from '../src/actions/voteComment';

import commentsReducer from '../src/reducers/comments.reducer';
import { expect } from 'chai';

describe('comments.reducer', () => {
    const initialState = {
        byID: {},
        fetching: false,
        error: null,
        commentText: ''
    };

    describe('FETCH_COMMENTS_REQUEST', () => {
        it('it should not modify the initialState', () => {
            const action = fetchActions.fetchCommentsRequest('59144842be6a6c2e5caf17f7');
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update state', function () {
            const action = fetchActions.fetchCommentsRequest('59144875be6a6c2e5caf190f');
            const expectedState = {
                byID: {},
                commentText: '',
                fetching: true,
                error: null
            };
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('FETCH_COMMENTS_SUCCESS', () => {
        const data = {
            _id: '59144875be6a6c2e5caf190f',
            belongs_to: '59144848be6a6c2e5caf1818',
            body: 'Ci...',
            created_at: 1494284353000,
            created_by: 'tickle122',
            votes: 10
        };
        it('it should not modify the initialState', () => {
            const action = fetchActions.fetchCommentsSuccess([data]);
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('it should update the state with response data', () => {
            const action = fetchActions.fetchCommentsSuccess([data]);
            const expectedState = {
                byID: {
                    '59144875be6a6c2e5caf190f': data
                },
                commentText: '',
                fetching: false,
                error: null
            };
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('FETCH_COMMENTS_ERROR', () => {
        it('it should not modify the initialState', () => {
            const action = fetchActions.fetchCommentsError('oops');
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update state', function () {
            const initialState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: false,
                error: 'oops',
                commentText: ''
            };
            const action = fetchActions.fetchCommentsError('oops');
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('VOTE_COMMENT_REQUEST', () => {
        it('it should not modify the initialState', () => {
            const action = voteActions.voteCommentRequest();
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('handles action VOTE_COMMENT_REQUEST correctly and updates state', () => {
            const initialState = {
                byID: {},
                fetching: false,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const action = voteActions.voteCommentRequest();
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('VOTE_COMMENTS_SUCCESS', () => {
        const initialState = {
            byID: {
                '59144875be6a6c2e5caf190f': {
                    _id: '59144842be6a6c2e5caf17f7',
                    belongs_to: 'football',
                    body: '...',
                    comments: 5,
                    created_by: 'tickle122',
                    title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                    votes: 6
                }
            },
            fetching: true,
            error: null,
            commentText: ''
        };
        it('it should not modify the initial state and update state with data', () => {
            const expectedState = {
                byID: {
                    '59144875be6a6c2e5caf190f': {
                        _id: '59144842be6a6c2e5caf17f7',
                        belongs_to: 'football',
                        body: '...',
                        comments: 5,
                        created_by: 'tickle122',
                        title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                        votes: 7
                    }
                },
                fetching: true,
                error: null,
                commentText: ''
            };
            const res = { data: { updated: {} } };
            const comment_id = '59144875be6a6c2e5caf190f';
            const action = voteActions.voteCommentSuccess(comment_id, 'up', res);
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState).to.eql(expectedState);
        });
    });

    describe('VOTE_COMMENTS_ERROR', () => {
        it('it should not modify the initialState', () => {
            const action = voteActions.voteCommentError();
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('handles VOTE_COMMENTS_ERROR correctly and updates state', function () {
            const initialState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: false,
                error: 'oops',
                commentText: ''
            };
            const action = voteActions.voteCommentError('oops');
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('POST_COMMENT_REQUEST', () => {
        const initialState = {
            byID: {},
            fetching: false,
            error: null,
            commentText: ''
        };
        const expectedState = {
            byID: {},
            fetching: true,
            error: null,
            commentText: ''
        };
        it('it should not modify the initialState', () => {
            expect(expectedState).to.not.equal(initialState);
        });
        it('should update fetching', () => {
            const action = postActions.postCommentRequest();
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('POST_COMMENT_SUCCESS', () => {
        it('it should not modify the initialState', () => {
            const responseContent = {
                _id: '59149068790a690011fc5f29',
                belongs_to: '59144848be6a6c2e5caf1818',
                body: 'blaa',
                created_at: 1494509587563,
                created_by: 'northcoder',
                votes: 0
            };
            const initialState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {
                    '59149068790a690011fc5f29': responseContent
                },
                fetching: false,
                error: null,
                commentText: ''
            };
            const articleID = '59144848be6a6c2e5caf1818';
            const comment = 'blaa';
            const response = { data: { comment: [responseContent] } };
            const action = postActions.postCommentSuccess(comment, articleID, response);
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('POST_COMMENT_ERROR', () => {
        it('it should not modify the initialState', () => {
            const initialState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: false,
                error: 'oops',
                commentText: ''
            };
            const action = postActions.postCommentError('oops');
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('DELETE_COMMENT_REQUEST', () => {
        it('handles action VOTE_COMMENT_REQUEST correctly and updates state', () => {
            const initialState = {
                byID: {},
                fetching: false,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const action = deleteActions.deleteCommentRequest();
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('DELETE_COMMENT_SUCCESS', () => {
        it('it should not modify the initialState and updates state', () => {
            const initialState = {
                byID: {
                    '59144875be6a6c2e5caf190f': {
                        _id: '59144842be6a6c2e5caf17f7',
                        belongs_to: 'football',
                        body: '...',
                        comments: 5,
                        created_by: 'tickle122',
                        title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                        votes: 6
                    }
                },
                fetching: false,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: false,
                error: null,
                commentText: ''
            };
            const action = deleteActions.deleteCommentSuccess('59144875be6a6c2e5caf190f');
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });

    describe('DELETE_COMMENT_ERROR', () => {
        it('it should not modify the initialState and updates state', () => {
            const initialState = {
                byID: {},
                fetching: true,
                error: null,
                commentText: ''
            };
            const expectedState = {
                byID: {},
                fetching: false,
                error: 'oops',
                commentText: ''
            };
            const action = deleteActions.deleteCommentError('oops');
            expect(commentsReducer(initialState, action)).to.eql(expectedState);
        });
    });
});
