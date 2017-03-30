import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Searcher from '../components/Searcher';

const Wrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
`;
const Container = styled.section`
  background: url(/static/images/bgImage.jpg);
  background-repeat: no-repeat;
  background-position: center -100px;
  position: relative;
  background-size: 100% auto;
  @media (max-width: 1023px) {
    background: rgb(233, 131, 238);
  }
`;

 const Gradient = styled.div`
  background: linear-gradient(to left, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  padding: 80px 0 186px;
 `;
function Hero() {
  return (
    <Container>
      <Gradient>
        <Wrapper>
          <Row>
            <Col xsOffset={1} xs={10}>
              <Logo/>
              <Searcher/>
            </Col>
          </Row>
        </Wrapper>
      </Gradient>
    </Container>
  )

}

export default Hero;