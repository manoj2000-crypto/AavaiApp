import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Registration from "./components/registration/Registration";
import Login from "./components/Login/Login";
import "./App.css";
import "./css/output.css";


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <h1 className="text-3xl font-bold underline bg-green-500">Welcome to Aavai Admin Panel</h1>
        
          {/* <Link to="/registration">
            <button className="register-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link> */}
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
