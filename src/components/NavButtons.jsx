import React from 'react';
import { Link } from 'react-router-dom';
import './NavButtons.css';

function NavButtons() {
  return (
    <div className="nav-buttons">
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/contact">Контакты</Link>
    </div>
  );
}

export default NavButtons;