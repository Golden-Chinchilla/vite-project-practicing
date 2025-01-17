import { Routes, Route } from "react-router";
import Login from "./login"
import Dashboard from "./dashboard"
// import TopHeader from '../components/topHeader'
// import SideMenu from '../components/sideMenu'
import UserList from './dashboard.userList'
import RoleList from './dashboard.roleList'
import RightList from './dashboard.rightList'

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Login></Login>}></Route>
            {/* 在 <Dashboard> 中嵌入子路由组件的方式 */}
            {/* 建议1：<Outlet> */}
            {/* 建议2：Or use path='dashboard/*'（子路由组件在另一个文件时，用这个方法）*/}
            <Route path='dashboard' element={<Dashboard></Dashboard>}>
                <Route index element={<>我是Dashboard的主页</>}></Route>
                <Route path='user-manage' element={<UserList></UserList>}></Route>
                <Route path='right-manage'>
                    <Route index element={<>苹果</>}></Route>
                    <Route path='roleList' element={<RoleList></RoleList>}></Route>
                    <Route path='rightList' element={<RightList></RightList>}></Route>
                </Route>
            </Route>
        </Routes>
    )
}