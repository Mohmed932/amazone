import React from "react";
import ASTROAI from "../components/Automotive/AstroAi";
import BDKk from "../components/Automotive/BDK";
import FEBREZE from "../components/Automotive/Febreze";
import Justtop from "../components/Automotive/JUSTTOP";
import YONPUT from "../components/Automotive/Yonput";

const Automotive = () => {
  return (
    <div className="Automotive">
      <ASTROAI />
      <BDKk />
      <FEBREZE />
      <Justtop />
      <YONPUT />
    </div>
  );
};

export default Automotive;
