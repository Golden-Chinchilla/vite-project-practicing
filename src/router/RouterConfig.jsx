import { Routes, Route } from "react-router";
import Login from '../views/login/Login';
// import NewsSandBox from './NewsSandBox';
// import TopHeader from "../components/TopHeader"
// import SideMenu from "../components/SideMenu"
// import Home from "../views/sandbox/home/Home"
import UserList from "../views/sandbox/user-manage/UserList"
import RoleList from "../views/sandbox/right-manage/RoleList"
import RightList from "../views/sandbox/right-manage/RightList"


// 可以跑通了
export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<>我是默认主页</>}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='box'>
                {/* <TopHeader></TopHeader>
                <SideMenu></SideMenu> */}
                {/* <Route index element={<Home></Home>}></Route> */}
                <Route index element={<>box中的默认组件</>}></Route>
                <Route path='user-manage/list' element={<UserList></UserList>}></Route>
                <Route path='right-manage/role/list' element={<RoleList></RoleList>}></Route>
                <Route path='right-manage/right/list' element={<RightList></RightList>}></Route>
            </Route>
        </Routes>
    )
}