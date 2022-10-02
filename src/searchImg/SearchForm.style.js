import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 80px 0 100px;
`

export const SearchInput = styled.input`
  width: 40%;
  height: 46px; 
  margin-right: 20px;
  border-radius: 12px;
  border: none;
  padding: 10px 16px;
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;

  &:focus{
    outline: none;
    border: 0;
  }
`
export const ButtonContainer = styled.div`
  max-width: 80px;
  height: 48px;
  display: flex;
  align-items: center;
`