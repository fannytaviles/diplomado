import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import Benefit from '../components/Benefit'
const Wrapper = styled.div`
  max-width: 1024px
  margin: 0 auto
  font-family: ${props => props.theme.font.title}
`;

function Footer (props) {
  return (
    <Wrapper>
      <Row>
        {props.benefits.map((benefit) => {
          return (
            <Col xs={3}>
              <Benefit 
                {...benefit}
              />
            </Col>
          )
        })}
      </Row>
    </Wrapper>
  )
}

export default Footer;