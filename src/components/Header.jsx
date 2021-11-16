import React, {useState, useContext} from 'react';
import MyOrder from '@containers/MyOrder';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import '@styles/Header.scss';

import menu from '@img/menu.png';
import logo from '@img/logo.png';
import shoppingcart from '@img/add-carrito.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }
	return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="header-logo" />
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
          <li className="navbar-email" onClick={handleToggle}>wharem85@hotmail.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingcart} alt="shoppingcart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
