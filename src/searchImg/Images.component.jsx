import InfiniteScroll from "react-infinite-scroller";
import useSearchImg from "./useSearchImg";
import { Container } from "../globalStyles";
import { ImgContainer, ImgWrapper } from "./Images.style";
import Image from "../component/Image/Image.component";
import SearchForm from "./SearchForm.component";
import { useEffect, useState } from "react";

const Images = () => {
  const {
    images,
    fetchNextPage,
    hasNextPage,
    isLoading,
    setSearchTerm
  } = useSearchImg();

  const [combinedImages, setImages] = useState([]);

  useEffect(()=>{
    if(images && images.length > 0){
      const allImages = images.reduce((acc, cur) => [...acc, ...cur.results],[])
      setImages(allImages)
    }
  },[images])


  if (isLoading) return <div>로딩중..</div>

  return(
    <Container>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <ImgContainer>
          {combinedImages.length > 0 && 
            combinedImages.map((picture, picIdx) => <ImgWrapper key={picture.id}>
            <Image 
              src={picture.urls.regular} 
              alt={picture.alt_description} 
              bg={picture.color}
              images={combinedImages}
              picIdx={picIdx} 
              fetchNextPage={fetchNextPage}
            />
            </ImgWrapper>)}
        </ImgContainer>
      </InfiniteScroll>
    </Container>
  )
}
export default Images;