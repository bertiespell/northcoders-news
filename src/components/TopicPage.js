import React from 'react';
import {connect} from 'react-redux';

import { getArticles } from '../actions/articles';
import { getTopArticles } from '../reducers/articles.reducer';


import ArticleList from './ArticleList';

const TopicPage = React.createClass({
  componentDidMount () {
    this.props.getArticles(this.props.params.topic);
  },
  componentWillReceiveProps (nextProps) {
    if (this.props.params.topic !== nextProps.params.topic) {
      this.props.getArticles(nextProps.params.topic);
    }
  },
  render () {
    return (
      <div id='TopicPage'>
        <ArticleList articles={this.props.articles}/>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return  {
    getArticles: (topic) => {
      dispatch(getArticles(topic));
    }
  };
}


function mapStateToProps (state) {
  return {
    articles: getTopArticles(state, 10)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);