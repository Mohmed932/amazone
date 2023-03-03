import React from "react";
import Apple from "../components/SmartPhone/Apple";
import Oppo from "../components/SmartPhone/Oppo";
import Realme from "../components/SmartPhone/Realme";
import Samsung from "../components/SmartPhone/Samsung";
import Xiomie from "../components/SmartPhone/Xiomie";

const SmartPhone = () => {
  return (
    <div className="SmartPhone">
      <Oppo />
      <Samsung />
      <Apple />
      <Xiomie />
      <Realme />
    </div>
  );
};

export default SmartPhone;
