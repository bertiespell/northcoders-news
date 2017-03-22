import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList (props) {
    return (
        <div className='ArticleList'>
            {props.articles.map((article, i) => {
                return <ArticleCard title={article.title} votes={article.votes} id={article._id} key={i}/>;
            })}
        </div>
    );
}

export default ArticleList;