import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { EXCH_ROUTE, MAIN_ROUTE, NEWS_ROUTE } from '../utils/consts';
import { Context } from '../index';
import '../styles/NavBar.css';
import { observer } from 'mobx-react-lite';
import { HiOutlineMenu } from "react-icons/hi";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Добавляем состояние для отслеживания открытия/закрытия меню

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Изменяем состояние для открытия/закрытия меню
  };

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
            <button>Панель</button>
            <button>Выйти</button>
          </div>) :
          (<div className='btn'>
            <button onClick={() => user.setIsAuth(true)}>Авторизация</button>
          </div>)
        }

        <div className='toggleBtn' onClick={handleToggleMenu}> {/* Добавляем обработчик события на клик */}
          <HiOutlineMenu />
        </div>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}> {/* Используем состояние для добавления класса 'open' */}
          <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
          <li><NavLink to={NEWS_ROUTE}>Новости</NavLink></li>
          <li><NavLink to={EXCH_ROUTE}>Обмен</NavLink></li>

          {user.isAuth ?
            (<div className='menuBtn'>
              <button>Панель</button>
              <button>Выйти</button>
            </div>) :
            (<div className='menuBtn'>
              <button onClick={() => user.setIsAuth(true)}>Авторизация</button>
            </div>)
          }
        </div>
      </div>
    </header>
  );
});

export default NavBar;