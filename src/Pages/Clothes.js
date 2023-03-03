import React from "react";
import Adidas from "../components/Clothes/Adidas";
import Automet from "../components/Clothes/AUTOMET";
import HANES from "../components/Clothes/Hanes";
import NIKE from "../components/Clothes/Nike";

const Clothes = () => {
  return (
    <div className="Clothes">
      <NIKE />
      <Adidas />
      <Automet />
      <HANES />
    </div>
  );
};

export default Clothes;
