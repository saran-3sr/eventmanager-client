import React, { useEffect, useState } from 'react'
import './../../css/Auth/navbar/navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    const [loginIn, setLoginIn] = useState('')
    const handleLogout=e=>{
        if(loginIn)
        {
            localStorage.removeItem('tokenEventManagement')
            setLoginIn(false)
        }
    }

  useEffect(()=>{
    const token=localStorage.getItem('tokenEventManagement')
    if(token)
    {
      setLoginIn(true)
    }
  })
  return (
    <nav className="navbar">
        <div className="logo">
            EVENTORG.
        </div>
        {loginIn && <div className="nav-items">
        <div className="item btn-div sign-up">
                <button className="nav-btn" onClick={e=>handleLogout(e)}>
                    Log Out
                </button>
            </div>
           
        </div>}
       {!loginIn && <div className="nav-items">
       <div className="item btn-div">
                <button className="nav-btn">
                    <Link to='/'>Sign In</Link>
                </button>
            </div>
            <div className="item btn-div sign-up">
                <button className="nav-btn">
                    <Link to='/register'>Sign Up</Link>
                </button>
            </div>
        </div>}
    </nav>
  )
}

export default Navbar