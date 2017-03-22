import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import voteReducer from '../actions/vote';

const ArticleCard = React.createClass({
  render () {
    return (
      <div className='box'>
        <i className="fa fa-arrow-circle-up block" onClick={this.props.voteArticle.bind(null, 'up')}/>
        <article className='media'>
          <div className='media-left'>
            <span><p>Upvotes:</p>
            {this.props.votes}</span>
            <i className="fa fa-arrow-circle-down block" onClick={this.props.voteArticle.bind(null, 'down')}/>
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

function mapDispatchToProps (dispatch) {
  return {
    voteArticle: (id, vote) => dispatch(voteReducer(id, vote))
  };
}


export default connect(null, mapDispatchToProps)(ArticleCard);
