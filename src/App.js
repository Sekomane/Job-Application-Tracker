
import './App.css';
import MainPage from './components/MainPage';
import Home from './components/Home-Page'
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from './components/Register';
import error404Img from "./assets/error.jpg";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/home" element={<MainPage />} /> {}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route
  path="*"
  element={
    <div style={{ textAlign: "center", marginTop: "50px" }}>
<img
  src={error404Img}
  alt="404 Not Found"
  style={{ width: "500px", maxWidth: "100%" }}
/>

      <h2>
        <a href="/" style={{ color: "#007bff", textDecoration: "underline" }}>
          Go back home
        </a>
      </h2>
    </div>
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
