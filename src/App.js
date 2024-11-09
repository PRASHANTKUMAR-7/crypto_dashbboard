import './App.css';
import{BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CryptoDetails from "./components/CryptoDetails";
import CryptoList from "./components/CryptoList"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Dashboard route (main page) */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Crypto details route (dynamic route for each crypto) */}
        <Route path="/crypto/:id" element={<CryptoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
