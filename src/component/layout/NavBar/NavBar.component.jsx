import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return(
    <Fragment>
      <div>
        네비게이션 바
      </div>
      <Outlet />
    </Fragment>
  )
}
export default NavBar