import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./component/common/Footer";
import BookingEvent from "./pages/BookingEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/booking" element={<BookingEvent/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
