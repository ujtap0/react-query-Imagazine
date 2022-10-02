import { Fragment } from 'react';
import ReactDOm from 'react-dom';
import { Backdrop, StyledModal, ImgContent } from './Modal.styled';

const Background = ({onClose}) => {
  return <Backdrop onClick={onClose}></Backdrop>
}

const ModalOverlay = ({imgData}) => {
  return(
    <StyledModal>
      <ImgContent src={imgData.src} alt={imgData.alt}/>
    </StyledModal>
  )
}

const portalEl = document.getElementById('modal');

const Modal = ({onClose, imgData}) => {
  return(
    <Fragment>
      {ReactDOm.createPortal(<Background onClose={onClose} />, portalEl)}
      {ReactDOm.createPortal(<ModalOverlay imgData={imgData} />, portalEl)}
    </Fragment>
  )
}

export default Modal;