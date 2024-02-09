import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import UserDetailsPage from './pages/UserDetailsPage';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav className="p-4" style={{ background: 'black' }}>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            {/* Add more links for other users */}
          </ul>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
