import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 
import logo from '../images/CRM.jpg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
        <span>Cruz Roja</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className='link'>Inicio</Link></li>
        <li><Link to="/politicas"  className='link'>Politicas de Privacidad</Link></li>
        <li><Link to="/cookies"  className='link'>Politicas de Cookies</Link></li>
        <li><Link to="/terminos"  className='link'>Terminos y condiciones</Link></li>
        <li><Link to="#"  className='link'>Acerca de</Link></li>
        <li><Link to="#"  className='link'>Tramites en linea</Link></li>
        <li><Link to="#"  className='link'>Contratacion de ambulancias</Link></li>
        <li><Link to="#" className='link'>Login</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;
