import './App.css';
import{BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CryptoDetails from "./components/CryptoDetails";
import CryptoList from "./components/CryptoList"

function App() {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <Navbar/>
    </div>
  );
}

export default App;
