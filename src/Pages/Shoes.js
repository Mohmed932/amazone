import React from "react";
import Adidas from "../components/Shoes/Adidas";
import Crocs from "../components/Shoes/Crocs";
import Merrell from "../components/Shoes/Merrell";
import Nike from "../components/Shoes/Nike";
import PUMA from "../components/Shoes/PUMA";

const Shoes = () => {
  return (
    <div className="Shoes">
      <Adidas />
      <Crocs />
      <Merrell />
      <Nike />
      <PUMA />
    </div>
  );
};

export default Shoes;
