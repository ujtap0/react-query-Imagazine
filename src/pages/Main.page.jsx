import { useEffect } from "react";
import SearchImg from "../searchImg/SearchImg.component";
import { useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../service/firebase";
import { getBookmark } from "../service/firebase";

const Main = () => {
  const queryClient = useQueryClient();
  useEffect(()=>{
    getCurrentUser().then(async(user)=>{
      const bookmartPrefetch = await getBookmark(user.uid);
      console.log(bookmartPrefetch)
      queryClient.setQueryData(['bookmark'], bookmartPrefetch )
    })
  },[])
  return(
    <div>
      <SearchImg />
    </div>
  )
}
export default Main