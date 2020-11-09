/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

import PitchPresentation from "../content/pitch.pdf";
import Sprint1Backlog from "../content/sprint1Backlog.zip"

const Title = styled.h1`
  text-align: center;
  padding: 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Box = styled.div`
  text-align: center;
  padding-bottom: 1em;
  margin: 0 auto;
  width: 20em;
`;

const Topic = styled.h3`
  text-align: left;
  color: #9E1B32;
`;

class Deliverables extends Component {
  render() {
    return (
      <Container>
        <Title>Deliverables</Title>
        <Box>
          <Topic>Releases</Topic>
          <ListGroup>
            <ListGroupItem
              tag="a"
              href="https://github.com/CrimsonMinistry/CrimsonMinistry"
              target="_blank"
              action
            >
              Source Code
            </ListGroupItem>
          </ListGroup>
        </Box>
        <Box>
          <Topic>Sprint 1</Topic>
          <ListGroup>
            <ListGroupItem
              tag="a"
              href={PitchPresentation}
              download="PitchPresentation.pdf"
              action
            >
              Project Pitch Slides
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={Sprint1Backlog}
              download="sprint1Backlog.zip"
              action
            >
              Backlog
            </ListGroupItem>
          </ListGroup>
        </Box>
      </Container>
    );
  }
}

export default Deliverables;
