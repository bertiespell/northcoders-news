import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { getArticles } from '../actions/articles';
import { getTopArticles } from '../reducers/articles.reducer';
import ArticleList from './ArticleList';

const FrontPage = React.createClass({
    componentDidMount() {
        this.props.getArticles();
    },
    render() {
        return (
            <div id='FrontPage'>
                <ArticleList articles={this.props.articles} />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        articles: getTopArticles(state, 10)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getArticles: () => {
            dispatch(getArticles());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);