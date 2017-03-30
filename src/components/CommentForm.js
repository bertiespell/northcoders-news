import React, { Component } from 'react';
import { postComment } from '../actions/postComment';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CommentForm extends Component {
    render() {
        // if (this.props.comments.form.comment) console.log("COMMMMETNS", this.props.comments.form.comment.values.comment);
        // const { handleSubmit } = this.handleSubmit;
        //console.log("IDDD", this.props.id);
        return (
            <div className='box' id='commentform'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='box'>
                        <div className="field">
                            <label className="label">Comment</label>
                            <div>
                                <Field name="comment" component="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-primary">Submit</button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.postComment(this.props.comments.form.comment.values.comment, this.props.id);
    }
}

function mapStateToProps(state) {
    return {
        comments: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postComment: (comment, articleID) => {
            dispatch(postComment(comment, articleID));
        }
    };
}

CommentForm = reduxForm({
    form: 'comment'
})(CommentForm);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);