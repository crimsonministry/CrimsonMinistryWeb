/** @format */

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  padding: 1em;
  font-size: 4em;
  font-weight: bold;
`;

class Team extends Component {
  render() {
    return (
      <Container>
        <Title>Team</Title>
        <Row>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://pbs.twimg.com/profile_images/1136791198608367619/7XTo_jf4_400x400.png"
                alt="Namito's Profile Picture"
              />
              <CardBody>
                <CardTitle>Namito Yokota</CardTitle>
                <CardText>
                  Senior at the University of Alabama studying Computer Science
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png"
                alt="Person2's Profile Picture"
              />
              <CardBody>
                <CardTitle>Person 2</CardTitle>
                <CardText>Description</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png"
                alt="Person3's Profile Picture"
              />
              <CardBody>
                <CardTitle>Person3</CardTitle>
                <CardText>Description</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://www.breakthroughcollaborative.org/wp-content/uploads/400x400.png"
                alt="Person4's Profile Picture"
              />
              <CardBody>
                <CardTitle>Person4</CardTitle>
                <CardText>Description</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Team;
