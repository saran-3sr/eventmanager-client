import React from 'react'
import Navbar from '../component/common/Navbar'
import Home from '../component/Home/Home'
import HomeOffered from '../component/Home/HomeOffered'

function HomePage(props) {
  const {loginIn}=props
  return (
    <div className="HomePage">
        <Navbar loginIn={loginIn}/>
        <Home/>
        <HomeOffered/>
    </div>
  )
}

export default HomePage