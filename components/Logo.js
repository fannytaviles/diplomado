import React from 'react';
import styled from 'styled-components';

const Platzi = styled.span`
  color: white
`;
const Music = styled.span`
  color: #bfafd9
`;
const Container = styled.div`
  font-family: ${props => props.theme.font.title}
  font-size: 3rem
`;

function Logo() {
  return (
    <Container>
      <Platzi>Platzi</Platzi>
      <Music>Music</Music>
    </Container>
  );
}
export default Logo;