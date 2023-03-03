import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import RealmePhone from "../../Prodects/SmartPhone/Realme.json";

const Realme = () => {
  const [count, SetCount] = useState(4);
  return (
    <div className="Phones">
      <div className="Phones_more">
        <h4>Realme</h4>
      </div>
      <div className="Phones_prodects">
        {RealmePhone.slice(0, count).map(({ title, asin, thumbnailImage }) => (
          <div className="Phones_prodects_items" key={asin}>
            <img src={thumbnailImage} alt="thumbnailImage" />
            <h3>{title}</h3>
            <Link to={`/SingleProdect/${asin}`}>
              <button>Shop Now</button>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          count === 4 ? SetCount(RealmePhone.length) : SetCount(4)
        }
        style={{ margin: "20px", fontSize: "20px" }}
      >
        {count === 4 ? "See more" : "See Little"}
      </button>
    </div>
  );
};

export default Realme;
