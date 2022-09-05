import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { signInWithGogglePopup } from "../../../service/firebase";

const NavBar = () => {
  const loginHandler = () => signInWithGogglePopup();
  return(
    <Fragment>
      <div>
        <button onClick={loginHandler}>로그인</button>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default NavBar