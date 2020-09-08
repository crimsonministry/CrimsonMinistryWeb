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

const Subtitle = styled.p`
  text-align: center;
  color: grey;
`;

class Main extends Component {
  render() {
    return (
      <Container>
        <Title>Crimson Ministry</Title>
        <Subtitle>description goes here</Subtitle>
      </Container>
    );
  }
}

export default Main;
