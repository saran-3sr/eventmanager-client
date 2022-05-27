import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import {Modal} from 'react-bootstrap'
function Signup() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorModal, setErrorModal] = useState(false)
  const [error, setError] = useState("")

  const signUp= async(event)=>{
    event.preventDefault()
    console.log(password)
    if(confirmPassword===password)
    {
    const response=await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        userName,
        password

      }
      )
    }) 
    console.log(response)
    setErrorModal(false)
  }
  else{
    console.log("error")
    setErrorModal(true)
    setError("Password does not match")
  }
  
  }
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
            <input type="text" onChange={(e)=>{console.log(e.target.value)
              setUserName(e.target.value)}} name="username" />
          </div>
        </div>
        <div className="password auth-items">
          <div className="auth-detail">
            Password
          </div>
            <div className="input">
              <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
        </div>
        <div className="password auth-items">
          <div className="auth-detail">
            Confirm Password
          </div>
            <div className="input">
              <input type="password" name="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
            </div>
            {errorModal && <div style={{color:'red'}}>{error}</div>}
        </div>
        <div className='auth-text'> <a href="£"> New User? Sign Up</a></div>
        <div className="auth-btn">
          <button onClick={e=>{console.log("clicked")
            signUp(e)}}>Sign Up</button>
        </div>
        
      </div>
    </div>  
    </div>
  )
}

export default Signup