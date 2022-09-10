import React from "react";
import "../styles/card.css";

const CardTwo = ({ item, handleClick }) => {
  const { name, author, price, img, categoryTwo } = item;
  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>{category}</h3>
      <div className="card-prim">
        <div className="Oneec">
          <p>{name}</p>
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

export default CardTwo;

// id, title, autor, price, img
