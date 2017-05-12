import React from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../actions/articles';
import { getTopArticles } from '../reducers/articles.reducer';
import ArticleList from './ArticleList';

const FrontPage = React.createClass({
    componentDidMount () {
        this.props.getArticles();
    },
    render () {
        if (!this.props.fetching) {
            return (
                <div id='FrontPage'>
                    <ArticleList articles={this.props.articles} />
                </div>
            );
        }
        else {
            return (
                <div className="spinner">
                    <i className="fa fa-spinner fa-spin fa-5x fa-fw spinner is-center"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
    }
});

function mapStateToProps (state) {
    return {
        articles: getTopArticles(state, 10),
        fetching: state.articles.fetching
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getArticles: () => {
            dispatch(getArticles());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);