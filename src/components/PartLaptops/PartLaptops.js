import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import KindOfClothes from "../../Prodects/kindOfLaptops.json";

const PartLaptops = () => {
  return (
    <div className="Phones">
      <div className="Phones_more">
        <h4>Laptops</h4>
        <Link to="/Laptops">
          <h5>More</h5>
        </Link>
      </div>
      <div className="Phones_prodects">
        {KindOfClothes.map(({ title, asin, thumbnailImage }) => (
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

export default PartLaptops;
