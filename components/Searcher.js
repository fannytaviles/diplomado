import React from 'react';
import styled from 'styled-components';

const SearcherForm = styled.form`
  display: flex;
  font-weight: bold;
  font-family: ${props => props.theme.font.title}
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
const DefaultStyles = `
  outline: 0;
  border: none;
  border-radius: 4px;
`;
const SearcherInput = styled.input`
  flex: 1;
  margin-right: 1rem;
  ${DefaultStyles}
  padding: 0.5rem 1rem;
  font-size: 1rem;
  @media (max-width: 1023px) {
    margin-right: 0;
  }
`;
const ButtonContainer = styled.button`
  background: ${props=>props.theme.colors.secondaryHex};
  padding: 0.5rem 46px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  ${DefaultStyles}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  @media (max-width: 1023px) {
    margin-top: 1rem;
  }
`;

function Searcher() {
  return (
    <SearcherForm>
      <SearcherInput type="text" placeholder="Busca por canción, artista o álbum" />
      <div>
        <ButtonContainer>Buscar</ButtonContainer>
      </div>
    </SearcherForm>
  );
}

export default Searcher;