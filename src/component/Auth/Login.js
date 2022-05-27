import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import './../../css/Auth/auth.css'
import Navbar from "./../common/Navbar";
function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loginIn, setLoginIn] = useState(false)
  useEffect(()=>{
    const token=localStorage.getItem('tokenEventManagement')
    if(token)
    {
      setLoginIn(true)
    }
  })
  const handleLogin=async (e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:5000/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(
        {
          userName,
          password
        }
      )
    })
    const user= await response.json()
    if(user.user)
    {
      localStorage.setItem('tokenEventManagement',user.user)
      setLoginIn(true)
    }
    
    console.log('user',user)
  }
  return (
    <div className='Login'>
      {loginIn && <Navigate to={'./home'}/>}
    <Navbar/>
    <div className="container">
      <div className="auth-box">
        <div className="user auth-items">
          <div className="auth-detail">
            Email
          </div>
          <div className="input">
            <input type="text" name="username" onChange={e=>{setUserName(e.target.value)}} />
          </div>
        </div>
        <div className="password auth-items">
          <div className="auth-detail">
            Password
          </div>
            <div className="input">
              <input type="password" name="password" onChange={e=>{setPassword(e.target.value)}}/>
            </div>
        </div>
        <div className='auth-text'> <a href="£"> New User? Sign Up</a></div>
        <div className="auth-btn">
          <button onClick={e=>{console.log("Clicked")
            handleLogin(e)}}>Sign In</button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Login