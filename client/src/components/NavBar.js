import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, EXCH_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEWS_ROUTE } from '../utils/consts';
import { Context } from '../index';
import '../styles/NavBar.css';
import { observer } from 'mobx-react-lite';
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate()
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Добавляем состояние для отслеживания открытия/закрытия меню

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Изменяем состояние для открытия/закрытия меню
  };

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <header>
      <div className='navBar'>
        <div className='logo'><NavLink to={MAIN_ROUTE}>Greenlist</NavLink></div>
        <ul className='links'>
          <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
          <li><NavLink to={NEWS_ROUTE}>Новости</NavLink></li>
          <li><NavLink to={EXCH_ROUTE}>Обмен</NavLink></li>
        </ul>

        {user.isAuth ?
          (<div className='btn'>
            <button onClick={()=> navigate(ADMIN_ROUTE)}>Панель</button>
            <button onClick={()=> logOut()}>Выйти</button>
          </div>) 
          :
          (<div className='btn'>
            <button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>
          </div>)
        }

        <div className='toggleBtn' onClick={handleToggleMenu}> {/* Добавляем обработчик события на клик */}
          <HiOutlineMenu />
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}> 
          <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
          <li><NavLink to={NEWS_ROUTE}>Новости</NavLink></li>
          <li><NavLink to={EXCH_ROUTE}>Обмен</NavLink></li>
        </div>
      </div>
    </header>
  );
});

export default NavBar;