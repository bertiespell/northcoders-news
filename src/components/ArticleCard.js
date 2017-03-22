import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { voteArticle } from '../actions/vote';

const ArticleCard = React.createClass({
    render() {
        return (
            <div className='box'>
                <a onClick={this.props.voteArticle.bind(null, this.props.id, 'up')}><i className="fa fa-caret-up fa-2x" />UP</a>
                <article className='media'>
                    <div className='media-left'>
                        {this.props.votes}
                        <a onClick={this.props.voteArticle.bind(null, this.props.id, 'down')}><i className="fa fa-caret-down fa-2x" />DOWN</a>
                    </div>
                    <div className='media-content'>
                        <div className='content'>
                            <h3 className='title is-3'>
                                <Link to={`/article/${this.props.id}`}>{this.props.title}</Link>
                            </h3>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
});

function mapDispatchToProps(dispatch) {
    return {
        voteArticle: (id, vote) => {
            dispatch(voteArticle(id, vote));
        }
    };
}

export default connect(null, mapDispatchToProps)(ArticleCard);
