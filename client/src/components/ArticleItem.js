import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import '../styles/ArticleItem.css'
import { useNavigate } from 'react-router-dom';
import { ARTICLE_ROUTE } from '../utils/consts';

const ArticleItem = ({article}) => {
    const navigate = useNavigate()
  return (
    <div className='articleCard' onClick={()=> navigate(ARTICLE_ROUTE+'/'+article.id)}>
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
