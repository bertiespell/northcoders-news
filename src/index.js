import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
require('./css/bulma.css');
import FrontPage from './components/FrontPage';
import TopicPage from './components/TopicPage';
import ArticlePage from './components/ArticlePage';
import NotFound from './components/NotFound';

ReactDOM.render(<Router history={browserHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={FrontPage} />
        <Route path='/:topic' component={TopicPage}/>
        <Route path='/article/:article' component={ArticlePage} />
        <Route path='*' component={NotFound}/>
    </Route>
</Router>, document.getElementById('app'));