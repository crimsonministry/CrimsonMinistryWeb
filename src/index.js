/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled from "styled-components";
import * as serviceWorker from "./serviceWorker";

const BigDiv = styled.div`
  background: var(--bg);
  background-image: radial-gradient(#ddd 1px, transparent 0),
  radial-gradient(#ddd 1px, transparent 0);
  background-position: 0 0, 25px 25px;
  background-attachment: fixed;
  background-size: 50px 50px;
  overflow-x: hidden;
`

ReactDOM.render(
  <React.StrictMode>
    <BigDiv>
      <App />
    </BigDiv>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
