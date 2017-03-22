import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import CommentCard from './CommentCard';
import { getTopComments } from '../reducers/comments.reducer';

const Comments = React.createClass({
    componentDidMount () {
        this.props.fetchComments (this.props.id);
    },
    render () {
        console.log('******************', this.props.comments);
        if (this.props.comments) {
            return (
                <div>
                    <CommentCard comments={this.props.comments}/>
                </div>
            );
        } else {return (<p>Loading....</p>);}
    }
});

function mapStateToProps (state) {
    return {
        comments: getTopComments(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchComments: (id) => {
            dispatch(fetchComments(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


