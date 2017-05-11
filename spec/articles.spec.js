import * as actions from '../src/actions/articles';
import articlesReducer from '../src/reducers/articles.reducer';
import { expect } from 'chai';

describe('articles.reducer', () => {
    const initialState = {
        byID: {},
        fetching: false,
        error: null
    };
    describe('FETCH_ARTICLE_REQUEST', () => {
        it('it should not modify the initialState', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update loading to true', function () {
            const initialState = {
                fetching: false,
                error: null
            };
            const action = actions.fetchArticlesRequest();
            const expectedState = {
                fetching: true,
                error: null
            };
            expect(articlesReducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('FETCH_ARTICLE_SUCCESS', () => {
        it('it should not modify the initialState', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update state', function () {
            const initialState = {
                byID: [],
                fetching: true,
                error: null
            };
            const action = actions.fetchArticlesSuccess([{ _id: '59144842be6a6c2e5caf17f7', body: 'hello' }]);
            const expectedState = {
                byID: {
                    '59144842be6a6c2e5caf17f7': {
                        '_id': '59144842be6a6c2e5caf17f7',
                        'body': 'hello'
                    }
                },
                fetching: false,
                error: null
            };
            expect(articlesReducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('FETCH_ARTICLE_ERROR', () => {
        it('it should not modify the initialState', () => {
            const action = actions.fetchArticlesError();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('and handles action FETCH_ARTICLE_ERROR correctly', () => {
            const initialState = {
                fetching: false,
                byID: [],
                error: null
            };
            const expectedState = {
                byID: [],
                fetching: false,
                error: 'something went wrong'
            };
            const action = actions.fetchArticlesError('something went wrong');
            expect(articlesReducer(initialState, action)).to.eql(expectedState);
        });
    });
});
