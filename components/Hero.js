import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Searcher from '../components/Searcher';
const Wrapper = styled.section`
  max-width: 1024px
  margin: 0 auto
  text-align: center
`;
const Container = styled.section`
  background: linear-gradient(to left, #5179ff, #e983ee)
  padding: 80px 0 186px
`;

function Hero() {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col xsOffset={1} xs={10}>
            <Logo/>
            <Searcher/>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  )

}

export default Hero;