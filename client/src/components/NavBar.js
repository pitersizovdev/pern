import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import '../styles/NavBar.css';
import {observer} from 'mobx-react-lite'


const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <nav>
      <a><NavLink class="logo" to={MAIN_ROUTE}>Greenlist</NavLink></a>

      <ul>
        <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
        <li><NavLink to={MAIN_ROUTE}>Новости</NavLink></li>
        <li><NavLink to={MAIN_ROUTE}>Обмен</NavLink></li>
      </ul>

      {user.isAuth ? 
        (<div className='buttons'>
          <button>Панель</button>
          <button>Выйти</button>
        </div>) 
        : 
        (<div className='buttons'>
          <button onClick={()=>user.setIsAuth(true)}>Авторизация</button>
        </div>)
      }
    </nav>
  );
});

export default NavBar;