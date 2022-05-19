import React from 'react'
import './../../css/Auth/navbar/navbar.css'
function Navbar({active,login}) {
  return (
    <nav className="navbar">
        <div className="logo">
            EVENTORG.
        </div>
        <div className="nav-items">
            <div className="item btn-div">
                <button className="nav-btn">
                    Sign In
                </button>
            </div>
            <div className="item btn-div sign-up">
                <button className="nav-btn">
                    Sign Up
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar