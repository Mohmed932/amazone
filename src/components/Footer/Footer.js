import React from "react";
import "./Footer.css";

const Footer = () => {
  const footer = {
    width: "100%",
    height: "10vh",
    backgroundColor: "#222935",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    fontWeight: "200",
    fontFamily: "cursive",
    fontSize: "15px",
    position: "relative",
    bottom: "0",
  };
  return (
    <div className="Footer" style={footer}>
      <h3>
        Developed with |{" "}
        <span style={{ color: "rgb(182, 29, 80)" }}>Mohmed Mahmoud Fouad</span>
      </h3>
    </div>
  );
};

export default Footer;
