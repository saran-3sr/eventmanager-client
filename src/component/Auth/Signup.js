import React from 'react'
import Navbar from '../common/Navbar'
function Signup() {
  return (
    <div className='Login'>
    <Navbar/>
    <div className="container">
      <div className="auth-box-sign-up">
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
        <div className="password auth-items">
          <div className="auth-detail">
            Confirm Password
          </div>
            <div className="input">
              <input type="password" name="password" />
            </div>
        </div>
        <div className='auth-text'> <a href="£"> New User? Sign Up</a></div>
        <div className="auth-btn">
          <button>Sign Up</button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Signup