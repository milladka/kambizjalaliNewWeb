import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <div className="container nav">
        <div className="wrapperNav">
          <Link to="/">
            <div className="holderLogo">
              <img className="logo" src="./image/logo.png" alt="logo" />
              <div className="holdertitle">
                <div>Kambiz Jalali</div>
              </div>
            </div>
            <div className="archi">| Architect</div>
          </Link>
        </div>
        <div className="linkbar">
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </div>
        {/* <div className={menu ? "clicked" : ""}>
          <img
            onClick={() => {
              setMenu(!menu);
            }}
            className="iconMenu"
            src="./image/icon-menu.svg"
            alt="logo"
          />
        </div> */}
      </div>
      <div className={menu ? "menu open" : "menu"}>
        <nav className="wrapperNav">
          <ul className="menuitems">
            <li>
              <Link
                onClick={() => {
                  setMenu(!menu);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setMenu(!menu);
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setMenu(!menu);
                }}
                to="/contacts"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
