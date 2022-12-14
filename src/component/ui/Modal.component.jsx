import { Fragment, useEffect } from 'react';
import ReactDOm from 'react-dom';
import { Backdrop, StyledModal, ImgContent, Btn } from './Modal.styled';

const Background = ({onClose}) => {
  return <Backdrop onClick={onClose}></Backdrop>
}

const ModalOverlay = ({imgData, nextImg, prevImg}) => {
  return(
    <StyledModal>
      <Btn onClick={prevImg}>&lt;</Btn>
      <ImgContent src={imgData.urls.regular} alt={imgData.desciption}/>
      <Btn onClick={nextImg}>&gt;</Btn>
    </StyledModal>
  )
}

const portalEl = document.getElementById('modal');

const Modal = ({onClose, imgData, nextImg, prevImg, fetchNextPage, total, current}) => {

  useEffect(()=>{
    if(current > total-10){
     fetchNextPage() 
    }
  },[total, current])

  return(
    <>
      {ReactDOm.createPortal(<Background onClose={onClose} />, portalEl)}
      {ReactDOm.createPortal(<ModalOverlay nextImg={nextImg} imgData={imgData} prevImg={prevImg} />, portalEl)}
    </>
  )
}

export default Modal;