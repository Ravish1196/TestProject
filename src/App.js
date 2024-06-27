import React from "react";

import Login from "./components/Login"

import Admin from "./components/Admin";

import User from "./components/User";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/" element={<Login/>} /> {/* Default to Login */}
      </Routes>
    </Router>
  );
}

export default App;
