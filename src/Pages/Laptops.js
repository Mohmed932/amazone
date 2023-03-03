import React from "react";
import LENOVO from "../components/Laptops/Lenovo";
import Apple from "../components/Laptops/Apple";
import Dell from "../components/Laptops/Dell";
import Hp from "../components/Laptops/Hp";
import Accer from "../components/Laptops/Acer";

const Laptops = () => {
  return (
    <div className="Laptops">
      <Apple />
      <Dell />
      <Hp />
      <LENOVO />
      <Accer />
    </div>
  );
};

export default Laptops;
