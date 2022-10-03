import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 768px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const ImgContent = styled.img`
  width: 100%;
  max-height: 85vh;
  margin: 0 20px;
`;

export const Btn = styled.div`
  background-color: transparent;
  border:0 ;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`