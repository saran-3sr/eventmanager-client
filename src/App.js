import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import Navbar from "./component/common/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        {/* <Route path="/dashboard" element={} */}
      </Routes>
    </div>
  );
}

export default App;
