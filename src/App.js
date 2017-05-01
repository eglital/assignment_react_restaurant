import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Form from "./Form";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <div className="row">
            <div className="col-xs-6">
                <Form />
            </div>
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
