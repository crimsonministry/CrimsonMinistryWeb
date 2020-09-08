/** @format */

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Bio from "./pages/Bio";
import Deliverables from "./pages/Deliverables";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/deliverables" component={Deliverables} />
          <Route path="/bio" component={Bio} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
