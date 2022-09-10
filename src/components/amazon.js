import React, { useState } from "react";
import list from "../DataItems/data";
import CardOne from "./CardOne";

const Amazon = ({ handleClick }) => {
  return (
    <>
      <section>
        {list.map((item) => (
          <CardOne key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Amazon;
