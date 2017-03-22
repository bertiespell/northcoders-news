import React from 'react';
import { connect } from 'react-redux';


import { getArticles } from '../actions/articles';
import { getArticleData } from '../reducers/articles.reducer';


const ArticlePage = React.createClass({
    componentDidMount: function () {
        this.props.getArticle();
    },
    render() {
        if (this.props.article) {
            return (
                <div className="columns">
                    <div className="column is-10 is-offset-1 is-success">
                        <h1 className='is-large'><strong>{this.props.article.title}</strong></h1>
                        <p>{this.props.article.body}</p>
                        <h1><strong>{'By: ' + this.props.article.created_by}</strong></h1>
                        <h1><strong>{'Comments: ' + this.props.article.comments}</strong></h1>
                        <h1><strong>{'Votes: ' + this.props.article.votes}</strong></h1>
                    </div>
                </div>
            );
        } else return <p>Loading...</p>;
    }
});


function mapDispatchToProps(dispatch) {
    return {
        getArticle: () => {
            dispatch(getArticles());
        }
    };
}

function mapStateToProps(state, props) {
    return {
        article: getArticleData(state, props.params.article)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

/** 
 * import React from 'react';

import {connect} from 'react-redux';

import {fetchArticle, voteComment} from '../actions/actions';

import Comments from './Comments';



const ArticlePage = React.createClass({

  componentDidMount () {

    this.props.getArticle(this.props.params.article_id);

  },

  render () {

    if (this.props.loading) return <p>'Loading...'</p>;

    if (this.props.error) return <p>404</p>;

    if (this.props.article) {

      return (

        <div className="container">

          <p>{this.props.article.belongs_to}</p>

          <h3 className='title is-3'>{this.props.article.title}</h3>

          <p className=''><strong>{this.props.article.created_by}</strong></p>

          <p className=''>{this.props.article.body}</p>

          <div className="article-comments">

          </div>

          <Comments voteComment={this.props.voteComment} id={this.props.article._id}/>

        </div>

      );

    }

      

  }

});



function mapDispatchToProps (dispatch) {

  return {

    getArticle: (id) => {

      dispatch(fetchArticle(id));

    },

    voteComment: (id, vote) => {

      dispatch(voteComment(id, vote));

    }     

  };

}



function mapStateToProps (state) {

  return {

    article: state.article.data[0],

    loading: state.article.loading,

    error: state.article.error,

  };

}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
*/