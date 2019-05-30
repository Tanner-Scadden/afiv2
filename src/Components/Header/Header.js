import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Logo from '../../Images/AFI-Logo.png';

const Header = (props) => {

  const [display, toggleDisplay] = useState(false);
  const [menu, toggleMenu] = useState(false);

  useEffect(() => {
    return () => {
      return display
    };
  }, [display])

  return (
    <header>

      <nav className="container">

        <div className="left">
          <img src={Logo} alt="logo" />
          <h1>AFI PAINT & SUPPLY</h1>
        </div>

        <div className="right">
          {display
            ? <p onClick={() => { toggleDisplay(false); toggleMenu(false) }} className="X mobile">&#10005;</p>
            : <p onClick={() => { toggleDisplay(true); toggleMenu(true) }} className="hamburger mobile">&#9776;</p>
          }
          <div className="nav-menu desktop">
            <Link to="/" className="item"><h3>Home</h3></Link>
            <Link to="/biography" className="item"><h3>Bio</h3></Link>
          </div>
        </div>
        {menu
          ? <ul className="menu mobile"><Link to="/" className="item"><li>Home</li></Link><Link to="/biography" className="item"><li>Bio</li></Link></ul>
          : null
        }

      </nav>

    </header>
  )
}

export default Header;