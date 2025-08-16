import './App.css';
import Home from './components/Home-Page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </Router>
  );
}

export default App;

/*import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<about />} />
        <Route path="/" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
*/