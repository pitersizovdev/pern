import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Auth.css'
import { LOGIN_ROUTE, REGISTARTION_ROUTE } from '../utils/consts'

const Auth =()=> {
const location = useLocation()
const isLogin = location.pathname===LOGIN_ROUTE
console.log(location)

  return (
<div className='card'>
  <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
  <div className='form'>
    <input type="text" placeholder="Email"/>
    <input type="password" placeholder="Password"/>


    <button><NavLink to={LOGIN_ROUTE}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</NavLink></button>

    {isLogin 
    ?
    <div className='link'><NavLink to={REGISTARTION_ROUTE}>Зарегестрироваться</NavLink></div>
    :
    <div className='link'><NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>
    }

  </div>
</div>
  )
}

export default Auth;