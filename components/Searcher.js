import React from 'react';
import styled from 'styled-components';

const SearcherForm = styled.form`
  display: flex
  margin-top: 108px
`;
const SearcherInput = styled.input`
  flex: 1
  margin-right: 1rem
  border-radius: 4px
  border: none
  outline: none
  padding: 0.5rem 1rem
  font-size: 1rem
`;
const SearcherButton = styled.button`
  background: #ea83ee
  padding: 0.5rem 46px
  text-transform: uppercase
  font-weight: bold
  color: white
  outline: none
  border: none
  border-radius: 4px
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-size: 1rem
`;
function Searcher() {
  return (
    <SearcherForm>
      <SearcherInput type="text" placeholder="Busca por canción, artista o álbum" />
      <SearcherButton>Buscar</SearcherButton>
    </SearcherForm>
  );
}

export default Searcher;