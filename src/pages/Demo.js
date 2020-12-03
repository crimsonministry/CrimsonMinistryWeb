/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../components/Header";

const Title = styled.h1`
  text-align: center;
  padding: 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Content = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 0em 0em 1em 0em;
  border-radius: 5px;
  text-align: center;
`;

class Demo extends Component {
  render() {
    return (
      <>
      <Header active="Demo"/>
      <Container>
        <Title>Demo</Title>
        <Content>
            <p>the video goes here</p>
        </Content>
      </Container>
      </>
    );
  }
}

export default Demo;
