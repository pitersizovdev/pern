import React from 'react'
import '../styles/Admin.css'
import CreateCoin from '../components/modals/CreateCoin';
import CreateArticle from '../components/modals/CreateArticle';
import CreateCategory from '../components/modals/CreateCategory';


const Admin =()=> {
  return (
    <div>
        <button>Добавить категорию</button>
        <button>Добавить категорию монеты</button>
        <button>Добавить статью</button>

        <CreateCategory/>
        <CreateCoin/>
        <CreateArticle/>

    </div>
  )
}

export default Admin;
