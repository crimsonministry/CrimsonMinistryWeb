/** @format */

import React, { Component } from "react";
import styled from "styled-components";

const Copyright = styled.p`
  text-align: center;
  padding-top: 1em;
`;

const HR = styled.hr`
  width: 50%;
  margin-top: 3em;
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <HR />
        <Copyright>&copy; Crimson Ministry</Copyright>
      </div>
    );
  }
}

export default Footer;
