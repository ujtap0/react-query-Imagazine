import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const searchUrl = "https://api.unsplash.com/search/photos?";
const defaultUrl = "https://api.unsplash.com//photos/random?";
let url;
let params;

const fetchUrl = async (key , pageNum) => {
  if(key.length > 0){
    url = searchUrl;
    params = {
      query: key,
      pageNum: pageNum,
      client_id: process.env.REACT_APP_UNSPLASH_KEY,
    };
  } else {
    url = defaultUrl;
    params = {
      count: 10,
      client_id: process.env.REACT_APP_UNSPLASH_KEY,
    }
  }

  const response = await axios.get(url,{params});

  if(key.length > 0){
    return {...response.data, page: pageNum, isSearch: true};
  } else {
    return {
      results: [...response.data],
      page: pageNum,
      isSearh: false,
    }
  }
}

const useSearchImg = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {data = {}, fetchNextPage, hasNextPage, isFetching, isLoading} = useInfiniteQuery(['page', searchTerm], 
  ({queryKey , pageParam = 1}) => fetchUrl(queryKey[1], pageParam), 
  {
    getNextPageParam: (lastPage) => {
      if(lastPage.isSearch){
        const {page, total_pages: totalPages} = lastPage;
        return (page < totalPages) ? page + 1 : undefined;
      } else {
        const {page} = lastPage;
        return page + 1;
      }
    },
    refetchOnWindowFocus: false,
    staleTime: 6000000,
  })

  const images = data?.pages
  console.log(images)

  return{
    setSearchTerm,
    fetchNextPage,
    images,
    searchTerm,
    hasNextPage,
    isFetching,
    isLoading
  }
}

export default useSearchImg;