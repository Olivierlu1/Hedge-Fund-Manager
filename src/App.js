import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from './Main'

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    );
  }
}

export default App;
