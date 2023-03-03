import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import KindOfSmartPhone from "../../Prodects/KindOfSmartPhone.json";

const Phones = () => {
  return (
    <div className="Phones">
      <div className="Phones_more">
        <h4>SmartPhone</h4>
        <Link to="/SMARTPHONE">
          <h5>More</h5>
        </Link>
      </div>
      <div className="Phones_prodects">
        {KindOfSmartPhone.map(({ title, asin, thumbnailImage }) => (
          <div className="Phones_prodects_items" key={asin}>
            <img src={thumbnailImage} alt="thumbnailImage" />
            <h3>{title}</h3>
            <Link to={`/SingleProdect/${asin}`}>
              <button>Shop Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
