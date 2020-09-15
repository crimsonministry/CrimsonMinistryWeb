/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

import PitchPresentation from "../content/pitch.pdf";

const Title = styled.h1`
  text-align: center;
  padding: 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Box = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 20em;
`;

class Deliverables extends Component {
  render() {
    return (
      <Container>
        <Title>Deliverables</Title>
        <Box>
          <ListGroup>
            <ListGroupItem
              tag="a"
              href="https://github.com/CrimsonMinistry/CrimsonMinistry"
              target="_blank"
              action
            >
              Source Code
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={PitchPresentation}
              download="PitchPresentation.pdf"
              action
            >
              Project Pitch Slides
            </ListGroupItem>
          </ListGroup>
        </Box>
      </Container>
    );
  }
}

export default Deliverables;
