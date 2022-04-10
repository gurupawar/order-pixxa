import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">Pixxa</div>
          <menu>
            <ul>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
            </ul>
          </menu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
