import React from 'react'
import CategoryFilter from '../components/CategoryFilter';
import CoinFilter from '../components/CoinFilter';
import ArticleList from '../components/ArticleList';

const News =()=> {
  return (
    <div className='container'>
      <CategoryFilter/>
      <CoinFilter/>
      <ArticleList/>
    </div>
  )
}

export default News;
