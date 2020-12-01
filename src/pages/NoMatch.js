/** @format */

import React, { Component } from "react";
import Header from "../components/Header";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <Header />
        <p>the webpage cannot be found</p>
      </div>
    );
  }
}

export default NoMatch;
