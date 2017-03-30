import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  margin: 3rem 0;
  @media (max-width:1023px) {
    margin: 1.5rem 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;


function Benefit(props) {
  return (
    <Container key={props.key}>
      <Title>{props.title}</Title>
      <div>{props.description}</div>
    </Container>
  )
}

export default Benefit;