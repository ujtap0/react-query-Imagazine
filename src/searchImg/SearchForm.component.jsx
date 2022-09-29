import React, {useRef} from 'react';
import { Button } from "../globalStyles";
import { StyledForm, SearchInput, ButtonContainer } from "./SearchForm.style";
import useSearchImg from './useSearchImg';

const SearchForm = () => {
  const {
    setSearchTerm,
  } = useSearchImg();

  const searchRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchTerm(searchRef.current.value);
  }
    
  return (
  <StyledForm onSubmit={searchHandler}>
    <SearchInput ref={searchRef}/>
    <ButtonContainer>
      <Button>Enter</Button>
    </ButtonContainer>
  </StyledForm>
  )
}

export default SearchForm