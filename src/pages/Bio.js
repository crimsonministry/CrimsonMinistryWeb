/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  padding-top: 3em;
  &:hover {
    text-decoration: none;
  }
`;

class Bio extends Component {
  render() {
    return (
      <Container>
        <Title>Bio</Title>
      </Container>
    );
  }
}

export default Bio;
