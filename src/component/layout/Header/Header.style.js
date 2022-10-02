import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

export const ButtonContainer = styled.div`
  max-width: 80px;
  height: 48px;
  display: flex;
  align-items: center;
`