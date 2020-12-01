/** @format */

import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../components/Header";


const Title = styled.h1`
  text-align: center;
  padding: 1em 1em 1em 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Content = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 0px 30px;
  border-radius: 5px;
  text-align: center;
`;

const Topic = styled.h2`
  text-align: left;
  color: #9E1B32;
`;

const Subtitle = styled.p`
  text-align: left;
  font-size: 1em;
  padding-bottom: 1em;
  margin: auto;
`;

class About extends Component {
  render() {
    return (
      <>
      <Header active="Home"/>
      <Container>
        <Title>About</Title>
        <Content>
          <Topic>Problem</Topic>
          <Subtitle>
            Campus ministries at the University of Alabama are divided and each ministry
            focus on their own outreach events. Many students struggle to find connections with
            students in other campus ministries.
          </Subtitle>
          <hr/>
          <Topic>Solution</Topic>
          <Subtitle>
            A unified platform for students to plan and organize their own mission trips
            to the campus to spread the Word of God.
          </Subtitle>
          <hr/>
          <Topic>Features</Topic>
          <Subtitle>
            <ul>
              <li>Create and organize a bible study, worship, or other events</li>
              <li>View events from other students and RSVP to attend</li>
              <li>View where the missions are happening through a campus map</li>
              <li>Post prayer requests and pray for others' prayer requests</li>
              <li>Add your profile with your ministry and social media links</li>
              <li>Add friends</li>
            </ul>
          </Subtitle>
        </Content>
      </Container>
      </>
    );
  }
}

export default About;
