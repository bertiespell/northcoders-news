import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import {voteComment} from '../actions/voteComment';

const CommentCard = React.createClass({
    render() {
        const comments = this.props.comments ?
            this.props.comments.map(function (comment, i) {
                return (
                    <div className='box' key={i}>
                        <a onClick={this.props.voteComment.bind(null, comment._id, 'up')}><i className="fa fa-caret-up fa-2x" /></a>
                        <article className='media'>
                            <div className='media-left'>
                                <p>{comment.votes}</p>
                                <a onClick={this.props.voteComment.bind(null, comment._id, 'down')}><i className="fa fa-caret-down fa-2x" /></a>
                            </div>
                            <div className='media-content'>
                                <div className='content'>
                                    {comment.body}
                                </div>
                                <small>{comment.created_by}</small>
                            </div>
                        </article>
                    </div>
                );
            }.bind(this))
            : 'Loading...';
        return (
            <div>
                {comments}
            </div>
        );
    }
});

function mapDispatchToProps(dispatch) {
    return {
        voteComment: (id, vote) => {
            dispatch(voteComment(id, vote));
        }
    };
}

export default connect(null, mapDispatchToProps)(CommentCard);