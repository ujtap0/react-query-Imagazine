import { useRef } from "react"
import InfiniteScroll from "react-infinite-scroller";
import useSearchImg from "./useSearchImg";

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

  return(
    <>
      <form onSubmit={searchHandler}>
        <input ref={searchRef}/>
        <button>입력</button>
      </form>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map(pageData => pageData.results.map(picture => <div key={picture.id}><img src={picture.urls.regular} alt={picture.urls.regular}/></div>))}
      </InfiniteScroll>
    </>
  )
}
export default SearchImg;