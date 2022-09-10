import React from "react";
import "../styles/card.css";

const CardOne = ({ item, handleClick }) => {
  const { title, author, price, img, category } = item;
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>{category}</h3>
      <div className="card-prim">
        <div className="Oneec">
          <p>{title}</p>
          <p> ₹ - {price}</p>
          <p>{author}</p>
          <button onClick={() => handleClick(item)}>Order Now</button>
        </div>
        <div className="cardimg">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default CardOne;

// id, title, autor, price, img
