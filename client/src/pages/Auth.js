import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Auth.css'
import { LOGIN_ROUTE, REGISTARTION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI';

const Auth =()=> {
const location = useLocation()
const isLogin = location.pathname===LOGIN_ROUTE
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

const click = async () => {
  if (isLogin){
    const response = await login();
  }else{
    const response = await registration(email, password);
    console.log(response)
  }
}

  return (
<div className='card'>
  <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
  <div className='form'>


    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />


    <button onClick={click}><NavLink to={LOGIN_ROUTE}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</NavLink></button>

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