import React from "react";
import Navbar from "./navbar";
import "../styles/cart.css";
import listTwo from "../DataItems/dataB";
import { Routes, Route, Link } from "react-router-dom";
const CartHome = () => {
  // const listdata = listTwo.map((inner) => inner.id + inner.img + inner.title);
  return (
    <>
      <Navbar />
      <div className="hero-menu">
        <div>
          <Link to="HomeCard">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"
              alt=""
              style={{ width: "235px" }}
            />
          </Link>
          <h6 style={{ textAlign: "center" }}>Pizzas</h6>
        </div>
        <div>
          <Link to="HomeCardTwo">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/22/55/barbeque-1239407_960_720.jpg"
              alt=""
              style={{ width: "235px" }}
            />
          </Link>
          <h6 style={{ textAlign: "center" }}>Burger</h6>
        </div>
        {/* <h1>(inner._id)</h1> */}
      </div>
    </>
  );
};
export default CartHome;
