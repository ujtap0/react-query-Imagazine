import styled, { css } from "styled-components";

const moveInput = css`
  position: fixed;
  width: 65%;
  top: 0;
  z-index: 100;
  margin: 0;
`

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin: 260px 0;
  ${({isData}) => isData && moveInput};
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

export const ImgContainer = styled.div`
  margin-top: 160px;
  column-width: 300px;
  column-gap : 10px;
`

export const ImgWrapper = styled.div`
  width: 100%;
  display: inline-block;
  margin-bottom: 10px
`;
export const Img = styled.img`
  width: 100%;
`