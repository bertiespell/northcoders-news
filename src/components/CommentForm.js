import React from 'react';
import {postComment} from '../actions/postComment';
import { connect } from 'react-redux';


const CommentForm = React.createClass({
    render () {
        return (
            <div className='container'>
                <div className='box'>
                    <div className="field">
                        <label className="label">Comment</label>
                        <p className="control">
                            <textarea className="textarea" placeholder="Post comment here ..."></textarea>
                        </p>
                    </div>
                </div>
                <div className="field is-grouped">
                    <p className="control">
                        <button className="button is-primary">Submit</button>
                    </p>
                </div>
            </div>
        );
    }
});

function mapDispatchToProps (dispatch) {
    return {
        postComment:  (comment, articleID) => {
            dispatch(postComment(comment, articleID));
        }
    };
}

export default connect(null, mapDispatchToProps)(CommentForm);