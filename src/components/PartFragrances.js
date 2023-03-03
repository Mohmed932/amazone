import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import KindOfFragrances from "../../Prodects/KindOfFragrances.json";

const PartShoes = () => {
  return (
    <div className="Phones">
      <div className="Phones_more">
        <h4>Fragrances</h4>
        <h5>More</h5>
      </div>
      <div className="Phones_prodects">
        {KindOfFragrances.map(({ title, asin, thumbnailImage }) => (
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

export default PartShoes;
