import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import './css/bulma.css';
//import './css/font-awesome.css';
import './css/index.css';

import App from './components/App';
import FrontPage from './components/FrontPage';
import TopicPage from './components/TopicPage';
import ArticlePage from './components/ArticlePage';
import NotFound from './components/NotFound';
import reducer from './reducers/index.reducer';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={FrontPage} />
            <Route path='/:topic' component={TopicPage} />
            <Route path='/article/:article' component={ArticlePage} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
</Provider>, document.getElementById('app'));