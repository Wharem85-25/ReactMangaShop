import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => {
	return (
    <nav>
      <img src="../src/assets/img/menu.png" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="../src/assets/img/logo.png" alt="logo" className="logo" />
        <ul className="category">
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Shoujo</a>
          </li>
          <li>
            <a href="/">Shonen</a>
          </li>
          <li>
            <a href="/">Seinen</a>
          </li>
          <li>
            <a href="/">Spokon</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">wharem85@hotmail.com</li>
          <li className="navbar-shopping-cart">
            <img src="../src/assets/img/add-carrito.png" />
            <div>3</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
