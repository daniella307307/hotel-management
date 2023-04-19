import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./components/Homescreen";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
