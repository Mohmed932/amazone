import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import AllProdects from "../../Prodects/AllProdects.json";

const Search = ({ Searching, SetSearching }) => {
  const items = AllProdects.filter((i) =>
    i.title.toLowerCase().includes(Searching.toLowerCase())
  ).map((i) => (
    <Link to={`/SingleProdect/${i.asin}`} onClick={() => SetSearching("")}>
      {i.title}
    </Link>
  ));
  return (
    <Fragment>
      {Searching !== "" ? <div className="Search">{items}</div> : ""}
    </Fragment>
  );
};

export default Search;
