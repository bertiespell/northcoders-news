import React from 'react';
import { connect } from 'react-redux';
import { getTopics } from '../actions/topics';
import { Link } from 'react-router';

const NavBar = React.createClass({
    componentDidMount () {
        this.props.getTopics ();
    },
    render () {
        const topics = this.props.topics ?
            this.props.topics.map(function (topic, i) {
                return (
                    <div key={i}>
                        <a className="nav-item is-tab is-hidden-mobile" title={topic.title}>
                            <Link to={`/${topic.title.toLowerCase()}`}>{topic.title}</Link>
                        </a>
                    </div>
                );
            })
            : 
                <div><i className="fa fa-spinner fa-spin fa-6x fa-fw"></i>
                    <span className="sr-only">Loading...</span></div>;
        return (
            <div>
                <nav className='nav has-shadow'>
                    <div className='container'>
                        <div className='nav-left'>
                            <a className='nav-item logo'>
                                <Link to='/'><img src='https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png' alt='northcoders-logo' /></Link>
                            </a>
                        </div>

                        {topics}
                    </div>
                </nav>
            </div>
        );
    }
});

function mapStateToProps (state) {
    return {
        topics: state.topics.byID.topics
    };
}

function mapDispatchToProps (dispatch) {
    return {
        getTopics: () => {
            dispatch(getTopics());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);