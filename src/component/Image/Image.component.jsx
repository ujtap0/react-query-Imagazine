import React, {useState, useRef, useEffect} from 'react'
import { Img } from './Image.style';
import Modal from '../ui/Modal.component';

const Image = ({src, alt, bg, images, picIdx, fetchNextPage}) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(picIdx)
  const [isLoad, setIsLoad] = useState(false);

  const showNextImg = () => setCurrentImgIdx(prev => prev + 1);
  const showPrevImg = () => setCurrentImgIdx(prev => prev - 1);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

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

  useEffect(()=>{
    if(!observer.current){
      observer.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observer.current.observe(imgRef.current)
  },[])

  return (
    <>
      {showModal && 
        <Modal 
          onClose={hideModalHandler} 
          imgData={images[currentImgIdx]} 
          nextImg={showNextImg}
          prevImg={showPrevImg}
          total={images.length}
          current={currentImgIdx}
          fetchNextPage={fetchNextPage}
          />
        }
      <Img ref={imgRef} src={isLoad ? src : null} alt={alt} bg={bg} onClick={showModalHandler}/>
    </>
  )
}

export default Image