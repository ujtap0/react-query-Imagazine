import { useRef } from "react"
import InfiniteScroll from "react-infinite-scroller";
import useSearchImg from "./useSearchImg";
import { Container } from "../globalStyles";
import { Button } from "../globalStyles";
import { SearchForm, SearchInput, ButtonContainer, ImgContainer, ImgWrapper, Img } from "./SearchImg.style";

const SearchImg = () => {
  const {
    setSearchTerm,
    data,
    fetchNextPage,
    hasNextPage,
    isLoading
  } = useSearchImg();

  const searchRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchTerm(searchRef.current.value);
  }
    
  if (isLoading) return <div>로딩중..</div>

  let isList;
  if(data){
    if(data.pages[0].total > 0) {
      isList = true
    } else {
      isList = false
    }
  }

  return(
    <Container>
      <SearchForm onSubmit={searchHandler} isData={isList}>
        <SearchInput ref={searchRef}/>
        <ButtonContainer>
          <Button>Enter</Button>
        </ButtonContainer>
      </SearchForm>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        <ImgContainer>
          {data.pages.map(pageData => pageData.results.map(picture => <ImgWrapper key={picture.id}><Img src={picture.urls.regular} alt={picture.urls.regular}/></ImgWrapper>))}
        </ImgContainer>
      </InfiniteScroll>
    </Container>
  )
}
export default SearchImg;