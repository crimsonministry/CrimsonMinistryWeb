/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled from "styled-components";
import * as serviceWorker from "./serviceWorker";

const BigDiv = styled.div`
  color: #E6E6E6;
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
