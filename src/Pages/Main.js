import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Search from "./Search/Search";

const Main = ({ SetSearching, Searching, data }) => {
  return (
    <div className="Main">
      <Navbar Searching={Searching} SetSearching={SetSearching} data={data} />
      <Search Searching={Searching} SetSearching={SetSearching} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
