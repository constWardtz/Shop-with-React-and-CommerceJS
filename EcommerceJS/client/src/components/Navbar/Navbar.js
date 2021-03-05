import React from "react";

import "./navbar.css";

const Navbar = ({ totalItems }) => {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        <div className="navbar__logo">
          <h1>
            <a href="/">CommerceJS</a>
          </h1>
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">
              Cart <b>{totalItems ? `- ${totalItems}` : ""}</b>
            </a>
          </li>
        </ul>
        <div className="navbar__actions">
          <h1>Hi Guest!</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
