import * as actions from '../src/actions/vote';
import voteReducer from '../src/reducers/vote.reducer';
import { expect } from 'chai';

describe('vote.reducer', () => {
    const initialState = {
        byID: {},
        loading: false,
        error: ''
    };
    describe('VOTE_ARTICLE_REQUEST', function () {
        it('should not modify inital state', function () {
            const action = actions.voteArticleRequest();
            const newState = voteReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update loading to true', function () {
            const initialState = {
                loading: false,
                error: null
            };
            const action = actions.voteArticleRequest();
            const expectedState = {
                loading: true,
                error: null
            };
            expect(voteReducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('VOTE_ARTICLE_SUCCESS', function () {
        const articleId = {
                _id: '59144848be6a6c2e5caf1818',
                belongs_to: 'coding',
                body: 'When...',
                created_by: 'weegembump',
                title: 'An Introduction to JavaScript Object Notation (JSON) in JavaScript and .NET',
                votes: 11
            };
        it('should not modify inital state', function () {
            const action = actions.voteArticleSuccess(articleId);
            const newState = voteReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update loading to false', function () {
            const articleId = {
                _id: '59144848be6a6c2e5caf1818',
                belongs_to: 'coding',
                body: 'When...',
                created_by: 'weegembump',
                title: 'An Introduction to JavaScript Object Notation (JSON) in JavaScript and .NET',
                votes: 11
            };
            const initialState = {
                byID: [],
                loading: true,
                error: null
            };
            const action = actions.voteArticleSuccess(articleId);
            const expectedState = {
                byID: articleId,
                loading: false,
                error: null
            };
            expect(voteReducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('VOTE_ARTICLE_ERROR', function () {
        it('should not modify inital state', function () {
            const action = actions.voteArticleError('oops');
            const newState = voteReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('handles action VOTE_ARTICLE_ERROR correctly', () => {
            const initialState = {
                loading: true,
                byID: {},
                error: null
            };
            const expectedState = {
                byID: {},
                loading: false,
                error: 'oops'
            };
            const action = actions.voteArticleError('oops');
            expect(voteReducer(initialState, action)).to.eql(expectedState);
        });
    });
});