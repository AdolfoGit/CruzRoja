import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Cookies from './components/cookies';
import Politicas from './components/politicas';
import Terminos from './components/Terminos';
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/terminos" element={<Terminos />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;
