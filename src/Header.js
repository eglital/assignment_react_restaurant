import React from "react";
import src from "./sandwich.jpg";

const Header = props => {
  return (
    <div className="jumbotron">
      <h1>Restaurant</h1>
      <img className="heading-img" src={src} alt="sandwich"/>
    </div>
  );
};

export default Header;
