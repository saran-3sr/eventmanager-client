import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Footer from "./component/common/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
