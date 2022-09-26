import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  max-width: 80px;
  height: 48px;
  display: flex;
  align-items: center;
`