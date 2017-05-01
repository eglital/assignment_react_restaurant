import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Reservation from "./Reservation";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Reservation />
        <Menu />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
