import * as fetchActions from '../src/actions/comments';
import * as deleteActions from '../src/actions/deleteComment';
import * as postActions from '../src/actions/postComment';
import * as voteActions from '../src/actions/voteComment';

import * as types from '../src/types/types';
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
        it('it should not modify the initialState', () => {
            const data = {
                _id: '59144875be6a6c2e5caf190f',
                belongs_to: '59144848be6a6c2e5caf1818',
                body: 'Ci...',
                created_at: 1494284353000,
                created_by: 'tickle122',
                votes: 10
            };
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
        xit('should update state', function () {
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
            const action = fetchActions.fetchCommentsError({ message: 'oops' });
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
        it('it should not modify the initial State', () => {
            const res = { data: { updated: {} } };
            const comment_id = '59144875be6a6c2e5caf190f';
            const action = voteActions.voteCommentSuccess(comment_id, 'up', res);
            const newState = commentsReducer(initialState, action);
            console.log(initialState, newState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update state', function () {
            it('handles action VOTE_COMMENT_REQUEST correctly', () => {
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
                const action = voteActions.voteCommentRequest;
                expect(commentsReducer(initialState, action)).to.eql(expectedState);
            });
        });
        describe('POST_COMMENT_SUCCESS', () => {
            it('it should not modify the initialState', () => {
                it('and handles action FETCH_ARTICLE_ERROR correctly', () => {
                    // const initialState = {
                    //     fetching: false,
                    //     byID: [],
                    //     error: null
                    // };
                    // const expectedState = {
                    //     byID: [],
                    //     fetching: false,
                    //     error: 'something went wrong'
                    // };
                    // const action = actions.fetchTopicsError('something went wrong');
                    // expect(commentsReducer(initialState, action)).to.eql(expectedState);
                });
            });
        });
        describe('DELETE_COMMENT_REQUEST', () => {
            it('it should not modify the initialState', () => {

            });
        });


        describe('DELETE_COMMENT_SUCCESS', () => {
            it('it should not modify the initialState', () => {

            });
        });


        describe('DELETE_COMMENT_ERROR', () => {
            it('it should not modify the initialState', () => {

            });
        });

    });
});