import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import "./styles.css"

const Header: React.FC = () => {
  return (
    <header>
    <div className="logo-area">
      <img src={logo} alt="omma" />
    </div>
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/receitas">Receitas</Link>
        </li>
        <li>
          <Link to="/contatos">Contato</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;