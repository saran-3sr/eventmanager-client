import React from 'react'
import './../../css/Auth/auth.css'
import Navbar from "./../common/Navbar";
function Login() {
  return (
    <div className='Login'>
    <Navbar/>
    <div className="container">
      <div className="auth-box">
        <div className="user auth-items">
          <div className="auth-detail">
            Email
          </div>
          <div className="input">
            <input type="text" name="username" />
          </div>
        </div>
        <div className="password auth-items">
          <div className="auth-detail">
            Password
          </div>
            <div className="input">
              <input type="password" name="password" />
            </div>
        </div>
        <div className='auth-text'> <a href="£"> New User? Sign Up</a></div>
        <div className="auth-btn">
          <button>Sign In</button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Login