import React from 'react';
import { connect } from 'react-redux';


import { getArticles } from '../actions/articles';
import { getArticleData } from '../reducers/articles.reducer';


const ArticlePage = React.createClass({
    componentDidMount: function () {
        this.props.getArticles();
    },
    render() {
        if (this.props.article) {
            return (
                <div className="columns">
                    <div className="column is-10 is-offset-1 is-success">
                        <h1 className='is-large'><strong>{this.props.article.title}</strong></h1>
                        <p>{this.props.article.body}</p>
                        <h1><strong>{'By: ' + this.props.article.created_by}</strong></h1>
                        <h1><strong>{'Comments: ' + this.props.article.comments}</strong></h1>
                        <h1><strong>{'Votes: ' + this.props.article.votes}</strong></h1>
                    </div>
                </div>
            );
        } else return <p>Loading...</p>;
    }
});


function mapDispatchToProps(dispatch) {
    return {
        getArticles: () => {
            dispatch(getArticles());
        }
    };
}

function mapStateToProps(state, props) {
    return {
        article: getArticleData(state, props.params.article)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);