import InfiniteScroll from "react-infinite-scroller";
import useSearchImg from "./useSearchImg";
import { Container } from "../globalStyles";
import { ImgContainer, ImgWrapper } from "./Images.style";
import Image from "../component/Image/Image.component";
import SearchForm from "./SearchForm.component";

const Images = () => {
  const {
    images,
    fetchNextPage,
    hasNextPage,
    isLoading,
    setSearchTerm
  } = useSearchImg();

  console.log(images)

  if (isLoading) return <div>로딩중..</div>

  return(
    <Container>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <ImgContainer>
          {images && images.map(pageData => pageData.results.map(picture => <ImgWrapper key={picture.id}><Image src={picture.urls.regular} alt={picture.alt_description} bg={picture.color}/></ImgWrapper>))}
        </ImgContainer>
      </InfiniteScroll>
    </Container>
  )
}
export default Images;