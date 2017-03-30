import React from 'react';
import styled from 'styled-components';

const Platzi = styled.span`
  color: white;
  font-weight: bold;
`;
const Music = styled.span`
  color: ${props=>props.theme.colors.tertiary};
  font-weight: bold;
`;
const Container = styled.div`
  font-family: ${props => props.theme.font.title}
  font-size: 3rem
`;

const Subtitle= styled.div`
  font-size: 18px;
  margin: 24px 0 60px;
  color: white;
  font-family: ${props => props.theme.font.title};
`;

function Logo() {
  return (
    <div>
      <Container>
        <Platzi>Platzi</Platzi>
        <Music>Music</Music>
      </Container>
      <Subtitle>
        Tu música sin límites
      </Subtitle>
    </div>
  );
}
export default Logo;