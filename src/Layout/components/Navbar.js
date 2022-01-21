import React from "react";

// style
// import "./styles/Navbar.scss";
import NavStyle from "../components/styles/Navbar";

export default function Navbar() {
  return (
    <NavStyle>
      <div className="container">
        <h3 className="logo">Nasdaq</h3>
      </div>
    </NavStyle>
  );
}
