import React from 'react'
import { BiSolidStar } from "react-icons/bi";
import '../styles/Article.css'

const Article =()=> {
  const article ={id:1, title:'Article1', 
  description:'Description of article',
  img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
  rating: 5}

  const info = {id:1, 
    content:'Content is not a description of article Content is not a description of article Article1 Content is not a description of article Article1 Article1',
    }
  return (
    <div className='articleContent'>
        <img className='articlePic'src={article.img} alt=''></img>
        <h1 className='articleTitle'>{article.title}</h1>
        <h2 className='articleDescription'>{article.description}</h2>
        <div className='articleText'><p>{info.content}</p></div>
        <div className='articleRating'>{article.rating}<BiSolidStar/><button>Оценить</button></div>
    </div>
  )
}

export default Article;
