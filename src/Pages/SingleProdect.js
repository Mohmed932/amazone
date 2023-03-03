import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import AllProdects from "../Prodects/AllProdects.json";

const SingleProdect = ({ data, setData }) => {
  const id = useParams().id;
  const Similer = AllProdects.filter((i) => i.asin === id);
  return (
    <div className="SingleProdect" key={Similer[0].asin}>
      <img src={Similer[0].thumbnailImage} alt="thumbnailImage" />
      <div className="SingleProdect_desc">
        <h3>brand {Similer[0].brand}</h3>
        <h3>
          Price {Similer[0].price.value}
          {Similer[0].price.currency}
        </h3>
        <h3>{Similer[0].title}</h3>
        <p>{Similer[0].description}</p>
        <button className="btn" onClick={() => setData([...data, Similer])}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProdect;
