import * as actions from '../src/actions/articles';
import * as types from '../src/types/types';
import articlesReducer from '../src/reducers/articles.reducer';
import { expect } from 'chai';

describe('articles.reducer', () => {
    const initialState = {
        byID: {},
        fetching: false,
        error: null
    };
    describe('when passed action FETCH_ARTICLE_REQUEST', () => {
        it('it should not modify the initialState', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            console.log(newState.byID);

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
        describe('when passed action FETCH_ARTICLE_SUCCESS', () => {
            it('it should not modify the initialState', () => {
                // let articles;
                // const action = actions.fetchArticlesSuccess(articles);
                const action = actions.fetchArticlesRequest();
                const newState = articlesReducer(initialState, action);

                expect(newState).to.not.equal(initialState);
                console.log(newState.byID);
                // 
            });

            it('should update loading to false', function () {
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

            describe('when passed action FETCH_ARTICLE_ERROR', () => {
                it('it should not modify the initialState', () => {
                    it('handles action FETCH_ARTICLE_ERROR correctly', () => {
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
                        expect(articlesReducer(initialState, action)).to.eql(expectedState);
                    });
                });
            });
        });
    });
});

    // describe('when passed action BUY_PRODUCT', () => {
    //     it('it should not modify the initialState', () => {
    //         const action = actions.buyProduct('A1');
    //         const newState = buyProductReducer(initialState, action);
    //         expect(newState).to.not.equal(initialState);
    //     });


        // it('should return the expected action', () => {
        //     const action = actions.getArticles();
        //     expect(action)
        // });

// describe('handles VOTE_ARTICLES actions', () => {
//        it('handles action VOTE_ARTICLES_REQUESET correctly', () => {
//            const initialState = {
//                loading: false,
//                error: 'whatever'
//            };
//            const action = voteArticleRequest();
//            const expectedState = {
//                loading: true,
//                error: null
//            };
//            expect(reducer(initialState, action)).to.eql(expectedState);

//        });
//        it('handles action VOTE_ARTICLES_SUCCESS correctly', () => {
//            const initialState = {
//                byId: {
//                    1 : {
//                        votes: 2
//                    }
//                },
//                loading: true,
//                error: null
//            };
//            const action = voteArticleSuccess({
//                _id: 1,
//                votes: 3
//            });
//            const expectedState = {
//                byId: {
//                    1 : {
//                        votes: 3
//                    }
//                },
//                loading: false,
//                error: null
//            };
//            expect(reducer(initialState, action)).to.eql(expectedState);
//            expect(initialState).to.not.be.equal(expectedState);
//        });

//    });


// const action = actions.buyProduct('A1');
//         expect(action).to.eql({
//             type: types.BUY_PRODUCT,
//             product_id: 'A1'
//         });