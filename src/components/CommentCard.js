import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';

const CommentCard = React.createClass({
    render() {
        const comments = this.props.comments ?
            this.props.comments.map(function (comment, i) {
                return (
                    <div className='box' key={i}>
                        {/*<a onClick={this.props.voteArticle.bind(null, this.props.id, 'up')}><i className="fa fa-caret-up fa-2x" />UP</a>*/}
                        <article className='media'>
                            <div className='media-left'>
                                {comment.votes}
                                {/*<a onClick={this.props.voteArticle.bind(null, this.props.id, 'down')}><i className="fa fa-caret-down fa-2x" />DOWN</a>*/}
                            </div>
                            <div className='media-content'>
                                <div className='content'>
                                    {comment.body}
                                </div>
                                <small>{comment.created_by}</small>
                            </div>
                        </article>
                    </div>
                )
            })
            : 'Loading...';
        return (
            <div>
                {comments}
            </div>
        );
    }
});


export default CommentCard;