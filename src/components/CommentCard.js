import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/deleteComment';
import {voteComment} from '../actions/voteComment';

const CommentCard = React.createClass({
    render() {
        const comments = this.props.comments ?
            this.props.comments.map(function (comment, i) {
                return (
                    <div className='box' key={i}>
                        <div className='media'>
                            <div className='media-left'>

                        <a onClick={this.props.voteComment.bind(null, comment._id, 'up')}><i className="fa fa-caret-up fa-2x" /></a>
                                <div className='voteword'>
                                    <p>{comment.votes}</p>
                                </div>
                                <a onClick={this.props.voteComment.bind(null, comment._id, 'down')}><i className="fa fa-caret-down fa-2x" /></a>
                            </div>
                            <div className='media-content'>
                                <div className='content'>
                                    {comment.body}
                                </div>
                                <small>{comment.created_by}</small>
                                <a className="button is-danger" id='deleteButton' onClick={this.props.deleteComment.bind(null, comment._id)}><i className='fa fa-trash-o' aria-hidden='true' ></i></a>
                            </div>
                        </div>
                    </div>
                );
            }.bind(this))
            : <div><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span></div>;
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
        },
        deleteComment: (id) => {
            dispatch(deleteComment(id));
        }
    };
}

export default connect(null, mapDispatchToProps)(CommentCard);