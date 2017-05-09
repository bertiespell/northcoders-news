import React from 'react';
import { connect } from 'react-redux';

import Comments from './Comments';
import { getArticles } from '../actions/articles';
import { getArticleData } from '../reducers/articles.reducer';

const ArticlePage = React.createClass({
    componentDidMount: function () {
        this.props.getArticles();
    },
    render () {
        if (this.props.article) {
            return (
                <div className="columns">
                    <div className="column is-10 is-offset-1 is-success" id='articlePage'>
                        <div className="content">
                            <h2 className="title is-2">{this.props.article.title}</h2>
                            <blockquote><p>{this.props.article.body}</p></blockquote>
                            <p className="title is-5 is-spaced" id='author'><strong>{'By: ' + this.props.article.created_by}</strong></p>
                            <p>{'Votes: ' + this.props.article.votes}</p>
                            {'Comments: ' + this.props.article.comments}
                        </div>
                        <Comments id={this.props.params.article} />
                    </div>
                </div>
            );
        } else {
            return (
                <div><i className="fa fa-spinner fa-spin fa-6x fa-fw"></i>
                    <span className="sr-only">Loading...</span></div>
            );
        }
    }
});

function mapDispatchToProps (dispatch) {
    return {
        getArticles: () => {
            dispatch(getArticles());
        }
    };
}

function mapStateToProps (state, props) {
    return {
        article: getArticleData(state, props.params.article)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);