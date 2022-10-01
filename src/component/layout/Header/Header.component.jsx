import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { signInWithGogglePopup } from "../../../service/firebase";
import { HeaderWrapper, HeaderContainer, ButtonContainer } from "./Header.style";
import { getBookmark, getCurrentUser, googleSignOut } from "../../../service/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../../../globalStyles";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => signInWithGogglePopup();
  const logoutHandler = () => googleSignOut();

  const queryClient = useQueryClient();
  useEffect(()=>{
    getCurrentUser().then(async(user)=>{
      if(!user){
        setIsLogin(false);
      } else {
        setIsLogin(true);
        const bookmartPrefetch = await getBookmark(user.uid);
        queryClient.setQueryData(['bookmark'], bookmartPrefetch )
      }
    })
  },[])

  return(
    <Fragment>
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <h1>Imagazine</h1>
          </div>
          <ButtonContainer>
            {isLogin ? 
            <Button onClick={logoutHandler}>Logout</Button> : 
            <Button onClick={loginHandler}>Login</Button>}
          </ButtonContainer>
        </HeaderContainer>
      </HeaderWrapper>
      <Outlet />
    </Fragment>
  )
}
export default Header