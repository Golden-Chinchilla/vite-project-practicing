
import { Routes, Route } from "react-router";
import Login from "./Login"
import Dashboard from "./Dashboard"
import UserList from './Dashboard.UserList'
import RoleList from './Dashboard.RoleList'
import RightList from './Dashboard.RightList'
import Error from "../components/Error";

export default function RouterConfig() {
    return (
        <Routes>
            <Route index element={<Login></Login>} ></Route>
            {/* 在 <Dashboard> 中嵌入子路由组件的方式 */}
            {/* 建议1：<Outlet> */}
            {/* 建议2：Or use path='dashboard/*'（子路由组件在另一个文件时，用这个方法）*/}
            <Route path='dashboard' element={<Dashboard></Dashboard>}>
                <Route index element={<>我是Dashboard的主页</>}></Route>
                {/* 这里的 errorElement 的触发时机是 element 组件发生渲染错误，和下面的URL路径不匹配渲染指定组件，不是一回事 */}
                <Route path='user-manage'>
                    <Route index element={<>用户权限管理</>}></Route>
                    <Route path="userList" element={<UserList></UserList>}></Route>
                </Route>
                <Route path='right-manage'>
                    <Route index element={<>苹果</>}></Route>
                    <Route path='roleList' element={<RoleList></RoleList>}></Route>
                    <Route path='rightList' element={<RightList></RightList>}></Route>
                </Route>
                {/* 对于不存在的路径，用通配符来匹配，然后渲染对应的组件 */}
                {/* Can use a wildcard to catch unknown routes and render a 404 */}
                {/* 这里就是 dashboard/... 路径后如果没有匹配到的 URL， 则渲染 <Error> */}
                {/* 参考链接：https://reactrouter.com/6.28.2/start/faq#how-do-i-add-a-no-match-404-route-in-react-router-v6 */}
                <Route path='*' element={<Error></Error>}></Route>
            </Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
    )
}