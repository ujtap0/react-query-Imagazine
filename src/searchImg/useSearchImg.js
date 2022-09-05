import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "https://api.unsplash.com/search/photos?";
const fetchUrl = async (key , pageNum ) => {
  const response = await axios.get(url,{
    params:{
      query: key,
      page: pageNum,
      client_id: process.env.REACT_APP_UNSPLASH_KEY,
    }
  })
  return {...response.data, page: pageNum};
}

const useSearchImg = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const {data = [], fetchNextPage, hasNextPage, isFetching, isLoading} = useInfiniteQuery(['page', searchTerm], 
  ({queryKey , pageParam = 1}) => fetchUrl(queryKey[1], pageParam), 
  {
    getNextPageParam: (lastPage) => {
      const {page, total_pages: totalPages} = lastPage;
      return (page < totalPages) ? page + 1 : undefined;
    },
  })
  return{
    setSearchTerm,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading
  }
}

export default useSearchImg;