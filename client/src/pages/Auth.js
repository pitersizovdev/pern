import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Auth.css'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTARTION_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI';
import { Context } from '../index';

const Auth =observer(()=> {
const {user} = useContext(Context)
const location = useLocation()
const navigate = useNavigate()
const isLogin = location.pathname===LOGIN_ROUTE
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

const click = async () => {
  try{
    let data;
    if (isLogin){
      data = await login(email, password);
    }else{
      data = await registration(email, password);
    }
    user.setUser(user)
    user.setIsAuth(true)
    navigate(MAIN_ROUTE)
  }catch(e){
    alert(e.response.data.message)
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
});

export default Auth;