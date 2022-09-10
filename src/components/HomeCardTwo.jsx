import React, { useState, useEffect } from "react";
import Amazon from "./amazonTwo";
import Navbar from "./navbar";
import CartTwo from "./cartTwo";

const HomeCardTwo = () => {
  const [show, setShow] = useState(true);
  const [cartTwo, setCartTwo] = useState([]);

  const handleClick = (item) => {
    if (cartTwo.indexOf(item) !== -1) return;
    setCartTwo([...cartTwo, item]);
  };

  const handleChange = (item, d) => {
    const ind = cartTwo.indexOf(item);
    const arr = cartTwo;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartTwo([...arr]);
  };
  return (
    <>
      <React.Fragment>
        <Navbar setShow={setShow} size={cartTwo.length} />
        {show ? (
          <Amazon handleClick={handleClick} />
        ) : (
          <CartTwo
            cart={cartTwo}
            setCart={setCartTwo}
            handleChange={handleChange}
          />
        )}
      </React.Fragment>
    </>
  );
};

export default HomeCardTwo;
