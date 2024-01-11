import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import '../styles/ArticleItem.css'

const ArticleItem = ({article}) => {
  return (
    <div className='articleCard'>
        <img src={article.img} alt=' '></img>
        <div className='articleDescription'>{article.description}</div>
        <div className='titleShield'>
            <h3>{article.title}</h3>
            <div className='rating'>
                <div className='articleRating'> {article.rating}<BiSolidStar /></div>
            </div>
        </div>
    </div>
  )
}

export default ArticleItem
