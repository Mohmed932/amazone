import React from "react";
import Slider from "../components/Slider/Slider";
import Phones from "../components/Phones/Phones";
import PartShoes from "../components/PartShoes/PartShoes";
import PartClothes from "../components/PartClothes/PartClothes";
import PartAutomotive from "../components/PartAutomotive/PartAutomotive";

const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <Phones />
      <PartShoes />
      <PartClothes />
      <PartAutomotive />
    </div>
  );
};

export default Home;
