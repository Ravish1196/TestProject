import logo from "./logo.svg";
import "./App.css";
import Tempapp from "./components/Tempapp";

import Apifetching from "./components/Apifetching";
import Hooks from "./components/Hooks";

import HomeContainer from './containers/HomeContainer'

import HeaderContainer from "./containers/HeaderContainer";
import Fetch from "./components/Fetch";

import Sample from "./components/Sample";

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
