// import { Routes, Route } from 'react-router'
// import UserList from './dashboard.userList'
// import RoleList from './dashboard.roleList'
// import RightList from './dashboard.rightList'
import TopHeader from '../components/TopHeader'
import SideMenu from '../components/SideMenu'
import { Outlet } from "react-router"
import { Layout, theme } from "antd";
const { Content } = Layout;

export default function Dashboard() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout>
                <TopHeader></TopHeader>
                {/* Content 部分 */}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>

        </Layout>
    )
}

// 这种写法是把父/子路由组件分离成两个文件了，这种情况下在父组件里的path就要写成 ./* 的形式（见'_index.jsx'）
// 但是这种写法不建议了，建议的写法是所有路由组件都放在一个文件中管理
// export default function Dashboard() {
//     return (
//         <>
//             <TopHeader></TopHeader>
//             <SideMenu></SideMenu>

// 以下部分应转移到父路由文件中，这里留下个<Outlet>作占位符
//             <Routes>
//                 <Route index element={<>我是Dashboard的主页</>}></Route>
//                 <Route path='user-manage' element={<UserList></UserList>}></Route>
//                 <Route path='right-manage'>
//                     <Route index element={<>我是right-manage默认组件</>}></Route>
//                     <Route path='roleList' element={<RoleList></RoleList>}></Route>
//                     <Route path='rightList' element={<RightList></RightList>}></Route>
//                 </Route>
//             </Routes>
//         </Outlet>
//     )
// }