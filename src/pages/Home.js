/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

const Background = {
  background: "#ffffff"
}

const Title = styled.h1`
  text-align: center;
  font-size: 4em;
  font-weight: bold;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 1.75em;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 750px;
  margin: auto;
`;

class Main extends Component {
  render() {
    return (
      <Container>
	<div style = {Background}>
          <Title>Crimson Ministry</Title>
          <Subtitle>This app is designed to connect students from different churches at the University of Alabama with one another. Typically, the events for different churches are insulated within the members of that particular faith. This platform allows students to organize events with one another and promote interaction between different groups. This allows for greater participation and understanding for the various ministries present on-campus. Students are also able to post prayer requests promote awareness for causes in need. We aim to foster a greater sense of community beyond one's personal church.</Subtitle>
        </div>
      </Container>
    );
  }
}

export default Main;
