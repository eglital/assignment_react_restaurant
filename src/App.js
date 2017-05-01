import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';

const propsForHeader = {
    src: ""
}




class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
