import React from "react";
import "../styles/navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop">
          <Link to="/">Food Ordering Portal</Link>
        </span>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
