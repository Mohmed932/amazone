import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assest/logo2.svg";
import search from "../../assest/loupe.png";
import cart from "../../assest/shopping-cart.png";
import categories from "../../assest/categories.png";
import { Link } from "react-router-dom";

const Navbar = ({ Searching, SetSearching }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCategorie, setshowCategorie] = useState(false);
  const items = [
    "Automotive",
    "Clothes",
    "Fragrances",
    "Laptops",
    "Shoes",
    "SmartPhone",
  ];
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-logo" />
        </Link>
      </div>
      <div className="Navbar-search">
        <input
          placeholder="search for any prodects"
          onChange={(e) => SetSearching(e.target.value)}
          value={Searching}
        />
        <img src={search} alt="search" />
      </div>
      <div
        className={
          showSearch ? "Navbar_search_phone show" : "Navbar_search_phone"
        }
      >
        <input
          placeholder="search for any prodects"
          onChange={(e) => SetSearching(e.target.value)}
          value={Searching}
        />
        <img src={search} alt="search" />
      </div>
      <div
        className={
          showCategorie
            ? "Navbar_cart_categories showCategorie"
            : "Navbar_cart_categories"
        }
      >
        <div className="categories_prodect">
          {items.map((i, idx) => (
            <Link to={i} onClick={() => setshowCategorie(false)} key={idx}>
              <span>{i}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="Navbar-cart">
        <img
          src={search}
          alt="search"
          className="Navbar_searching"
          onClick={() => setShowSearch(!showSearch, setshowCategorie(false))}
        />
        <img
          src={categories}
          alt="categories"
          onClick={() => setshowCategorie(!showCategorie, setShowSearch(false))}
        />
        <Link to="Cart">
          <div
            className="cart_Count"
            onClick={() => setshowCategorie(false, setShowSearch(false))}
          >
            <img src={cart} alt="cart" />
            <span>5</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
