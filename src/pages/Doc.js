/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";
import Header from "../components/Header";

import PitchPresentation from "../content/pitch.pdf";
import Sprint1Presentation from "../content/sprint1Presentation.pdf";
import Sprint2Presentation from "../content/sprint2Presentation.pdf";

import Sprint1Backlog from "../content/sprint1Backlog.zip"
import Sprint2Backlog from "../content/sprint2Backlog.zip"
import Sprint3Backlog from "../content/sprint3Backlog.zip"

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

const Topic = styled.h2`
  text-align: left;
  color: #9E1B32;
`;

class Deliverables extends Component {
  render() {
    return (
      <>
      <Header active="Doc"/>
      <Container>
        <Title>Deliverables</Title>
        <Content>
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
        </Content>
        <Content>
          <Topic>Presentations</Topic>
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
              href={Sprint1Presentation}
              download="Sprint1Presentation.pdf"
              action
            >
              Sprint 1 Presentation
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={Sprint2Presentation}
              download="Sprint2Presentation.pdf"
              action
            >
              Sprint 2 Presentation
            </ListGroupItem>
            <ListGroupItem disabled
            >
              Sprint 3 Presentation
            </ListGroupItem>
          </ListGroup>
        </Content>
        <Content>
          <Topic>Sprint Backlogs</Topic>
          <ListGroup>
            <ListGroupItem
              tag="a"
              href={Sprint1Backlog}
              download="Sprint1Backlog.zip"
              action
            >
              Sprint 1 Backlog
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={Sprint2Backlog}
              download="Sprint3Backlog.zip"
              action
            >
              Sprint 2 Backlog
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={Sprint3Backlog}
              download="Sprint3Backlog.zip"
              action
            >
              Sprint 3 Backlog
            </ListGroupItem>
          </ListGroup>
        </Content>
      </Container>
      </>
    );
  }
}

export default Deliverables;
