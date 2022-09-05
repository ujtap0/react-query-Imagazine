import { Route, Routes } from "react-router-dom";
import NavBar from "./component/layout/NavBar/NavBar.component";
import Main from "./pages/Main.page";

function AppRoutes  () {
  return(
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Main/>}/>
        <Route path="myPage" element={<div>마이페이지</div>}/>
      </Route>
    </Routes>
  )
}
export default AppRoutes;