/** @format */

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";

import About from "./pages/About";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
import Team from "./pages/Team";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/docs" component={Docs} />
          <Route path="/team" component={Team} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
