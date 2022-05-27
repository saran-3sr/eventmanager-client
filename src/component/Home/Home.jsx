import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../common/Navbar'
import './../../css/Home/Home.css'
function Home() {
  return (
      <div className="Home page">
          <div className="container home-cont">
              <div className="text">
                  <div className="text-header logo">
                      EVENTORG.
                  </div>
                  <hr />
                  <div className="home-innertext">
                      <h4>HOSPITALITY</h4>
                      <Link to='/booking'>
                      <button className="btn home-btn">Book Now</button>
                    </Link>
                  </div>
              </div>
          </div>
          
      </div>
  )
}

export default Home