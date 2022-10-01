import React, {useState, useRef, useEffect} from 'react'
import { Img } from './Image.style';

const Image = ({src, alt, bg}) => {
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

  useEffect(()=>{
    if(!observer.current){
      observer.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observer.current.observe(imgRef.current)
  },[])

  return (
    <Img ref={imgRef} src={isLoad ? src : ''} alt={alt} bg={bg} />
  )
}

export default Image