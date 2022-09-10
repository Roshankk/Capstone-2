import React, { useState } from "react";
import listTwo from "../DataItems/dataB";
import CardOne from "./CardOne";

const Amazon = ({ handleClick }) => {
  return (
    <>
      <section>
        {listTwo.map((item) => (
          <CardOne key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Amazon;
