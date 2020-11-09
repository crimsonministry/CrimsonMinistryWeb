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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 30px;
  border-radius: 5px;
  color: #1f1f1f;
`;

class Team extends Component {
  render() {
    return (
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
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEsrl-SAs5FlQ/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=ETg1EVPq42t4dv2m2jj8s5hXFXRXaMGfqglG-B8xc6Q"
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
    );
  }
}

export default Team;
