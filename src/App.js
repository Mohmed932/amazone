import React, { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SmartPhone from "./Pages/SmartPhone";
import Shoes from "./Pages/Shoes";
import Laptops from "./Pages/Laptops";
import Fragrances from "./Pages/Fragrances";
import Clothes from "./Pages/Clothes";
import Automotive from "./Pages/Automotive";
import SingleProdect from "./Pages/SingleProdect";
import Main from "./Pages/Main";

const App = () => {
  const [Searching, SetSearching] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main SetSearching={SetSearching} Searching={Searching} />,
      children: [
        { index: true, element: <Home /> },
        { path: "smartphone", element: <SmartPhone /> },
        { path: "Shoes", element: <Shoes /> },
        { path: "Laptops", element: <Laptops /> },
        { path: "Fragrances", element: <Fragrances /> },
        { path: "Clothes", element: <Clothes /> },
        { path: "Automotive", element: <Automotive /> },
        {
          path: "SingleProdect/:id",
          element: <SingleProdect />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
