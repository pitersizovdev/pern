import React, { useContext } from 'react'
import '../../styles/Modals.css'
import { Context } from '../../index';

const CreateArticle = () => {
    const {article} = useContext(Context)

  return (
    <div>
    <div className='modal'>
      <h2>Добавить Статью</h2>
      <input className='createImg' type="file"></input>
      <input className='createTitle' placeholder='Заголовок'></input>
      <input className='createDescriptoin' placeholder='Описание'></input>
      <input className='createContent' placeholder='Наполнение'></input>
      <div>
      <select className='categories'>
        {article.categories.map(category => (
          <option key={category.id}>{category.name}</option>
        ))}
      </select>

      <select className='coins'>
        {article.coins.map(coin => (
          <option key={coin.id}>{coin.name}</option>
        ))}
      </select>
    </div>
      <button>Создать</button>
      <button>Закрыть</button>
    </div>
    </div>
  )
}

export default CreateArticle
