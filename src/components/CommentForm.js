import React from 'react';

const CommentForm = React.createClass({
    render() {
        return (
            // TODO: MAKE A PUT REQUEST HERE!!!!!!!!!
            <div className='container'>
                <div className='box'>
                    <div className="field">
                        <label className="label">Username</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="Username" />
                        </p>
                        <label className="label">Message</label>
                        <p className="control">
                            <textarea className="textarea" placeholder="Comment"></textarea>
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

export default CommentForm;