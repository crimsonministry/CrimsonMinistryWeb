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
          <iframe title="demo" width="420" height="315"
            src="https://www.youtube.com/embed/-XUbhA8pa3U">
          </iframe>
        </Content>
      </Container>
      </>
    );
  }
}

export default Demo;
