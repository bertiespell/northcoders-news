import * as actions from '../src/actions/topics';
import * as types from '../src/types/types';
import topicsReducer from '../src/reducers/topics.reducer';
import { expect } from 'chai';

describe('topics.reducer', () => {
    const initialState = {
        fetching: false,
        byID: [],
        error: null
    };
    describe('VOTE_TOPICS_REQUEST', function () {
        it('should not modify inital state', function () {
            const action = actions.fetchTopicsRequest();
            const newState = topicsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update loading to true', function () {
            const initialState = {
                fetching: false,
                error: null
            };
            const action = actions.fetchTopicsRequest();
            const expectedState = {
                fetching: true,
                error: null
            };
            expect(topicsReducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('VOTE_TOPICS_SUCCESS', function () {
        it('should not modify inital state', function () {
            const action = actions.fetchTopicsSuccess(['football', 'coding', 'cooking']);
            const newState = topicsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('should update loading to true', function () {
            const initialState = {
                byID: [],
                fetching: true,
                error: null
            };
            const action = actions.fetchTopicsSuccess({ data: { topics: ['hello'] } });
            const expectedState = {
                byID: { topics: ['hello'] },
                fetching: false,
                error: null
            };
            expect(topicsReducer(initialState, action)).to.eql(expectedState);
        });
    });
    it('handles action FETCH_TOPICS_ERROR correctly', () => {
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
        const action = actions.fetchTopicsError('something went wrong');
        expect(topicsReducer(initialState, action)).to.eql(expectedState);
    });
});