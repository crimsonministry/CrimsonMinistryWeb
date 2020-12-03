/** @format */

import React, { Component } from "react";
import { Container, Button, ButtonGroup } from "reactstrap";
import styled from "styled-components";
import Header from "../components/Header";
import Icon from '../content/icon.png';
import APK from "../content/app-release.apk"
import IPA from "../content/Payload.ipa"


const Heading = styled.div`
  text-align: center;
`

const Title = styled.h1`
  padding: 1em 1em 0em 1em;
  font-size: 4em;
  font-weight: bold;
`;

const Sub = styled.h2`
  padding: 0em 0em 1em 0em;
`

const Content = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 0px 30px;
  border-radius: 5px;
  text-align: center;
`;

const Img = styled.img`
  padding: 1em 1em 3em 1em;
  width: 200px;
`

class Main extends Component {
  render() {
    return (
      <>
      <Header active="Home"/>
      <Container>
        <Heading>

        <Title>Crimson Ministry</Title>
        <Sub>Reach UA. Reach the World.</Sub>
        <Img src={Icon} />
        </Heading>
        <Content>
        <ButtonGroup>
          <Button
            outline
            color="danger" 
            href={APK}
            download={"app-release.apk"}
          >
            apk
          </Button>
          <Button
            outline
            color="danger"
            href={IPA}
            download={"Payload.ipa"}
          >
            ipa
          </Button>
        </ButtonGroup>
        </Content>
      </Container>
      </>
    );
  }
}

export default Main;
