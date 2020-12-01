/** @format */

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import Header from "../components/Header";

const Title = styled.h1`
  text-align: center;
  padding: 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 00px 30px;
  border-radius: 5px;
  text-align: center;
  color: #231F20;
`;

class Team extends Component {
  render() {
    return (
      <>
      <Header active="team"/>
      <Container>
        <Title>Team</Title>
        <Content>
          <Row>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQH9RwIHWPZrbw/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=yq_UUWw_iagMULW94-0qQDaKhVMQ0Ozq45d8rBF0vvg"
                  alt="Namito's Profile Picture"
                  />
                <CardBody>
                  <CardTitle>Namito Yokota</CardTitle>
                  <CardText>
                    Senior at the University of Alabama studying Computer Science with a Mathematics minor. 
                    View my <a href="https://www.namitoyokota.me" target="_blank" rel="noopener noreferrer">portfolio</a> for more information!
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://avatars2.githubusercontent.com/u/47615374?s=400&u=0169f68e8d184830dc2d3da64929df14754696e4&v=4"
                  alt="Coleman's Profile Picture"
                  />
                <CardBody>
                  <CardTitle>Coleman Cost</CardTitle>
                  <CardText>
                    From Huntsville, AL. Currently a Senior at The University of Alabama studying Computer Science with an expected graduation in December of 2020.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://i.imgur.com/YKesuwm.jpg"
                  alt="Williams Beaumont's Profile Picture"
                  />
                <CardBody>
                  <CardTitle>Williams Beaumont</CardTitle>
                  <CardText>
			              Senior at the University of Alabama studying Computer Science with a concentration in Cyber Security and minor in Marine Science. Expected graduation in December 2020.
		              </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Content>
      </Container>
      </>
    );
  }
}

export default Team;
