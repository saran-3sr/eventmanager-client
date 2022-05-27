import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./component/common/Footer";
import BookingEvent from "./pages/BookingEvent";
import { useEffect, useState } from "react";

function App() {
  const [loginIn, setLoginIn] = useState('')
  useEffect(()=>{
    const token=localStorage.getItem('tokenEventManagement')
    if(token)
    {
      setLoginIn(true)
    }
  })

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage loginIn={loginIn}/>} />
        <Route path="/booking" element={<BookingEvent loginIn={loginIn}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
