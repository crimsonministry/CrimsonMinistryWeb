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
                src="https://i.imgur.com/iv8aHQF.jpg"
                alt="William's Profile Picture"
              />
              <CardBody>
                <CardTitle>William Tosh</CardTitle>
                <CardText>
                  Hometown: Nola
                  <br></br>
                  Major: CS
                  <br></br>
                  Year: Senior
                  <br></br>
                  Interests: Sports, Hiking, Camping, Chess, Poker
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/119979481_1871065156369532_3505132328755378163_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=n5171k7vwoIAX9S5GDl&_nc_ht=scontent-atl3-1.xx&oh=9bfad3c19b8e7c0abb97b6e4b8c2b09b&oe=5F8FF3BD"
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
      </Container>
    );
  }
}

export default Team;
