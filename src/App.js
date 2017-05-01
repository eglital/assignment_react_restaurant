import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Reservation from "./Reservation";
import Menu from "./Menu";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Reservation />
        <Menu />
        <Contact />
      </div>
    );
  }
}

export default App;
