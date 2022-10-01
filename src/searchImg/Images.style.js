import styled from "styled-components";

export const ImgContainer = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
