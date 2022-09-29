import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header.component";
import Main from "./pages/Main.page";

function AppRoutes  () {
  return(
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main/>}/>
        <Route path="myPage" element={<div>마이페이지</div>}/>
      </Route>
    </Routes>
  )
}
export default AppRoutes;