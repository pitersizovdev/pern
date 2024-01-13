import React from 'react'
import '../../styles/Modals.css'

const CreateCategory = ({show, onHide}) => {
  return (
    <div className='modal'>
      <h2>Добавить категорию</h2>
      <input></input>
      <button>Создать</button>
      <button>Закрыть</button>
    </div>
  )
}

export default CreateCategory
