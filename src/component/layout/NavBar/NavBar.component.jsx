import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { signInWithGogglePopup } from "../../../service/firebase";
import { Nav, NavContainer, ButtonContainer } from "./Nav.style";
import { getBookmark, getCurrentUser, googleSignOut } from "../../../service/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../../../globalStyles";

const NavBar = () => {
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
      <Nav>
        <NavContainer>
          <div>
            <h1>Imagazine</h1>
          </div>
          <ButtonContainer>
            {isLogin ? 
            <Button onClick={logoutHandler}>Logout</Button> : 
            <Button onClick={loginHandler}>Login</Button>}
          </ButtonContainer>
        </NavContainer>
      </Nav>
      <Outlet />
    </Fragment>
  )
}
export default NavBar