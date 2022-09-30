import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import useSearchImg from "./useSearchImg";
import { Container } from "../globalStyles";
import { ImgContainer, ImgWrapper, Img } from "./Images.style";

const Images = () => {
  const {
    images,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useSearchImg();

  console.log(images)

  if (isLoading) return <div>로딩중..</div>

  return(
    <Container>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <ImgContainer>
          {images?.pages && images.pages.map(pageData => pageData.results.map(picture => <ImgWrapper key={picture.id}><Img src={picture.urls.regular} alt={picture.urls.regular}/></ImgWrapper>))}
        </ImgContainer>
      </InfiniteScroll>
    </Container>
  )
}
export default Images;