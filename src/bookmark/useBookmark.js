import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookmark } from '../service/firebase';

const useBookmark = () => {
  const fallback= [];
  const { data=fallback, isLoading, isError } = useQuery('bookmark', getBookmark)

  return data;
}

export default useBookmark