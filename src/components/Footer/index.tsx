import React from 'react';
import logo from '../../assets/logo.png';
import "./styles.css";

const Footer: React.FC = () => {
  return (
      <footer className='footer-container'>
          <img src={logo} alt="omma" />
          <span>© 2022 omma - Todos os direitos são de vocês</span>
      </footer>
  );
}

export default Footer;