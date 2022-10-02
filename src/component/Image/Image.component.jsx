import React, {useState, useRef, useEffect} from 'react'
import { Img } from './Image.style';
import Modal from '../ui/Modal.component';

const Image = ({src, alt, bg}) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const imgRef = useRef(null);
  const observer = useRef();

  function onIntersection(entries,observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        observer.unobserve(entry.target);
        setIsLoad(true);
      }
    })
  }

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  useEffect(()=>{
    if(!observer.current){
      observer.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observer.current.observe(imgRef.current)
  },[])

  const imgData = {src, alt}

  return (
    <>
      {showModal && <Modal onClose={hideModalHandler} imgData={imgData}/>}
      <Img ref={imgRef} src={isLoad ? src : ''} alt={alt} bg={bg} onClick={showModalHandler}/>
    </>
  )
}

export default Image