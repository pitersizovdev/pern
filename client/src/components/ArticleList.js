import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ArticleItem from './ArticleItem';
import { Context } from '../index';

const ArticleList = observer(() => {
    const {article} = useContext(Context);
  return (
    <div className='container'>
        {article.articles.map(article =>
            <ArticleItem key={article.id} article={article}/>   
            
        )}
      
    </div>
  );
});

export default ArticleList
